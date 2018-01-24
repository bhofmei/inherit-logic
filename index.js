/* global process */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const https = require('https');
const http = require('http');
const options = require('./config/https');
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

const db = configureMongoose();
const app = configureExpress(db);
const passport = configurePassport();
let server = http.createServer(app);
server.listen(3001);
/* if production, use HTTPS */
console.log(process.env.NODE_ENV)
//if (process.env.NODE_ENV === 'production') {
  let securePort = (process.env.NODE_ENV === 'production' ? 443 : 8443);
  console.log('secure');
  let secureServer = https.createServer(options, app);
  secureServer.listen(securePort);
//}
module.exports = server;

console.log('Server running at http://localhost:3001/');
