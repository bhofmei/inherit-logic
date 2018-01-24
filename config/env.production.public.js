/* global process */
// EXAMPLE PRODUCTION CONFIGURATION FOR GIT REPOSITORY
module.exports = {
  // Production configuration options
  db: 'mongodb://localhost/cricket',
  sessionSecret : process.env.SES_SEC || 'defaultSessSec',
  loadScenario: true
};
