const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Database schema for quizzes
 * @module mendelpede/quiz.model.js
 * @name MendelPede Quiz Model
 * @type Model
 */

 const MendelQuizSchema = new Schema({

   score: Number,

   quizTakenDate: Date,

   submittedAnswers: [String],

   isAnswerCorrect: [Boolean]
 });

 MendelQuizSchema.set('toJSON',{getters: true});

 mongoose.model('MendelQuiz', MendelQuizSchema);
