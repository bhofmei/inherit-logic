const fs = require('fs');
const path = require('path');
const cEnv = process.env.NODE_ENV;

module.exports = {
  key: fs.readFileSync(path.resolve(__dirname, './credentials/ssl.key.'+cEnv+'.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, './credentials/ssl.certificate.'+cEnv+'.pem'))
};
