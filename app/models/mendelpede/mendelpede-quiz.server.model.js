const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Database schema for pedes
 * @module mendelpede/pede.model.js
 * @name MendelPede Pede Model
 * @type Model
 */

 const MendelPedeQuizSchema = new Schema({

   score: Number,
   
   quizTakenDate: Date,

   studentAnswers: [Boolean]
 });

 MendelPedeQuizSchema.set('toJSON',{getters: true});

 mongoose.model('MendelPedeQuiz', MendelPedeQuizSchema);
