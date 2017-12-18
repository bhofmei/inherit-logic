// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const clone = require('clone');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Course = mongoose.model('Course');
const Scenario = mongoose.model('Scenario');
const Fridge = mongoose.model('Fridge');
const scenDefaults = require('../../config/scenario.config');

// global test variables
let instructor, course, student1, student2, scenario1, scenario2, fridge11;

describe('Instructor Controller Scenario-related Unit Tests: ', () => {

  // set up
  before((done) => {
    let tmp1 = {
      scenCode: 'WTorMute',
      mutationFreq: scenDefaults.mutationFreq,
      recombinationFreq: scenDefaults.recombinationFreq,
      gcProb: scenDefaults.gcProb,
      minStops: scenDefaults.minStops,
      intraMuteDist: scenDefaults.intraMuteDist,
      interMuteDist: scenDefaults.interMuteDist,
      referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage],
      otherPhage: []
    };
    let tmp2 = clone(tmp1);
    tmp2.scenCode = 'ThreeOther';
    scenario1 = new Scenario(tmp1);
    scenario2 = new Scenario(tmp2);

    instructor = new User({
      name: 'Instructor',
      email: 'test@test.com',
      password: 'password',
      instructor: true
    });
    course = new Course({
      courseNum: 'TEST900',
      instructors: [instructor]
    });
    student1 = new User({
      name: 'student1',
      email: 'student@test.com',
      password: 'password',
      course: course,
      accessGranted: {
        WTorMute: false,
        ThreeOther: false
      }
    });
    student2 = new User({
      name: 'student2',
      email: 'otherstudent@test.com',
      password: 'password',
      course: course,
      accessGranted: {
        WTorMute: true,
        ThreeOther: false
      }
    });
    fridge11 = new Fridge({
      owner: student1,
      scenario: scenario1,
      accessGranted: student1.accessGranted[scenario1.scenCode],
      strains: []
    });
    instructor.save(() => {
      course.save(() => {
        student1.save(() => {
          student2.save(() => {
            scenario1.save(() => {
              scenario2.save(() => {
                fridge11.save(()=>{
                  done();
                });

              });
            });
          });
        });
      });
    });
  }); // end before

  describe('Test GET methods', () => {

    it('Should get scenario status for scenario1', (done) => {
      request(app)
        .get('/api/instr/' + instructor.userId + '/courses/' + course.courseNum + '/' + scenario1.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          //console.log(res.body);
          let s = res.body;
          s.should.be.an.Array();
          s.should.have.lengthOf(2);
          s[0].should.have.property('name', student1.name)
          s[0].should.have.property('status', false);
          s[1].should.have.property('name', student2.name)
          s[1].should.have.property('status', true);
          done();
        });
    }); // Should get scenario status for scenario1

    it('Should not get scenario status as student', (done) => {
      request(app)
        .get('/api/instr/' + student1.userId + '/courses/' + course.courseNum + '/' + scenario1.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // Should not get scenario status as student

    it('Should get student2 status for scenarios', (done) => {
      request(app)
        .get('/api/instr/' + instructor.userId + '/users/' + student2.userId)
        .set('Accept', 'application/json')
        //.expect('Content-Type', /json/)
        //.expect(200)
        .end((err, res) => {
          let access = res.body;
          access.should.be.an.Array();
        access[0].should.have.property('status', true);
        access[1].should.have.property('status', false);
          done();
        });
    }); // end Should get student2 status for scenarios

    it('Should get student1 fridge for scenario1', (done)=>{
      request(app)
        .get('/api/instr/' + instructor.userId + '/users/' + student1.userId + '/' + scenario1.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
        let fridge = res.body;
          fridge.should.be.an.Object();
          done();
        });
    }); // end Should get student1 fridge for scenario1

    it('Should not get student1 fridge for scenario1 as student', (done) => {
      request(app)
        .get('/api/instr/' + student1.userId + '/users/' + student1.userId + '/' + scenario1.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
        res.body.should.have.property('message','Not authorized');
          done();
        });
    }); // end Should not get student1 fridge for scenario1

  }); // end Test GET methods

  describe('Test POST methods', () => {

    it('Should grant access to student1 scenario2', (done) => {
      request(app)
        .post('/api/instr/' + instructor.userId + '/users/' + student1.userId + '/' + scenario2.scenCode)
      .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
        let updated = res.body;
        updated.accessGranted[scenario2.scenCode].should.equal(true);
        done();
        });
    }); // end Should grant access to student1 scenario2

    it('Should not grant access to student1 as student1', (done) => {
      request(app)
        .post('/api/instr/' + student1.userId + '/users/' + student1.userId + '/' + scenario2.scenCode)
      .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
        res.body.should.have.property('message', 'Not authorized');
        done();
        });
    });
  }); // end Test POST methods

  after((done) => {
    Course.remove(() => {
      User.remove(() => {
        Scenario.remove(() => {
          Fridge.remove(()=>{
            done();
          });
        })
      });
    });
  })

}); // end Instructor Controller Scenario-related Unit Tests
