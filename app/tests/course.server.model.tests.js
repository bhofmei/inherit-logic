// Load the test dependencies
const app = require('../../index.js');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Course = mongoose.model('Course');

// Define global test variables
let instructor, course;

// Create an 'Course' model test suite
describe('Course Model Unit Tests:', () => {
  // Define a pre-tests function
  beforeEach((done) => {
    // Create a new 'User' model instance
    instructor = new User({
      name: 'Instructor',
      email: 'test@test.com',
      password: 'password',
      admin: true
    });

    // Save the new 'User' model instance
    instructor.save(() => {
      course = new Course({
        courseNum: 'TEST001',
        instructors: [instructor]
      });

      done();
    });
  });

  // Test the 'Course' model save method
  describe('Testing the save method', () => {
    it('Should be able to save without problems', () => {
      course.save((err) => {
        should.not.exist(err);
      });
    });

    it('Should not be able to save an course without a courseNum', () => {
      course.courseNum = '';

      course.save((err) => {
        should.exist(err);
      });
    });

    /*it('Should not be able to save a course with duplicate courseNum', () => {
      course.save();
      var badCourse = new Course({
          courseNum: 'TEST001'
        });
      badCourse.save((err)=>{
        should.exist(err);
      });
    });*/
  }); // end save method

  describe('Testing the delete method', () => {
    let course2, courseNum2;
    // create course to test delete
    beforeEach((done) => {
      courseNum2 = 'TEST002';
      course2 = new Course({
        courseNum: courseNum2,
        instructors: [instructor]
      });
      course2.save(() => {
        done();
      });
    });

    it('Should be able to delete', () => {
      course2.remove((err) => {
        should.not.exist(err);
      });
    });
  }); // end test delete

  describe('Testing the find method', () => {
    let course3, courseNum3;
    courseNum3 = 'TEST003';
    // create course
    beforeEach((done) => {
      course3 = new Course({
        courseNum: courseNum3,
        instructor: instructor
      });
      course3.save(() => {
        done();
      });
    });

    it('Should be able to find by num', () => {
      Course.findOne({
        courseNum: courseNum3
      }, (err, res) => {
        should.not.exist(err);
        res.should.be.an.Object();
      });
    }); // Should be able to find by num

    it('Should not be able to find non-existant course', ()=>{
      Course.findOne({
        courseNum: 'FAKE'
      }, (err, res)=>{
        should.not.exist(err);
        should.not.exist(res);
      });
    }); // end Should not be able to find non-existant course
  }); // end test find

  // Define a post-tests function
  after((done) => {
    // Clean the databases
    Course.remove(() => {
      User.remove(() => {
        done();
      });
    });
  });
});
