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
}
