const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MendelFridgeSchema = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  scenario: {
    type: Schema.ObjectId,
    ref: 'MendelScenario'
  },
  accessGranted: {
    type: Boolean,
    defaul: false
  },
  pedeList: [{
    type: Schema.ObjectId,
    ref: 'MendelPede'
  }],
  genoFacts: String
});

MendelFridgeSchema.set('toJSON', {getters: true});
mongoose.model('MendelFridge', MendelFridgeSchema);
