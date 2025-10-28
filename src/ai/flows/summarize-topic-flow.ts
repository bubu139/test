'use server';
/**
 * @fileOverview A flow that summarizes a given topic.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const SummarizeTopicInputSchema = z.object({
  topic: z.string().describe('The topic to summarize.'),
});
export type SummarizeTopicInput = z.infer<typeof SummarizeTopicInputSchema>;

export const SummarizeTopicOutputSchema = z.object({
  summary: z.string().describe('The summary of the topic.'),
});
export type SummarizeTopicOutput = z.infer<typeof SummarizeTopicOutputSchema>;

const summarizeTopicPrompt = ai.definePrompt({
    name: 'summarizeTopicPrompt',
    input: { schema: SummarizeTopicInputSchema },
    output: { schema: SummarizeTopicOutputSchema },
    prompt: `Bạn là một chuyên gia tóm tắt kiến thức toán học. Hãy tóm tắt chủ đề sau một cách ngắn gọn, súc tích và dễ hiểu, sử dụng các gạch đầu dòng và công thức LaTeX khi cần thiết.

Chủ đề: {{{topic}}}
`,
});

const summarizeTopicFlow = ai.defineFlow(
    {
        name: 'summarizeTopicFlow',
        inputSchema: SummarizeTopicInputSchema,
        outputSchema: SummarizeTopicOutputSchema,
    },
    async (input) => {
        const { output } = await summarizeTopicPrompt(input);
        return output!;
    }
);

export async function summarizeTopic(input: SummarizeTopicInput): Promise<SummarizeTopicOutput> {
    return summarizeTopicFlow(input);
}
