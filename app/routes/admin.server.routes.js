const user = require('../controllers/users.server.controller');
const instructor = require('../controllers/instructor.server.controller');
const admin = require('../controllers/admin.server.controller');

module.exports = function(app) {
  // admin homepage, currently unused
  // app.route(\'/api/admin/:adminId');
  app.route('api/admin/:adminId/users')
    .get(admin.hasAuthorization, admin.listUsers);

  app.route('/api/admin/:adminId/users/:userId')
    .get(admin.hasAuthorization, user.getUser)
    .post(admin.hasAuthorization, admin.grantAdmin)
    .delete(admin.hasAuthorization, admin.deleteUser);

  app.route('/api/admin/:adminId/courses/:courseNum')
    .delete(admin.hasAuthorization, instructor.deleteCourse);

  app.route('/api/admin/:adminId/courses/:courseNum/users')
    .delete(admin.hasAuthorization, admin.deleteCourseStudents);

  app.route('/api/admin/:adminId/courses/:courseNum/users/:userId')
  .post(admin.hasAuthorization, instructor.addInstructor)


  app.param('adminId', user.userById);
  app.param('userId', user.userById);
  app.param('courseNum', instructor.courseByNum);
};
