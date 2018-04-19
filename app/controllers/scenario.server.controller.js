// Load the module dependencies
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');

// Create a new error handling controller method
const getErrorMessage = function (err) {
  if (err.errors) {
    for (const errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

// Create a new controller method that retrieves a list of scenarios
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

// Create a new controller method that returns a scenario
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


// Create a new controller middleware that retrieves a single existing scenario
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
