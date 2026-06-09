import { test, expect } from 'vitest';

import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question.js';

test('create an answer to a question', () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase();
  const answer = answerQuestionUseCase.execute({
    instructorId: 'instructor-123',
    questionId: 'question-456',
    content: 'This is the answer to the question.',
  });

  expect(answer.content).toBe('This is the answer to the question.');
});
