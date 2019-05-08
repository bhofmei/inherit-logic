const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Database schema for fridge
 * @module mendelpede/mendelpede-fridge.server.model
 * @name Mendelpede Fridge Model
 * @type Model
 */

 /**
 * @external USER
 * @see {@link user-model.html}
 */
/**
 * @external MENDELSCENARIO
 * @see {@link mendelscenario-model.html}
 */
/**
 * @external MENDELPEDE
 * @see {@link mendelpede-model.html}
 */
/**
 * @external MENDELQUIZ
 * @see {@link mendelquiz-model.html}
 */

const MendelFridgeSchema = new Schema({
  /**
   * @member {external:USER} owner - user who owns the fridge
   */
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  /**
   * @member {external:MENDELSCENARIO} scenario - scenario the fridge is for
   */
  scenario: {
    type: Schema.ObjectId,
    ref: 'MendelScenario'
  },
  /**
   * @member {boolean} accessGranted - has access been granted by instructor
   * - when `false`, phage strains are the same for all users
   * - when `true`, phage are generated using random numbers
   * @default false
   */
  accessGranted: {
    type: Boolean,
    default: false
  },
  /**
   * @member {external:MENDELPEDE[]} pedeList - list of mendelpedes
   * in the fridge
   */
  pedeList: [{
    type: Schema.ObjectId,
    ref: 'MendelPede'
  }],
  /**
   * @member {String} genoFacts - Stringified Genofacts of the fridge
   * 
   */
  genoFacts: String,
  /**
   * @member {external:MENDELQUIZ} quiz - exists if this fridge
   *  has a quiz scenario
   */
  quiz: {
    type: Schema.ObjectId,
    ref: 'MendelQuiz'
  }
});

MendelFridgeSchema.set('toJSON', {getters: true});
mongoose.model('MendelFridge', MendelFridgeSchema);
