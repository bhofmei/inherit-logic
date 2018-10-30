const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MendelScenarioSchema = new Schema({
  label: String,
  shortCode: {
    type: String,
    index: true
  },
  inheritType: String,
  scenType: String,
  ordOfScen: Number
});

mongoose.model('MendelScenario', MendelScenarioSchema);
