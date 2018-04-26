const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Course = mongoose.model('Course');
const User = mongoose.model('User');

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
 * Middleware to determine if current user is an instructor
 *
 * @params {Object} req - Express request object; should contain a "curUser" and "course"
 * @param {Object} res - Express response object
 * @param {function} next - next middleware
 *
 * @returns {Object}
 * a) If current user not authorized, return 403 to response
 * b) If successful, return nothing, go to next middleware
 */
exports.isInstructor = function (req, res, next) {
  let instr = req.curUser;
  let id = JSON.stringify(instr._id);
  let course = req.course;
  let instrIds = course.instructors.map((inst) => {
    return JSON.stringify(inst._id);
  });
  // search for this user in list of instructors
  if (instr.role === 'admin') {
    next();
  } else if (instrIds.indexOf(id) === -1) {
    return res.status(403)
      .send({
        message: 'Not instructor of this course'
      });
  } else {
    next();
  }
}

/**
 * get list of courses
 * is user is admin, list all
 * if user is instructor, list courses for teacher
 *
 * @params {Object} req - Express request object; should have current user id
 * @params {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, return 500 and message to response
 * b) If admin, return all courses
 * c) If instr, return courses instructor for
 * d) If admin/instr but no courses, return 404 to response
 */
exports.listCourses = function (req, res) {
  let user = req.curUser;
  let userId = new ObjectId(user._id);
  let query;
  if (user.role === 'instr') {
    query = Course.find({
      instructors: userId
    });
  } else {
    query = Course.find({});
  }
  query.exec((err, courses) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        })
    } else if (!courses) {
      return res.status(404)
        .send({
          message: 'No courses found'
        });
    } else {
      res.json(courses);
    }
  });
};

/**
 * Return the list of course numbers that currently exist
 * This is used during sign-up and does not require a user to be logged in
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, return 500 and message to response
 * b) If no current courses, return 404 to response
 * c) Otherwise, return list of course numbers and course Ids
 */
exports.listCourseNum = function (req, res) {
  Course.find({}, 'courseNum id', (err, courses) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        })
    } else if (!courses) {
      return res.status(404)
        .send({
          message: 'No courses found'
        })
    } else {
      res.json(courses);
    }
  })
}

/**
 *  Create a new course and set current user as instructor
 *
 * @param {Object} req - Express request object; should contain POST body which is the info for the new course
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, return 400 and message to response
 * b) If successful, return new course
 */
exports.createCourse = function (req, res) {
  // Create a new course object
  const course = new Course(req.body);

  // Set the course's 'instructor' property
  course.instructors = [req.curUser];

  // Try saving the course
  course.save((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      // Send a JSON representation of the article
      res.json(course);
    }
  });
};

/**
 * get an existing course
 *
 * @param {Object} req - Express request object;
 * has "course" from courseById middleware
 *
 * @returns {Object} - course information
 *
 */
exports.getCourse = function (req, res) {
  res.json(req.course);
};

/**
 * Update the description of an existing course
 * Course is identified using courseById middleware
 *
 * @param {Object} req - Express request object;
 * should contain "course" info and POST body content
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, retrurn 400 and message to response
 * b) If successful, return updated course
 */
exports.editCourse = function (req, res) {
  let course = req.course;

  // Update the fields
  course.description = req.body.description;

  // Try saving the updated article
  course.save((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      res.json(course);
    }
  });
};

/**
 * Delete a course
 *
 * @params {Object} req - Express request object;
 * should contain "course" info from courseById middleware
 * @params {Object} res - Express response object
 *
 * @return {Object}
 * a) If error, return 400 and message to response
 * b) If successful, course that was just deleted
 */
exports.deleteCourse = function (req, res) {
  const course = req.course;

  course.remove((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      res.json(course);
    }
  });
};

/**
 * get list of students for a course
 *
 * @param {Object} req - Express request object;
 * should contain "course" info from courseById middleware
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, return 500 and error message to response
 * b) If success, return list of students in the course (includes firstName, lastName, userId, accessGranted, and email)
 */
exports.getStudents = function (req, res) {
  var course = req.course;
  let courseId = new ObjectId(course._id);

  User.find({
      course: courseId
    }, 'firstName lastName userId accessGranted email',
    (err, students) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else {
        res.json(students);
      }
    });
};

