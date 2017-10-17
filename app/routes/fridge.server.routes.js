const scenarios = require('../controllers/scenario.server.controller');
const users = require('../controllers/users.server.controller');
const fridge = require('../controllers/fridge.server.controller');

module.exports = function (app) {

  app.route('/api/cricket/:scenarioId')
    .get(fridge.createFridge);

  app.route('/api/cricket/id/:userId/:scenarioId')
    .get(fridge.getFridge, fridge.hasFridgeAuthorization);

  app.param('userId', users.userById);
  app.param('scenarioId', scenarios.scenarioByCode);
};
