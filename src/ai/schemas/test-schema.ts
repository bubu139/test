import { z } from 'zod';

const MultipleChoiceQuestionSchema = z.object({
  id: z.string(),
  type: z.literal('multiple-choice'),
  prompt: z.string().describe('The question prompt, can include LaTeX.'),
  options: z.array(z.string()).length(4).describe('An array of 4 possible answers.'),
  answer: z.number().min(0).max(3).describe('The index of the correct option (0-3).'),
});

const TrueFalseQuestionSchema = z.object({
  id: z.string(),
  type: z.literal('true-false'),
  prompt: z.string().describe('The main prompt for the set of statements.'),
  statements: z.array(z.string()).length(4).describe('An array of 4 statements to be evaluated.'),
  answer: z.array(z.boolean()).length(4).describe('An array of 4 booleans representing the correct answer for each statement.'),
});

const ShortAnswerQuestionSchema = z.object({
  id: z.string(),
  type: z.literal('short-answer'),
  prompt: z.string().describe('The question prompt, can include LaTeX.'),
  answer: z.string().max(6).describe('The correct numeric answer, as a string, max 6 characters.'),
});

export const QuestionSchema = z.union([
  MultipleChoiceQuestionSchema,
  TrueFalseQuestionSchema,
  ShortAnswerQuestionSchema,
]);

export const TestSchema = z.object({
  title: z.string(),
  parts: z.object({
    multipleChoice: z.object({
      title: z.string(),
      questions: z.array(MultipleChoiceQuestionSchema),
    }),
    trueFalse: z.object({
      title: z.string(),
      questions: z.array(TrueFalseQuestionSchema),
    }),
    shortAnswer: z.object({
      title: z.string(),
      questions: z.array(ShortAnswerQuestionSchema),
    }),
  }),
});

export type MultipleChoiceQuestion = z.infer<typeof MultipleChoiceQuestionSchema>;
export type TrueFalseQuestion = z.infer<typeof TrueFalseQuestionSchema>;
export type ShortAnswerQuestion = z.infer<typeof ShortAnswerQuestionSchema>;
export type Question = z.infer<typeof QuestionSchema>;
export type Test = z.infer<typeof TestSchema>;
