const User = require('mongoose')
  .model('User');
const passport = require('passport');
const scenData = require('../../config/scenario.data');
const debug = require('debug')('user');

const roles = ['student', 'instr', 'admin']

const getErrorMessage = function (err) {
  let message = '';

  if(typeof err === 'string'){
    return err;
  }
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
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: roles.indexOf(user.role)
  }
};

/**
 * return user object
 */
exports.getUser = function (req, res) {
  let user = getUserInfo(req.curUser);
  res.json(user);
};

exports.editUser = function (req, res) {
  // can update firstName, lastName, email
  debug('edit %d - %o', req.curUser.userId, req.body);
  let body = req.body;
  let user = req.curUser;
  User.findOneAndUpdate({
      userId: user.userId
    }, {
      firstName: (body.firstName ? body.firstName : user.firstName),
      lastName: (body.lastName ? body.lastName : user.lastName),
      email: (body.email ? body.email : user.email)
    }, {
      new: true
    },
    (err, updated) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          })
      } else if (!updated) {
        return res.status(404)
          .send({
            message: 'User not found'
          })
      } else {
        debug('updated %o', updated);
        res.json(getUserInfo(updated));
      }
    });
};

exports.updatePassword = function(req, res){
  debug('update password %d - %o', req.curUser.userId, req.body);

  let curUser = req.curUser;
  let oldPassword = req.body.password;
  let newPassword = req.body.newPassword;
  User.findOne({userId: curUser.userId},
              (err, user)=>{
    if(err){
      debug('find user error', err)
        return res.status(404).send({message: getErrorMessage(err)});
    }
    user.changePassword(oldPassword, newPassword,
                       (err2, updated)=>{
      if(err2){
        debug('change password error', err2);
        return res.status(401).send({message: getErrorMessage(err2)});
      } else {
        debug('updated password %o', updated);
        res.json(getUserInfo(updated));
      }
    });
  });
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
            .send({message: getErrorMessage(err)});
        } else {
          user.lastLogin = Date.now();
          user.save((err) => {
            if (!err) {
              res.json(userInfo);
            }
          });
        }
      });
    }
  })(req, res, next);
};

// TODO: add verify method for making major changes

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

      req.login(user, function (err) {
        if (err) {
          res.status(400)
            .send({
          message: getErrorMessage(err)
        });
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
exports.grantAccess = function (req, res) {
  let scenario = req.scenario;
  let scenId = scenario.scenCode;
  let user = req.student;

  let access = req.body; // this has {access: boolean}

  if (user.accessGranted !== null && user.accessGranted !== undefined) {
    user.accessGranted[scenId] = access.access;
    user.markModified('accessGranted');
    user.save((err, updated) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      }
      res.json(getUserInfo(updated));
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
  // check for negative id -> send error
  if (id < 0) {
    return next('Invalid user')
  }
  User.findOne({
    userId: id
  }, (err, curUser) => {
    // if error
    if (err) return next(err);
    // if user not found
    else if (!curUser) return next('User not found');
    // if user found -> next middleware
    // if req has user specified, use user prop
    curUser.password = undefined;
    if (req.curUser) {
      req.student = curUser;
    } else {
      req.curUser = curUser;
    }
    next();
  });
};

// functions for updating user info
