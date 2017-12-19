const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Course = mongoose.model('Course');
const Scenario = mongoose.model('Scenario');

let admin, instructors, students, course1, course2, scenario;
describe('Course Controller Unit Tests', () => {
  before((done) => {
    let t = new User({
      name: 'Administrator',
      email: 'admin@test.com',
      password: 'password',
      role: 'admin'
    });

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

  describe('Testing GET methods', () => {

    it('Should be able to get all courses as admin', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/courses')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let courseList = res.body;
          courseList.should.be.an.Array();
          courseList.should.have.lengthOf(2);
          //courseList[0].should.have.property('courseNum', course1.courseNum);
          done();
        });
    }); // end Should be able to get all courses as admin

    it('Should be able to get instr courses as instr', (done) => {
      request(app)
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
    }); // end Should be able to get instr courses as instr

    it('Should not be able to get courses as student', (done) => {
      request(app)
        .get('/api/admin/' + students[0].userId + '/courses')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get courses as student

    it('Should be able to get course1 as admin', (done) => {
      request(app)
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
    }); // end Should be able to get course1 as admin

    it('Should be able to get course1 as instr1', (done) => {
      request(app)
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
    }); // end Should be able to get course1 as instr1

    it('Should not be able to get course1 as instr2', (done) => {
      request(app)
        .get('/api/admin/' + instructors[1].userId + '/courses/' + course1.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not instructor of this course');
          done();
        });
    }); // end Should be able to get course1 as instr1

    it('Should not be able to get course1 as student', (done) => {
      request(app)
        .get('/api/admin/' + students[1].userId + '/courses/' + course1.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should be able to get course1 as instr1

    it('Should be able to get students of course1 as admin', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/courses/' + course1.courseNum + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let students = res.body;
          students.should.be.an.Array();
          students.should.have.lengthOf(4);
          done();
        });
    }); // end Should be able to get students of course1 as admin

    it('Should be able to get students of course1 as instr1', (done) => {
      request(app)
        .get('/api/admin/' + instructors[0].userId + '/courses/' + course1.courseNum + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let students = res.body;
          students.should.be.an.Array();
          students.should.have.lengthOf(4);
          done();
        });
    }); // end Should be able to get students of course1 as instr1

    it('Should not be able to get students of course1 as student', (done) => {
      request(app)
        .get('/api/admin/' + students[1].userId + '/courses/' + course1.courseNum + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get students course1 as student

    it('Should be able to get scenario status as admin', (done) => {
      request(app)
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
    }); // end Should get scenario status as admin

    it('Should be able to get scenario status as instr', (done) => {
      request(app)
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
    }); // end Should get scenario status as instr1

    it('Should not be able to get scenario status as student', (done) => {
      request(app)
        .get('/api/admin/' + students[0].userId + '/courses/' + course1.courseNum + '/' + scenario.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get scenario status as student

  }); // end Testing GET methods

  describe('Testing POST methods', () => {

    it('Should be able to create course as admin', (done) => {
      let newCourse = {
        courseNum: 'CRE001',
        description: 'Test course 1'
      };
      request(app)
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
    }); // end Should be able to create course as admin

    it('Should be able to create course as instr', (done) => {

      let newCourse = {
        courseNum: 'CRE002',
        description: 'Test course 2'
      };
      request(app)
        .post('/api/admin/' + instructors[1].userId + '/courses')
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
    }); // end Should be able to create course as instr

    it('Should not be able to create course as student', (done) => {
      let newCourse = {
        courseNum: 'CRE003',
        description: 'Test course 3'
      };
      request(app)
        .post('/api/admin/' + students[2].userId + '/courses')
        .send(newCourse)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to create course as student

    it('Should be able to edit course as admin', (done) => {
      let body = {
        description: 'admin updated description'
      };
      request(app)
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
    }); // end Should be able to edit course as admin

    it('Should be able to edit course as instr', (done) => {
      let body = {
        description: 'instr updated description'
      };
      request(app)
        .post('/api/admin/' + instructors[1].userId + '/courses/' + course2.courseNum)
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
    }); // end Should be able to edit course as instr

    it('Should not be able to edit course as other instr', (done) => {
      let body = {
        description: 'instr1 updated description'
      };
      request(app)
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

    it('Should not be able to edit course as student', (done) => {
      let body = {
        description: 'student updated description'
      };
      request(app)
        .post('/api/admin/' + students[0].userId + '/courses/' + course2.courseNum)
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to edit course as student

    it('Should be able to add instr to course1 as admin', (done) => {
      request(app)
        .post('/api/admin/' + admin.userId + '/courses/' + course1.courseNum + '/users/' + instructors[2].userId)
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
    }); // end Should be able to add instr to course as admin

    it('Should be able to add instr to course2 as instr', (done) => {
      request(app)
        .post('/api/admin/' + instructors[1].userId + '/courses/' + course2.courseNum + '/users/' + instructors[2].userId)
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
    }); // end Should be able to add instr to course as instr

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
      tmpUser.save(()=>{
        tmpCourse.save(()=>{
          done();
        });
      });

    }); // end beforeEach

    it('Should delete user as admin', (done) => {
      request(app)
        .delete('/api/admin/' + admin.userId + '/users/' + tmpUser.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let u = res.body;
          u.should.have.property('name', tmpUser.name);
          done();
        });
    }); // end Should delete user as admin

    it('Should not delete user as instr', (done) => {
      request(app)
        .delete('/api/admin/' + instructors[1].userId + '/users/' + tmpUser.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not delete user as instr

    it('Should delete all students in course as admin', (done) => {
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
    }); // end Should delete all students in course as admin

    it('Should not delete all students in course as instr', (done) => {
      request(app)
        .delete('/api/admin/' + instructors[1].userId + '/courses/' + course2.courseNum + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should delete all students in course as instr

    it('Should delete course as admin', (done) => {
      request(app)
        .delete('/api/admin/' + admin.userId + '/courses/' + tmpCourse.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let c = res.body;
          c.should.have.property('courseNum', tmpCourse.courseNum);
          done();
        });
    }); // end Should delete course as admin

    it('Should delete course as instr', (done) => {
      request(app)
        .delete('/api/admin/' + instructors[0].userId + '/courses/' + tmpCourse.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let c = res.body;
          c.should.have.property('courseNum', tmpCourse.courseNum);
          done();
        });
    }); // end Should delete course as instr

    it('Should not delete course as other instr', (done) => {
      request(app)
        .delete('/api/admin/' + instructors[1].userId + '/courses/' + tmpCourse.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not instructor of this course');
          done();
        });
    }); // end Should not delete course as other instr

    it('Should not delete course as student', (done) => {
      request(app)
        .delete('/api/admin/' + students[0].userId + '/courses/' + tmpCourse.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not delete course as student

  }); // end Testing DELETE methods

  after((done) => {
    User.remove(() => {
      Course.remove(() => {
        done();
      });
    });
  }); // end after
}); // end Course Controller Unit Tests
