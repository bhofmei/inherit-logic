'use strict';
/* global process */
const path = require('path');
const config = require('./config');
const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const gracefulExit = require('express-graceful-exit');
const helmet = require('helmet');

module.exports = function (db) {
  const app = express();
  app.use(gracefulExit.middleware(app));
  const server = http.createServer(app);
  // generate servers
  let out = {
    server: server,
    secureServer: null
  };
  if (process.env.NODE_ENV === 'production') {
    // get options
    let options = {
      key: fs.readFileSync(config.pathToKey),
      cert: fs.readFileSync(config.pathToCert)
    };
    const secureServer = https.createServer(options, app);
    out.secureServer = secureServer;
  }
  //

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(helmet());

  const mongoStore = new MongoStore({
    mongooseConnection: db.connection
  });

  app.use(session({
    saveUninitialized: false,
    resave: true,
    secret: config.sessionSecret,
    store: mongoStore,
    unset: 'destroy',
    name: 'sId'
  }));

  //app.set('views', './app/views');
  app.set('views', './public/build');
  app.set('view engine', 'ejs');

  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/', express.static(path.resolve('./public')));
  app.use('/lib', express.static(path.resolve('./node_modules')));

  require('./express.routes')(app)

  return out; // return the servers
  //return server;
};
