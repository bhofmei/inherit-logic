export interface MendelpedeQuiz {
  score: number;

  quizTakenDate?: Date;

  submittedAnswers: string[];

  isAnswerCorrect: boolean[];
}
