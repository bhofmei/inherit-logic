const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
  const db = mongoose.connect(config.db);
  require('../app/models/user.server.model');
  require('../app/models/article.server.model');
  require('../app/models/scenario.server.model');
  require('../app/models/course.server.model');

  if(config.loadScenario){
    require('./scenario');
  }
  return db;
};
