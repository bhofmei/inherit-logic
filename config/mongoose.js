const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
  const db = mongoose.connect(config.db);
  require('../app/models/user.server.model');
  require('../app/models/article.server.model');
  require('../app/models/scenario.server.model');
  require('../app/models/course.server.model');
  require('../app/models/fridge.server.model');
  require('../app/models/phage.server.model');

  if(config.loadScenario){
    const Scenario = mongoose.model('Scenario');
    const scenarioList = require('./scenario.data');
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
