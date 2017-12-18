const users = require('../controllers/users.server.controller');
const instructor = require('../controllers/instructor.server.controller');
const scenarios = require('../controllers/scenario.server.controller');
const fridge = require('../controllers/fridge.server.controller');

module.exports = function (app) {
  app.route('/api/instr/:instrId')
    .get(instructor.hasAuthorization, instructor.listCourses)
    .post(instructor.hasAuthorization, instructor.createCourse);

  app.route('/api/instr/:instrId/:courseNum')
    .get(instructor.hasAuthorization, instructor.isInstructor, instructor.getCourse)
    .delete(instructor.hasAuthorization, instructor.isInstructor, instructor.deleteCourse);

  app.route('/api/instr/:instrId/:courseNum/users')
    .get(instructor.hasAuthorization, instructor.isInstructor, instructor.getStudents)

  app.route('/api/instr/:instrId/:courseNum/:scenId')
    .get(instructor.hasAuthorization, instructor.isInstructor, instructor.getScenarioStatus)

  app.route('/api/instr/:instrId/:userId')
    .get(instructor.hasAuthorization, instructor.getStudentStatus)

  app.route('/api/instr/:instrId/:userId/:scenarioId')
  .get(instructor.hasAuthorization, fridge.getStudentFridge)
  .post(instructor.hasAuthorization, users.grantAccess);


  app.param('instrId', users.userById);
  app.param('userId', users.userById);
  app.param('courseNum', instructor.courseByNum);
  app.param('scenarioId', scenarios.scenarioByCode);
};
