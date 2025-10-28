import {NextRequest, NextResponse} from 'next/server';
import {generateExercises, GenerateExercisesInputSchema} from '@/ai/flows/generate-exercises-flow';
import {runFlow} from 'genkit';

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    const validation = GenerateExercisesInputSchema.safeParse({ topic });
    if (!validation.success) {
        return NextResponse.json({ error: 'Invalid input', details: validation.error.formErrors }, { status: 400 });
    }

    const output = await runFlow(generateExercises, validation.data);

    return NextResponse.json(output);

  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      {error: error.message || 'An unexpected error occurred'},
      {status: 500}
    );
  }
}
