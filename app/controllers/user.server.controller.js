/**
 * The User-related controller functions
 * @module user.server.controller
 * @name User Controller
 * @type Controller
 */

const User = require('mongoose')
  .model('User');
const passport = require('passport');
const transporter = require('../../config/email.transporter')();
const fromEmail = require('../../config/config')['email']['auth']['user'];
const emailConfig = require('../../config/config')['email'];
const scenData = require('../../config/cricket/scenario.data');
const async = require('async');
const crypto = require('crypto');
const debug = require('debug')('user'),
  debugPass = require('debug')('user:pass');

const roles = ['student', 'instr', 'admin']

/**
 * @external USER
 * @see {@link ../models/user-model.html}
 */
/**
 * @external SCENARIO
 * @see {@link ../models/cricket/scenario-model.html}
 */

const getErrorMessage = require('./helpers.server.controller').getErrorMessage;

/**
 * Returns trimmed user info in a consistent manner
 *
 * @param {external:USER} user - user object from DB
 *
 * @returns {Object} trimmed user object to have properties `id`, `firstName`,
 * `lastName`, `email`, and `role`
 */
const getUserInfo = function (user) {

  return {
    id: user.userId,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: roles.indexOf(user.role),
    courseId: user.course
  }
};

/**
 * Get information about a user
 *
 * @apiType GET
 * @apiPath /api/users/:userId
 *
 * @param {Object} req - Express request object;
 * @property {external:USER} curUser - logged in user from [userById]{@link #userById} with id `userId`
 * @param {Object} req - Express response object
 *
 * @returns {Object} json object to response
 * @yields {200_OK} Trimmed user information from [getUserInfo]{@link #getUserInfo}
 */
exports.getUser = function (req, res) {
  let user = getUserInfo(req.curUser);
  res.json(user);
};

/**
 * Update user info - name and/or email
 *
 * @apiType POST
 * @apiPath /api/users/:userId
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link #userById} with id `userId`
 * @property {Object} body - updated information about user, specifically `firstName`, `lastName`, and `email`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {404_Not_Found} Unable to find user; sends error as `{message: 'User not found'}`
 * @yields {200_OK} On successful update, send updated user cleaned by [getUserInfo]{@link #getUserInfo}
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
 * @apiType POST
 * @apiPath /api/users/:userId/update-password
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link #userById} with id `userId`
 * @property {Object} body - request body with `password` (old password) and `newPassword` (new password)
 * @param {Object} res - Express response object
 *
 * @return {Object} json object for response
 * @yields {500_Internal_Server_Error} On error finding user, sends description of error as `{message: error-message}`
 * @yields {404_Not_Found} Unable to find user; sends error as `{message: 'User not found'}`
 * @yields {401_Unauthorized} Error changing password, i.e. old password isn't correct, sends error as `{message: error-message}`
 * @yields {200_OK} On successful update, send updated user cleaned by [getUserInfo]{@link #getUserInfo}
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
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else if(!user){
        return res.status(404)
          .send({
            message: 'User not found'
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
 * @apiType POST
 * @apiPath /api/auth/forget-password
 *
 * @param {Object} req - Express request object
 * @property {Object} body - request body with `email`
 * includes "body" which has user email
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Object} json object for response
 * @yields {500_Internal_Server_Error} If error with email transporter, send error as `{message: 'Error with server email service'}`
 * @yields {404_Not_Found} If email doesn't belong to a current user send message as `{message: 'No account with that email.'}`
 * @yields {422_Unprocessable_Entity} If error trying to send reset email, send error to response as `{message: error-message}`
 * @yields {200_OK} Successfully sends the email and sends success message to response
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
        subject: 'Inherit Logic Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your Inherit Logic account.\n\n' +
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
 * @apiType POST
 * @apiPath /api/auth/reset-password
 *
 * @param {Object} req - Express request object
 * @property {Object} body - request body with `password` (new password),
 * `confirmPassword` (password entered second time) and `token` (token sent to email to allow password reset)
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object for response
 * @yields {500_Internal_Server_Error} If database error, send `{message: error-message}`
 * @yields {404_Not_Found} If token is invalid, send error as `{message: 'Invalid token.'}`
 * @yields {403_Forbidden} If token is expired, send error as `{message: 'Token has expired'}`
 * @yields {400_Bad_Request} If password and confirm password don't match, send error as `{message: 'Confirm password does not match.'}`
 * @yields {200_OK} If successfully update password, send `{message: 'Password has been reset.'}`
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
      return res.status(500)
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
          return res.status(500)
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
 * Using passport authenticate and request login in, attempts to sign users in
 *
 * @apiType POST
 * @apiPath /api/auth/signin
 *
 * @param {Object} req - Express request object
 * @property {Object} body - request body with `username` (email) and `password`
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Object | Function} json object on error or go to next middleware on success
 * @yields {400_Bad_Request} On error, send error as `{message: error-message}`
 * @yields {next()} On success, go to next middleware
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
 * Create a new user
 *
 * @apiType POST
 * @apiPath /api/auth/signup
 *
 * @param {Object} req - Express request object
 * @property {Object} body - request body with `username` (email), `password`,
 * `firstName`, `lastName`, and `courseNum`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object for response
 * @yields {500_Internal_Server_Error} On error creating/saving user, sends `{message: error-message}`
 * @yields {400_Bad_Request} On error logging in, sends `{message: error-message}`
 * @yields {200_OK} On successful update, send updated user cleaned by [getUserInfo]{@link #getUserInfo}
 */
