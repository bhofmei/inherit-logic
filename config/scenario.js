// Load the module dependencies
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');
const scenarioList = require('./scenario.data');

module.exports = function () {
  var scCount = Scenario.count({}, (err, res) => {
    if (!err && res === 0) {
      return 0;
    } else if (err){
      return -1;
    } else {
      return res
    }
  });
  if (scCount === 0) {
    scenarioList.forEach(function (data) {
      var sc = new Scenario(data);
      sc.save((err) => {
        if (err) {
          console.err(getErrorMessage(err));
          return -1;
        }
      });
    });
    return 0;
  }
  return scCount;
};
