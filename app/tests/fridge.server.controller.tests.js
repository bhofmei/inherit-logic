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
      strains: [],
      guesses: ''
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
        let f = res.body;
        f.should.have.property('userId', user.userId);
          f.should.have.property('scenCode', scenario.scenCode);
          f.strains.should.be.an.Array()
            .and.have.lengthOf(0);
          done();
        });
    });

    it('Should be able to create fridge for user', (done) => {
      request(app)
        .get('/api/cricket/' + user.userId + '/' + scenario2.scenCode + '/new-fridge')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
        let f = res.body;
          f.should.be.an.Object();
          f.should.have.property('scenCode', scenario2.scenCode);
          f.strains.should.be.an.Array()
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
        mutationList: [-9],
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

    it('Should be able to update guesses', (done)=>{
      let body = {1:'', 2:'a'};
      request(app)
        .post('/api/cricket/'+user.userId + '/'+scenario.scenCode + '/deletions')
        .send(body)
        .expect(200)
        .end((err, res)=>{
          let b = res.body;
          should.not.exist(err);
          b.should.equal(JSON.stringify(body));
        done();
      });
    }); // end Should be able to update guesses
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
          // returns strain
        let p = res.body;
        p.should.have.property('strainNum', phageToDelete.strainNum);
        should.not.exist(err);
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
