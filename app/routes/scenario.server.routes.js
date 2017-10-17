const scenarios = require('../controllers/scenario.server.controller');

module.exports = function(app) {
    app.route('/api/cricket')
        .get(scenarios.list);
};
