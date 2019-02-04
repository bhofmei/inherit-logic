// Load the test dependencies
const app = require('../../../index');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const MendelScenario = mongoose.model('MendelScenario');
const MendelFridge = mongoose.model('MendelFridge');
const MendelPede = mongoose.model('MendelPede');
const scenDefaults = require('../../../config/cricket/scenario.config');
const cryptr = require('../../../config/client.cryptr');

// Define global test variables
let user, mfridge, mscenario, mscenario2;

// Create an 'Articles' controller test suite
describe('Mendelpede Fridge Controller Unit Tests:', () => {
  // Define a pre-tests function
  beforeEach((done) => {

    // Create user
    user = new User({
      name: 'Name',
      email: 'test@test.com',
      password: 'password'
    });

    // create scenarios
    mscenario = new MendelScenario({
      label: 'Test scenario',
      shortCode: 'Scen1'
    });
    mscenario2 = new MendelScenario({
      label: 'Test scenario 2',
      shortCode: 'Scen2',
      inheritType: 'mendel',
      scenType: 'scenario',
      ordOfScen: 1,
      courseLevel: 0
    });

    mfridge = new MendelFridge({
      owner: user,
      scenario: mscenario,
      pedeList: [],
      genoFacts: ''
    });

    // Save the new 'User' model instances
    user.save(() => {
      mscenario.save(() => {
        mscenario2.save((err) => {
          if (err) {
          } else {
            done();
          }
        });
      });
    });

  });

  describe('Testing the GET methods for Mendelpede', () => {

    beforeEach((done) => {
      mfridge.save(() => {
        done();
      });
    });

    it('Should be able to get existing mendelpede fridge', (done) => {
      // Create a SuperTest request
      request(app)
        .get('/api/mendelpede/' + user.userId + '/' + mscenario.shortCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let f = res.body;
          //console.log('******************************************************')
          //console.log(f)
          f.should.have.property('userId', user.userId);
          f.should.have.property('shortCode', mscenario.shortCode);
          done();
        });
    });

    it('Should be able to create mendel fridge for user', (done) => {
      request(app)
        .get('/api/mendelpede/' + user.userId + '/' + mscenario2.shortCode + '/new-fridge')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let f = res.body;
          f.should.be.an.Object();
          f.should.have.property('shortCode', mscenario2.shortCode);
          f.pedes.should.be.an.Array()
            .and.have.lengthOf(6);
          done();
        });
    });
  });

  describe('Test POST methods for mendel fridge', () => {
    let pedeToUpdate;
    beforeEach((done) => {
      mfridge.save(() => {
        // create a phage
        pedeToUpdate = new MendelPede({
          bugID: 121,
          owner: user,
          scenario: mscenario,
          genotype: [],
          phenotype: []
        });
        pedeToUpdate.save((err) => {
          if (!err)
            done();
        });
      });
    }); // end beforeEach

    it('Should be able to add mendel pede to fridge', (done) => {
      var newPede = {
        bugID: 12,
        owner: user,
        scenario: mscenario,
        genotype : cryptr.encrypt(JSON.stringify([ 4, 3, 3 ])),
        phenotype : [ "Black", "LightGray", "SkyBlue", "1", "3" ]
      };
      let req = {
        pedeToBeInserted: newPede,
        fridgeId: mfridge._id
      }
      request(app)
        .post('/api/mendelpede/' + mscenario.shortCode + '/add-pede')
        .send(req)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let fridge = res.body;
          //phage.mutationList.should.have.lengthOf(0);
//        let mutationList = JSON.parse(cryptr.decrypt(phage.mutationList));
//        mutationList.should.have.lengthOf(0);
        fridge.pedes[0].should.have.property('bugID', newPede.bugID);
          done();
        });
    });
  });

  describe('Test DELETE methods', () => {
    let pedeToDelete;
    let pedeToDelete2;
    beforeEach((done) => {
      var pedeIdList = [];
      pedeToDelete = new MendelPede({
        bugID: 123,
        owner: user,
        scenario: mscenario,
        genotype : [ 4, 3, 3 ],
        phenotype : [ "Black", "LightGray", "SkyBlue", "1", "3" ]
      });
      pedeToDelete2 = new MendelPede({
        bugID: 420,
        owner: user,
        scenario: mscenario,
        genotype : [ 4, 3, 3 ],
        phenotype : [ "Black", "LightGray", "SkyBlue", "1", "3" ]
      });
      pedeToDelete.save((err, mpede) => {
        
      });
      pedeToDelete2.save((err, mpede) => {

      });
      pedeIdList.push(pedeToDelete);
      pedeIdList.push(pedeToDelete2);
      mfridge.pedeList = pedeIdList
      mfridge.save((err) => {
        if (!err)
          done();
      });
    }); // end beforeEach
    it('Should be able to delete mendel pede', (done) => {
      let pedeId = pedeToDelete._id;
      request(app)
        .delete('/api/mendelpede/' + user.userId + '/' + mscenario.shortCode + '/' + pedeId)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          // returns strain
          let p = res.body;
          p.pedes.should.be.an.Array()
            .and.have.lengthOf(1);
          done();
        });
    });
  });

  // Define a post-tests function
  afterEach((done) => {
    // Clean the database
    MendelFridge.remove(() => {
      User.remove(() => {
        MendelScenario.remove(() => {
          MendelPede.remove(()=>{
             done();
          });
        });
      });
    });
  });
});
