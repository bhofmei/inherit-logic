const Cryptr = require('cryptr');
const config = require('./config');
const cryptr = new Cryptr(config.encodeKey);

module.exports = cryptr;
