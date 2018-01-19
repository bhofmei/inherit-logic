const user = require('../controllers/user.server.controller');
const scenarios = require('../controllers/scenario.server.controller');
const passport = require('passport');

module.exports = function(app){
    app.route('/api/auth/signup').post(user.signup);
    app.route('/api/auth/signin').post(user.signin);
    app.route('/api/auth/signout').get(user.signout);

  //TODO: add verification route and get user route

  // get/update information for specific user
    app.route('/api/users/:userId')
      .get(user.requiresLogin, user.getUser)
      .post(user.requiresLogin, user.editUser);

  app.route('/api/users/:userId/update-password')
    .post(user.requiresLogin, user.updatePassword);

  // cricket paths
  //app.route('/api/cricket/:userId').get(scenarios.list);

  app.param('userId', user.userById);
};
