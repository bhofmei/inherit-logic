const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
  const db = mongoose.connect(config.db);
  require('../app/models/user.server.model');
  require('../app/models/course.server.model');
  require('../app/models/cricket/cricket-scenario.server.model');
  require('../app/models/cricket/cricket-fridge.server.model');
  require('../app/models/cricket/cricket-phage.server.model');
  require('../app/models/mendelpede/mendelpede-fridge.server.model')
  require('../app/models/mendelpede/mendelpede-pede.model')
  require('../app/models/mendelpede/mendelpede-scenario.server.model')
  require('../app/models/mendelpede/mendelpede-quiz.server.model')


  if(config.loadScenario){
    const Scenario = mongoose.model('CricketScenario');
    const MendelScenario = mongoose.model('MendelScenario');
    const scenarioList = require('./cricket/scenario.data');
    const MendelScenarioList = require('./mendelpede/scenario.data');
    Scenario.count({}, (err, res)=>{
      if(res === 0){
        // add scenarios
        scenarioList.forEach((data)=>{
          var sc = new Scenario(data);
          sc.save()
        });
      }
    });

    MendelScenario.count({}, (err, res)=>{
      if(res === 0){
        // add scenarios
        MendelScenarioList.forEach((data)=>{
          var sc = new MendelScenario(data);
          sc.save()
        });
      }
    });
  }
  return db;
};
