'use server';
/**
 * @fileOverview A flow that generates exercises for a given topic.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const GenerateExercisesInputSchema = z.object({
  topic: z.string().describe('The topic to generate exercises for.'),
});
export type GenerateExercisesInput = z.infer<typeof GenerateExercisesInputSchema>;

export const GenerateExercisesOutputSchema = z.object({
  exercises: z.string().describe('The generated exercises in Markdown format.'),
});
export type GenerateExercisesOutput = z.infer<typeof GenerateExercisesOutputSchema>;

const generateExercisesPrompt = ai.definePrompt({
    name: 'generateExercisesPrompt',
    input: { schema: GenerateExercisesInputSchema },
    output: { schema: GenerateExercisesOutputSchema },
    prompt: `Bạn là một AI tạo bài tập toán học. Hãy tạo 3 bài tập tự luận (kèm đáp án chi tiết) về chủ đề sau. Sử dụng công thức LaTeX.

Chủ đề: {{{topic}}}
`,
});

const generateExercisesFlow = ai.defineFlow(
    {
        name: 'generateExercisesFlow',
        inputSchema: GenerateExercisesInputSchema,
        outputSchema: GenerateExercisesOutputSchema,
    },
    async (input) => {
        const { output } = await generateExercisesPrompt(input);
        return output!;
    }
);

export async function generateExercises(input: GenerateExercisesInput): Promise<GenerateExercisesOutput> {
    return generateExercisesFlow(input);
}
