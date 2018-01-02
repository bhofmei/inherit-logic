const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Scenario = mongoose.model('Scenario');
const Course = mongoose.model('Course');
const Fridge = mongoose.model('Fridge');
const Phage = mongoose.model('Phage');
const scenDefaults = require('../../config/scenario.config');

let admin, instr, student1, student2, fridge, scenario, course;
describe('Admin Controller Unit Tests', () => {

  before((done) => {
    admin = new User({
      name: 'Administrator',
      email: 'admin@test.com',
      password: 'password',
      role: 'admin'
    });
    instr = new User({
      name: 'Instructor',
      email: 'instr@test.com',
      password: 'password',
      role: 'instr'
    });
    student1 = new User({
      name: 'Student1',
      email: 'student1@test.com',
      password: 'password',
      role: 'student',
      accessGranted: {
        WTorMute: false,
        ThreeOther: false
      }
    });
    student2 = new User({
      name: 'Student1',
      email: 'student1@test.com',
      password: 'password',
      role: 'student',
      accessGranted: {
        WTorMute: true,
        ThreeOther: false
      }
    });
    scenario = new Scenario({
      scenCode: 'WTorMute'
    });
    admin.save(() => {
      instr.save(() => {
        course = new Course({
          courseNum: 'TEST001',
          instructors: [instr]
        });

        course.save(() => {
          student1.course = course;
          student1.save(() => {
            student2.save(() => {
              scenario.save(() => {
                fridge = new Fridge({
                  owner: student1,
                  scenario: scenario,
                  accessGranted: student1.accessGranted[scenario.scenCode],
                  strains: []
                });
                fridge.save(() => {
                  done();
                });
              });
            });
          });
        })
      });
    });
  }); // end before

  describe('Testing GET methods', () => {

    it('Should be able to get all users as admin', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/students')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let userList = res.body;
          userList.should.be.an.Array();
          userList.should.have.lengthOf(4);
          done();
        });
    }); // end Should be able to get all users as admin

    it('Should be able to get students as instr', (done) => {
      request(app)
        .get('/api/admin/' + instr.userId + '/students')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          let userList = res.body;
          userList.should.be.an.Array();
          userList.should.have.lengthOf(1);
          done();
        });
    }); // end Should not be able to get all users as instr

    it('Should not be able to get all users as student1', (done) => {
      request(app)
        .get('/api/admin/' + student1.userId + '/students')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get all users as student1

    it('Should be able to get student1 as admin', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/students/' + student1.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let u = res.body;
          u.should.be.an.Object();
          u.should.have.property('name', student1.name);
          done();
        });
    }); // end Should be able to get student1 as admin

    it('Should not be able to get student1 as instr', (done) => {
      request(app)
        .get('/api/admin/' + instr.userId + '/students/' + student1.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get student1 as instr

    it('Should not be able to get student1 as student2', (done) => {
      request(app)
        .get('/api/admin/' + student2.userId + '/students/' + student1.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get student1 as student2

    it('Should be able to get fridge as admin', (done) => {
      request(app)
        .get('/api/admin/' + admin.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let f = res.body;
          f.should.be.an.Object();
          f.strains.should.have.lengthOf(0);
          done();
        });
    }); // end Should be able to get fridge as admin

    it('Should be able to get fridge as instr', (done) => {
      request(app)
        .get('/api/admin/' + instr.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let f = res.body;
          f.should.be.an.Object();
          f.strains.should.have.lengthOf(0);
          done();
        });
    }); // end Should be able to get fridge as instr

    it('Should not be able to get fridge as student2', (done) => {
      request(app)
        .get('/api/admin/' + student2.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to get fridge as student2

  }); // end Testing GET methods

  describe('Testing POST methods', (done) => {

    beforeEach((done) => {
      student1.role = 'student';
      student1.accessGranted.WTorMute = false;
      student1.save(() => {
        done();
      });
    }); // end beforeEach

    it('Should be able to set role as admin', (done) => {
      let body = {
        role: 'instr'
      };
      request(app)
        .post('/api/admin/' + admin.userId + '/students/' + student2.userId)
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let nu = res.body;
          nu.should.have.property('name', student2.name);
          nu.should.have.property('role', 'instr');
          done();
        });
    }); // end Should be able to set role as admin

    it('Should not be able to set role as instr', (done) => {
      let body = {
        role: 'instr'
      };
      request(app)
        .post('/api/admin/' + instr.userId + '/students/' + student1.userId)
        .send(body)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to set role as instr

    it('Should be able to grant scenario access as admin', (done) => {
      request(app)
        .post('/api/admin/' + admin.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let nu = res.body;
          nu.should.have.property('name', student1.name);
          nu.accessGranted.should.have.property(scenario.scenCode, true);
          done();
        });
    }); // end Should be able to grant scenario access as admin

    it('Should be able to grant scenario access as instr', (done) => {
      request(app)
        .post('/api/admin/' + instr.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let nu = res.body;
          nu.should.have.property('name', student1.name);
          nu.accessGranted.should.have.property(scenario.scenCode, true);
          done();
        });
    }); // end Should be able to grant scenario access as instr

    it('Should not be able to grant scenario access as student1', (done) => {
      request(app)
        .post('/api/admin/' + student1.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });

    }); // end Should not be able to grant scenario access as student1

  }); // end Testing POST methods

  describe('Testing DELETE methods', () => {
    let tmpUser;
    beforeEach((done) => {
      User.create({
        name: 'Temp',
        email: 'tmp@test.com'
      }, (err, res) => {
        if (!err)
          tmpUser = res;
        done();
      });
    }); // end beforeEach

    it('Should be able to delete user as admin', (done) => {
      request(app)
        .delete('/api/admin/' + admin.userId + '/students/' + tmpUser.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let nu = res.body;
          nu.should.have.property('name', tmpUser.name);
          done();
        });
    }); // end Should be able to delete user as admin

    it('Should not be able to delete user as instr', (done) => {
      request(app)
        .delete('/api/admin/' + instr.userId + '/students/' + tmpUser.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to delete user as instr

    it('Should not be able to delete user as student1', (done) => {
      request(app)
        .delete('/api/admin/' + student1.userId + '/students/' + tmpUser.userId)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403)
        .end((err, res) => {
          res.body.should.have.property('message', 'Not authorized');
          done();
        });
    }); // end Should not be able to delete user as student1

  }); // end Testing DELETE methods

  after((done) => {
    User.remove(() => {
      Scenario.remove(() => {
        Fridge.remove(() => {
          Course.remove(()=>{
            Phage.remove(()=>{
              done();
            });
          });
        });
      });
    });
  }); // end after

}); // end Admin Controller Unit Tests
