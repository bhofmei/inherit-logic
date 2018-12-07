module.exports = {
  // Development configuration options
  db: 'mongodb://localhost/cricket-dev',
  sessionSecret : 'developmentSessionSecret',
  encodeKey: 'twEEXTsWW76k2Y0',
  loadScenario: true,
  //phageSeed: 100,
  email: require('./credentials/email.production.js'),
  limiter: require('./rate-limit/rate-limit.development.js')
};
