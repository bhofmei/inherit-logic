// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Scenario = mongoose.model('Scenario');
const Fridge = mongoose.model('Fridge');
const Phage = mongoose.model('Phage');
const scenDefaults = require('../../config/scenario.config');

// Define global test variables
let user, fridge, scenario, scenario2;

// Create an 'Articles' controller test suite
describe('Fridge Controller Unit Tests:', () => {
  // Define a pre-tests function
  beforeEach((done) => {

    // Create user
    user = new User({
      name: 'Name',
      email: 'test@test.com',
      password: 'password'
    });

    // create scenarios
    scenario = new Scenario({
      label: 'Test scenario',
      scenCode: 'Scen1'
    });
    scenario2 = new Scenario({
      label: 'Test scenario 2',
      scenCode: 'Scen2',
      mutationFreq: scenDefaults.mutationFreq,
      recombinationFreq: scenDefaults.recombinationFreq,
      gcProb: scenDefaults.gcProb,
      minStops: scenDefaults.minStops,
      intraMuteDist: scenDefaults.intraMuteDist,
      interMuteDist: scenDefaults.interMuteDist,
      referencePhage: [],
      otherPhage: [scenDefaults.wildtypePhage]
    });

    fridge = new Fridge({
      owner: user,
      scenario: scenario,
      strains: []
    });

    // Save the new 'User' model instances
    user.save(() => {
      scenario.save(() => {
        scenario2.save((err) => {
          if (err) {
            console.log(err)
          } else {
            done();
          }
        });
      });
    });

  });

  describe('Testing the GET methods', () => {

    beforeEach((done) => {
      fridge.save(() => {
        done();
      });
    });

    it('Should be able to get existing fridge', (done) => {
      // Create a SuperTest request
      request(app)
        .get('/api/cricket/' + user.userId + '/' + scenario.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          res.body.should.be.an.Object()
            .and.have.property('scenario');
          res.body.scenario.should.have.property('scenCode', scenario.scenCode);
          res.body.strains.should.be.an.Array()
            .and.have.lengthOf(0);
          done();
        });
    });

    /*it('Should be able to create fridge for null user', (done)=>{
      request(app).get('/api/cricket/' +scenario2.scenCode)
				.set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.expect(200)
				.end((err, res) => {
					res.body.should.be.an.Object();
        res.body.should.have.property('owner', null);
        res.body.scenario.should.have.property('scenCode', scenario2.scenCode);
					done();
				});
    });*/

  });

  describe('Test create scenario', () => {

    it('Should be able to create fridge for user', (done) => {
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario2.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          res.body.should.be.an.Object();
          res.body.scenario.should.have.property('scenCode', scenario2.scenCode);
          res.body.strains.should.be.an.Array()
            .and.have.lengthOf(1);
          done();
        });
    });
  });

  describe('Test POST methods', () => {
    let phageToUpdate;
    beforeEach((done) => {
      fridge.save(() => {
        // create a phage
        phageToUpdate = new Phage({
          strainNum: 121,
          owner: user,
          scenarioOrigin: scenario,
          phageType: 'reference',
          comment: 'comment from before'
        });
        phageToUpdate.save((err) => {
          if (!err)
            done();
        });
      });
    }); // end beforeEach

    it('Should be able to save WT phage to fridge', (done) => {
      var newPhage = {
        strainNum: 12,
        mutationList: [],
        deletion: []
      };
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/fridge-phage')
        .send(newPhage)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let phage = res.body;
          phage.scenarioOrigin.should.have.property('scenCode', scenario.scenCode);
          phage.mutationList.should.have.lengthOf(0);
          phage.should.have.property('strainNum', newPhage.strainNum);
          done();
        });
    });

    it('Should be able to save FS phage to fridge', (done) => {
      var newPhage = {
        strainNum: 13,
        mutationList: [{
          kind: 'minusOne',
          location: 9
        }],
        deletion: []
      };
      //console.log(newPhage);
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/fridge-phage')
        .send(newPhage)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let phage = res.body;
          phage.scenarioOrigin.should.have.property('scenCode', scenario.scenCode);
          phage.mutationList.should.have.lengthOf(1);
          phage.should.have.property('strainNum', newPhage.strainNum);
          done();
        });
    });

    it('Should be able to update phage', (done) => {
      let updateId = phageToUpdate._id
      let updatedPhage = {
        strainNum: phageToUpdate.strainNum,
        comment: 'this is the new comment',
        '_id': updateId
      };
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/' + updateId)
        .send(updatedPhage)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let newPhage = res.body;
          newPhage.should.have.property('strainNum', updatedPhage.strainNum);
          newPhage.should.have.property('comment', updatedPhage.comment);
        done();
        });
    }); // end Should be able to update phage
  });

  describe('Test DELETE methods', () => {
    let phageToDelete;
    beforeEach((done) => {
      fridge.save(() => {
        // create a phage
        phageToDelete = new Phage({
          strainNum: 121,
          owner: user,
          scenarioOrigin: scenario,
          phageType: 'reference',
          comment: 'comment from before'
        });
        phageToDelete.save((err) => {
          if (!err)
            done();
        });
      });
    }); // end beforeEach
    it('Should be able to delete phage', (done) => {
      let phageId = phageToDelete._id;
      request(app)
        .delete('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/' + phageId)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          // returns fridge
        let fridge = res.body;
        fridge.strains.should.have.lengthOf(0);
        done()
        });
    });
  });

  // Define a post-tests function
  afterEach((done) => {
    // Clean the database
    Fridge.remove(() => {
      User.remove(() => {
        Scenario.remove(() => {
          done();
        });
      });
    });
  });
});
