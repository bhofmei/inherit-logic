// Load the module dependencies
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');

// Create a new error handling controller method
const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.addScenario = function(data, callback){
  var sc = new Scenario(data);
  sc.save((err)=>{
    if(err){
      callback(getErrorMessage(err));
    }
  });
};

exports.getData = function(req, res){
  res.json(req.title);
};

exports.list = function(req, res) {
    // Use the model 'find' method to get a list of scenarios
    Scenario.find().sort('degOfDiff').exec((err, scenario) => {
      console.log(scenario);
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the scenario
            res.json(scenario);
        }
    });
};

exports.scenarioByID = function(req, res, next, id) {
    // Use the model 'findById' method to find a single article
    Scenario.findOne({sceneCode: id}).exec((err, scen) => {
        if (err) return next(err);
        if (!scen) return next(new Error('Failed to load scenario ' + id));

        // If an article is found use the 'request' object to pass it to the next middleware
        req.title = scen.label;

        // Call the next middleware
        next();
    });
};
