const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * Database schema for mendelpede scenario
 * @module mendelpede/mendelpede-scenario.model.js
 * @name MendelPede Scenario Model
 * @type Model
 */
const MendelScenarioSchema = new Schema({
  /**
   * @member {String} label - Label of the Mendelpede scenario
   */
  label: String,
  /**
   * @member {Object} shortCode - short code for the scenario
   */
  shortCode: {
    type: String,
    index: true
  },
  /**
   * @member {String} inheritType - Type of inheritance for experiments
   */
  inheritType: String,
  /**
   * @member {String} scenType - scenario type: Quiz, mendelpede scenario,
   * discovery or pathway
   */
  scenType: String,
  /**
   * @member {Number} ordOfScen - order of the scenario: useful to display 
   * scenarios on Options menu
   */
  ordOfScen: Number,
  /**
   * @member {Number} courseLevel - Undergraduate or Graduate level
   * scenarios on Options menu
   */
  courseLevel: Number
});

mongoose.model('MendelScenario', MendelScenarioSchema);
