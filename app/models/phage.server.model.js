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
  mutationList: [Number],
  deletion: [Number],
  comment: {
    type: String,
    default: ''
  },
  submitted: {
    type: Boolean,
    default: false
  },
  parents: [{
    type: Schema.ObjectId,
    ref: 'Phage'
  }],
  numParents: {
    type: Number,
    default: 0
  }
});

PhageSchema.set('toJSON',{getters: true});

mongoose.model('Phage', PhageSchema);
