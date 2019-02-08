// Load the test dependencies
const app = require('../../../index.js');
const request = require('supertest');
const should = require('should');
const clone = require('clone');
const mongoose = require('mongoose');
const Phage = mongoose.model('CricketPhage');
const scenDefaults = require('../../../config/cricket/scenario.config');
const phageScen = require('../../genetics/cricket/phage.scenario');
const phageExp = require('../../genetics/cricket/phage.experiment');
const plateExp = require('../../genetics/cricket/plate.experiment');
const cryptr = require('../../../config/client.cryptr');

// Define global test variables
let scenario, scenDat, scenario2, scenDat2;
let phageList = [];
let phageList2 = [];
let bactRest = 'K',
  bactPerm = 'B';

describe('Genetics Controller Unit Tests:', () => {
  // Define a pre-tests function
  before((done) => {
    // create scenario
    let tmpscenario = {
      mutationFreq: scenDefaults.mutationFreq,
      recombinationFreq: scenDefaults.recombinationFreq,
      gcProb: scenDefaults.gcProb,
      minStops: scenDefaults.minStops,
      intraMuteDist: scenDefaults.intraMuteDist,
      interMuteDist: scenDefaults.interMuteDist,
      referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}'],
      otherPhage: []
    };
    scenario = clone(tmpscenario);
    scenario.id = 1;
    scenario.referencePhage.push('{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "always", "readable": "can", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage bearing compensating +1 and -1 frameshifts resulting in successful translation and a wild type phenotype"}');
    scenario.referencePhage.push('{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}');
    scenario2 = clone(tmpscenario);
    scenario2.id = 2;
    scenario2.referencePhage.push('{"numToMake": 5, "isWildType": false, "frameshifts": {"howMany": [1,2], "mixed": "sometimes", "readable": "any", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage containing a one to two frameshifts"}');
    done();
  });

  describe('Testing the Plate POST methods', () => {

    before((done) => {
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
      let tmp = phageScen.generateScenario(scenario);
      // has strainList and scenData
      scenDat = cryptr.encrypt(JSON.stringify(tmp.scenData));

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
    describe('Test single input', () => {
      it('Should create plate for WT, PERM bacteria', (done) => {
        let exp = {
          nPhage: 1300,
          nMut: 1
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.nPhage
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
          nPhage: 1300,
          nMut: 1
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.nPhage
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            nGeno.should.equal(1);
            done();
          });
      }); // end Should create plate for WT, REST bacteria

      it('Should create plate for FS, PERM bacteria', (done) => {
        let exp = {
          nPhage: 1300,
          nMut: 1,
          nWT: 1
        };
        let req = {
          phage1: {
            id: phageList[1],
            numPhage: exp.nPhage
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
          nPhage: 1300,
          nMut: 1,
          nWT: 0
        };
        let req = {
          phage1: {
            id: phageList[1],
            numPhage: exp.nPhage
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            nGeno.should.equal(exp.nWT);
            done();
          });
      }); // end Should create plate for FS, REST bacteria
    }); // end Test single input

    describe('Test cross input', () => {
      it('Should create plate for WTxWT, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 1300,
          mPhage2: 1400,
          nMut: 0,
          nPhage1: 710,
          nPhage2: 765
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
          capacity: scenDefaults.plateCapacity,
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
          mPhage1: 1400,
          mPhage2: 1300,
          nMut: 0,
          nPhage1: 765,
          nPhage2: 710
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
          capacity: scenDefaults.plateCapacity,
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
            nGeno.should.equal(2);
            done();
          });
      }); // end Should create plate for WTxWT, REST bacteria

      it('Should create plate for WTxFS, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 1100,
          mPhage2: 1400,
          nMut: 17,
          nMutWT: 10,
          nPhage1: 583,
          nPhage2: 742
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
          capacity: scenDefaults.plateCapacity,
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
            lPhage.should.equal(exp.nPhage1 + exp.nMutWT);
            bPhage.should.equal(exp.nPhage2 + exp.nMut);
            nGeno.should.equal(exp.nMut + exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for WTxFS, PERM bacteria

      it('Should create plate for WTxFS, REST bacteria', (done) => {
        let exp = {
          mPhage1: 1200,
          mPhage2: 1500,
          nMut:21,
          nMutWT: 11,
          nPhage1: 701,
          nPhage2: 876
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
          capacity: scenDefaults.plateCapacity,
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
            lPhage.should.equal(exp.nPhage1 + exp.nMutWT);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMutWT + 1);
            done();
          });
      }); // end Should create plate for WTxFS, REST bacteria

      it('Should create plate for FSxFS, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 1400,
          mPhage2: 1400,
          nMut: 14,
          nMutWT: 14,
          nPhage1: 663,
          nPhage2: 663
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
          capacity: scenDefaults.plateCapacity,
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
          mPhage1: 1500,
          mPhage2: 1400,
          nMut: 19,
          nMutWT: 14,
          nPhage1: 816,
          nPhage2: 762
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
          capacity: scenDefaults.plateCapacity,
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
            nGeno.should.equal(exp.nMutWT);
            done();
          });
      }); // end Should create plate for FSxFS, REST bacteria

      it('Should create plate for WTx2FS, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 1100,
          mPhage2: 1300,
          nMut: 2,
          nMutWT: 26,
          nPhage1: 629,
          nPhage2: 743
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[5],
            numPhage: exp.mPhage2
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            lPhage.should.equal(exp.nPhage1 + exp.nPhage2 + exp.nMutWT);
            bPhage.should.equal(exp.nMut);
            nGeno.should.equal(exp.nMut + exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for WTx2FS, PERM bacteria

      it('Should create plate for WTx2FS, REST bacteria', (done) => {
        let exp = {
          mPhage1: 1200,
          mPhage2: 1400,
          nMut: 6,
          nMutWT: 24,
          nPhage1: 681,
          nPhage2: 794
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[5],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            lPhage.should.equal(exp.nPhage1 + exp.nPhage2 + exp.nMutWT);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for WTx2FS, REST bacteria

      it('Should create plate for WTxDEL, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 1200,
          mPhage2: 1300,
          nMut: 15,
          nMutWT: 11,
          nPhage1: 589,
          nPhage2: 639
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[6],
            numPhage: exp.mPhage2
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            lPhage.should.equal(exp.nPhage1 + exp.nMutWT);
            bPhage.should.equal(exp.nPhage2 + exp.nMut);
            nGeno.should.equal(exp.nMut + exp.nMutWT + 2);
            done();
          });
      }); // end Should create plate for WTxDEL, PERM bacteria

      it('Should create plate for WTxDEL, REST bacteria', (done) => {
        let exp = {
          mPhage1: 1100,
          mPhage2: 1300,
          nMut: 15,
          nMutWT: 10,
          nPhage1: 563,
          nPhage2: 665
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[6],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            lPhage.should.equal(exp.nPhage1 + exp.nMutWT);
            bPhage.should.equal(0);
            nGeno.should.equal(exp.nMutWT + 1);
            done();
          });
      }); // end Should create plate for WTxDEL, REST bacteria

      it('Should create plate for DELxDEL, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 1200,
          mPhage2: 1250,
          nMut: 27,
          nMutWT: 0,
          nPhage1: 647,
          nPhage2: 674
        };
        let req = {
          phage1: {
            id: phageList[2],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[6],
            numPhage: exp.mPhage2
          },
          lawnType: bactPerm,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
      }); // end Should create plate for WTxDEL, PERM bacteria

      it('Should create plate for DELxDEL, REST bacteria', (done) => {
        let exp = {
          mPhage1: 1350,
          mPhage2: 1200,
          nMut: 26,
          nMutWT: 0,
          nPhage1: 676,
          nPhage2: 601
        };
        let req = {
          phage1: {
            id: phageList[2],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[6],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            nGeno.should.equal(exp.nMutWT);
            done();
          });
      }); // end Should create plate for WTxDEL, REST bacteria

    }); // end Test cross input

    describe('Test over capacity', () => {
      it('Should not create plate for FS x FS over capacity, PERM bacteria', (done) => {
        let exp = {
          mPhage1: 2000,
          mPhage2: 2800,
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
          capacity: scenDefaults.plateCapacity,
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

      it('Should not create plate for WT x FS over capacity, REST bacteria', (done) => {
        let exp = {
          mPhage1: 3000,
          mPhage2: 2500,
          nMut: 32,
          nMutWT: 32
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[3],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            nGeno.should.equal(exp.nMutWT+1);
            done();
          });
      }); // end Should not create plate for WT x FS over capacity, REST bacteria

      it('Should not create plate for WT x DEL over capacity, REST bacteria', (done) => {
        let exp = {
          mPhage1: 3000,
          mPhage2: 2700,
          nMut: 33,
          nMutWT: 26
        };
        let req = {
          phage1: {
            id: phageList[0],
            numPhage: exp.mPhage1
          },
          phage2: {
            id: phageList[2],
            numPhage: exp.mPhage2
          },
          lawnType: bactRest,
          location: 'lab',
          capacity: scenDefaults.plateCapacity,
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
            nGeno.should.equal(exp.nMutWT+1);
            done();
          });
      }); // end Should not create plate for WT x DEL over capacity, REST bacteria

    }); // end Test over capacity
    after((done) => {
      // Clean the database
      Phage.remove(() => {
        done();
      });
    });
  }); // end Testing the Plate POST methods

  describe('Testing the Plexer POST methods', () => {
    before((done) => {
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
      let tmp = phageScen.generateScenario(scenario2);
      // has strainList and scenData
      scenDat2 = cryptr.encrypt(JSON.stringify(tmp.scenData));
      //console.log(tmp.strainList);
      tmp.strainList.forEach((strain) => {
        //console.log(strain.mutationList);
      });

      Phage.create(tmp.strainList, function (err, strains) {
        phageList = [];
        if (!err) {
          phageList2 = strains.map((strain) => {
            return strain._id;
          });
        } else {
          console.log(err);
        }
        done();
      });
    }); // end before

    //PHAGE:
    //0. WT
    //1. [ -240 ]
    //2. deletion: [ 110, 205 ]
    //3. [ 86 ]
    //4. [ -211, 287 ]
    //5. [ -201, -226 ]
    //6. [ 270, 344 ]
    //7. [ 142 ]
    //8. [ -79, 156 ]
    //9. [ -243 ]

    describe('Testing multiplexer', () => {
      it('Should create multiplexer for all WT input, PERM bacteria', (done) => {
        let mPhage = 150;
         let expectedMut = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let expectedWT = [126, 126, 174, 174, 174, 174, 126, 126, 126, 126, 126, 174, 126, 126, 126, 126];
        let rowPhage = [];
        let colPhage = [];
        for (let i = 0; i < 2; i++) {
          rowPhage.push({
            id: phageList2[0],
            numPhage: mPhage
          });
        }
        for (let i = 0; i < 8; i++) {
          colPhage.push({
            id: phageList2[0],
            numPhage: mPhage
          });
        }
        let req = {
          rowPhage: rowPhage,
          colPhage: colPhage,
          lawnType: bactPerm,
          location: 'plexer',
          capacity: scenDefaults.plexerCapcaity,
          scenarioData: scenDat2
        };
        request(app)
          .post('/api/cricket/plexer')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            results.should.be.an.Object();
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 8; j++) {
                let exp = i * 8 + j;
                results[i][j].should.have.property('largePlaque', expectedMut[exp]);
                results[i][j].should.have.property('smallPlaque', expectedWT[exp]);
              }
            }
            done();
          });
      }); // end Should create multiplexer for all WT input, PERM bacteria

      it('Should create multiplexer for all WT input, REST bacteria', (done) => {
        let mPhage = 154;
        let expectedWT = [178, 130, 130, 178, 130, 178, 130, 130,
                        130, 178, 178, 178, 130, 130, 178, 130];
        let rowPhage = [];
        let colPhage = [];
        for (let i = 0; i < 2; i++) {
          rowPhage.push({
            id: phageList2[0],
            numPhage: mPhage
          });
        }
        for (let i = 0; i < 8; i++) {
          colPhage.push({
            id: phageList2[0],
            numPhage: mPhage
          });
        }
        let req = {
          rowPhage: rowPhage,
          colPhage: colPhage,
          lawnType: bactRest,
          location: 'plexer',
          capacity: scenDefaults.plexerCapcaity,
          scenarioData: scenDat2
        };
        request(app)
          .post('/api/cricket/plexer')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            results.should.be.an.Object();
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 8; j++) {
                let exp = i * 8 + j;
                results[i][j].should.have.property('largePlaque', 0);
                results[i][j].should.have.property('smallPlaque', expectedWT[exp]);
              }
            }
            done();
          });
      }); // end Should create multiplexer for all WT input, REST bacteria

      it('Should create multiplexer for WT X FS input, PERM bacteria', (done) => {
        let mPhage = 152;
        let expectedMut = [67, 91, 88, 90, 91, 90, 0, 65,
                         91, 91, 92, 89, 91, 88, 0, 90];
      let expectedWT = [64, 89, 92, 90, 89, 90, 131, 66,
                        89, 89, 88, 91, 89, 92, 180, 90];
        let rowPhage = [];
        let colPhage = [];
        for (let i = 0; i < 2; i++) {
          rowPhage.push({
            id: phageList2[0],
            numPhage: mPhage
          });
        }
        for (let i = 0; i < 8; i++) {
          let tmp;
          if (i === 0)
            tmp = phageList2[1];
          else
            tmp = phageList2[i + 2];
          colPhage.push({
            id: tmp,
            numPhage: mPhage
          });
        }
        let req = {
          rowPhage: rowPhage,
          colPhage: colPhage,
          lawnType: bactPerm,
          location: 'plexer',
          capacity: scenDefaults.plexerCapcaity,
          scenarioData: scenDat2
        };

        request(app)
          .post('/api/cricket/plexer')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            results.should.be.an.Object();
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 8; j++) {
                let exp = i * 8 + j;
                results[i][j].should.have.property('largePlaque', expectedMut[exp]);
                results[i][j].should.have.property('smallPlaque', expectedWT[exp]);
              }
            }
            done();
          });
      }); // end Should create multiplexer for WT X FS input, PERM bacteria

      it('Should create multiplexer for WT X FS input, REST bacteria', (done) => {
        let mPhage = 160;
        let expectedWT = [69, 94, 93, 94, 68, 68, 189, 94,
                        67, 96, 67, 94, 95, 95, 137, 68];
        let rowPhage = [];
        let colPhage = [];
        for (let i = 0; i < 2; i++) {
          rowPhage.push({
            id: phageList2[0],
            numPhage: mPhage
          });
        }
        for (let i = 0; i < 8; i++) {
          let tmp;
          if (i === 0)
            tmp = phageList2[1];
          else
            tmp = phageList2[i + 2];
          //tmp.numPhage = mPhage;
          colPhage.push({
            id: tmp,
            numPhage: mPhage
          });
        }
        let req = {
          rowPhage: rowPhage,
          colPhage: colPhage,
          lawnType: bactRest,
          location: 'plexer',
          capacity: scenDefaults.plexerCapcaity,
          scenarioData: scenDat2
        };
        request(app)
          .post('/api/cricket/plexer')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            results.should.be.an.Object();
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 8; j++) {
                let exp = i * 8 + j;
                results[i][j].should.have.property('largePlaque', 0);
                results[i][j].should.have.property('smallPlaque', expectedWT[exp]);
              }
            }
            done();
          });
      });

      it('Should create multiplexer for FS X FS input, PERM bacteria', (done) => {
        let mPhage = 123;
        let expectedMut = [146, 100, 102, 149, 149, 147, 52, 102,
                         101, 100, 101, 102, 147, 102, 75, 101];
      let expectedWT = [0, 2, 0, 0, 0, 2, 50, 0,
                        1, 0, 1, 0, 2, 0, 74, 1];
        let rowPhage = [];
        let colPhage = [];
        for (let i = 1; i < 4; i += 2) {
          rowPhage.push({
            id: phageList2[i],
            numPhage: mPhage
          });
        }
        for (let i = 0; i < 8; i++) {
          let tmp;
          if (i === 0)
            tmp = phageList2[1];
          else
            tmp = phageList2[i + 2];
          colPhage.push({
            id: tmp,
            numPhage: mPhage
          });
        }
        let req = {
          rowPhage: rowPhage,
          colPhage: colPhage,
          lawnType: bactPerm,
          location: 'plexer',
          capacity: scenDefaults.plexerCapcaity,
          scenarioData: scenDat2
        };

        request(app)
          .post('/api/cricket/plexer')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            results.should.be.an.Object();
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 8; j++) {
                let exp = i * 8 + j;
                results[i][j].should.have.property('largePlaque', expectedMut[exp]);
                results[i][j].should.have.property('smallPlaque', expectedWT[exp]);
              }
            }
            done();
          });
      }); // end Should create multiplexer for FS X FS input, PERM bacteria

      it('Should create multiplexer for FS X FS input, REST bacteria', (done) => {
        let mPhage = 126;

        let expectedWT = [0, 2, 0, 1, 0, 1, 52, 0,
                        2, 0, 1, 0, 0, 0, 76, 0];
        let rowPhage = [];
        let colPhage = [];
        for (let i = 1; i < 4; i += 2) {
          rowPhage.push({
            id: phageList2[i],
            numPhage: mPhage
          });
        }
        for (let i = 0; i < 8; i++) {
          let tmp;
          if (i === 0)
            tmp = phageList2[1];
          else
            tmp = phageList2[i + 2];
          //tmp.numPhage = mPhage;
          colPhage.push({
            id: tmp,
            numPhage: mPhage
          });
        }
        let req = {
          rowPhage: rowPhage,
          colPhage: colPhage,
          lawnType: bactRest,
          location: 'plexer',
          capacity: scenDefaults.plexerCapcaity,
          scenarioData: scenDat2
        };

        request(app)
          .post('/api/cricket/plexer')
          .send(req)
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            let results = res.body;
            results.should.be.an.Object();
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 8; j++) {
                let exp = i * 8 + j;
                results[i][j].should.have.property('largePlaque', 0);
                results[i][j].should.have.property('smallPlaque', expectedWT[exp]);
              }
            }
            done();
          });
      }); // end Should create multiplexer for FS X FS input, REST bacteria

    }); // end Testing multiplexer


    after((done) => {
      // Clean the database
      Phage.remove(() => {
        done();
      });
    }); // end after
  });  // end Testing the Plexer POST methods

  // Define a post-tests function

});
