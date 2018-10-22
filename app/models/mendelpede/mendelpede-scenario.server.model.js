const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MendelPedeScenarioSchema = new Schema({
  label: string,
  shortCode: {
    type: string,
    index: true
  },
  inheritType: string,
  scenType: string
});

mongoose.model('MendelPedeScenario', MendelPedeScenarioSchema);