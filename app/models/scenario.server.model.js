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
  /* location info */
  defaultRoom: {
    type: String,
    default: 'Lab'
  },
  availableRooms: {
    type: [String],
    default: ['Lab', 'MultiPlexer', 'SuperPlexer']
  },
  /* default phage info */
  referencePhage: [String],
  otherPhage: [String],
  alternatePhage: [String]
});

ScenarioSchema.statics.findOneByCode = function (code, callback) {
  this.findOne({
    scenCode: code
  }, callback);
};

mongoose.model('Scenario', ScenarioSchema);
