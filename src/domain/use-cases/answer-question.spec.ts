import { test, expect } from 'vitest';

import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question.js';

import type { Answer } from '@/domain/entities/answer.js';
import type { AnswerRepository } from '@/domain/repositories/answers-repository.js';

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test('create an answer to a question', async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(fakeAnswerRepository);
  const answer = await answerQuestionUseCase.execute({
    instructorId: 'instructor-123',
    questionId: 'question-456',
    content: 'This is the answer to the question.',
  });

  expect(answer.content).toBe('This is the answer to the question.');
});
