/**
 * The Course-related controller functions
 * @module course.server.controller
 * @name Course Controller
 * @type Controller
 */
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Course = mongoose.model('Course');
const User = mongoose.model('User');

const getErrorMessage = require('./helpers.server.controller').getErrorMessage;

/**
 * Middleware to allow only admin and the instructor of the course to proceed
 * @protected
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById}
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum}
 * @param {Object} res - Express response object
 * @param {function} next - next middleware
 *
 * @returns {Object | Function} json object to response not allowed or next middleware if allowed
 * @yields {403_Forbidden} - current user not authorized
 * @yields {next()} - If user authorized, go to next middleware
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
 * @apiType GET
 * @apiPath /api/admin/:userId/courses
 *
 * @params {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById}
 * @params {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {404_Not_Found} User is admin and there are no courses OR user is instr role but not the instructor of any courses; sends message as `{message: 'No courses found'}`
 * @yields {200_OK} List of courses; courses in the list depend on user role
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
 * @apiType GET
 * @apiPath /api/courses
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {404_Not_Found} there are no courses; sends message as `{message: "No courses found"}`
 * @yields {200_OK} List of courses with properties `courseNum` and `id` (DB id)
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
 * @apiType POST
 * @apiPath /api/admin/:userId/courses
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {Object} body - details about new course: `courseNum` and `description`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} Newly created course
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
      return res.status(500)
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
 * Get information about an existing course
 *
 * @apiType GET
 * @apiPath /api/admin/:userId/courses/:courseNum
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum} with course number `courseNum`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {200_OK} the course information including `courseNum`, `description`, and list of `instructors`
 *
 */
exports.getCourse = function (req, res) {
  res.json(req.course);
};

/**
 * Update the description of an existing course
 *
 * @apiType POST
 * @apiPath /api/admin/:userId/courses/:courseNum
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById}  with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum} with course number `courseNum`
 * @property {Object} body - course information to update - the description
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} Updated course information
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
 * @apiType DELETE
 * @apiPath /api/admin/:userId/courses/:courseNum
 *
 * @params {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum} with course number `courseNum`
 * @params {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} Information about course just deleted
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
 * @apiType GET
 * @apiPath /api/admin/:userId/courses/:courseNum/students
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum} with course number `courseNum`
 * @param {Object} res - Express response object
 *
 * @return {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} List of students in the course; each student has properties `firstName`, `lastName`, `userId`, `accessGranted`, and `email`
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
 * @apiType DELETE
 * @apiPath /api/admin/:userId/courses/:courseNum/students
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum} with course number `courseNum`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_Success} List of students just deleted
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
 * Get list of all possible instructors for a specific course (not including the instrcutors currently teaching the course)
 * Admin can add current instructors or students in the course
 * Instructors can add other instrctors
 *
 * @apiType GET
 * @apiPath /api/admin/:userId/courses/:courseNum/instructors
 *
 * @param {Object} - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById}  with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum} with course number `courseNum`
 * @param {Object} - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} List of possible instrcutors; each person has properties `firstName`, `lastName`, `userId`, and `role`
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
 * Add an instuctor to the course and make user "instructor" role if user is a student
 *
 * @apiType POST
 * @apiPath /api/admin/:userId/courses/:courseNum/instructors/:studentId'
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum} with course number `courseNum`
 * @property {User} student - user to make instructor; identified with [userById]{@link user-controller.html#userById} with id `studentId`
 * @param {Object} res - Express response object
 *
 * @return {Object} json object to response
 * @yields {400_Bad_Request} On error updating the course, sends description of error as `{message: error-message}`
 * @yields {500_Internal_Server_Error} On error updating the user, sends description of error as `{message: error-message}`
 * @yields {200_OK} The updated course
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
 * students in a course
 *
 * @apiType GET
 * @apiPath /api/admin/:userId/courses/:courseNum/:scenarioId
 *
 * @param {Object} req - Express request object
 * @property {User} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {Course} course - course details from [courseByNum]{@link #courseByNum}
 * @property {Scenario} scenario - scenario of interested; identified with [scenarioByCode]{@link scenario-controller.html#scenarioByCode} with id `scenarioId`
 * @param {Object} res - Express response object
 *
 * @return {Object} json object to response
 * @yields {404_Not_Found} There are no students in the course, sends error as `{message: "no students found"}`
 * @yields {500_Internal_Server_Error} Database error, sends description of error as `{message: error-message}`
 * @yields {200_OK} List of students in course with scenario access; each object in list has `firstName`, `lastName`, `userId`, and `status`
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
 * @protected
 *
 * @apiPath :courseNum
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 * @param {string} id - course number from URL
 *
 * @returns {Function} go to next middleware
 * @yields {next(error)} If error, pass the error to the next middleware
 * @yields {next('Failed to load course id')} If course doesn't exist, pass message to middleware
 * @yield {next()} If success, set request `course` and go to next middleware
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
