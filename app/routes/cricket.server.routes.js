const scenarios = require('../controllers/cricket/scenario.server.controller');
const user = require('../controllers/user.server.controller');
const fridge = require('../controllers/cricket/fridge.server.controller');
const genetics = require('../controllers/cricket/genetics.server.controller');

module.exports = function (app) {
  /* Scenarios */
  app.route('/api/cricket')
    .get(scenarios.list);

  app.route('/api/cricket/:scenarioId')
    .get(scenarios.read);

  /* Fridge */
  app.route('/api/cricket/:userId/:scenarioId')
    .get(fridge.getFridge)

  app.route('/api/cricket/:userId/:scenarioId/new-fridge')
    .get(fridge.stockFridge);

  app.route('/api/cricket/:userId/:scenarioId/deletions')
  .post(fridge.findFridgeByScenOwner, fridge.saveDeletions);

  app.route('/api/cricket/:userId/:scenarioId/fridge-phage')
  .post(fridge.findFridgeByScenOwner, fridge.addPhageToFridge);

  app.route('/api/cricket/:userId/:scenarioId/:phageId')
  .post(fridge.hasPhageAuthorization, fridge.updatePhage)
  .delete(fridge.findFridgeByScenOwner, fridge.deletePhage);

  /* Genetics */
  app.route('/api/cricket/plate')
    .post(genetics.createPlate);

  app.route('/api/cricket/plexer')
    .post(genetics.handlePlexer);

  app.param('userId', user.userById);
  app.param('scenarioId', scenarios.scenarioByCode);
  app.param('phageId', fridge.phageById);
};
