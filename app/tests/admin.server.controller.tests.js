const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Scenario = mongoose.model('CricketScenario');
const Course = mongoose.model('Course');
const Fridge = mongoose.model('CricketFridge');
const Phage = mongoose.model('CricketPhage');
const scenDefaults = require('../../config/cricket/scenario.config');

let admin, adminDetails, instr, instrDetails, student1, studentDetails, student2, fridge, fridge2, scenario, course;
let tmpUserDetails;
describe('Admin Controller Unit Tests', () => {

  before((done) => {
    tmpUserDetails = {
      name: 'Temp',
      email: 'tmp@test.com',
      password: 'tmpuserpassword'
    };
    adminDetails = {
      name: 'Administrator',
      email: 'admin@test.com',
      password: 'password',
      role: 'admin'
    };
    admin = new User(adminDetails);
    instrDetails = {
      name: 'Instructor',
      email: 'instr@test.com',
      password: 'password',
      role: 'instr'
    };
    instr = new User(instrDetails);
    studentDetails = {
      name: 'Student1',
      email: 'student1@test.com',
      password: 'password',
      role: 'student',
      accessGranted: {
        WTorMute: false,
        ThreeOther: false
      }
    };
    student1 = new User(studentDetails);
    student2 = new User({
      name: 'Student2',
      email: 'student2@test.com',
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
                done();
              });
            });
          });
        })
      });
    });
  }); // end before

  beforeEach((done) => {
    fridge = new Fridge({
      owner: student1,
      scenario: scenario,
      accessGranted: student1.accessGranted[scenario.scenCode],
      strains: []
    });
    fridge2 = new Fridge({
      owner: student2,
      scenario: scenario,
      accessGranted: student1.accessGranted[scenario.scenCode],
      strains: []
    });
    fridge.save(() => {
      fridge2.save(()=>{
        done();
      });
    });
  });

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
      it('Should be able to get all users as admin', (done) => {
        adminAgent
          .get('/api/admin/' + admin.userId + '/students')
          .auth(admin.email, 'password')
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

      it('Should be able to get student1 as admin', (done) => {
        adminAgent
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

      it('Should be able to get fridge as admin', (done) => {
        adminAgent
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
    }); // end Testing GET methods

    describe('Testing POST methods', () => {
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
        adminAgent
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

      it('Should be able to grant scenario access as admin', (done) => {
        adminAgent
          .post('/api/admin/' + admin.userId + '/students/' + student2.userId + '/' + scenario.scenCode)
          .send({
            access: true
          })
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
    }); // end Testing POST methods

    describe('Testing DELETE methods', () => {
      let tmpUser;
      beforeEach((done) => {
        User.create(tmpUserDetails, (err, res) => {
          if (!err){
            tmpUser = res;
            done();
            } else {
            done('err')
          }
        });
      });

      it('Should be able to delete user as admin', (done) => {
        adminAgent
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

      afterEach((done) => {
        User.deleteOne({
          _id: tmpUser._id
        }, (err) => {
          if (!err) {
            done();
          }
        });
      }); // end afterEach
    }); // end Testing DELETE methods

    after((done) => {
      adminAgent.get('/api/auth/signout')
        .end((err, res) => {
          if (!err && res.body) {
            done();
          }
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
            done();
          }
        });
    }); // end before

    describe('Testing GET methods', () => {
      it('Should be able to get students as instr', (done) => {
        instrAgent
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
      }); // end Should be able to get students as instr

      it('Should not be able to get student1 as instr', (done) => {
        instrAgent
          .get('/api/admin/' + instr.userId + '/students/' + student1.userId)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to get student1 as instr

      it('Should be able to get fridge as instr', (done) => {
        instrAgent
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
    }); // end Testing GET methods

    describe('Testing POST methods', () => {
      beforeEach((done) => {
        student1.role = 'student';
        student1.accessGranted.WTorMute = false;
        student1.save(() => {
          done();
        });
      }); // end beforeEach

      it('Should not be able to set role as instr', (done) => {
        let body = {
          role: 'instr'
        };
        //request(app)
        instrAgent
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

      it('Should be able to grant scenario access as instr', (done) => {
        //request(app)
        instrAgent
          .post('/api/admin/' + instr.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
          .send({
            access: true
          })
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
    }); // end Testing POST methods

    describe('Testing DELETE methods', () => {
      let tmpUser;
      beforeEach((done) => {
        User.create(tmpUserDetails, (err, res) => {
          if (!err){
            tmpUser = res;
          done();} else {done('err')}
        });
      });
      it('Should not be able to delete user as instr', (done) => {
        instrAgent
          .delete('/api/admin/' + instr.userId + '/students/' + tmpUser.userId)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to delete user as instr
      afterEach((done) => {
        User.deleteOne({
          _id: tmpUser._id
        }, (err) => {
          if (!err) {
            done();
          }
        });
      }); // end afterEach
    }); // end Testing DELETE methods

    after((done) => {
      instrAgent.get('/api/auth/signout')
        .end((err, res) => {
          if (!err && res.body)
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
            done();
          }
        });
    }); // end before

    describe('Testing GET methods', () => {
      it('Should not be able to get all users as student', (done) => {
        studentAgent
          .get('/api/admin/' + student1.userId + '/students')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to get all users as student

      it('Should not be able to get student2 as student', (done) => {
        studentAgent
          .get('/api/admin/' + student1.userId + '/students/' + student2.userId)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to get student2 as student

      it('Should not be able to get fridge as student', (done) => {
        studentAgent
          .get('/api/admin/' + student1.userId + '/students/' + student2.userId + '/' + scenario.scenCode)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to get fridge as student
    }); // end Testing GET methods

    describe('Testing POST methods', () => {
      beforeEach((done) => {
        student1.role = 'student';
        student1.accessGranted.WTorMute = false;
        student1.save(() => {
          done();
        });
      }); // end beforeEach

      it('Should not be able to grant scenario access as student', (done) => {
        studentAgent
          .post('/api/admin/' + student1.userId + '/students/' + student1.userId + '/' + scenario.scenCode)
          .send({})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to grant scenario access as student
    }); // end Testing POST methods

    describe('Testing DELETE methods', () => {
      let tmpUser;
      beforeEach((done) => {
        User.create(tmpUserDetails, (err, res) => {
          if (!err){
            tmpUser = res;
            done();
          }else{
            done('error')
          }
        });
      });
      it('Should not be able to delete user as student', (done) => {
        studentAgent
          .delete('/api/admin/' + student1.userId + '/students/' + tmpUser.userId)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(403)
          .end((err, res) => {
            res.body.should.have.property('message', 'Not authorized');
            done();
          });
      }); // end Should not be able to delete user as student
      afterEach((done) => {
        User.deleteOne({
          _id: tmpUser._id
        }, (err) => {
          if (!err) {
            done();
          }
        });
      }); // end afterEach
    }); // end Testing DELETE methods

    after((done) => {
      studentAgent.get('/api/auth/signout')
        .end((err, res) => {
          if (!err && res.body)
            done();
        });
    }); // end after
  }); // end Testing as student user

  after((done) => {
    User.remove(() => {
      Scenario.remove(() => {
        Fridge.remove(() => {
          Course.remove(() => {
            Phage.remove(() => {
              done();
            });
          });
        });
      });
    });
  }); // end after

}); // end Admin Controller Unit Tests
