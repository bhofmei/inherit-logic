const user = require('../controllers/user.server.controller');
const admin = require('../controllers/admin.server.controller');
const cricketScenario = require('../controllers/cricket/cricket-scenario.server.controller');
const cricketFridge = require('../controllers/cricket/cricket-fridge.server.controller');

module.exports = function (app) {

  app.route('/api/admin/*').all(user.requiresLogin)
  /* admin user routes */
  app.route('/api/admin/:userId/students')
    .get(admin.hasAuthorization, admin.listUsers);

  app.route('/api/admin/:userId/students/:studentId')
    .get(admin.isAdmin, admin.getUser)
    .post(admin.isAdmin, admin.setRole)
    .delete(admin.isAdmin, admin.deleteUser);

  /* admin user Cricket scenario routes */
  app.route('/api/admin/:userId/students/:studentId/:scenCode')
    .get(admin.hasAuthorization, cricketFridge.getStudentFridge)
    .post(admin.hasAuthorization, cricketFridge.deleteStudentFridge, user.grantAccess);

  app.param('userId', user.userById);
  app.param('studentId', user.userById);
  app.param('scenCode', cricketScenario.scenByCode);
};
