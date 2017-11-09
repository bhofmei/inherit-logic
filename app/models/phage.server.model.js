const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhageSchema = new Schema({
  strainNum: {
    type: Number,
    required: true
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  scenarioOrigin: {
    type: Schema.ObjectId,
    ref: 'Scenario'
  },
  phageType: String,
  mutationList: [{
    kind: String,
    location: Number
  }],
  deletion: [Number],
  comment: {
    type: String,
    default: ''
  },
  parents: [{
    type: Schema.ObjectId,
    ref: 'Phage'
  }]
});

PhageSchema.set('toJSON',{getters: true});

mongoose.model('Phage', PhageSchema);
