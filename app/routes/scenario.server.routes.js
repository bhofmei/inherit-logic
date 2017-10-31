const scenarios = require('../controllers/scenario.server.controller');
const users = require('../controllers/users.server.controller');
const fridge = require('../controllers/fridge.server.controller');

module.exports = function (app) {
  app.route('/api/cricket')
    .get(scenarios.list);

  app.route('/api/cricket/:scenarioId')
    .get(scenarios.read);

  app.route('/api/cricket/:userId/:scenarioId')
    .get(fridge.getFridge)
  .post(fridge.saveFridge);

  app.param('userId', users.userById);
  app.param('scenarioId', scenarios.scenarioByCode);
};
