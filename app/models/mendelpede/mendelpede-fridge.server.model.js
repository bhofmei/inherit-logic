const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MendelFridgeSchema = new Schema({
  owner: {
    type: Schema.ObjectID,
    ref: 'User'
  },
  scenario: {
    type: Schema.ObjectID,
    ref: 'MendelScenario'
  },
  accessGranted: {
    type: Boolean,
    defaul: false
  },
  pedeList: [{
    type: Schema.ObjectID,
    ref: 'MendelPede'
  }],
  genoFacts: string
});

MendelFridgeSchema.set('toJSON', {getters: true});
mongoose.model('MendelFridge', MendelFridgeSchema);
