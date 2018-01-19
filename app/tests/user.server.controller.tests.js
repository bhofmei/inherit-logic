// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const clone = require('clone');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const nonAuth = request(app);

let user, userDetails, user2, userDetails2;
describe('User Controller Unit Tests:', () => {

  before((done) => {
    // create user
    userDetails = {
      email: 'test2@test.com',
      firstName: 'First',
      lastName: 'Last',
      password: 'fake-password'
    };
    userDetails2 = {
      email: 'test3@test.com',
      firstName: 'First2',
      lastName: 'Last2',
      password: 'another-password'
    };
    user = new User(userDetails);
    user2 = new User(userDetails2);
    user.save((err) => {
      if (err) {
        throw err;
      } else {
        user2.save((err2) => {
          if (err2)
            throw err2
          else
            done();
        });
      }
    });
  });

  describe('Testing Authentication methods', () => {

    describe('Test signin', () => {
      let authAgent;
      beforeEach((done) => {
        authAgent = request.agent(app);
        done();
      }); // end beforeEach

      it('Should signin', (done) => {
        authAgent.post('/api/auth/signin')
          .send({
            username: userDetails.email,
            password: userDetails.password
          })
          .expect(200)
          .end((err, res) => {
            let result = res.body;
            result.should.have.property('firstName', userDetails.firstName);
            done();
          });
      }); // end Should signin

      it('Should not signin - incorrect password', (done) => {
        authAgent.post('/api/auth/signin')
          .send({
            username: userDetails.email,
            password: 'incorrect-password'
          })
          .expect(200)
          .end((err, res) => {
            should.exist(res.error);
            res.error.should.have.property('status', 400);
            res.error.text.should.match(/Invalid password/i)
            done();
          });
      }); // end Should not signin - incorrect password

      it('Should not signin - user does not exist', (done) => {
        authAgent.post('/api/auth/signin')
          .send({
            username: 'other@test.com',
            password: 'password'
          })
          .expect(200)
          .end((err, res) => {
            should.exist(res.error);
            res.error.should.have.property('status', 400);
            res.error.text.should.match(/User not found/i)
            done();
          });
      }); // end Should not signin - user does not exist

      afterEach((done) => {
        authAgent = null;
        done();
      }); // end afterEach
    }); // end Test signin

    describe('Test signup', () => {
      let authAgent;
      let newUser = {
        username: 'new@test.com',
        password: 'its-a-password',
        firstName: 'Second',
        lastName: 'User'
      };

      beforeEach((done) => {
        authAgent = request.agent(app);
        done();
      }); // end beforeEach

      it('Should sign up', (done) => {
        authAgent.post('/api/auth/signup')
          .send(newUser)
          .expect(200)
          .end((err, res) => {
            let result = res.body;
            result.should.have.property('firstName', newUser.firstName);
            done();
          });
      }); // end Should sign up

      it('Should not sign up - no email', (done) => {
        let tmp = clone(newUser);
        delete tmp.username;

        authAgent.post('/api/auth/signup')
          .send(tmp)
          .expect(200)
          .end((err, res) => {
            should.exist(res.error);
            res.error.should.have.property('status', 400);
            res.error.text.should.match(/Email is required/i);
            done();
          });
      }); // end Should not sign up - no email

      it('Should not sign up - bad password', (done) => {
        let tmp = clone(newUser);
        tmp.password = 'short'

        authAgent.post('/api/auth/signup')
          .send(tmp)
          .expect(200)
          .end((err, res) => {
            should.exist(res.error);
            res.error.should.have.property('status', 400);
            res.error.text.should.match(/Password should be longer/i);
            done();
          });
      }); // end Should not sign up - bad password

      afterEach((done) => {
        authAgent = null;
        done();
      }); // end afterEach

    }); // end Test signup

    describe('Test signout', () => {
      let authAgent;
      beforeEach((done) => {
        authAgent = request.agent(app);
        // signin
        authAgent.post('/api/auth/signin')
          .send({
            username: userDetails.email,
            password: userDetails.password
          })
          .end((err, res) => {
            if (!err && res.body) {
              done();
            }
          });
      }); // end beforeEach

      it('Should signout', (done) => {
        authAgent.get('/api/auth/signout')
          .expect(302)
          .end((err, res) => {
            should.not.exist(err);
            res.error.should.equal(false);
            done();
          });
      }); // end Should signout

      afterEach((done) => {
        authAgent = null;
        done();
      }); // end afterEach

    }); // end Test signout
  }); // end Testing Authentication methods

  describe('Testing GET methods', () => {

    describe('Testing no authentication', () => {

      it('Should not get user', (done) => {
        nonAuth.get('/api/users/' + user.userId)
          .expect(200)
          .end((err, res) => {
            should.exist(res.error);
            res.error.should.have.property('status', 401);
            res.error.text.should.match(/User is not logged in/i);
            done();
          });
      }); // end Should not get user

    }); // end Testing no authentication

    describe('Testing with authentication', () => {

      let authAgent;
      before((done) => {
        authAgent = request.agent(app);
        // signin
        authAgent.post('/api/auth/signin')
          .send({
            username: userDetails.email,
            password: userDetails.password
          })
          .end((err, res) => {
            if (!err && res.body) {
              done();
            }
          });
      }); // end before

      it('Should get user', (done) => {
        authAgent.get('/api/users/' + user.userId)
          .expect(200)
          .end((err, res) => {
            let result = res.body;
            result.should.have.property('firstName', userDetails.firstName);
            result.should.have.property('lastName', userDetails.lastName);
            done();
          });
      }); // end Should get user

      it('Should not get non-existant user', (done) => {
        authAgent.get('/api/users/' + user.userId + 10)
          .expect(200)
          .end((err, res) => {
            res.body.should.be.an.Object();
            res.error.should.have.property('status', 500);
            res.error.text.should.match(/User not found/i)
            done();
          });
      }); // end Should not get non-existant user

      after((done) => {
        authAgent = null;
        done();
      }); // end afterEach

    }); // end Testing with authentication

  }); // end Testing GET methods

  describe('Testing POST methods', () => {

    let updatedUser;

    before((done) => {
      updatedUser = clone(userDetails);
      updatedUser.firstName = 'NewFirst';
      done();
    }); // end before;

    describe('Testing no authentication', () => {

      it('Should not edit user', (done) => {
        nonAuth.post('/api/users/' + user.userId)
          .send(updatedUser)
          .expect(200)
          .end((err, res) => {
            should.exist(res.error);
            res.error.should.have.property('status', 401);
            res.error.text.should.match(/User is not logged in/i);
            done();
          });
      }); // end Should not edit user

    }); // end Testing no authentication

    describe('Testing with authentication', () => {

      let authAgent;
      before((done) => {
        authAgent = request.agent(app);
        // signin
        authAgent.post('/api/auth/signin')
          .send({
            username: userDetails.email,
            password: userDetails.password
          })
          .end((err, res) => {
            if (!err && res.body) {
              done();
            }
          });
      }); // end before

      it('Should edit user', (done) => {
        authAgent.post('/api/users/' + user.userId)
          .send(updatedUser)
          .expect(200)
          .end((err, res) => {
            let result = res.body;
            result.should.not.have.property('password');
            result.should.have.property('firstName', updatedUser.firstName);
            result.should.have.property('lastName', userDetails.lastName);
            done();
          });
      }); // end Should edit user

      it('Should not edit non-existant user', (done) => {
        authAgent.post('/api/users/' + user.userId + 10)
          .send(updatedUser)
          .expect(200)
          .end((err, res) => {
            res.body.should.be.an.Object();
            res.error.should.have.property('status', 500);
            res.error.text.should.match(/User not found/i)
            done();
          });
      }); // end Should not edit non-existant user

      it('Should update password', (done) => {
        let body = {
          username: userDetails.email,
          password: userDetails.password,
          newPassword: 'updated-password'
        }

        authAgent.post('/api/users/' + user.userId + '/update-password')
          .send(body)
          //.expect(200)
          .end((err, res) => {
            let result = res.body;
            result.should.have.property('lastName', userDetails.lastName);
            result.should.not.have.property('password');
            done();
          });
      }); // end Should update password

      after((done) => {
        authAgent = null;
        done();
      }); // end afterEach

    }); // end Testing with authentication

    describe('Testing updated password', () => {
      let authAgent;
      let newPassword = 'my-new-password';

      before((done) => {
        authAgent = request.agent(app);
        // signin
        authAgent.post('/api/auth/signin')
          .send({
            username: userDetails2.email,
            password: userDetails2.password
          })
          .end((err, res) => {
            if (!err && res.body) {
              // change password
              authAgent.post('/api/users/' + user2.userId + '/update-password')
                .send({
                  email: userDetails2.email,
                  password: userDetails2.password,
                  newPassword: newPassword
                })
                .end((err2, res2) => {
                  if (!err2 && res.body)
                    done();
                  else
                    throw err2;
                });
            } else {
              throw err;
            }
          });
      }); // end before

      it('Should sign in with new password', (done)=>{
        nonAuth.post('/api/auth/signin')
          .send({username: userDetails2.email,
                password: newPassword})
          .expect(200)
          .end((err, res)=>{
            should.not.exist(err);
            res.body.should.have.property('firstName', userDetails2.firstName);
          done();
        });
      }); // end Should sign in with new password

      it('Should not sign in with old password', (done)=>{
        nonAuth.post('/api/auth/signin')
          .send({username: userDetails2.email,
                password: userDetails2.password})
          .expect(200)
          .end((err, res)=>{
            should.exist(res.error);
          res.error.should.have.property('status', 400);
          res.error.text.should.match(/Invalid password/i)
          done();
        });
      }); // end Should sign in with new password

      after((done)=>{
        authAgent = null;
        done();
      })
    }); // end Testing updated password

  }); // end Testing POST methods

  after((done) => {
    User.remove({}, () => {
      done();
    });
  })
});
