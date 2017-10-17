// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Course = mongoose.model('Course');

// Define global test variables
let instructor, user, course;

// Create an 'Articles' controller test suite
describe('Course Controller Unit Tests:', () => {
	// Define a pre-tests function
	beforeEach((done) => {
		// Create a new 'User' model instance
		instructor = new User({
			name: 'Instructor',
			email: 'test@test.com',
			password: 'password',
      admin: true
		});

    // Create second user without admin access
    user = new User({
			name: 'Name',
			email: 'student@test.com',
			password: 'password',
      admin: false
		});

		// Save the new 'User' model instances
    user.save();

		instructor.save(() => {
			course = new Course({
				courseNum: 'TEST004',
				instructor: instructor
			});

			course.save((err) => {
				done();
			});
		});
	});

	// Test the 'Article' GET methods
	describe('Testing the GET methods', () => {

		it('Should be able to get the specific course', (done) => {
			// Create a SuperTest request
			request(app).get('/api/courses/' + course.courseNum)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					res.body.should.be.an.Object().and.have.property('courseNum', course.courseNum);
          res.body.instructor.should.have.property('name', instructor.name);
					done();
				});
		});
	});

  describe('Test POST methods', () =>{

    it('Should be able to create course', ()=>{

    });

    it('Should not be able to create course', () =>{

    });

  });

  /*describe('Test DELETE methods', ()=>{
    it('Should be able to delete course', ()=>{

    });

    it('Should not be able to delete course', ()=>{

    });
  });*/

	// Define a post-tests function
	afterEach((done) => {
		// Clean the database
		Course.remove(() => {
			User.remove(() => {
				done();
			});
		});
	});
});
