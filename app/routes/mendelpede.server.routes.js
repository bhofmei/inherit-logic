const scenarios = require('../controllers/mendelpede/scenario.server.controller');
const user = require('../controllers/user.server.controller');
const mendelFridge = require('../controllers/mendelpede/fridge.server.controller');
const genetics = require('../controllers/mendelpede/genetics.server.controller');

module.exports = function (app) {
  /* Scenarios */
  app.route('/api/mendelpede')
    .get(scenarios.list);

  app.route('/api/mendelpede/:scenShortCode')
    .get(scenarios.read);
 
  app.route('/api/mendelpede/:userId/:scenShortCode')
    .get(mendelFridge.getMendelFridge)
 
  app.route('/api/mendelpede/:userId/:scenShortCode/new-fridge')
    .get(mendelFridge.stockMendelFridge);
  /* 
  app.route('/api/cricket/:userId/:scenarioId/deletions')
  .post(fridge.findFridgeByScenOwner, fridge.saveDeletions);

  app.route('/api/cricket/:userId/:scenarioId/fridge-phage')
  .post(fridge.findFridgeByScenOwner, fridge.addPhageToFridge);

  app.route('/api/cricket/:userId/:scenarioId/:phageId')
  .post(fridge.hasPhageAuthorization, fridge.updatePhage)
  .delete(fridge.findFridgeByScenOwner, fridge.deletePhage);

  /* Genetics 
  app.route('/api/cricket/plate')
    .post(genetics.createPlate);

  app.route('/api/cricket/plexer')
    .post(genetics.handlePlexer);
*/
  app.param('userId', user.userById);
  app.param('scenShortCode', scenarios.scenarioByCode);
  //app.param('phageId', fridge.phageById); 

};
