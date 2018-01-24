const nodemailer = require('nodemailer');
const conf = require('./config');
const transporterConfig = conf.email;

module.exports = function(){
  const transporter = nodemailer.createTransport(transporterConfig);
  return transporter;
  transporter.verify((err, success)=>{
    if(err){
      console.log('ERROR setting up email transport:', err);
      return null;
    } else {
      console.log('Transporter set up');
      return transporter;
    }
  });
}
