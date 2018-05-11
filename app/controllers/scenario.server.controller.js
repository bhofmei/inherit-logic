/**
 * The Scenario-related controller functions
 * @module scenario.server.controller
 * @name Scenario Controller
 * @type Controller
 */
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');

const getErrorMessage = require('./helpers.server.controller').getErrorMessage;

/**
 * List all of the sceanrios in order of degree of difficulty
 *
 * @apiType GET
 * @apiPath /api/cricket
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 *
 * @returns {Object} - json object to response
 * @yields {500_Internal_Server_Error} On error, send error as `{message: error-message}`
 * @yields {200_OK} Return list of scenarios
 * each scenario has properties `label`, `scenCode`, `purpose`, `startingPoint`, `relevance`, and `degOfDifficulty`
 */
exports.list = function (req, res) {
  Scenario.find({}, 'label scenCode purpose startingPoint relevance degOfDiff')
    .sort('degOfDiff')
    .exec((err, scenarios) => {
      if (err) {
        // If an error occurs send the error message
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else {
        // Send a JSON representation
        res.json(scenarios);
      }
    });
};

/**
 * Get the details about a specifc scenario
 *
 * @apiType GET
 * @apiPath /api/cricket/:scenarioId
 *
 * @param {Object} req - Express request object;
 * @property {Scenario} scenario - current scenario from [scenarioByCode](@link scenario.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} - returns json object of scenario to response with properties `label`, `scenCode`, `purpose`, `startingPoint`, `relevance`, and `degOfDiff`
 */
exports.read = function (req, res) {
  let s = req.scenario;
  let out = {
    label: s.label,
    scenCode: s.scenCode,
    purpose: s.purpose,
    startingPoint: s.startingPoint,
    relevance: s.relevance,
    degOfDiff: s.degOfDiff
  }
  res.json(out);
};

/**
 * Retreives a scenario from a scendario code
 * @protected
 *
 * @apiPath :scenarioId
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware to follow
 * @param {string} id - scenario code from URL
 *
 * @returns {Function} - next middleware
 * @yields {next(error)} On error, pass the error to next middleware
 * @yields {next('Failed to load scenario id')} - If scenario doesn't exist, pass message to next middleware
 * @yields {next()} - if successful, set request `scenario` and go to next middleware
 */
exports.scenarioByCode = function (req, res, next, id) {
  Scenario.findOne({
    scenCode: id
  }, (err, scenario) => {
    if (err) return next(err);
    if (!scenario) return next('Failed to load scenario ' + id);

    // If an scenario is found use the 'request' object to pass it to the next middleware
    req.scenario = scenario;

    // Call the next middleware
    next();
  });
};
