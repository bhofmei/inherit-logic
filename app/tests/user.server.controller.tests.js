// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const clone = require('clone');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const nonAuth = request(app);

let user, userDetails, user2, userDetails2, user3, userDetails3;
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
    userDetails3 = {
      email: 'test4@test.com',
      firstName: 'First3',
      lastName: 'Last3',
      password: 'next-password'
    };
    user = new User(userDetails);
    user2 = new User(userDetails2);
    user3 = new User(userDetails3);
    user.save((err) => {
      if (err) {
        throw err;
      } else {
        user2.save((err2) => {
          if (err2)
            throw err2
          else {
            user3.save((err3) => {
              if (err3) {
                throw err3
              } else
                done();
            })
          }
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
            res.error.should.have.property('status', 500);
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
            res.error.should.have.property('status', 500);
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
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);
            res.error.should.equal(false);
            res.body.should.equal(true);
            done();
          });
      }); // end Should signout

      afterEach((done) => {
        authAgent = null;
        done();
      }); // end afterEach

    }); // end Test signout
  }); // end Testing Authentication methods

  describe('Testing password reset methods', () => {
    it('Should send reset email', (done) => {
      nonAuth.post('/api/auth/forget-password')
        .send({
          email: userDetails3.email
        })
        //.expect(200)
        .end((err, res) => {
          should.not.exist(err);
          res.body.message.should.equal('An email has been sent to ' + userDetails3.email + ' with further instructions.');
          done();
        });
    }).timeout(5000); // end Should send reset email

    it('Should not send reset email to non-existant user', (done) => {

      nonAuth.post('/api/auth/forget-password')
        .send({
          email: 'fake-user@test.com'
        })
        .expect(404)
        .end((err, res) => {
          should.not.exist(err);
          res.error.should.have.property('status', 404);
          res.error.text.should.match(/No account with that email/i);
          done();
        });
    }); // end Should not send reset email to non-existant user

    describe('Testing password reset', () => {
      let token = 'MY-FAKE-TOKEN';
      beforeEach((done) => {
        // generate token
        User.findOneAndUpdate({
          email: userDetails3.email
        }, {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 360000
        }, (err, user) => {
          if (!err && user) {
            done();
          } else {
            console.log('ERROR')
          }
        });
      }); // end before

      it('Should update password', (done) => {
        let body = {
          password: 'new-password',
          confirmPassword: 'new-password',
          token: token
        };
        nonAuth.post('/api/auth/reset-password')
          .send(body)
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);
            res.body.message.should.equal('Password has been reset.');
            done();
          });
      }); // end Should update password

      it('Should not update password for invalid token', (done) => {
        let body = {
          password: 'new-password',
          confirmPassword: 'new-password',
          token: token + '10'
        };
        nonAuth.post('/api/auth/reset-password')
          .send(body)
          .expect(404)
          .end((err, res) => {
            should.not.exist(err);
            should.not.exist(err);
            res.error.should.have.property('status', 404);
            res.error.text.should.match(/Invalid token/i);
            done();
          });
      }); // end Should not update password for invalid token

      it('Should not update password for expired token', (done) => {
        let body = {
          password: 'new-password',
          confirmPassword: 'new-password',
          token: token
        };
        User.findOneAndUpdate({
          email: userDetails3.email
        }, {
          resetPasswordExpires: 100
        }, (err, user) => {
          if (err) {
            console.log(err)
            done();
          } else {
            nonAuth.post('/api/auth/reset-password')
              .send(body)
              .expect(403)
              .end((err, res) => {
                should.not.exist(err);
                should.not.exist(err);
                res.error.should.have.property('status', 403);
                res.error.text.should.match(/Token has expired/i);
                done();
              });
          }
        });
      }); // end Should not update password for expired token

      afterEach((done) => {
        User.findOneAndUpdate({
          email: userDetails3.email
        }, {
          resetPasswordToken: undefined,
          resetPasswordExpires: undefined
        }, (err, user) => {
          if (!err && user) {
            done();
          } else {
            console.log('ERROR')
          }
        });
      })

    }); // end Testing password reset

  }); // end Testing password reset methods

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

      it('Should sign in with new password', (done) => {
        nonAuth.post('/api/auth/signin')
          .send({
            username: userDetails2.email,
            password: newPassword
          })
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);
            res.body.should.have.property('firstName', userDetails2.firstName);
            done();
          });
      }); // end Should sign in with new password

      it('Should not sign in with old password', (done) => {
        nonAuth.post('/api/auth/signin')
          .send({
            username: userDetails2.email,
            password: userDetails2.password
          })
          .expect(200)
          .end((err, res) => {
            should.exist(res.error);
            res.error.should.have.property('status', 400);
            res.error.text.should.match(/Invalid password/i)
            done();
          });
      }); // end Should sign in with new password

      after((done) => {
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
