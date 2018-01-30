// Set the 'test' environment configuration object
module.exports = {
	db: 'mongodb://localhost/cricket-test',
	sessionSecret: 'testSessionSecret',
  loadScenario: false,
  phageSeed: 100,
  email: require('./credentials/email.test.js'),
  limiter: require('./rate-limit/rate-limit.development.js')
};
