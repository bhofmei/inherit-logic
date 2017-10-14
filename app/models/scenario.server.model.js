const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScenarioSchema = new Schema({
  label: String,
  fileCode: String,
  scenCode: {
    type: String,
    index: true
  },
  degOfDiff: Number,
  helpMessage: String,
  mutationFreq: Number,
  recombinationFreq: Number
});

ScenarioSchema.statics.findOneByCode = function(code, callback){
  this.findOne({scenCode: code}, callback);
};

mongoose.model('Scenario', ScenarioSchema);
