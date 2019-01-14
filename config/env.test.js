// Set the 'test' environment configuration object
module.exports = {
	db: 'mongodb://localhost/cricket-test',
	sessionSecret: 'testSessionSecret',
  encodeKey: 'ImATestKey',
  loadScenario: false,
  phageSeed: 100,
  email: require('./credentials/email.test.js'),
  limiter: require('./rate-limit/rate-limit.test.js')
};
