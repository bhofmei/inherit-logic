const users = require('../controllers/users.server.controller');
const scenarios = require('../controllers/scenario.server.controller');
const passport = require('passport');

module.exports = function(app){
    app.route('/api/auth/signup').post(users.signup);
    app.route('/api/auth/signin').post(users.signin);
    app.route('/api/auth/signout').get(users.signout);

  // cricket paths
  //app.route('/api/cricket/:userId').get(scenarios.list);

  app.param('userId', users.userById);
};
