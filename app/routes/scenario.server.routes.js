const scenarios = require('../controllers/scenarios.server.controller');

module.exports = function(app) {

  app.route('/api/')
  .get(scenarios.list)
  .post(scenarios.list);

    app.route('/api/:scenarioID')
        .get(scenarios.getData)

    app.param('scenarioID', scenarios.scenarioByID);
};
