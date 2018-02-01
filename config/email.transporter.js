const nodemailer = require('nodemailer');
const conf = require('./config');
const transporterConfig = conf.email;

module.exports = function(){
  const transporter = nodemailer.createTransport(transporterConfig);
  return transporter;
}
