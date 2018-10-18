const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
  const db = mongoose.connect(config.db);
  require('../app/models/user.server.model');
  require('../app/models/course.server.model');
  require('../app/models/cricket/cricket-scenario.server.model');
  require('../app/models/cricket/cricket-fridge.server.model');
  require('../app/models/cricket/cricket-phage.server.model');

  if(config.loadScenario){
    const Scenario = mongoose.model('CricketScenario');
    const scenarioList = require('./cricket/scenario.data');
    Scenario.count({}, (err, res)=>{
      if(res === 0){
        // add scenarios
        scenarioList.forEach((data)=>{
          var sc = new Scenario(data);
          sc.save()
        });
      }
    });
  }
  return db;
};
