const user = require('../controllers/user.server.controller');
const admin = require('../controllers/admin.server.controller');
const course = require('../controllers/course.server.controller');
const scenario = require('../controllers/scenario.server.controller');

module.exports = function (app) {

  app.route('/api/courses')
  .get(course.listCourseNum);

  app.route('/api/admin/:userId/courses')
    .get(admin.hasAuthorization, course.listCourses)
    .post(admin.hasAuthorization, course.createCourse);

  app.route('/api/admin/:userId/courses/:courseNum')
    .get(admin.hasAuthorization, course.isInstructor, course.getCourse)
    .post(admin.hasAuthorization, course.isInstructor, course.editCourse)
    .delete(admin.hasAuthorization, course.isInstructor, course.deleteCourse);

  app.route('/api/admin/:userId/courses/:courseNum/students')
    //.get(admin.hasAuthorization, course.isInstructor, course.getStudents)
    .delete(admin.isAdmin, course.deleteCourseStudents);

  app.route('/api/admin/:userId/courses/:courseNum/students/:studentId')
    .post(admin.hasAuthorization, course.isInstructor, course.setInstructor)

  app.route('/api/admin/:userId/courses/:courseNum/:scenarioId')
    .get(admin.hasAuthorization, course.isInstructor, course.getScenarioStatus);

  app.param('userId', user.userById);
  app.param('studentId', user.userById);
  app.param('scenarioId', scenario.scenarioByCode);
  app.param('courseNum', course.courseByNum);
}
