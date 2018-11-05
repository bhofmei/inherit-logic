/**
 * The Mendelpede Scenario-related controller functions
 * @module mendelpede/scenario.server.controller
 * @name Mendelpede Scenario Controller
 * @type Controller
 */
const mongoose = require('mongoose');
const Scenario = mongoose.model('MendelScenario');

/**
 * @external SCENARIO
 * @see {@link ../models/mendescenario-model.html}
 */

const getErrorMessage = require('../helpers.server.controller').getErrorMessage;

/**
 * List all of the sceanrios
 *
 * @apiType GET
 * @apiPath /api/mendelpede
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, send error as `{message: error-message}`
 * @yields {200_OK} Return list of scenarios
 * each scenario has properties `label`, `scenCode`, `purpose`, `startingPoint`, `relevance`, and `degOfDifficulty`
 */
exports.list = function (req, res) {
  //console.log('before find in controller');
  Scenario.find({}, 'label shortCode scenType ordOfScen')
    .exec((err, scenarios) => {
      //console.log('before find in controller');
      if (err) {
        // If an error occurs send the error message
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else {
        // Send a JSON representation
        //console.log(scenarios);
        res.json(scenarios);
      }
    });
};

/**
 * Get the details about a specifc scenario
 *
 * @apiType GET
 * @apiPath /api/mendelpede/:scenarioId
 *
 * @param {Object} req - Express request object;
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} returns json object of scenario to response with properties `label`, `scenCode`, `purpose`, `startingPoint`, `relevance`, and `degOfDiff`
 */
exports.read = function (req, res) {
  let s = req.scenario;
  let out = {
    label: s.label,
    shortCode: s.shortCode,
    scenType: s.scenType,
    orderOfScen: s.orderOfScen
  }
  res.json(out);
};

/**
 * Retreives a scenario from a scenario code
 * @protected
 *
 * @apiPath :scenarioId
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware to follow
 * @param {String} id - scenario code from URL
 *
 * @returns {Function} - next middleware
 * @yields {next(error)} On error, pass the error to next middleware
 * @yields {next('Failed to load scenario id')} - If scenario doesn't exist, pass message to next middleware
 * @yields {next()} - if successful, set request `scenario` and go to next middleware
 */
exports.scenarioByCode = function (req, res, next, id) {
  //console.log('mendel id', id);
  Scenario.findOne({
    shortCode: id
  }, (err, scenario) => {
    if (err) return next(err);
    if (!scenario) return next('Failed to load scenario ' + id);

    // If an scenario is found use the 'request' object to pass it to the next middleware
    req.scenario = scenario;

    // Call the next middleware
    next();
  });
};
