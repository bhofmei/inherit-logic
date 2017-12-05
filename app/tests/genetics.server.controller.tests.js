// Load the test dependencies
const app = require('../../index.js');
const request = require('supertest');
const should = require('should');
const clone = require('clone');
const mongoose = require('mongoose');
const Phage = mongoose.model('Phage');
const scenDefaults = require('../../config/scenario.config');
const phageScen = require('../genetics/phage.scenario');
const phageExp = require('../genetics/phage.experiment');
const plateExp = require('../genetics/plate.experiment');;

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
    scenario2 = clone(scenario);
    scenario2.id = 1;
    scenario2.referencePhage.push('{"numToMake": 5, "isWildType": false, "frameshifts": {"howMany": [1,2], "mixed": "sometimes", "readable": "any", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage containing a one to two frameshifts"}');
    done();
  });

  /*describe('Testing the Plate POST methods', () => {

    before((done) => {
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
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

    describe('Test over capacity', () => {
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
    after((done) => {
      // Clean the database
      Phage.remove(() => {
        done();
      });
    });
  }); // end Testing the Plate POST methods*/

  describe('Testing the Plexer POST methods', () => {
    before((done) => {
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
      let tmp = phageScen.generateScenario(scenario2);
      // has strainList and scenData
      scenDat2 = JSON.stringify(tmp.scenData);
      //console.log(tmp.strainList);
      tmp.strainList.forEach((strain) => {
        console.log(strain.mutationList);
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

    /* PHAGE:
    0. WT
    1. [ { kind: 'minusOne', location: 240 } ]
    2. deletion: [ 110, 205 ]
    3. [ { kind: 'plusOne', location: 86 } ]
    4. [ { kind: 'minusOne', location: 211 }, { kind: 'minusOne', location: 287 } ]
    5. [ { kind: 'minusOne', location: 201 }, { kind: 'minusOne', location: 226 } ]
    6. [ { kind: 'plusOne', location: 270 }, { kind: 'plusOne', location: 344 } ]
    7. [ { kind: 'plusOne', location: 142 } ]
    8. [ { kind: 'minusOne', location: 79 }, { kind: 'plusOne', location: 156 } ]
    9. [ { kind: 'minusOne', location: 243 } ]
    */

    describe('Testing multiplexer', () => {
      it('Should create multiplexer for all WT input, PERM bacteria', (done) => {
        let mPhage = 10000;
        let expectedMut = [4, 6, 5, 5, 2, 2, 6, 4, 1, 2, 4, 6, 1, 3, 3, 6];
        let expectedWT = [9800, 9800, 10200, 10200, 10200, 9800, 10200, 10200, 10200, 10200, 9800, 10200, 10200, 9800, 9800, 10200];
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
          location: 'multiplexer',
          capacity: 20000,
          scenarioData: scenDat2
        };
        /*
          0, 0: 4 mut, 9800 WT    1, 0: 1 mut, 10200 WT
          0, 1: 6 mut, 9800 WT    1, 1: 2 mut, 10200 WT
          0, 2: 5 mut, 10200 WT   1, 2: 4 mut, 9800 WT
          0, 3: 5 mut, 10200 WT   1, 3: 6 mut, 10200 WT
          0, 4: 2 mut, 10200 WT   1, 4: 1 mut, 10200 WT
          0, 5: 2 mut, 9800 WT    1, 5: 3 mut, 9800 WT
          0, 6: 6 mut, 10200 WT   1, 6: 3 mut, 9800 WT
          0, 7: 4 mut, 10200 WT   1, 7: 6 mut, 10200 WT
        */
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
        let mPhage = 11000;
        let expectedWT = [10790, 10790, 10790, 10790, 11208, 10790, 11208, 10790, 10790, 10790, 11208, 10790, 11208, 10790, 11208, 10790];
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
          location: 'multiplexer',
          capacity: 20000,
          scenarioData: scenDat2
        };
        /*
          0, 0: 1 mut, 10790 WT   1, 0: 1 mut, 10790 WT
          0, 1: 1 mut, 10790 WT   1, 1: 4 mut, 10790 WT
          0, 2: 4 mut, 10790 WT   1, 2: 3 mut, 11208 WT
          0, 3: 3 mut, 10790 WT   1, 3: 3 mut, 10790 WT
          0, 4: 8 mut, 11208 WT   1, 4: 1 mut, 11208 WT
          0, 5: 5 mut, 10790 WT   1, 5: 1 mut, 10790 WT
          0, 6: 3 mut, 11208 WT   1, 6: 2 mut, 11208 WT
          0, 7: 7 mut, 10790 WT   1, 7: 1 mut, 10790 WT
        */
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
        let mPhage = 10500;
        let expectedMut = [5153, 5151, 5357, 5154, 5155, 5364, 5, 5153, 5367, 5148, 5168, 5377, 5366, 5361, 5, 5158];
        let expectedWT = [5154, 5152, 5353, 5160, 5160, 5359, 10708, 5160, 5377, 5149, 5159, 5367, 5369, 5355, 10725, 5160];
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
          lawnType: bactPerm,
          location: 'multiplexer',
          capacity: 20000,
          scenarioData: scenDat2
        };
        //let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
        /*
          0, 0: 5147 FS, 5147 WT, 1 mut, 1 mWT, 5 recomb, 6 rWT
          0, 1: 5147 FS, 5147 WT, 1 mut, 1 mWT, 3 recomb, 4 rWT
          0, 2: 5352 FS, 5352 WT, 2 mut, 1 mWT, 3 recomb, 0 rWT
          0, 3: 5147 FS, 5147 WT, 1 mut, 0 mWT, 6 recomb, 13 rWT
          0, 4: 5147 FS, 5147 WT, 0 mut, 3 mWT, 8 recomb, 10 rWT
          0, 5: 5352 FS, 5352 WT, 4 mut, 2 mWT, 8 recomb, 5 rWT
          0, 6: 0 FS, 10704 WT, 3 mut, 0 mWT, 2 recomb, 4 rWT
          0, 7: 5147 FS, 5147 WT, 1 mut, 0 mWT, 5 recomb, 13 rWT
          1, 0: 5352 FS, 5352 WT, 3 mut, 0 mWT, 12 recomb, 25 rWT
          1, 1: 5147 FS, 5147 WT, 0 mut, 0 mWT, 1 recomb, 2 rWT
          1, 2: 5147 FS, 5147 WT, 6 mut, 0 mWT, 15 recomb, 12 rWT
          1, 3: 5352 FS, 5352 WT, 0 mut, 1 mWT, 25 recomb, 14 rWT
          1, 4: 5352 FS, 5352 WT, 2 mut, 2 mWT, 12 recomb, 15 rWT
          1, 5: 5352 FS, 5352 WT, 3 mut, 0 mWT, 6 recomb, 3 rWT
          1, 6: 0 FS, 10704 WT, 4 mut, 0 mWT, 1 recomb, 21 rWT
          1, 7: 5147 FS, 5147 WT, 3 mut, 1 mWT, 8 recomb, 12 rWT
        */
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

      it('Should create multiplexer for WT X FS input, REST bacteria', () => {
        let mPhage = 10600;
        let expectedWT = [5200, 5208, 5411, 5414, 5200, 5419, 10824, 5418, 5407, 5413, 5408, 5200, 5416, 5206, 10397, 5422];
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
          location: 'multiplexer',
          capacity: 20000,
          scenarioData: scenDat2
        };
        /*
          0, 0: 5197 FS, 5197 WT, 3 mut, 1 mWT, 1 recomb, 2 rWT
          0, 1: 5197 FS, 5197 WT, 2 mut, 0 mWT, 6 recomb, 11 rWT
          0, 2: 5402 FS, 5402 WT, 7 mut, 1 mWT, 19 recomb, 8 rWT
          0, 3: 5402 FS, 5402 WT, 3 mut, 3 mWT, 10 recomb, 9 rWT
          0, 4: 5197 FS, 5197 WT, 3 mut, 1 mWT, 11 recomb, 2 rWT
          0, 5: 5402 FS, 5402 WT, 1 mut, 0 mWT, 18 recomb, 17 rWT
          0, 6: 0 FS, 10804 WT, 5 mut, 0 mWT, 1 recomb, 20 rWT
          0, 7: 5402 FS, 5402 WT, 2 mut, 1 mWT, 9 recomb, 15 rWT
          1, 0: 5402 FS, 5402 WT, 3 mut, 2 mWT, 6 recomb, 3 rWT
          1, 1: 5402 FS, 5402 WT, 2 mut, 1 mWT, 11 recomb, 10 rWT
          1, 2: 5402 FS, 5402 WT, 3 mut, 0 mWT, 9 recomb, 6 rWT
          1, 3: 5197 FS, 5197 WT, 4 mut, 2 mWT, 1 recomb, 1 rWT
          1, 4: 5402 FS, 5402 WT, 2 mut, 3 mWT, 15 recomb, 11 rWT
          1, 5: 5197 FS, 5197 WT, 2 mut, 2 mWT, 7 recomb, 7 rWT
          1, 6: 0 FS, 10394 WT, 7 mut, 0 mWT, 1 recomb, 3 rWT
          1, 7: 5402 FS, 5402 WT, 2 mut, 1 mWT, 14 recomb, 19 rWT
        */

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
    }); // end Testing multiplexer


    after((done) => {
      // Clean the database
      Phage.remove(() => {
        done();
      });
    }); // end after
  }); // end Testing the Plexer POST methods

  // Define a post-tests function

});
