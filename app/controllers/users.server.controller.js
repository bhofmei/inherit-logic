const User = require('mongoose').model('User');
const passport = require('passport');

const getErrorMessage = function(err) {
  let message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (const errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }
  return message;
};

// Create a new controller method that signin users
exports.signin = function(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      res.status(400).send(info);
    } else {
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;

      req.login(user, (err) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(user);
        }
      });
    }
  })(req, res, next);
};

// Create a new controller method that creates new 'regular' users
exports.signup = function(req, res) {
  const user = new User(req.body);
  user.provider = 'local';

  user.save((err) => {
    if (err) {
      return res.status(400).send({
    message: getErrorMessage(err)
    });
    } else {
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;

      req.login(user, function(err) {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(user);
        }
      });
    }
  });
};

exports.saveOAuthUserProfile = function(req, profile, done) {
  User.findOne({
    provider: profile.provider,
    providerId: profile.providerId
  }, (err, user) => {
    if (err) {
      return done(err);
    } else {
      if (!user) {
        const possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

        User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
          profile.username = availableUsername;
          user = new User(profile);
          user.save(function(err) {
            return done(err, user);
          });
        });
      } else {
      return done(err, user);
      }
    }
  });
};

// Create a new controller method for signing out
exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
};

exports.requiresLogin = function(req, res, next){
  if(!req.isAuthenticated()){
    return res.status(401).send({message: 'User is not logged in'});
  }
  next();
};
