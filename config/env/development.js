module.exports = {
  // Development configuration options
  db: 'mongodb://localhost/mean-book',
  sessionSecret : 'developmentSessionSecret',
  facebook: {
    clientID: '158325914715480',
    clientSecret: '2ce09810ce16c50827cf60b1dc5ae43c',
    callbackURL: 'http://localhost:3000/api/oauth/facebook/callback'
  },
  google: {
    clientID: '164582347423-m0tt8jm57aqbmaqndd8go0jgj3shs927.apps.googleusercontent.com',
    clientSecret: 'eBF1pqrY-OvBwZTAq628451p',
    callbackURL: 'http://localhost:3000/api/oauth/google/callback'
  }
};
