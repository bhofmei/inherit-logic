// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const Phage = mongoose.model('Phage');
const scenDefaults = require('../../config/scenario.config');
const phageScen = require('../genetics/phage.scenario');
const phageExp = require('../genetics/phage.experiment');
const plateExp = require('../genetics/plate.experiment');;

// Define global test variables
let scenario, scenDat;
let phageList = [];
let bactRest = 'K',
  bactPerm = 'B';

describe('Genetics Controller Unit Tests:', () => {
  // Define a pre-tests function
  before((done) => {
    // reset random generator engines
    phageExp.resetEngine();
    phageScen.resetEngine();
    plateExp.resetEngine();

    // create scenario
    scenario = {
      mutationFreq: scenDefaults.mutationFreq,
      recombinationFreq: scenDefaults.recombinationFreq,
      gcProb: scenDefaults.gcProb,
      minStops: scenDefaults.minStops,
      intraMuteDist: scenDefaults.intraMuteDist,
      interMuteDist: scenDefaults.interMuteDist,
      referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}'],
      otherPhage: []
    };

    let tmp = phageScen.generateScenario(scenario);
    // has strainList and scenData
    scenDat = JSON.stringify(tmp.scenData);
    //console.log(tmp.strainList);

    Phage.create(tmp.strainList, function (err, strains) {
      phageList = [];
      if (!err) {
        phageList = strains.map((strain) => {
          return strain._id;
        });
      } else {
        console.log(err);
      }
      done();
    });
  });

  describe('Testing the POST methods', () => {
    describe('Test single input', () => {
      it('Should create plate for WT, PERM bacteria', (done) => {
        let exp = {
          nPhage: 15000,
          nMut: 4
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.nPhage
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nPhage);
            bPhage.should.equal(exp.nMut);
            nGeno.should.equal(exp.nMut + 1);
            done();
          });
      }); // end Should create plate for WT, PERM bacteria

      it('Should create plate for WT, REST bacteria', (done) => {
        let exp = {
          nPhage: 15000,
          nMut: 5
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.nPhage
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nPhage);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMut + 1);
            done();
          });
      }); // end Should create plate for WT, REST bacteria

      it('Should create plate for FS, PERM bacteria', (done) => {
        let exp = {
          nPhage: 15000,
          nMut: 4,
          nWT: 3
        };
        let req = {
          phage1: {
            id: phageList[1],
            numPhage: exp.nPhage
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nWT);
            bPhage.should.equal(exp.nPhage + exp.nMut - exp.nWT);
            nGeno.should.equal(exp.nMut + 1);
            done();
          });
      }); // end Should create plate for FS, PERM bacteria

      it('Should create plate for FS, REST bacteria', (done) => {
        let exp = {
          nPhage: 15000,
          nMut: 3,
          nWT: 1
        };
        let req = {
          phage1: {
            id: phageList[1],
            numPhage: exp.nPhage
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nWT);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMut + 1);
            done();
          });
      }); // end Should create plate for FS, REST bacteria
    }); // end Test single input

    describe('Test cross input', () => {
      it('Should create plate for WTxWT, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 15000,
          mPhage2: 10000,
          nMut: 13,
          nPhage1: 9146,
          nPhage2: 6097
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[0],
            numPhage: exp.mPhage2
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nPhage1 + exp.nPhage2);
            bPhage.should.equal(exp.nMut);
            nGeno.should.equal(exp.nMut + 2);
            done();
          });
      }); // end Should create plate for WTxWT, PERM bacteria

      it('Should create plate for WTxWT, REST bacteria', (done) => {
        let exp = {
          mPhage1: 15000,
          mPhage2: 10000,
          nMut: 11,
          nPhage1: 9146,
          nPhage2: 6097
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[0],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nPhage1 + exp.nPhage2);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMut + 2);
            done();
          });
      }); // end Should create plate for WTxWT, REST bacteria
      it('Should create plate for WTxFS, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 15000,
          mPhage2: 10000,
          nMut: 10,
          nMutWT: 7,
          nPhage1: 8853,
          nPhage2: 5902
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[1],
            numPhage: exp.mPhage2
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nPhage2 + exp.nMutWT);
            bPhage.should.equal(exp.nPhage1 + exp.nMut);
            nGeno.should.equal(exp.nMut + exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for WTxFS, PERM bacteria

      it('Should create plate for WTxFS, REST bacteria', (done) => {
        let exp = {
          mPhage1: 15000,
          mPhage2: 10000,
          nMut: 21,
          nMutWT: 12,
          nPhage1: 8853,
          nPhage2: 5902
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[1],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nPhage2 + exp.nMutWT);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMut + exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for WTxFS, REST bacteria

      it('Should create plate for FSxFS, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 15000,
          mPhage2: 10000,
          nMut: 12,
          nMutWT: 1,
          nPhage1: 8853,
          nPhage2: 5902
        };
        let req = {
          phage1: {
            id: phageList[1],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[3],
            numPhage: exp.mPhage2
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nMutWT);
            bPhage.should.equal(exp.nPhage1 + exp.nPhage2 + exp.nMut);
            nGeno.should.equal(exp.nMut + exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for FSxFS, PERM bacteria
      it('Should create plate for FSxFS, REST bacteria', (done) => {
        let exp = {
          mPhage1: 15000,
          mPhage2: 10000,
          nMut: 26,
          nMutWT: 0,
          nPhage1: 8853,
          nPhage2: 5902
        };
        let req = {
          phage1: {
            id: phageList[1],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[3],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(false);
            lPhage.should.equal(exp.nMutWT);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMut + exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for FSxFS, REST bacteria

    }); // end Test cross input

    describe('Test over capacity', ()=>{
      it('Should not create plate for over capacity, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 20000,
          mPhage2: 28000,
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[0],
            numPhage: exp.mPhage2
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(true);
            lPhage.should.equal(0);
            bPhage.should.equal(0);
            nGeno.should.equal(2);
            done();
          });
      }); // end Should not create plate for over capacity, PERM bacteria

      it('Should not create plate for over capacity, REST bacteria', (done) => {
        let exp = {
          mPhage1: 20000,
          mPhage2: 28000,
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[0],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: 20000,
          scenarioData: scenDat
        };
        request(app)
          .post('/api/cricket/plate')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            let lPhage = results.smallPlaque.length;
            let bPhage = results.largePlaque.length;
            let nGeno = results.genotypes.length;
            results.should.be.an.Object();
            results.full.should.equal(true);
            lPhage.should.equal(0);
            bPhage.should.equal(0);
            nGeno.should.equal(2);
            done();
          });
      }); // end Should not create plate for over capacity, REST bacteria
    }); // end Test over capacity
  }); // end Testing the POST methods

  // Define a post-tests function
  after((done) => {
    // Clean the database
    Phage.remove(() => {
      done();
    });
  });
});
