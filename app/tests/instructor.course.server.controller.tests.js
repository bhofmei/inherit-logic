// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Course = mongoose.model('Course');

// Define global test variables
let instructor, instructor2, student, course, course2;

describe('Instructor Controller Course-related Unit Tests: ', () => {
  // Define a pre-tests function
  before((done) => {
    // Create a new 'User' model instance
    instructor = new User({
      name: 'Instructor',
      email: 'test@test.com',
      password: 'password',
      instructor: true
    });

    instructor2 = new User({
      name: 'Instructor2',
      email: 'test2@test.com',
      password: 'password',
      instructor: true
    });

    instructor.save(() => {
      course = new Course({
        courseNum: 'TEST004',
        instructors: [instructor],
        description: 'Description of course'
      });
      course.save(() => {
        // Create a student
        student = new User({
          name: 'Name',
          email: 'student@test.com',
          password: 'password',
          admin: false,
          course: course
        });
        instructor2.save(() => {
          course2 = new Course({
            courseNum: 'TEST005',
            instructors: [instructor, instructor2],
            description: 'Description 2'
          });
          course2.save(() => {
            student.save(() => {
              done();
            });
          });
        });
      });
    });
  }); // end before

  describe('Testing GET methods', () => {

    it('Should be able to get list of courses for instructor', (done) => {
      request(app)
        .get('/api/instr/' + instructor.userId+'/courses')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let courseList = res.body;
          courseList.should.be.an.Array();
          courseList.should.have.lengthOf(2);
          done();
        });
    }); // Should be able to get list of courses for instructor

    it('Should be able to get the specific course', (done) => {
      // Create a SuperTest request
      request(app)
        .get('/api/instr/' + instructor.userId + '/courses/' + course.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let c = res.body;
          c.should.be.an.Object;
          c.should.have.property('courseNum', course.courseNum);
          //res.body.instructor.should.have.property('name', instructor.name);
          done();
        });
    }); // Should be able to get the specific course

    it('Should not be able to get course of other instructor', (done) => {
      // Create a SuperTest request
      request(app)
        .get('/api/instr/' + instructor2.userId + '/courses/' + course.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not instructor of this course');
          done();
        });
    }); // end Should not be able to get course of other instructor

    it('Should not be able to get course as student', (done) => {
      // Create a SuperTest request
      request(app)
        .get('/api/instr/' + student.userId + '/courses/' + course.courseNum)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get course as student

    it('Should be able to get students of course', (done) => {
      request(app)
        .get('/api/instr/' + instructor.userId + '/courses/' + course.courseNum + '/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let students = res.body;
          students.should.be.an.Array();
          students.should.have.lengthOf(1);
          done();
        });
    }); // end Should be able to get students of course
  }); // end Testing the course-related GET method

  describe('Test POST methods', () => {

    it('Should be able to create course', (done) => {
      let newCourse = {
        courseNum: 'TEST001',
        description: 'Test course'
      };
      request(app)
        .post('/api/instr/' + instructor.userId+'/courses')
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

    it('Should not be able to create course by student', (done) => {
      let newCourse = {
        courseNum: 'TEST002',
        description: 'Test course'
      };
      request(app)
        .post('/api/instr/' + student.userId+'/courses')
        .send(newCourse)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to create course by student

    it('Should be able to edit course', (done) => {
      let body = {
        description: 'Updated description'
      };
      request(app)
        .post('/api/instr/' + instructor.userId+'/courses/' + course.courseNum)
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
        let updated = res.body;
          updated.should.be.an.Object();
          updated.should.have.property('courseNum', course.courseNum);
        updated.should.have.property('description', body.description);
          done();
        });
    }); // end Should be able to create course

  }); // end Test POST methods

 describe('Test DELETE methods', () => {

    it('Should be able to delete course2', (done) => {
      request(app)
        .delete('/api/instr/' + instructor.userId + '/courses/' + course2.courseNum)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          // returns
          let c = res.body;
          c.should.have.property('courseNum', course2.courseNum);
          done()
        });
    }); // end Should be able to delete course2

    it('Should not be able to delete non-existant course', (done) => {
      request(app)
        .delete('/api/instr/' + instructor.userId + '/courses/TEST100')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          // returns
          should.exist(err);
          done()
        });

    }); // end Should not be able to delete non-existant course

    it('Should not be able to delete course2 by student', (done) => {
      request(app)
        .delete('/api/instr/' + student.userId + '/courses/' + course.courseNum)
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done()
        });
    }); // end Should be able to delete course2 by student
  }); // end Test DELETE methods

  // Define a post-tests function
  after((done) => {
    // Clean the database
    Course.remove(() => {
      User.remove(() => {
        done();
      });
    });
  }); // end after
});
