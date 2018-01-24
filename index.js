/* global process */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport');

const db = configureMongoose();
const appServers = configureExpress(db);
const server = appServers.server; // regular http server
const secureServer = appServers.secureServer; // https server
const passport = configurePassport();
server.listen(3001);
/* HTTPS server exists */
if (secureServer !== null) {
  secureServer.listen(8443);
}
module.exports = (secureServer === null ? server : secureServer );

console.log('Server running at http://localhost:3001/');
