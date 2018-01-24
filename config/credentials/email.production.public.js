// This is a skeleton file of authentication credentials used for
// production nodemailer email portion of the application
// See https://www.johnvincent.io/express-emails-gmail/ for information about how to fill out the various fields if you are using gmail
// THIS FILE SHOULD NOT BE USED DIRECTLY
module.exports = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "username",
    clientId: "xxx",
    clientSecret: "xxx",
    refreshToken: "xxx"
  }
};
