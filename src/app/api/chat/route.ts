import {NextRequest, NextResponse} from 'next/server';
import {chat} from '@/ai/flows/chat-flow';
import {runFlow} from 'genkit';

export async function POST(req: NextRequest) {
  try {
    const {message, media} = await req.json();

    if (!message && (!media || media.length === 0)) {
      return NextResponse.json({error: 'Message or media is required'}, {status: 400});
    }

    const chatInput = {
        message: message,
        ...(media && media.length > 0 && {media: media})
    };

    const outputStream = await runFlow(chat, {
      stream: true,
      input: chatInput,
    });
    
    const reader = outputStream.getReader();
    const firstChunkResult = await reader.read();

    if (firstChunkResult.done) {
        return new Response(new ReadableStream({
            start(controller) {
                controller.close();
            }
        }), {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked',
            },
        });
    }
    
    // Check if the first chunk indicates a Genkit error
    try {
        const chunkText = new TextDecoder().decode(firstChunkResult.value);
        const jsonData = JSON.parse(chunkText);
        if (jsonData.state === 'error') {
             console.error('Flow execution error:', jsonData.error);
             return NextResponse.json({ error: jsonData.error?.message || 'Flow failed to execute.' }, { status: 500 });
        }
    } catch (e) {
        // Not a JSON error object, this is expected for a successful stream start.
    }


    const reconstructedStream = new ReadableStream({
        async start(controller) {
            controller.enqueue(firstChunkResult.value);
            
            while (true) {
                try {
                    const { value, done } = await reader.read();
                    if (done) {
                        controller.close();
                        break;
                    }
                    controller.enqueue(value);
                } catch (error) {
                    console.error('Stream reading error:', error);
                    // Try to send an error message chunk before closing
                    try {
                        const errorResponse = JSON.stringify({ error: { message: 'Stream reading failed' }});
                        controller.enqueue(new TextEncoder().encode(errorResponse + '__GENKIT_EOP__'));
                    } catch (e) {}
                    controller.error(error);
                    break;
                }
            }
        }
    });


    const transformStream = new TransformStream({
      transform(chunk, controller) {
        try {
            const genkitChunk = JSON.parse(new TextDecoder().decode(chunk));
            if (genkitChunk?.output?.message) {
                const responseChunk = JSON.stringify({ message: genkitChunk.output.message });
                controller.enqueue(responseChunk + '__GENKIT_EOP__');
            }
        } catch (e) {
            console.error("Error parsing streaming chunk from Genkit", e);
        }
      },
    });
    
    reconstructedStream.pipeThrough(transformStream);

    return new Response(transformStream.readable, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Transfer-Encoding': 'chunked',
        },
    });

  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      {error: error.message || 'An unexpected error occurred'},
      {status: 500}
    );
  }
}
