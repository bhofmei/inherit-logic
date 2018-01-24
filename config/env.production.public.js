/* global process */
// EXAMPLE PRODUCTION CONFIGURATION FOR GIT REPOSITORY
module.exports = {
  // Production configuration options
  db: 'mongodb://localhost/cricket',
  sessionSecret : process.env.SES_SEC || 'defaultSessSec',
  loadScenario: true,
  email: require('./credentials/email.production.js'),
  pathToKey: '/path/to/ssl/private/key',
  pathToCert: '/path/to/ssl/certificate'
};
