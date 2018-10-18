const user = require('../controllers/user.server.controller');
const passport = require('passport');
//const limiter = require('../../config/config').limiter;

module.exports = function(app){
    //app.route('/api/auth/signup').post(limiter.authLimiter.prevent, user.signup);
  app.route('/api/auth/signup').post(user.signup);
//    app.route('/api/auth/signin').post(limiter.authLimiter.prevent, user.signin);
  app.route('/api/auth/signin').post(user.signin);
  app.route('/api/auth/signout').get(user.signout);

    // functions to reset password
  //app.route('/api/auth/forget-password').post(limiter.authLimiter.prevent, user.resetPasswordEmail);
  app.route('/api/auth/forget-password').post( user.resetPasswordEmail);
//  app.route('/api/auth/reset-password').post(limiter.authLimiter.prevent,user.resetPassword);
  app.route('/api/auth/reset-password').post(user.resetPassword);

  // get/update information for specific user
//    app.route('/api/users/:userId')
//      .get(user.requiresLogin, user.getUser)
//      .post(limiter.userUpdateLimiter.prevent, user.requiresLogin, user.editUser);
  app.route('/api/users/:userId')
      .get(user.requiresLogin, user.getUser)
      .post(user.requiresLogin, user.editUser);

//  app.route('/api/users/:userId/update-password')
//    .post(limiter.userUpdateLimiter.prevent, user.requiresLogin, user.updatePassword);
  app.route('/api/users/:userId/update-password')
    .post(user.requiresLogin, user.updatePassword);


  app.param('userId', user.userById);
};
