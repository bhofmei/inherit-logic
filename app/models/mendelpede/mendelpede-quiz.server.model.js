const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Database schema for quizzes
 * @module mendelpede/quiz.model.js
 * @name MendelPede Quiz Model
 * @type Model
 */

 const MendelQuizSchema = new Schema({
   /**
    * @member {Number} score - Quiz score
    */
   score: Number,
   /**
    * @member {Date} quizTakenDate - date on which quiz was taken
    */
   quizTakenDate: Date,
  /**
   * @member {String[]} submittedAnswers - Student's answers of the quiz
   * @example ['AAA', 'aaa', 'AAa', 'aAa', 'AAa', 'aAa', 'AAA', 'aaa']
   */
   submittedAnswers: [String],
  /**
   * @member {Boolean[]} isAnswerCorrect - Array of booleans representing if the 
   * answers are correct
   * @example [True, False, False, True, True, True, False, True]
   */
   isAnswerCorrect: [Boolean]
 });

 MendelQuizSchema.set('toJSON',{getters: true});

 mongoose.model('MendelQuiz', MendelQuizSchema);
