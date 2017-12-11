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
  accessGranted: {
    type: Boolean,
    default: false
  },
  strains: [{
    type: Schema.ObjectId,
    ref: 'Phage'
  }],
  scenarioDetails: String,
  guesses: String
});

FridgeSchema.set('toJSON',{getters: true});

mongoose.model('Fridge', FridgeSchema);
