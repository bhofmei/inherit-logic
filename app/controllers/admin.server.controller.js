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
 * user must be instructor or admin
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
 * user must be admin
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
            message: err
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
              res.status(500)
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
          res.status(500)
            .send({
              message: err2
            });
        } else {
          res.json(students);
        }
      });
  }
};

/**
 * get user
 */
exports.getUser = function (req, res) {
  let tmp = req.student;
  tmp.populate('course', (err, student) => {
    if(err){
      return res.status(500).send({message: err});
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
  User.findOneAndUpdate(
    {userId: req.student.userId},
    {role: body.role},
    {new: true},
    (err, result)=>{
      if(err){
        return res.status(500).send({message: getErrorMessage(err)});
      } else {
        res.json(result);
      }
    }
  );
};
