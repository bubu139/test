import { NextRequest, NextResponse } from 'next/server';
import { generateGeogebraCommands, GeogebraInputSchema } from '@/ai/flows/geogebra-flow';
import { runFlow } from 'genkit';

export async function POST(req: NextRequest) {
  try {
    const { request } = await req.json();

    const validation = GeogebraInputSchema.safeParse({ request });
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error.formErrors },
        { status: 400 }
      );
    }

    const output = await runFlow(generateGeogebraCommands, validation.data);

    return NextResponse.json(output);
  } catch (error: any) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}