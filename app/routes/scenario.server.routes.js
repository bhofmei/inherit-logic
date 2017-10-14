const scenarios = require('../controllers/scenario.server.controller');

module.exports = function(app) {
    app.route('/api/scenarios')
        .get(scenarios.list)

    app.route('/api/scenarios/:scenarioId')
        .get(scenarios.read)

    app.param('scenarioId', scenarios.scenarioByCode);
};
