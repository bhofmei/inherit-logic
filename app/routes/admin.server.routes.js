const user = require('../controllers/user.server.controller');
const admin = require('../controllers/admin.server.controller');
const scenario = require('../controllers/scenario.server.controller');
const fridge = require('../controllers/fridge.server.controller');

module.exports = function (app) {

  /* admin user routes */
  app.route('/api/admin/:userId/users')
    .get(admin.isAdmin, admin.listUsers);

  app.route('/api/admin/:userId/users/:studentId')
    .get(admin.isAdmin, admin.getUser)
    .post(admin.isAdmin, admin.setRole)
    .delete(admin.isAdmin, admin.deleteUser);

  /* admin user scenario routes */
  app.route('/api/admin/:userId/users/:studentId/:scenarioId')
    .get(admin.hasAuthorization, fridge.getStudentFridge)
    .post(admin.hasAuthorization, user.grantAccess);

  app.param('userId', user.userById);
  app.param('studentId', user.userById);
  app.param('scenarioId', scenario.scenarioByCode);
};
