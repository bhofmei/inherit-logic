const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Course = mongoose.model('Course');
const Scenario = mongoose.model('CricketScenario');

let admin, instructors, students, course1, course2, scenario;
let adminDetails, instrDetails, studentDetails;
describe('Course Controller Unit Tests', () => {
  before((done) => {
    adminDetails = {
      firstName: 'Administrator',
      email: 'admin@test.com',
      password: 'password',
      role: 'admin'
    };
    instrDetails = {
      firstName: 'Instructor0',
      email: 'instr0@test.com',
      password: 'password',
      role: 'instr'
    };
    let t = new User(adminDetails);

    let tmp = [];

    t.save((err, a) => {
      admin = a;
      for (let i = 0; i < 3; i++) {
        tmp.push({
          name: 'Instructor' + i,
          email: 'instr' + i + '@test.com',
          password: 'password',
          role: (i < 2 ? 'instr' : 'student')
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
            studentDetails = {
              firstName: 'Student0',
              email: 'student0@test.com',
              password: 'password',
              course: course1,
              accessGranted: {
                WTorMute: true,
                ThreeOther: false
              }
            };
            let tmp2 = [];
            for (let s = 0; s < 8; s++) {
              tmp2.push({
                name: 'Student' + s,
                email: 'student' + s + '@test.com',
                password: 'password',
                course: (s < 4 ? course1 : course2),
                accessGranted: {
                  WTorMute: (s % 2 === 0),
                  ThreeOther: false
                }
              });
            }
            User.create(tmp2, (err2, res2) => {
              students = res2;
              scenario = new Scenario({
                scenCode: 'WTorMute'
              });
              scenario.save(() => {
                done();
              }); // end save scenario
            }); // end student create
          }); // end save course 2
        }); // end save course 1
      }); // end create instructors
    }); // end save admin
  }); // end before

  describe('Testing as admin user', () => {
    let adminAgent;
    before((done) => {
      adminAgent = request.agent(app);
      adminAgent.post('/api/auth/signin')
        .send({
          username: adminDetails.email,
          password: adminDetails.password
        })
        .end((err, res) => {
          if (!err && res.body) {
            done()
          }
        });
    }); // end before

    describe('Testing GET methods', () => {
      it('Should be able to get all courses', (done) => {
        adminAgent
          .get('/api/admin/' + admin.userId + '/courses')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            console.log(err);
            let courseList = res.body;
            courseList.should.be.an.Array();
            courseList.should.have.lengthOf(2);
            //courseList[0].should.have.property('courseNum', course1.courseNum);
            done();
          });
      }); // end Should be able to get all courses
      it('Should be able to get course1 as admin', (done) => {
        adminAgent
          .get('/api/admin/' + admin.userId + '/courses/' + course1.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let c = res.body;
            c.should.be.an.Object;
            c.should.have.property('courseNum', course1.courseNum);
            //res.body.instructor.should.have.property('name', instructor.name);
            done();
          });
      }); // end Should be able to get course1

      it('Should not be able to get non-existant course', (done) => {
        adminAgent
          .get('/api/admin/' + admin.userId + '/courses/' + 'FAKE')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let body = res.body;
            let error = res.error;
            body.should.be.an.Object();
            error.should.have.property('status', 500);
            error.text.should.match(/Failed to load course/);
            done();
          });
      }); // end Should not be able to get non-existant course

      it('Should be able to get students of course1', (done) => {
        adminAgent
          .get('/api/admin/' + admin.userId + '/courses/' + course1.courseNum + '/students')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let students = res.body;
            students.should.be.an.Array();
            students.should.have.lengthOf(4);
            done();
          });
      }); // end Should be able to get students of course1

      it('Should be able to get scenario status', (done) => {
        adminAgent
          .get('/api/admin/' + admin.userId + '/courses/' + course1.courseNum + '/' + scenario.scenCode)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            //console.log(res.body);
            let s = res.body;
            s.should.be.an.Array();
            s.should.have.lengthOf(4);
            //s[0].should.have.property('name', student1.name)
            s[0].should.have.property('status');
            //s[1].should.have.property('name', student2.name)
            s[1].should.have.property('status');
            done();
          });
      }); // end Should get scenario status

    }); // end Testing GET methods

    /*describe('Testing POST methods', () => {
      it('Should be able to create course', (done) => {
        let newCourse = {
          courseNum: 'CRE001',
          description: 'Test course 1'
        };
        adminAgent
          .post('/api/admin/' + admin.userId + '/courses')
          .send(newCourse)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let nC = res.body;
            nC.should.be.an.Object();
            nC.should.have.property('courseNum', newCourse.courseNum);
            nC.instructors.should.have.lengthOf(1);
            done();
          });
      }); // end Should be able to create course

      it('Should be able to edit course', (done) => {
        let body = {
          description: 'admin updated description'
        };
        adminAgent
          .post('/api/admin/' + admin.userId + '/courses/' + course2.courseNum)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let updated = res.body;
            updated.should.be.an.Object();
            updated.should.have.property('courseNum', course2.courseNum);
            updated.should.have.property('description', body.description);
            done();
          });
      }); // end Should be able to edit course

      it('Should be able to add instr to course2', (done) => {
        adminAgent
          .post('/api/admin/' + admin.userId + '/courses/' + course2.courseNum + '/instructors/' + instructors[2].userId)
          .send({
            instructor: true
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let updated = res.body;
            updated.should.be.an.Object();
            updated.should.have.property('courseNum', course2.courseNum);
            updated.instructors.should.have.lengthOf(2);
            done();
          });
      }); // end Should be able to add instr to course
    }); // end Testing POST methods

    describe('Testing DELETE methods', () => {
      let tmpUser, tmpCourse;
      beforeEach((done) => {
        tmpUser = new User({
          name: 'tmp',
          email: 'tmp@test.com',
          password: 'atemppassword'
        });
        tmpCourse = new Course({
          courseNum: 'TEMP',
          instructors: [instructors[0]]
        });
        tmpUser.save(() => {
          tmpCourse.save(() => {
            done();
          });
        });

      }); // end beforeEach
      it('Should delete user', (done) => {
        adminAgent
          .delete('/api/admin/' + admin.userId + '/students/' + tmpUser.userId)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let u = res.body;
            u.should.have.property('name', tmpUser.name);
            done();
          });
      }); // end Should delete user

      it('Should delete all students in course', (done) => {
        adminAgent
          .delete('/api/admin/' + admin.userId + '/courses/' + course2.courseNum + '/students')
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

      it('Should delete course as admin', (done) => {
        adminAgent
          .delete('/api/admin/' + admin.userId + '/courses/' + tmpCourse.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let c = res.body;
            c.should.have.property('courseNum', tmpCourse.courseNum);
            done();
          });
      }); // end Should delete course
    }); // end Testing DELETE methods*/

    after((done) => {
      adminAgent.get('/api/auth/signout')
        .end((err, res) => {
          if (!err)
            done();
        });
    }); // end after
  }); // end Testing as admin user

  describe('Testing as instr user', () => {
    let instrAgent;
    before((done) => {
      instrAgent = request.agent(app);
      instrAgent.post('/api/auth/signin')
        .send({
          username: instrDetails.email,
          password: instrDetails.password
        })
        .end((err, res) => {
          if (!err && res.body) {
            done()
          }
        });
    }); // end before

    describe('Testing GET methods', () => {
      it('Should be able to get instr courses', (done) => {
        instrAgent
          .get('/api/admin/' + instructors[0].userId + '/courses')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let courseList = res.body;
            courseList.should.be.an.Array();
            courseList.should.have.lengthOf(1);
            courseList[0].should.have.property('courseNum', course1.courseNum);
            done();
          });
      }); // end Should be able to get instr courses

      it('Should be able to get course1', (done) => {
        instrAgent
          .get('/api/admin/' + instructors[0].userId + '/courses/' + course1.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let c = res.body;
            c.should.be.an.Object;
            c.should.have.property('courseNum', course1.courseNum);
            done();
          });
      }); // end Should be able to get course1

      it('Should not be able to get course2', (done) => {
        instrAgent
          .get('/api/admin/' + instructors[0].userId + '/courses/' + course2.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not instructor of this course');
            done();
          });
      }); // end Should not be able to get course2

      it('Should not be able to get non-existant course', (done) => {
        instrAgent
          .get('/api/admin/' + instructors[0].userId + '/courses/' + 'FAKE')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let body = res.body;
            let error = res.error;
            body.should.be.an.Object();
            error.should.have.property('status', 500);
            error.text.should.match(/Failed to load course/);
            done();
          });
      }); // end Should not be able to get non-existant course

      it('Should be able to get students of course1', (done) => {
        instrAgent
          .get('/api/admin/' + instructors[0].userId + '/courses/' + course1.courseNum + '/students')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let students = res.body;
            students.should.be.an.Array();
            students.should.have.lengthOf(4);
            done();
          });
      }); // end Should be able to get students of course1

      it('Should be able to get scenario status as instr', (done) => {
        instrAgent
          .get('/api/admin/' + instructors[0].userId + '/courses/' + course1.courseNum + '/' + scenario.scenCode)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            //console.log(res.body);
            let s = res.body;
            s.should.be.an.Array();
            s.should.have.lengthOf(4);
            //s[0].should.have.property('name', student1.name)
            s[0].should.have.property('status');
            //s[1].should.have.property('name', student2.name)
            s[1].should.have.property('status');
            done();
          });
      }); // end Should get scenario status
    }); // end Testing GET methods

    describe('Testing POST methods', () => {
      it('Should be able to create course', (done) => {
        let newCourse = {
          courseNum: 'CRE002',
          description: 'Test course 2'
        };
        instrAgent
          .post('/api/admin/' + instructors[0].userId + '/courses')
          .send(newCourse)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let nC = res.body;
            nC.should.be.an.Object();
            nC.should.have.property('courseNum', newCourse.courseNum);
            nC.instructors.should.have.lengthOf(1);
            done();
          });
      }); // end Should be able to create course

      it('Should be able to edit course', (done) => {
        let body = {
          description: 'instr updated description'
        };
        instrAgent
          .post('/api/admin/' + instructors[0].userId + '/courses/' + course1.courseNum)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let updated = res.body;
            updated.should.be.an.Object();
            updated.should.have.property('courseNum', course1.courseNum);
            updated.should.have.property('description', body.description);
            done();
          });
      }); // end Should be able to edit course

      it('Should not be able to edit other course', (done) => {
        let body = {
          description: 'instr1 updated description'
        };
        instrAgent
          .post('/api/admin/' + instructors[0].userId + '/courses/' + course2.courseNum)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not instructor of this course');
            done();
          });
      }); // end Should notbe able to edit course as other instr

      it('Should be able to add instr to course', (done) => {
        instrAgent
          .post('/api/admin/' + instructors[0].userId + '/courses/' + course1.courseNum + '/instructors/' + instructors[2].userId)
          .send({
            instructor: true
          })
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
      }); // end Should be able to add instr to course
    }); // end Testing POST methods

    describe('Testing DELETE methods', () => {
      let tmpUser, tmpCourse;
      beforeEach((done) => {
        tmpUser = new User({
          name: 'tmp',
          email: 'tmp@test.com',
          password: 'atemppassword'
        });
        tmpCourse = new Course({
          courseNum: 'TEMP',
          instructors: [instructors[0]]
        });
        tmpUser.save(() => {
          tmpCourse.save(() => {
            done();
          });
        });

      }); // end beforeEach

      it('Should not delete user', (done) => {
        instrAgent
          .delete('/api/admin/' + instructors[0].userId + '/students/' + tmpUser.userId)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not delete user

      it('Should not delete all students in course', (done) => {
        instrAgent
          .delete('/api/admin/' + instructors[0].userId + '/courses/' + course1.courseNum + '/students')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should delete all students in course

      it('Should delete course', (done) => {
        instrAgent
          .delete('/api/admin/' + instructors[0].userId + '/courses/' + tmpCourse.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let c = res.body;
            c.should.have.property('courseNum', tmpCourse.courseNum);
            done();
          });
      }); // end Should delete course

      it('Should not delete course of other instr', (done) => {
        instrAgent
          .delete('/api/admin/' + instructors[1].userId + '/courses/' + tmpCourse.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not instructor of this course');
            done();
          });
      }); // end Should not delete course of other instr
    }); // end Testing DELETE methods

    after((done) => {
      instrAgent.get('/api/auth/signout')
        .end((err, res) => {
          if (!err)
            done();
        });
    }); // end after
  }); // end Testing as instr user

  describe('Testing as student user', () => {
    let studentAgent;
    before((done) => {
      studentAgent = request.agent(app);
      studentAgent.post('/api/auth/signin')
        .send({
          username: studentDetails.email,
          password: studentDetails.password
        })
        .end((err, res) => {
          if (!err && res.body) {
            done()
          }
        });
    }); // end before

    describe('Testing GET methods', () => {
      it('Should not be able to get courses', (done) => {
        studentAgent
          .get('/api/admin/' + students[0].userId + '/courses')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to get courses

      it('Should not be able to get course2', (done) => {
        studentAgent
          .get('/api/admin/' + students[0].userId + '/courses/' + course2.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to get course2

            it('Should not be able to get non-existant course', (done) => {
        studentAgent
          .get('/api/admin/' + students[0].userId + '/courses/' + 'FAKE')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            //res.body.should.have.property('message', 'Not authorized');
          res.body.should.be.an.Object();
          let error = res.error;
          error.should.have.property('status', 500);
          error.text.should.match(/Failed to load course/)
            done();
          });
      }); // end Should not be able to get non-existant course

      it('Should not be able to get students of course2', (done) => {
        studentAgent
          .get('/api/admin/' + students[0].userId + '/courses/' + course2.courseNum + '/students')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to get students course2
    }); // end Testing GET methods

    describe('Testing POST methods', () => {
      it('Should not be able to create course', (done) => {
        let newCourse = {
          courseNum: 'CRE003',
          description: 'Test course 3'
        };
        studentAgent
          .post('/api/admin/' + students[0].userId + '/courses')
          .send(newCourse)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to create course

      it('Should not be able to edit course', (done) => {
        let body = {
          description: 'student updated description'
        };
        studentAgent
          .post('/api/admin/' + students[0].userId + '/courses/' + course2.courseNum)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to edit course
    }); // end Testing POST methods

    describe('Testing DELETE methods', () => {
      let tmpUser, tmpCourse;
      beforeEach((done) => {
        tmpUser = new User({
          name: 'tmp',
          email: 'tmp@test.com'
        });
        tmpCourse = new Course({
          courseNum: 'TEMP',
          instructors: [instructors[0]]
        });
        tmpUser.save(() => {
          tmpCourse.save(() => {
            done();
          });
        });

      }); // end beforeEach

      it('Should not delete course', (done) => {
        studentAgent
          .delete('/api/admin/' + students[0].userId + '/courses/' + tmpCourse.courseNum)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not delete course

    }); // end Testing DELETE methods

    after((done) => {
      studentAgent.get('/api/auth/signout')
        .end((err, res) => {
          if (!err)
            done();
        });
    }); // end after
  }); // end Testing as student user

  after((done) => {
    User.remove(() => {
      Course.remove(() => {
        done();
      });
    });
  }); // end after
}); // end Course Controller Unit Tests
