// set up routes
module.exports = function(app){
  require('../app/routes/user.server.routes')(app);
  require('../app/routes/course.server.routes')(app);
  require('../app/routes/admin.server.routes')(app);
  require('../app/routes/cricket.server.routes')(app);
  require('../app/routes/index.server.routes')(app);
};
