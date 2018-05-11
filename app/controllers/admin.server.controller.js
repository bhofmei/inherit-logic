/**
 * The Admin-related controller functions
 * @module admin.server.controller
 * @name Admin Controller
 * @type Controller
 */
const mongoose = require('mongoose');
const User = require('mongoose')
  .model('User');
const Course = mongoose.model('Course');
const ObjectId = mongoose.Types.ObjectId;
const scenData = require('../../config/scenario.data');

const getErrorMessage = require('./helpers.server.controller').getErrorMessage;

/**
 * list all users in the system for admin OR
 * list all students for instructor courses for instructor
 *
 * @apiType GET
 * @apiPath /api/admin/:userId/students
 *
 * @param {Object} req - Express request object;
 * @property {User} curUser - logged in user from [userById]{@link user.html#userById} with id `userId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} - json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error
 * @yields {200_OK} If user is admin, returns list of all users<br>
 * If user is instr, returns list of students in instr's courses
 */
exports.listUsers = function (req, res) {

  let user = req.curUser;
  let userId = new ObjectId(user._id);
  //let query;
  if (user.role === 'instr') {
    // get all students in instr courses
    Course.find({
      instructors: userId
    }, (err, courses) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          })
      } else {
        // we have courses
        User.find({
            course: {
              $in: courses
            }
          })
          .populate('course', 'courseNum')
          .sort('name')
          .exec((err2, students) => {
            if (err2) {
              return res.status(500)
                .send({
                  message: getErrorMessage(err2)
                });
            } else {
              res.json(students);
            }
          });
      }
    })
  } else {
    User.find()
      .populate('course', 'courseNum')
      .sort('name')
      .exec((err2, students) => {
        if (err2) {
          return res.status(500)
            .send({
              message: getErrorMessage(err2)
            });
        } else {
          res.json(students);
        }
      });
  }
};

/**
 * Get information about a secondary user (not necessarily the user currently logged in)
 *
 * @apiType GET
 * @apiPath /api/admin/:userId/students/:studentId
 *
 * @param {Object} req - Express request object;
 * @property {User} curUser - logged in user from [userById]{@link user.html#userById} with id `userId`
 * @property {User} student - the secondary user from [userById]{@link user.html#userById} with id `studentId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} - json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} Cleaned information about the user
 */
exports.getUser = function (req, res) {
  let tmp = req.student;
  tmp.populate('course', (err, student) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    }
    delete student.password;
    var scenStatus = scenData.map((scenario) => {
      return {
        label: scenario.label,
        status: student.accessGranted[scenario.scenCode]
      }
    });
    student.scenarioStatus = scenStatus
    res.json(student);
  });
};

/**
 * Delete a secondary user
 *
 * @apiType DELETE
 * @apiPath /api/admin/:userId/students/:studentId
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user.html#userById} with id `userId`
 * @property {User} student - the secondary user from [userById]{@link user.html#userById} with id `studentId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} - json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} Cleaned information about the user
 */
 exports.deleteUser = function (req, res) {
  let student = req.student; // student to be deleted
  student.remove((err, s) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      res.json(student);
    }
  });
};

/**
 * Update a user's role to "student", "instructor", or "admin"
 *
 * @apiType POST
 * @apiPath /api/admin/:userId/students/:studentId
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user.html#userById} with id `userId`
 * @property {User} student - the secondary user from [userById]{@link user.html#userById} with id `studentId`
 * @property {Object} body - new role; one of "student", "instr", or "admin"
 * @param {Object} res - Express response object
 *
 * @returns {Object} - json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} Updated user information
 * @example <caption>Request</caption>
 * <p><code>/api/admin/1/students/67</code>Make user 67 an instructor</p>
 * {
 *   role: "instr"
 * }
 */
exports.setRole = function (req, res) {
  let body = req.body; // includes role
  User.findOneAndUpdate({
      userId: req.student.userId
    }, {
      role: body.role
    }, {
      new: true
    },
    (err, result) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else {
        res.json(result);
      }
    }
  );
};

/**
 * Middleware to check if current user is instructor or admin
 * @protected
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user.html#userById} with id `userId`
 * @param {Object} res - Express response object
 * @param {Function} next - the next middleware function
 *
 * @returns {Object | Function} - json object to response if not authorized otherwise go to next middleware
 * @yields {403_Forbidden} If user is not an admin or instructor, sends error as `{message: 'Not authorized'}`
 * @yields {next()} Go to the next middleware if user is admin or instructor
 */
exports.hasAuthorization = function (req, res, next) {
  if (!(req.curUser.role === 'instr' || req.curUser.role === 'admin')) {
    return res.status(403)
      .send({
        message: 'Not authorized'
      });
  }
  // Call the next middleware
  next();
};

/**
 * Middleware to check if current user is admin
 * @protected
 *
 * @param {Object} req - Express request object;
 * @property {User} curUser - from userById
 * @param {Object} res - Express response object
 * @param {Function} next - the next middleware function
 *
 * @returns {Object | Function} - json object to response if not authorized otherwise next middleware
 * @yields {403_Forbidden} If user is not an admin, sends error as `{message: 'Not authorized'}`
 * @yields {next()} Go to next middleware if user is an admin
 */
exports.isAdmin = function (req, res, next) {
  if (req.curUser.role !== 'admin') {
    return res.status(403)
      .send({
        message: 'Not authorized'
      });
  }
  next();
}
