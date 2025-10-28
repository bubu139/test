import { z } from 'zod';

export const GeogebraInputSchema = z.object({
  request: z.string().describe('The user request in natural language describing the geometric construction.'),
});
export type GeogebraInput = z.infer<typeof GeogebraInputSchema>;

export const GeogebraOutputSchema = z.object({
  commands: z.array(z.string()).describe('An array of GeoGebra commands to be executed in order.'),
});
export type GeogebraOutput = z.infer<typeof GeogebraOutputSchema>;
