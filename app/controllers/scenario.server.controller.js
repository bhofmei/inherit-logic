// Load the module dependencies
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');

const getErrorMessage = function (err) {
  if (err.errors) {
    for (const errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

/**
 * List all of the sceanrios in order of degree of difficulty
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, returns 400 and error message to response
 * b) If success, returns list of scenairos to response
 */
exports.list = function (req, res) {
  Scenario.find({}, 'label scenCode purpose startingPoint relevance degOfDiff')
    .sort('degOfDiff')
    .exec((err, scenarios) => {
      if (err) {
        // If an error occurs send the error message
        return res.status(400)
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
 * Get the details about a scenario
 *
 * @param {Object} req - Express request object;
 * includes "scenario" from scenarioByCode
 * @param {Object} res - Express response object
 *
 * @returns {Object} - returns scenario to response
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
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware to follow
 * @param {string} id - scenario code from URL
 *
 * @returns {Function}
 * a) If error, pass error message to next middleware
 * b) If successful, set reqest scenario and move to next middleware
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
