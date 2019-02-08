// Load the test dependencies
const app = require('../../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Scenario = mongoose.model('CricketScenario');
const Fridge = mongoose.model('CricketFridge');
const Phage = mongoose.model('CricketPhage');
const scenDefaults = require('../../../config/cricket/scenario.config');
const cryptr = require('../../../config/client.cryptr');

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
        mutationList: cryptr.encrypt('[]'),
        deletion: cryptr.encrypt('[]')
      };
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/fridge-phage')
        .send(newPhage)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let phage = res.body;
          //phage.mutationList.should.have.lengthOf(0);
//        let mutationList = JSON.parse(cryptr.decrypt(phage.mutationList));
//        mutationList.should.have.lengthOf(0);
          phage.should.have.property('strainNum', newPhage.strainNum);
          done();
        });
    });

    it('Should be able to save FS phage to fridge', (done) => {
      var newPhage = {
        strainNum: 13,
        mutationList: cryptr.encrypt('[-9]'),
        deletion: cryptr.encrypt('[]')
      };
      //console.log(newPhage);
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/fridge-phage')
        .send(newPhage)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let phage = res.body;
          //phage.mutationList.should.have.lengthOf(1);
//        let mutationList = JSON.parse(cryptr.decrypt(phage.mutationList));
//        mutationList.should.have.lengthOf(1);
//        mutationList[0].should.equal(-9);
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

    it('Should be able to update guesses', (done) => {
      let body = {
        1: '',
        2: 'a'
      };
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/deletions')
        .send(body)
        .expect(200)
        .end((err, res) => {
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

  describe('TEST with phage parents', () => {
    let parent1, parent2, child1, child2;
    beforeEach((done) => {
      parent1 = new Phage({
        strainNum: 122,
        owner: user,
        scenarioOrigin: scenario,
        phageType: 'reference',
        comment: 'WT',
        mutationList: []
      });
      parent2 = new Phage({
        strainNum: 123,
        owner: user,
        scenarioOrigin: scenario,
        phageType: 'reference',
        comment: 'FS',
        mutationList: [99]
      });
      child1 = new Phage({
        strainNum: 124,
        owner: user,
        scenarioOrigin: scenario,
        phageType: 'user',
        comment: 'created',
        mutationList: [-34],
        numParents: 2
      });
      child2 = new Phage({
        strainNum: 125,
        owner: user,
        scenarioOrigin: scenario,
        phageType: 'user',
        comment: 'bad parents',
        numParents: 2
      });
      parent1.save(() => {
        parent2.save(() => {
          child1.parents = [parent1._id, parent2._id];
          child1.save(() => {
            child2.parents = ['5a941ce1e2cb0207df400000', parent1._id]
            child2.save((err) => {
              if(err){console.log(err)}
              fridge.strains = [parent1._id, parent2._id, child1._id, child2._id];
              fridge.save(() => {
                done();
              });
            });
          });
        });
      }); // end saving
    }); // end beforeEach

    it('Should save with one parent', (done) => {
      var newPhage = {
        strainNum: 130,
        mutationList: cryptr.encrypt('[88]'),
        deletion: cryptr.encrypt('[]'),
        parents: [parent1._id]
      };
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/fridge-phage')
        .send(newPhage)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let phage = res.body;
//          phage.scenarioOrigin.should
//            .have.property('scenCode', scenario.scenCode);
//          phage.mutationList.should.have.lengthOf(1);
          phage.should.have.property('strainNum', newPhage.strainNum);
        // check parents
        phage.parents.should.have.lengthOf(1);
        phage.parents[0].should.have.property('strainNum', parent1.strainNum);
        phage.should.have.property('numParents', 1);
          done();
        });
    });

        it('Should save with two parents', (done) => {
      var newPhage = {
        strainNum: 131,
        mutationList: cryptr.encrypt('[88]'),
        deletion: cryptr.encrypt('[]'),
        parents: [parent1._id, parent2._id]
      };
      request(app)
        .post('/api/cricket/' + user.userId + '/' + scenario.scenCode + '/fridge-phage')
        .send(newPhage)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let phage = res.body;
//          phage.scenarioOrigin.should
//            .have.property('scenCode', scenario.scenCode);
//          phage.mutationList.should.have.lengthOf(1);
          phage.should.have.property('strainNum', newPhage.strainNum);
        // check parents
        phage.parents.should.have.lengthOf(2);
        phage.parents[0].should.have.property('strainNum', parent1.strainNum);
        phage.parents[1].should.have.property('strainNum', parent2.strainNum);
        phage.should.have.property('numParents', 2);
                  done();
        });
    });

    it('Should get fridge with child1 parents', (done) => {
      request(app)
        .get('/api/cricket/' + user.userId + '/' + scenario.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let f = res.body;
          f.strains.should.have.lengthOf(4);
          let c = f.strains[2];
          c.should.have.property('strainNum', child1.strainNum);
          c.parents[0].should.have.property('strainNum', parent1.strainNum);
          c.parents[1].should.have.property('strainNum', parent2.strainNum);
        c.should.have.property('numParents', 2);
          done();
        });
    }); // end

    it('Should get fridge with 1 of child2 parents', (done)=>{
      request(app)
        .get('/api/cricket/' + user.userId + '/' + scenario.scenCode)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          let f = res.body;
          f.should.have.property('userId', user.userId);
          f.should.have.property('scenCode', scenario.scenCode);
          f.strains.should.have.lengthOf(4);
          let c = f.strains[3];
          c.should.have.property('strainNum', child2.strainNum);
        c.should.have.property('numParents', 2);
        c.parents.should.have.lengthOf(1);
        c.parents[0].should.have.property('strainNum', parent1.strainNum);
          done();
        });
    })
  }); // end Inlcude phage parents

  // Define a post-tests function
  afterEach((done) => {
    // Clean the database
    Fridge.remove(() => {
      User.remove(() => {
        Scenario.remove(() => {
          Phage.remove(()=>{
             done();
          });
        });
      });
    });
  });
});
