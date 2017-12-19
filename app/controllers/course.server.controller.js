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

exports.isInstructor = function (req, res, next) {
  let instr = req.user;
  let course = req.course;
  // search for this user in list of instructors
  if (instr.role === 'admin') {
    next();
  } else if (course.instructors.indexOf(instr._id) === -1) {
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
 */
exports.listCourses = function (req, res) {
  let user = req.user;
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
          message: err
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
 *  Create a new course
 */
exports.createCourse = function (req, res) {
  // Create a new course object
  const course = new Course(req.body);

  // Set the course's 'instructor' property
  course.instructors = [req.user];

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
 */
exports.getCourse = function (req, res) {
  res.json(req.course);
};

/**
 * Update the description of an existing course
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
 */
exports.getStudents = function (req, res) {
  const course = req.course;
  let courseId = new ObjectId(course._id);

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
          message: 'No students found'
        });
    } else {
      res.json(students);
    }
  });
};

/**
 * delete all students in a course
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
 * add an instuctor to the course
 */
exports.setInstructor = function (req, res) {
  let newInstructor = req.student;
  let course = req.course;

  // just return
  if(req.body.instructor !== true){
    return res.json(course);
  }

  course.instructors.push(newInstructor);
  course.save((err, c) => {
    if (err) {
      return res.status(500)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      if (newInstructor.role === 'student') {
        newInstructor.role = 'instr';
        newInstructor.save((err2) => {
          if (err) {
            return res.status(400)
              .send({
                message: getErrorMessage(err)
              });
          } else {
            res.json(c);
          }
        }); // end instructor.save
      } else {
        res.json(c);
      }
    }
  }); // end course.save
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
          name: student.name,
          id: student.userId,
          status: student.accessGranted[scenId]
        }
      });
      res.json(output);
    }
  });
};

exports.courseByNum = function (req, res, next, id) {
  Course.findOne({
    courseNum: id
  }, (err, course) => {
    if (err) {
      return next(err);
    }
    if (!course) {
      return next(new Error('Failed to load course ' + id));
    }
    req.course = course;
    // Call the next middleware
    next();
  })
};
