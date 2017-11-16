const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FridgeSchema = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  scenario: {
    type: Schema.ObjectId,
    ref: 'Scenario'
  },
  nShelves: {
    type: Number,
    default: 4
  },
  nSpots: {
    type: Number,
    default: 16
  },
  strains: [{
    type: Schema.ObjectId,
    ref: 'Phage'
  }],
  scenarioDetails: String
});

FridgeSchema.set('toJSON',{getters: true});

mongoose.model('Fridge', FridgeSchema);
