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
  /* scenaio paramters */
  mutationFreq: Number,
  recombinationFreq: Number,
  gcProb: Number,
  minStops: Number,
  intraMuteDist: [Number],
  interMuteDist: Number,
  /* scenario details */
  purpose: String,
  relevance: String,
  startingPoint: String,
  /* default phage info */
  referencePhage: [String],
  otherPhage: [String]
});

mongoose.model('Scenario', ScenarioSchema);
