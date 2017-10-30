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
  recombinationFreq: Number,
  purpose: String,
  relevance: String,
  startingPoint: String,
  defaultRoom: {
    type: String,
    default: 'Lab'
  },
  availableRooms: {
    type: [String],
    default: ['Lab', 'MultiPlexer', 'SuperPlexer']
  }
});

ScenarioSchema.statics.findOneByCode = function(code, callback){
  this.findOne({scenCode: code}, callback);
};

mongoose.model('Scenario', ScenarioSchema);
