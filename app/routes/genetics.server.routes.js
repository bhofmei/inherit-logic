const genetics = require('../controllers/genetics.server.controller');
//const limiter = require('../../config/rate-limit/rate-limit.' + process.env.NODE_ENV+'.js');
//const limiter = require('../../config/config').limiter;

module.exports = function (app) {

//  app.route('/api/cricket/plate')
//    .post(limiter.geneticsLimiter.prevent, genetics.createPlate);
  app.route('/api/cricket/plate')
    .post(genetics.createPlate);

  app.route('/api/cricket/plexer')
    .post(limiter.geneticsLimiter.prevent, genetics.handlePlexer);
  app.route('/api/cricket/plexer')
    .post(genetics.handlePlexer);
};
