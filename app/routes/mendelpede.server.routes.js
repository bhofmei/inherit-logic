const scenarios = require('../controllers/mendelpede/scenario.server.controller');
const genetics = require('../controllers/mendelpede/genetics.server.controller')
const user = require('../controllers/user.server.controller');
const mendelFridge = require('../controllers/mendelpede/fridge.server.controller');

module.exports = function (app) {
  /* Scenarios */
  app.route('/api/mendelpede')
    .post(scenarios.list);

  app.route('/api/mendelpede/:scenShortCode')
    .get(scenarios.read);

  app.route('/api/mendelpede/:userId/:scenShortCode')
    .get(mendelFridge.getMendelFridge);

  app.route('/api/mendelpede/:userId/:scenShortCode/new-fridge')
    .get(mendelFridge.stockMendelFridge);

  app.route('/api/mendelpede/make-children')
    .post(genetics.makeChildren);

  app.route('/api/mendelpede/add-pede')
    .post(mendelFridge.insertPedeToFridge);

  app.route('/api/mendelpede/calculate-score')
    .post(genetics.calculateQuizScore);

  app.param('userId', user.userById);
  app.param('scenShortCode', scenarios.scenarioByCode);
};
