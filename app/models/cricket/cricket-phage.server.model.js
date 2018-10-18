const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Database schema for phage strains
 * @module cricket/phage.server.model
 * @name Cricket Phage Model
 * @type Model
 */

/**
 * @external USER
 * @see {@link user-model.html}
 */
/**
 * @external SCENARIO
 * @see {@link cricket-scenario-model.html}
 */
/**
 * @external PHAGE
 * @see {@link cricket-phage-model.html}
 */

const CricketPhageSchema = new Schema({
  /**
   * @member {number} strainNum - location of the phage in the fridge; note this is 0-based but fridge interface is 1-based
   * @required
   */
  strainNum: {
    type: Number,
    required: true
  },
  /**
   * @member {external:USER} owner - user who this phage belongs to
   */
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  /**
   * @member {external:SCENARIO} scenarioOrigin - scenario that
   * this phage was created for
   */
  scenarioOrigin: {
    type: Schema.ObjectId,
    ref: 'CricketScenario'
  },
  /**
   * @member {String} phageType - description of who created phage; must be one of `reference`, `unknown` or `user`
   */
  phageType: String,
  /**
   * @member {number[]} mutationList - list of frameshift mutations
   * - for each mutation, absolute value of number indicates position in the gene
   * - positive/negative number indicates plus/minus frameshift
   * @example
   * <p>One plus frameshift mutation</p>
   * [43]
   * @example
   * <p>One minus frameshift mutation</p>
   * [-178]
   * @example
   * <p>Two frameshifts of opposite type </p>
   * [106, -213]
   */
  mutationList: [Number],
  /**
   * @member {number[]} - list of deletions in the strain;
   * - if length 2, [0] is start of deletion and [1] is end
   * - if length greater than 2, there are multiple deletions that start on even index positions and end on odd index position
   * @example
   * <p>80 bp deletion at the beginning of gene</p>
   * [0, 80]
   * @example
   * <p>150 bp deletion in the middle of the gene</p>
   * [125, 275]
   * @example
   * <p>Multiple deletions: 40 bp-90 bp and 200 bp-280 bp</p>
   * [40, 90, 200, 280]
   */
  deletion: [Number],
  /**
   * @member {String} comment - User/scenario comment that describes this phage strain; makes it easier to remember details about each phage
   * @default
   */
  comment: {
    type: String,
    default: ''
  },
  /**
   * @member {boolean} submitted - for `user` phage, is this a phage that should be graded by instructor
   * - used when scenario asks users to create a phage with a specific mutation and makes it easier for the instr to phage
   * @default false
   */
  submitted: {
    type: Boolean,
    default: false
  },
  /**
   * @member {external:PHAGE[]} parents - when phage created in the lab room on the plate, these are the parent(s) used during the experiment
   */
  parents: [{
    type: Schema.ObjectId,
    ref: 'CricketPhage'
  }],
  /**
   * @member {number} numParents - when phage created in lab room on the lab, number of parents used during the experiment
   - used to know if a phage has a parent that was deleted from the DB
   * @default 0
   */
  numParents: {
    type: Number,
    default: 0
  }
});

CricketPhageSchema.set('toJSON',{getters: true});

mongoose.model('CricketPhage', CricketPhageSchema);
