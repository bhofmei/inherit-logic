const User = require('mongoose')
  .model('User');
const passport = require('passport');
const transporter = require('../../config/email.transporter')();
const fromEmail = require('../../config/config')['email']['auth']['user'];
const emailConfig = require('../../config/config')['email'];
const scenData = require('../../config/scenario.data');
const async = require('async');
const crypto = require('crypto');
const debug = require('debug')('user'),
  debugPass = require('debug')('user:pass');

const roles = ['student', 'instr', 'admin']

const getErrorMessage = function (err) {
  let message = '';

  if (typeof err === 'string') {
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

/**
 * Returns trimmed user info in a consistent manner
 *
 * @param {Object} user - user object from DB
 *
 * @returns {Object} - trimmed user object with "id", "firstName",
 * "lastName, "email", and "role"
 */
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
 *
 * @param {Object} req - Express request object;
 * includes "curUser" from userById
 * @param {Object} req - Express response object
 *
 * @returns {Object} - trimmed user object
 */
exports.getUser = function (req, res) {
  let user = getUserInfo(req.curUser);
  res.json(user);
};

/**
 * Update user info - name and/or email
 *
 * @param {Object} req - Express request object
 * includes "curUser" from userById and "body" with updated content
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, return 500 and error message to response
 * b) If unable to find user, return 404 and message to response
 * c) If successful, return updated user to response
 */
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

/**
 * Update a user password
 *
 * @param {Object} req - Express request object;
 * includes "curUser" from userById and "body" with old
 * password and new password
 * @param {Object} res - Express response object
 *
 * @return {Object}
 * a) If user doesn't exist, return 404 and error message to response
 * b) If error changing password, return 401 and error message to response
 * c) If successful, return trimmed user to response
 */
exports.updatePassword = function (req, res) {
  debug('update password %d - %o', req.curUser.userId, req.body);

  let curUser = req.curUser;
  let oldPassword = req.body.password;
  let newPassword = req.body.newPassword;
  User.findOne({
      userId: curUser.userId
    },
    (err, user) => {
      if (err) {
        debug('find user error', err)
        return res.status(404)
          .send({
            message: getErrorMessage(err)
          });
      }
      user.changePassword(oldPassword, newPassword,
        (err2, updated) => {
          if (err2) {
            debug('change password error', err2);
            return res.status(401)
              .send({
                message: getErrorMessage(err2)
              });
          } else {
            debug('updated password %o', updated);
            res.json(getUserInfo(updated));
          }
        });
    });
};

/**
 * Sends an email to a user to allow user to reset password
 *
 * @param {Object} req - Express request object;
 * includes "body" which has user email
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Object}
 * a) If email isn't a user, reutrns 404 and message to response
 * b) If error, returns 422 and error message to response
 * c) If successful, sends email and returns email message to response
 */
exports.resetPasswordEmail = function (req, res, next) {
  // error test if transporter not set up
  if (transporter === null) {
    return res.status(500)
      .send({
        message: 'Error with server email service.'
      });
  }
  let testEmail = req.body.email;
  //let token;
  async.waterfall([
    function (done) {
      crypto.randomBytes(18, (err, buf) => {
        let token = buf.toString('hex');
        debugPass('token', token, err);
        done(err, token);
      });
    },
    function (token, done) {

      User.findOneAndUpdate({
          email: testEmail
        }, {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 3600000
        },
        (err, user) => {
          if (err) {
            done(err, token, user);
          } else if (!user) {
            return res.status(404)
              .send({
                message: 'No account with that email.'
              })
          } else {
            debugPass('update user error %o', user);
            done(err, token, user);
          }
        });
    },
    function (token, user, done) {

      let mailOptions = {
        to: user.email,
        from: fromEmail,
        subject: 'Cricket Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your Cricket account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/authentication/reset-password/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      transporter.sendMail(mailOptions, (err) => {
        let message = 'An email has been sent to ' + user.email + ' with further instructions.';
        debugPass('sendMail error %o', err);
        //done(err, 'done')
        if (!err) {
          return res.json({
            message: message
          });
        } else {
          done(err);
        }
      });
    },

  ], function (err) {
    return res.status(422)
      .send({
        message: getErrorMessage(err)
      });
  }); // end async.waterfall
};

/**
 * Allows user to reset the password using a token (sent by email)
 *
 * @param {Object} req - Express request object;
 * includes "body" which has new password and token
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, returns 400 and error message to response
 * b) If token invalid, returns 404 and message to response
 * c) If toke expired, returns 403 and message to response
 * d) If successful, returns message "updated" to response
 */
exports.resetPassword = function (req, res) {
  let token = req.body.token;
  debugPass('token %s', token);
  let newPassword = req.body.password;
  let confirmPassword = req.body.confirmPassword;
  User.findOne({
    resetPasswordToken: token
  }, (err, user) => {
    debugPass('user %d', (user ? user.userId : -1));
    if (err) {
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else if (!user) {
      return res.status(404)
        .send({
          message: 'Invalid token.'
        })
    } else if (Date.now() > user.resetPasswordExpires) {
      return res.status(403)
        .send({
          message: 'Token has expired.'
        })
    } else if (newPassword !== confirmPassword) {
      return res.status(400)
        .send({
          message: 'Confirm password does not match.'
        })
    } else {
      debugPass('able to update');
      user.password = newPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      user.save((err2) => {
        debugPass('saved');
        if (err2) {
          return res.status(400)
            .send({message: getErrorMessage(err2)})
        } else {
          // successful
          res.json({
            message: 'Password has been reset.'
          });
        }
      });
    }
  });
};

/**
 * Using user login in, attempts to sign users in
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Object | Function}
 * a) If error, returns 400 and error message to response
 * b) If successful, move to next function
 */
exports.signin = function (req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      return res.status(400)
        .send(info);
    } else {
      let userInfo = getUserInfo(user);

      req.login(user, (err) => {
        if (err) {
          return res.status(400)
            .send({
              message: getErrorMessage(err)
            });
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

/**
 * Create new users
 *
 * @param {Object} req - Express request object;
 * includes "body" with email, password, and other info
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, returns 400 and error message to response
 * b) If succesful, returns trimmed user info to response
 */
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

/**
 * Sign out a logged in user via the request
 *
 * @param {Object} req - Express request object;
 * @param {Object} res - Express response object
 *
 * @returns {Object} - returns 200 and true to response
 */
exports.signout = function (req, res) {
  req.logout();
  return res.status(200)
    .send(true);
  //res.redirect('/');
};

/**
 * grant access to student for specific scenario
 *
 * @param {Object} req - Express request object;
 * includes "student" from userById, "scenario" from scenarioByCode,
 * and "body" with true/false
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, returns 400 and error message to response
 * b) If success, returns updated user information and/or 200 to response
 */
exports.grantAccess = function (req, res) {
  let scenario = req.scenario;
  let scenId = scenario.scenCode;
  let user = req.student;
  let access = req.body; // this has {access: boolean}

  if (user.accessGranted !== null && user.accessGranted !== undefined) {
    user.accessGranted[scenId] = access.access;
    User.findOneAndUpdate({
      userId: user.userId
    }, {
      accessGranted: user.accessGranted
    }, {
      new: true
    }, (err, updated) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else {
        delete updated.password;
        return res.json(updated);
      }
    })
  } else {
    return res.status(200);
  }
};

/**
 * Middleware to check if current user can access the path depending if they
 * are logged in
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware to follow
 *
 * @returns {Object | Function}
 * a) If error, returns 401 and message to response
 * b) If success, move to next middleware
 */
exports.requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401)
      .send({
        message: 'User is not logged in'
      });
  }
  next();
};

/**
 * Find user (if they exist) by the user id
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Next function to go to
 * @param {string} id - user's id as a string from URL
 *
 * @returns {Object, Function}
 * a) If error, pass error to next function
 * b) If user doesn't exist, pass error message to next function
 * c) If it successful, set curUser or student
 */
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
