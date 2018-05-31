const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Database schema for fridge
 * @module fridge.server.model
 * @name Fridge Model
 * @type Model
 */

/**
 * @external USER
 * @see {@link user-model.html}
 */
/**
 * @external SCENARIO
 * @see {@link scenario-model.html}
 */
/**
 * @external PHAGE
 * @see {@link phage-model.html}
 */

const FridgeSchema = new Schema({
  /**
   * @member {external:USER} owner - user who owns the fridge
   */
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  /**
   * @member {external:SCENARIO} scenario - scenario the fridge is for
   */
  scenario: {
    type: Schema.ObjectId,
    ref: 'Scenario'
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
   * @member {external:PHAGE[]} strains - list of phage strains
   * in the fridge
   */
  strains: [{
    type: Schema.ObjectId,
    ref: 'Phage'
  }],
  /**
   * @member {String} scenarioDetails
   * - stringified object of the scenario details generated when
   * the fridge was created and is needed for performing
   * experiments
   * - includes `interMuteDist`, `intraMuteDist`, `mutationFreq`, `recombinationFreq`,
   * `deleteSizes`, `deleteSpots`, `usedDeleteSpots`,
   * `usedShiftSpots`, `wtGene`, `realStops`, `framesStopList`
   */
  scenarioDetails: String,
  /**
   * @member {String} guesses - stringified object of user's
   * guesses for locations of deletions where the key is the
   * strain number of the guess and the value is an array of
   * boolean values indicating if guessed a deletion
   * @example
   * "{'1': [false, false, false, false, true, true, ...],
   *   '2': [true, true, true, false, false, false, ...],
   *   '3': [false, false, false, false, false, false, ...]
   *  }"
   */
  guesses: String
});

FridgeSchema.set('toJSON',{getters: true});

mongoose.model('Fridge', FridgeSchema);
