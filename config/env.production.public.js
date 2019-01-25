/* global process */
// EXAMPLE PRODUCTION CONFIGURATION FOR GIT REPOSITORY
module.exports = {
  // Production configuration options
  db: 'mongodb://localhost/inherit-logic',
  sessionSecret : process.env.SES_SEC || 'defaultSessSec',
  encodeKey: process.env.ENC_KEY || 'encodeKey',
  loadScenario: true,
  email: require('./credentials/email.production.js'),
  pathToKey: '/path/to/ssl/private/key',
  pathToCert: '/path/to/ssl/certificate',
  limiter: require('./rate-limit/rate-limit.development.js')
};
