const cricketScenario = require('../controllers/cricket/cricket-scenario.server.controller');
const user = require('../controllers/user.server.controller');
const cricketFridge = require('../controllers/cricket/cricket-fridge.server.controller');
const cricketGenetics = require('../controllers/cricket/cricket-genetics.server.controller');

module.exports = function (app) {
  /* Scenarios */
  app.route('/api/cricket')
    .get(cricketScenario.listScen);

  app.route('/api/cricket/:scenCode')
    .get(cricketScenario.readScen);

  /* Fridge */
  app.route('/api/cricket/:userId/:scenCode')
    .get(cricketFridge.getFridge)

  app.route('/api/cricket/:userId/:scenCode/new-fridge')
    .get(cricketFridge.stockFridge);

  app.route('/api/cricket/:userId/:scenCode/deletions')
  .post(cricketFridge.findFridgeByScenOwner, cricketFridge.saveDeletions);

  app.route('/api/cricket/:userId/:scenCode/fridge-phage')
  .post(cricketFridge.findFridgeByScenOwner, cricketFridge.addPhageToFridge);

  app.route('/api/cricket/:userId/:scenCode/:phageId')
  .post(cricketFridge.hasPhageAuthorization, cricketFridge.updatePhage)
  .delete(cricketFridge.findFridgeByScenOwner, cricketFridge.deletePhage);

  /* Genetics */
  app.route('/api/cricket/plate')
    .post(cricketGenetics.createPlate);

  app.route('/api/cricket/plexer')
    .post(cricketGenetics.handlePlexer);

  app.param('userId', user.userById);
  app.param('scenCode', cricketScenario.scenByCode);
  app.param('phageId', cricketFridge.phageById);
};