exports.signup = function (req, res) {
  let tmp = req.body;
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
      return res.status(500)
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
 * Sign out a logged in user
 *
 * @apiType GET
 * @apiPath /api/auth/signout
 *
 * @param {Object} req - Express request object;
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {200_OK} Sends `true`
 */
exports.signout = function (req, res) {
  req.logout();
  return res.status(200)
    .send({message: true});
  //res.redirect('/');
};

/**
 * grant access to student for specific scenario
 * Note: this function is called after [deleteStudentFridge]{@link fridge-controller.html#deleteStudentFridge} middleware
 *
 * @apiType POST
 * @apiPath /api/admin/:userId/students/:studentId/:scenarioId
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link #userById} with id `userId`
 * @property {external:USER} student - student to grant access for from [userById]{@link #userById} with id `studentId`
 * @property {external:SCENARIO} scenario - scenario to grant access for from [scenarioByCode]{@link scenario-controller.html#scenarioByCode} with scenCode `scenarioId`
 * @property {Object} body - request body with `access` indicating to grant (true) or revoke (false) access
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object for response
 * @yields {500_Internal_Server_Error} On error, send error as `{message: error-message}`
 * @yields {200_OK} If user doesn't have accessGranted property, send 200 response as if it was successful
 * @yields {200_OK} If successfully update user, send updated user
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
 * Middleware to check if current user can access the path depending if they are logged in
 * @protected
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware to follow
 *
 * @returns {Object | Function} - json response when not logged in otherwise go to next middleware
 * @yields {401_Unauthorized} If not currently logged in, send error as `{message: 'User is not logged in'}`
 * @yields {next()} If logged in, go to next middleware
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
 * @protected
 *
 * @apiPath :userId | :studentId
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Object} next - Next function to go to
 * @param {string} id - user's id as a string from URL
 *
 * @returns {Function} - next middleware
 * @yields {next('Invalid user')} If id is invalid, pass message to next middleware
 * @yields {next(error)} If some error, pass error to next middleware
 * @yields {next('User not found')} If id doesn't belong to a user, pass message to next middleware
 * @yield {next()} Able to find user<br>
 * If `req.curUser` isn't set, set request `curUser` as the logged in user and go to next middleware;<br>
 * If `req.curUser` is set, set request `student` as the secondary user and go to next middleware
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
