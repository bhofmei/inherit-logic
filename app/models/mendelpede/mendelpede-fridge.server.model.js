const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MendelPedeFridgeSchema = new Schema({
  owner: {
    type: Schema.ObjectID,
    ref: 'User'
  },
  scenario: {
    type: Schema.ObjectID,
    ref: 'MendelPedeScenario'
  },
  accessGranted: {
    type: Boolean,
    defaul: false
  },
  pedeList: [{
    type: Schema.ObjectID,
    ref: 'MendelPede'
  }],
  GenoFacts: string
});

MendelPedeFridgeSchema.set('toJSON', {getters: true});
mongoose.model('MendelPedeFridge', MendelPedeFridgeSchema);