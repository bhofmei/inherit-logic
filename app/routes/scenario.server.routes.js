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
  .delete(fridge.findFridgeByScenOwner, fridge.deleteFridge);

  app.route('/api/cricket/:userId/:scenarioId/new-fridge')
    .get(fridge.stockFridge);

  app.route('/api/cricket/:userId/:scenarioId/deletions')
  .post(fridge.findFridgeByScenOwner, fridge.saveDeletions);

  app.route('/api/cricket/:userId/:scenarioId/fridge-phage')
  .post(fridge.findFridgeByScenOwner, fridge.addPhageToFridge);

  app.route('/api/cricket/:userId/:scenarioId/:phageId')
  .post(fridge.hasPhageAuthorization, fridge.updatePhage)
  .delete(fridge.findFridgeByScenOwner, fridge.deletePhage);

  app.param('userId', users.userById);
  app.param('scenarioId', scenarios.scenarioByCode);
  app.param('phageId', fridge.phageById);
};
