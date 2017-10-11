const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
  const db = mongoose.connect(config.db);
  require('../app/models/user.server.model');
  require('../app/models/article.server.model');
  require('../app/models/scenario.server.model');
  populateScenario();
  return db;
};

// add scenarios and scenario details to the database
const populateScenario = function(){
  const Scenario = mongoose.model('Scenario');
  const scController = require('../app/controllers/scenario.server.controller');
  Scenario.count({}, (err, res)=>{
    if(!err && res === 0){
      var scConfig = require('./scenarios.js');
      scConfig.forEach(function(sc){
    scController.addScenario(sc, (error)=>{
      console.err(error);
    });
  });
    }
  });
};
