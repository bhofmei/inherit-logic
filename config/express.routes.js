// set up routes
module.exports = function(app){
  require('../app/routes/scenario.server.routes')(app);
  require('../app/routes/users.server.routes')(app);
  require('../app/routes/article.server.routes')(app);
  require('../app/routes/instructor.server.routes')(app);
  require('../app/routes/admin.server.routes')(app);
  //require('../app/routes/fridge.server.routes')(app);
  require('../app/routes/genetics.server.routes')(app);
  require('../app/routes/index.server.routes')(app);
};
