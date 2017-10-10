const users = require('../controllers/users.server.controller');
const passport = require('passport');

module.exports = function(app){
    app.route('/api/auth/signup').post(users.signup);
    app.route('/api/auth/signin').post(users.signin);
    app.route('/api/auth/signout').get(users.signout);
};
