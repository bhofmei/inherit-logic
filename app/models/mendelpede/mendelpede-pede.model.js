const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Database schema for pedes
 * @module mendelpede/pede.model.js
 * @name MendelPede Pede Model
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

 const MendelPedeSchema = new Schema({
   /**
    * @member {Number} bugID - unique id given to mendelpede
    */
   bugID: {
     type: Number,
     required: true
   },
   /**
   * @member {external:USER} owner - user who owns the fridge which contains 
   * this mendelpede
   */
   owner: {
     type: Schema.ObjectId,
     ref: 'User'
   },
   /**
   * @member {external:MENDELSCENARIO} scenario - scenario the mendelpede is for
   */
   scenario: {
     type: Schema.ObjectId,
     ref: 'MendelScenario'
   },
   /**
    * @member {Boolean} isFemale - true if this mendelpede is female
    * false if male
    */
   isFemale: Boolean,
   /**
    * @member {Number} genoType - encoded with ternary for each trait that's part of scenario
    */
   genotype: [Number],
   /**
    * @member {String[]} phenotype - ordered dotcolor, eyeColor-x, segColor-y, numLegs, numSegs
    * useful for the image 
    */
   phenotype: [String]
 });

 MendelPedeSchema.set('toJSON',{getters: true});

 mongoose.model('MendelPede', MendelPedeSchema);
