const genetics = require('../controllers/genetics.server.controller');

module.exports = function (app) {

  app.route('/api/cricket/plate')
    .post(genetics.createPlate);

  app.route('/api/cricket/plexer')
    .post(genetics.handlePlexer);
};
