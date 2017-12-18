const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Course = mongoose.model('Course');

let admin, instructors, students, course1, course2;
describe('Admin Controller Unit Tests: ', () => {

  before((done) => {
    let t = new User({
      name: 'Administrator',
      email: 'admin@test.com',
      password: 'password',
      admin: true
    });

    let tmp = [];

    t.save((err, a) => {
      admin = a;
      for (let i = 0; i < 3; i++) {
        tmp.push({
          name: 'Instructor' + i,
          email: 'instr' + i + '@test.com',
          password: 'password',
          instructor: (i < 2)
        });
      } // end for i
      User.create(tmp, (err, res) => {
        instructors = res;
        course1 = new Course({
          courseNum: 'TEST001',
          description: 'first test course',
          instructors: [instructors[0]]
        });
        course2 = new Course({
          courseNum: 'TEST002',
          description: 'second test course',
          instructors: [instructors[1]]
        });
        course1.save(() => {
          course2.save(() => {
            let tmp2 = [];
            for (let s = 0; s < 8; s++) {
              tmp2.push({
                name: 'Student' + s,
                email: 'student' + s + '@test.com',
                password: 'password',
                course: (s < 4 ? course1 : course2),
                admin: s === 5
              });
            }
            User.create(tmp2, (err2, res2) => {
              students = res2;
              done();
            }); // end student create
          }); // end save course 2
        }); // end save course 1
      }); // end create instructors
    }); // end save admin
  }); // end before

  describe('Test GET methods', () => {

    it('Should list all users', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let userList = res.body;
          userList.should.be.an.Array();
          userList.should.have.lengthOf(12);
          done();
        });
    }); // end Should list all users

    it('Should get specific user', (done) => {
      let testSt = students[0];
      request(app)
        .get('/api/admin/' + admin.userId + '/users/' + testSt.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let u = res.body;
          u.should.be.an.Object();
          u.should.have.property('name', testSt.name);
          done();
        });
    });

    it('Should not get a non-existant user', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/users/' + students[7].userId + 100)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        //.expect(200)
        .end((err, res) => {
          should.exist(err);
          done();
        });
    }); // end Should not get a non-existant user

    it('Should get course', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/courses/' + course1.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let course = res.body;
          course.should.be.an.Object();
          course.should.have.property('courseNum', course1.courseNum);
          done();
        });
    }); // end Should get all students for a cousre

    it('Should get all students for course', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/courses/' + course1.courseNum + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let userList = res.body;
          userList.should.be.an.Array();
          userList.should.have.lengthOf(4);
          done();
        });
    }); // end Should get all students for a cousre

  }); // end Test GET methods

  describe('Test POST methods', () => {

    it('Should grant admin access', (done) => {
      let testSt = students[1];
      request(app)
        .post('/api/admin/' + admin.userId + '/users/' + testSt.userId)
        .send({
          admin: true
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let u = res.body;
          u.should.be.an.Object();
          u.should.have.property('name', testSt.name);
          u.should.have.property('admin', true);
          done();
        });
    }); // end Should grant admin access

    it('Should remove admin access', (done) => {
      let testSt = students[5];
      request(app)
        .post('/api/admin/' + admin.userId + '/users/' + testSt.userId)
        .send({
          admin: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let u = res.body;
          u.should.be.an.Object();
          u.should.have.property('name', testSt.name);
          u.should.have.property('admin', false);
          done();
        });
    }); // end Should remove admin access

    it('Should not allow grant admin access', (done) => {
      let testSt = students[3];
      request(app)
        .post('/api/admin/' + instructors[0].userId + '/users/' + testSt.userId)
        .send({
          admin: false
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not allow grant admin access

    it('Should add instructor to course', (done) => {
      request(app)
        .post('/api/admin/' + admin.userId + '/courses/' + course1.courseNum + '/users/' +
          instructors[2].userId)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let updated = res.body;
          updated.should.be.an.Object();
          updated.should.have.property('courseNum', course1.courseNum);
          updated.instructors.should.have.lengthOf(2);
          done();
        });
    }); // end Should add instructor to course

  }); // end Test POST methods

  describe('Test DELETE methods', () => {

    it('Should delete user', (done) => {
      let testSt = students[0];
      request(app)
        .delete('/api/admin/' + admin.userId + '/users/' + testSt.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let u = res.body;
          u.should.have.property('name', testSt.name);
          done();
        });
    }); // end Should delete user

    it('Should delete all students in course', (done) => {
      request(app)
        .delete('/api/admin/' + admin.userId + '/courses/' + course2.courseNum + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let result = res.body;
          result.should.have.property('ok', 1);
          result.should.have.property('n', 4);
          done();
        });
    }); // end Should delete all students in course

    it('Should delete course', (done) => {
      request(app)
        .delete('/api/admin/' + admin.userId + '/courses/' + course2.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let c = res.body;
          c.should.have.property('courseNum', course2.courseNum);
          done();
        });
    }); // end Should delete course

  }); // end Test DELETE methods

  after((done) => {
    User.remove(() => {
      Course.remove(() => {
        done();
      });
    });
  }) // end after

}); // end Admin Controller Unit Tests
