import {NextRequest, NextResponse} from 'next/server';
import {generateTest, GenerateTestInputSchema} from '@/ai/flows-generate-test-flow';
import {runFlow} from 'genkit';

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    const validation = GenerateTestInputSchema.safeParse({ topic });
    if (!validation.success) {
        return NextResponse.json({ error: 'Invalid input', details: validation.error.formErrors }, { status: 400 });
    }

    const output = await runFlow(generateTest, validation.data);

    return NextResponse.json(output);

  } catch (error: any) {
    console.error('API route error:', error);
    const errorMessage = error.cause?.message || error.message || 'An unexpected error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
