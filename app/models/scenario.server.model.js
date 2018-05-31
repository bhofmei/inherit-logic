const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scenDefaults = require('../../config/scenario.config');

/**
 * Database schema for scenarios (scenarios are created when the application runs the first time)
 * @module scenario.server.model
 * @name Scenario Model
 * @type Model
 */

const ScenarioSchema = new Schema({
  /**
   * @member {string} label - human-readable label describing the scenario
   */
  label: String,
  /**
   * @member {string} fileCode
   */
  fileCode: String,
  /**
   * @member {string} scenCode - short string used to uniquely
   * identify each scenario via URL
   * @index
   */
  scenCode: {
    type: String,
    index: true
  },
  /**
   * @member {number} defOfDiff - relative degree of difficulty used to order the scenarios on the scenario page
   */
  degOfDiff: Number,
  /**
   * @member {number} mutationFreq - chance creating a new frameshift mutation during an experiment
   * @default 0.0004
   */
  mutationFreq: {
    type: Number,
    default: scenDefaults.mutationFreq
  },
  /**
   * @member {number} recombinationFreq - chance of single recombination when crossing two phage in an experiment
   * @default 0.04
   */
  recombinationFreq: {
    type: Number,
    default: scenDefaults.recombinationFreq
  },
  /**
   * @member {number} gcProb - integer number for percent G and C's when creating the WT gene
   * @default 72
   */
  gcProb: {
    type: Number,
    default: scenDefaults.gcProb
  },
  /**
   * @member {number} minStops - minumum number of possible stop codons that would be created during frameshifts of a gene
   * @default 10
   */
  minStops: {
    type: Number,
    default: scenDefaults.minStops
  },
  /**
   * @member {number[]} intraMuteDist - mutations on the same phage are
   * between [0] and [1] distance apart when interMuteDist isn't set
   * @default [10, 80]
   */
  intraMuteDist: {
    type: [Number],
    default: scenDefaults.intraMuteDist
  },
  /**
   * @member {number} interMuteDist - minimum distance apart that
   * mutations should be for different phage of the same scenario; equals `-1` when unset
   * @default -1
   */
  interMuteDist: {
    type: Number,
    default: scenDefaults.interMuteDist
  },
  /* scenario details */
  /**
   * @member {string} purpose - description of the goal of the scenario for users
   */
  purpose: String,
  /**
   * @member {String} relevance - description of why this scenario is important for learning
   */
  relevance: String,
  /**
   * @member {String} startingPoint - description of the phage
   * strains in the fridge when first created
   */
  startingPoint: String,
  /* default phage info */
  /**
   * @member {String[]} referencePhage - each item is a phage to be created for the scenario when fridge created
   * - each item includes details about what mutations/deletions, if any, to include in the phage
   * - as a reference phage, mutation type is told to user
   */
  referencePhage: [String],
  /**
   * @member {String[]} otherPhage - each item is a phage to be created for the scenario when fridge created
   * - each item includes details about what mutations/deletions, if any, to include in the phage
   * - as an other phage, mutation type is not told to user and discovering the mutation is often the puprose for the scenario
   */
  otherPhage: [String]
});

mongoose.model('Scenario', ScenarioSchema);
