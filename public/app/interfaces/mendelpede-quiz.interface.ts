/**
 * A Mendelpede quiz 
 */
export interface MendelpedeQuiz {
  /**
   * score of the quiz
   */
  score: number;

  /**
   * quiz taken date
   */
  quizTakenDate?: Date;

  /**
   * Answers submitted by student
   */
  submittedAnswers: string[];

  /**
   * answers graded
   */
  isAnswerCorrect: boolean[];
}
