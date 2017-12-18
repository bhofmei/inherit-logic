const user = require('../controllers/users.server.controller');
const instructor = require('../controllers/instructor.server.controller');
const admin = require('../controllers/admin.server.controller');

module.exports = function(app) {
  app.route('/api/admin/:adminId/users')
    .get(admin.hasAuthorization, admin.listUsers);

  app.route('/api/admin/:adminId/users/:userId')
    .get(admin.hasAuthorization, admin.getUser)
    .post(admin.hasAuthorization, admin.setAdminAccess)
    .delete(admin.hasAuthorization, admin.deleteUser);

  app.route('/api/admin/:adminId/courses/:courseNum')
    .get(admin.hasAuthorization, instructor.getCourse)
    .delete(admin.hasAuthorization, instructor.deleteCourse);

  app.route('/api/admin/:adminId/courses/:courseNum/users')
    .get(admin.hasAuthorization, instructor.getStudents)
    .delete(admin.hasAuthorization, admin.deleteCourseStudents);

  app.route('/api/admin/:adminId/courses/:courseNum/users/:userId')
  .post(admin.hasAuthorization, instructor.addInstructor)


  app.param('adminId', user.userById);
  app.param('userId', user.userById);
  app.param('courseNum', instructor.courseByNum);
};
