const users = require('../controllers/users.server.controller');
const courses = require('../controllers/course.server.controller');

module.exports = function(app) {
    app.route('/api/courses')
        .post(users.requiresLogin, courses.hasAuthorization, courses.create);

    app.route('/api/courses/:courseNum')
        .get(courses.read)
        .delete(users.requiresLogin, courses.hasAuthorization, courses.delete);

    app.param('courseNum', courses.courseByNum);
};
