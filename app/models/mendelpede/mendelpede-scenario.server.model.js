const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MendelScenarioSchema = new Schema({
  label: string,
  shortCode: {
    type: string,
    index: true
  },
  inheritType: string,
  scenType: string
});

mongoose.model('MendelScenario', MendelScenarioSchema);
