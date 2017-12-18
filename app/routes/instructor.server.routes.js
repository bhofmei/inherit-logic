const users = require('../controllers/users.server.controller');
const instructor = require('../controllers/instructor.server.controller');
const scenarios = require('../controllers/scenario.server.controller');
const fridge = require('../controllers/fridge.server.controller');

module.exports = function (app) {
  app.route('/api/instr/:instrId/courses')
    .get(instructor.hasAuthorization, instructor.listCourses)
    .post(instructor.hasAuthorization, instructor.createCourse);

  app.route('/api/instr/:instrId/courses/:courseNum')
    .get(instructor.hasAuthorization, instructor.isInstructor, instructor.getCourse)
    .post(instructor.hasAuthorization, instructor.isInstructor, instructor.editCourse)
    .delete(instructor.hasAuthorization, instructor.isInstructor, instructor.deleteCourse);

  app.route('/api/instr/:instrId/courses/:courseNum/users')
    .get(instructor.hasAuthorization, instructor.isInstructor, instructor.getStudents)

  app.route('/api/instr/:instrId/courses/:courseNum/:scenarioId')
    .get(instructor.hasAuthorization, instructor.isInstructor, instructor.getScenarioStatus)

  app.route('/api/instr/:instrId/users/:userId')
    .get(instructor.hasAuthorization, instructor.getStudentStatus)

  app.route('/api/instr/:instrId/users/:userId/:scenarioId')
  .get(instructor.hasAuthorization, fridge.getStudentFridge)
  .post(instructor.hasAuthorization, users.grantAccess);


  app.param('instrId', users.userById);
  app.param('userId', users.userById);
  app.param('courseNum', instructor.courseByNum);
  app.param('scenarioId', scenarios.scenarioByCode);
};
