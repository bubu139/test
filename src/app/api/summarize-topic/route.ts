import {NextRequest, NextResponse} from 'next/server';
import {summarizeTopic, SummarizeTopicInputSchema} from '@/ai/flows/summarize-topic-flow';
import {runFlow} from 'genkit';

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    // Validate input
    const validation = SummarizeTopicInputSchema.safeParse({ topic });
    if (!validation.success) {
        return NextResponse.json({ error: 'Invalid input', details: validation.error.formErrors }, { status: 400 });
    }

    const output = await runFlow(summarizeTopic, validation.data);

    return NextResponse.json(output);

  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      {error: error.message || 'An unexpected error occurred'},
      {status: 500}
    );
  }
}