/**
 * Bulk delete all students in a particular course
 * Most useful when finished with semester and course is over
 * Does not remove the course itself
 *
 * @param {Object} req - Express request object;
 * contains "course" from courseById
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, pass 500-status and message to response
 * b) If successfull, return list of students
 */
exports.deleteCourseStudents = function (req, res) {
  let courseId = new ObjectId(req.course._id);
  User.remove({
    course: courseId
  }, (err, students) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        })
    } else {
      res.json(students);
    }
  });
};

/**
 * Get list of all possible instrcutrs for a specific course
 * Admin can add current instrctors or students in the course
 * Instructors can add other instrctors
 *
 * @param {Object} - Express request object;
 * contains course id and current user
 * @param {Object} - Express response object
 *
 * @returns {Object}
 * a) If error, return 500 and message to response
 * b) If successful, return list possible instructors
 */
exports.getPossibleInstructors = function (req, res) {
  let admin = req.curUser;
  let courseId = new ObjectId(req.course._id);

  let currInstr = req.course.instructors.map((elm) => {
    return elm.userId;
  });

  let queryBuilder;

  // if admin, get all users
  if (admin.role === 'admin') {
    queryBuilder = User.find({});
  } else {
    // instr -> get other instr and students in course
    queryBuilder = User.find({})
      .or([{
        role: 'instr'
      }, {
        course: courseId
      }])
  }
  queryBuilder.select('userId firstName lastName role')
    .populate('course', 'courseNum')
    .exec((err, users) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          })
      } else {
        let out = users.filter((elm) => {
          return currInstr.indexOf(elm.userId) === -1;
        })
        res.json(out);
      }
    });
}

/**
 * Add an instuctor to the course
 * Make user "instructor" role if user is a student
 * Update course object
 *
 * @param {Object} req - Express request object;
 * Contains "course" (to update) and "student" (user
 * to make an instructor)
 * @param {Object} res - Express response object
 *
 * @return {Object}
 * a) If error updating user, return 500 and message to reponse
 * b) If error updating course, return 400 and message to response
 * c) If successful, return updated course
 */
exports.setInstructor = function (req, res) {
  let newInstructor = req.student;
  let course = req.course;

  // just return
  if (req.body.instructor !== true) {
    return res.json(course);
  }

  User.findByIdAndUpdate(
    newInstructor._id, {
      role: (newInstructor.role === 'student' ? 'instr' : newInstructor.role)
    }, {
      new: true
    },
    (err, updated) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else {
        Course.findByIdAndUpdate(
          course._id, {
            $push: {
              instructors: updated._id
            }
          }, {
            new: true
          },
          (err2, c) => {
            if (err2) {
              return res.status(400)
                .send({
                  message: getErrorMessage(err)
                });
            } else {
              res.json(c)
            }
          }
        ); // end course find
      }
    }
  ); // end user find
};

/**
 * Get scenario status (aka access granted) for a scenario for all
 * users in a course
 */
exports.getScenarioStatus = function (req, res) {
  const course = req.course;
  let scenario = req.scenario;

  let courseId = new ObjectId(course._id);
  let scenId = scenario.scenCode;
  User.find({
    course: courseId
  }, (err, students) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    } else if (!students) {
      return res.status(404)
        .send({
          message: 'no students found'
        });
    } else {
      var output = students.map((student) => {
        return {
          firstName: student.firstName,
          lastName: student.lastName,
          userId: student.userId,
          status: student.accessGranted[scenId]
        }
      });
      res.json(output);
    }
  });
};

/**
 * Middleware to find course by course number
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 * @param {string} id - course number from URL
 *
 * @returns {Function}
 * a) If error, pass error message to next middle ware
 * b) If no error, attached course to request object and move to next middleware
 */
exports.courseByNum = function (req, res, next, id) {
  Course.findOne({
      courseNum: id
    })
    .populate('instructors', 'firstName lastName userId')
    .exec((err, course) => {
      if (err) {
        return next(err);
      }
      if (!course) {
        return next('Failed to load course ' + id);
      }
      req.course = course;
      // Call the next middleware
      next();
    })
};
