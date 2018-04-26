const mongoose = require('mongoose');
const User = require('mongoose')
  .model('User');
const Course = mongoose.model('Course');
const ObjectId = mongoose.Types.ObjectId;
const scenData = require('../../config/scenario.data');

const getErrorMessage = function (err) {
  if (err.errors) {
    for (const errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

/**
 * Middleware to check if current user is instructor or admin
 *
 * @param {Object} req - Express request object;
 * includes "curUser" from userById
 * @param {Object} res - Express response object
 * @param {Function} next - the next middleware function
 *
 * @returns {Object | Function}
 * a) If not an admin, returns 403 and error message to response
 b) If is instr/admin, go to next middleware
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
 *
 * @param {Object} req - Express request object;
 * includes "curUser" from userById
 * @param {Object} res - Express response object
 * @param {Function} next - the next middleware function
 *
 * @returns {Object | Function}
 * a) If not an admin, returns 403 and error message to response
 b) If is admin, go to next middleware
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

/**
 *  list all users in the system for admin OR
 *  list all students for instructor courses for instructor
 *
 * @param {Object} req - Express request object;
 * includes "curUser" (logged in user) from userById
 * @param {Object} res - Express response object
 *
 * @returns {Object | undefined}
 * a) If error, returns 500 and error message to response
 * b) If user is admin, returns list of all users
 * c) If user is instr, returns list of students in instr's courses
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
                  message: err2
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
 * Get secondary user (not necessarily the user currently logged in)
 *
 * @param {Object} req - Express request object;
 * includes "student" (the secondary user)
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, returns 500 and error message to response
 * b) If successful, return cleaned up user info to response
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
 * @param {Object} req - Express request object;
 * Includes "student" (secondary user to delete)
 * @param {Object} res - Express response object
 *
 * @return {Object}
 * a) If error, returns 500 and error message to response
 * b) If successful, returns deleted student to response
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
 * Update the secondary user's role
 *
 * @param {Object} req - Express request object;
 * Includes body, which has new role, and secondary user as "student"
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, returns 500 and error message to response
 * b) If successful, returns updated secondary user to response
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
