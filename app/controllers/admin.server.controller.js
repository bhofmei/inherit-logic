const mongoose = require('mongoose');
const User = require('mongoose').model('User');
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
 * user must be instructor or admin
 */
exports.hasAuthorization = function (req, res, next) {
  if (!(req.user.role === 'instr' || req.user.role === 'admin')) {
    return res.status(403)
      .send({
        message: 'Not authorized'
      });
  }
  // Call the next middleware
  next();
};

/**
 * user must be admin
 */
exports.isAdmin = function (req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403)
      .send({
        message: 'Not authorized'
      });
  }
  next();
}

/**
 *  list all users in the system
 */
exports.listUsers = function (req, res) {
  User.find((err, users) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    } else if (!users) {
      return res.status(404)
        .send({
          message: 'No users found'
        });
    } else {
      res.json(users);
    }
  });
};

/**
 * get user
 */
exports.getUser = function (req, res) {
  let student = req.student;
  delete student.password;
  var scenStatus = scenData.map((scenario) => {
    return {
      label: scenario.label,
      status: student.accessGranted[scenario.scenCode]
    }
  });
  student.scenarioStatus = scenStatus
  res.json(student);
};

exports.deleteUser = function (req, res) {
  let student = req.student; // student to be deleted
  student.remove((err, s) => {
    if (err) {
      res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      res.json(student);
    }
  });
};

exports.setRole = function (req, res) {
  let body = req.body; // includes role
  // admin is user, user to grant access is student
  let student = req.student;
  if (student.role !== body.role) {
    student.role = body.role;
    student.save((err) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else {
        res.json(student);
      }
    });
  } else {
    res.json(student);
  }
};
