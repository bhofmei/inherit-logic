const User = require('mongoose')
  .model('User');
const passport = require('passport');
const scenData = require('../../config/scenario.data');

const getErrorMessage = function (err) {
  let message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Email already exists';
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

const getUserInfo = function (user) {
  return {
    id: user.userId,
    name: user.name,
    m: user.admin
  }
};

// Create a new controller method that signin users
exports.signin = function (req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      res.status(400)
        .send(info);
    } else {
      let userInfo = getUserInfo(user);

      req.login(user, (err) => {
        if (err) {
          res.status(400)
            .send(err);
        } else {
          res.json(userInfo);
        }
      });
    }
  })(req, res, next);
};

// Create a new controller method that creates new 'regular' users
exports.signup = function (req, res) {
  let tmp = req.body;
  //console.log(req.body);
  tmp.email = tmp.username;
  // initialize scenario access
  let access = {};
  scenData.forEach((scen) => {
    access[scen.scenCode] = false;
  });

  tmp.accessGranted = access;
  const user = new User(tmp);
  // check course number
  /*var cExist = Course.courseExists(user.course);
  if (cExist === -1) {
    res.status(400)
      .send({
        message: 'Course number does not exist'
      });
  } else if (cExist === 0) {
    user.course = '0000'
  }*/

  user.save((err) => {
    if (err) {
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      let userInfo = getUserInfo(user);
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;

      req.login(user, function (err) {
        if (err) {
          res.status(400)
            .send(err);
        } else {
          res.json(userInfo);
        }
      });
    }
  });
};

// Create a new controller method for signing out
exports.signout = function (req, res) {
  req.logout();
  res.redirect('/');
};

/**
 * grant access to student for specific scenario
 */
exports.grantAccess = function(req, res){
  let scenario = req.scenario;
  let scenId = scenario.scenCode;
  let user = req.student;

  if(user.accessGranted !== null && user.accessGranted !== undefined)
  {user.accessGranted[scenId] = true;
  user.save((err, updated)=>{
    if(err)
      return res.status(500).send({message: getErrorMessage(err)});
    res.json(updated);
  });
  } else {
    return res.status(200);
  }
};

exports.requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401)
      .send({
        message: 'User is not logged in'
      });
  }
  next();
};

exports.userById = function (req, res, next, id) {
  User.findOne({
    userId: id
  }, (err, user) => {
    // if error
    if (err) return next(err);
    // if user not found
    else if (!user) return next(new Error('User not found'));
    // if user found -> next middleware
    // if req has user specified, use user prop
    if (req.user) {
      req.student = user;
    }
    else {
      req.user = user;
    }
    next();
  });
};

// functions for updating user info
