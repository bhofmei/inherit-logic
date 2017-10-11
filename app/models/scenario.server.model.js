const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScenarioSchema = new Schema({
  label: String,
  fileCode: String,
  scenCode: String,
  degOfDiff: Number,
  helpMessage: String,
  mutationFreq: Number,
  recombinationFreq: Number,
  defaultPhage: [{}]
});

mongoose.model('Scenario', ScenarioSchema);
