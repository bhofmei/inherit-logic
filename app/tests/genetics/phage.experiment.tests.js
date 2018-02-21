const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../config/scenario.config');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../genetics/phage.scenario');
const phageExp = require('../../genetics/phage.experiment');
const pEnum = require('../../genetics/phage.enum');
const debug = require('debug')('genetics:test');

const compareMut = function (expected, actual) {
  // expected is int: negative is minusOne, positive is plusOne, 0 is none
  // expected int value is location
  // actual is full list of mutations -> only look at first
  if (expected !== 0) {
    let mut = actual[0];
    return (mut === expected);
  } else {
    // no expected mutations
    return (actual.length === 0)
  }
};

const compareDel = function (expected, actual) {
  // expected is int: -1 don't check (no valid recomb points), 0 for no deletion otherwise start of deletion
  // actual is actual deletions -> only look at start
  if (expected === -1) {
    return true;
  } else if (expected !== 0) {
    return (expected === actual[0]);
  } else {
    // no expected mutations
    return (actual.length === 0)
  }
};

var scenario = {
  id: 0,
  mutationFreq: scenDefaults.mutationFreq,
  recombinationFreq: scenDefaults.recombinationFreq,
  gcProb: scenDefaults.gcProb,
  minStops: scenDefaults.minStops,
  intraMuteDist: scenDefaults.intraMuteDist,
  interMuteDist: scenDefaults.interMuteDist,
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Second deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "always", "readable": "can", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage bearing compensating +1 and -1 frameshifts resulting in successful translation and a wild type phenotype"}', '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Third deletion phage"}'],
  otherPhage: []
}

describe('Phage experiments unit tests', () => {
  // set up
  let phages = scenario.referencePhage;
  var phageList = [];
  let scenData = {
    interMuteDist: scenario.interMuteDist,
    intraMuteDist: scenario.intraMuteDist,
    deleteSizes: clone(scenDefaults.deleteSizes),
    deleteSpots: clone(scenDefaults.deleteSpots)
  };
  before((done) => {
    // reset random generators
    phageExp.resetEngine();
    phageScen.resetEngine();
    let geneData = phageScen.makeGene(scenario.gcProb, scenario.minStops);
    scenData.wtGene = geneData.wtGene;
    scenData.realStops = geneData.realStops;
    scenData.framesStopList = geneData.framesStopList;
    for (let i = 0; i < phages.length; i++) {
      var phageDetails = phageScen.makePhage(JSON.parse(phages[i]), i, pEnum.PHAGETYPE.REF, scenData);
      scenData = phageDetails.scenData;
      debug('original  phage', phageDetails.phage);
      phageList.push(phageDetails.phage);
    }
    done();
  });
  /* PHAGE:
  0. WT
  1. mutationList: [ -240 ]
  2. deletion: [ 110, 210 ]
  3. mutationList: [ 86 ]
  4. [ -211, -287 ]
  5. deletion: [ 190, 330 ]
  6. [ 129, 193 ]
  7. deletion: [ 80, 170 ]
  */

  /*describe('Test mutagenize', () => {
    before((done) => {
      // reset engines
      phageExp.seedEngine(699);
      phageScen.seedEngine(504);
      done();
    });

    it('Should be able to mutagenize WT', () => {
      let wtPhage = phageList[0];
      let newPhage = phageExp.mutagenize(wtPhage.mutationList, 2);
      // newPhage = [ [ { kind: 'minusOne', location: 41 } ],
      // [ { kind: 'plusOne', location: 346 } ] ]
      debug(newPhage);
      //      newPhage.should.be.an.Array()
      //        .and.have.lengthOf(2);
      //      newPhage[0].should.have.length(1); // should have one mutation
      //      newPhage[0][0].should.have.property('location', 41);
      //      newPhage[1][0].should.have.property('location', 346);

    });
    it('Should be able to mutagenize frameshift', () => {
      let fsPhage = phageList[1];
      let newPhage = phageExp.mutagenize(fsPhage.mutationList, 2);
      // newPhage = [ [ { kind: 'plusOne', location: 226 }, { kind: 'minusOne', location: 240 }],
      //  [ { kind: 'minusOne', location: 23 },
      //    { kind: 'minusOne', location: 240 } ] ]
      debug(newPhage);
      //      newPhage.should.be.an.Array()
      //        .and.have.lengthOf(2);
      //      newPhage[0].should.have.length(2); // should have two mutations
      //      newPhage[0][0].should.have.property('location',226);
      //      newPhage[1][0].should.have.property('location',23);
    });
  }); // end Test mutagenize*/

  describe('Test recombining', () => {

    before((done) => {
      // reset engines
      phageExp.seedEngine(703);
      phageScen.seedEngine(348);
      done();
    });

    describe('Test FS recombination', () => {

      it('Should recombine WT and FS, single crossover', () => {
        let wt = {
          shifts: phageList[0].mutationList,
          deletion: phageList[0].deletion
        };
        let fs = {
          shifts: phageList[1].mutationList,
          deletion: phageList[1].deletion
        };
        let rec = phageExp.recombine(wt, fs, 1, 10);
        //0 - geno 2, 1 - Xover 272 - -240
        //1 - geno 2, 1 - Xover 347 - -240
        //2 - geno 1, 2 - Xover 308 - 0
        //3 - geno 1, 2 - Xover 111 - -240
        //4 - geno 1, 2 - Xover 234 - -240
        //5 - geno 1, 2 - Xover 267 - 0
        //6 - geno 1, 2 - Xover 114 - -240
        //7 - geno 2, 1 - Xover 203 - 0
        //8 - geno 2, 1 - Xover 190 - 0
        //9 - geno 2, 1 - Xover 43 - 0
        let exp = [-240, -240, 0, -240, -240, 0, -240, 0, 0, 0];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts)
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and FS, single crossover

      it('Should recombine WT and FS, double crossover', () => {
        let wt = {
          shifts: phageList[0].mutationList,
          deletion: phageList[0].deletion
        };
        let fs = {
          shifts: phageList[1].mutationList,
          deletion: phageList[1].deletion
        };
        let rec = phageExp.recombine(wt, fs, 2, 10);
        //0 - geno 1, 2 - Xover 85,187 - 0
        //1 - geno 2, 1 - Xover 233,336 - 0
        //2 - geno 1, 2 - Xover 69,292 - -240
        //3 - geno 2, 1 - Xover 39,317 - 0
        //4 - geno 2, 1 - Xover 150,179 - -240
        //5 - geno 1, 2 - Xover 256,313 - -
        //6 - geno 2, 1 - Xover 305,327 - -240
        //7 - geno 2, 1 - Xover 124,237 - -240
        //8 - geno 1, 2 - Xover 63,155 - 0
        //9 - geno 1, 2 - Xover 40,350 - -240
        let exp = [0, 0, -240, 0, -240, 0, -240, -240, 0, -240];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and FS, double crossover

      it('Should recombine WT and FS, triple crossover', () => {
        let wt = {
          shifts: phageList[0].mutationList,
          deletion: phageList[0].deletion
        };
        let fs = {
          shifts: phageList[1].mutationList,
          deletion: phageList[1].deletion
        };
        let rec = phageExp.recombine(wt, fs, 3, 10);
        //0 - geno 2, 1 - Xover 86,103,318 - -240
        //1 - geno 1, 2 - Xover 119,123,313 - 0
        //2 - geno 2, 1 - Xover 141,164,344 - -240
        //3 - geno 1, 2 - Xover 75,316,345 - -240
        //4 - geno 2, 1 - Xover 77,158,222 - 0
        //5 - geno 2, 1 - Xover 18,83,317 - -240
        //6 - geno 1, 2 - Xover 261,346,349 - 0
        //7 - geno 2, 1 - Xover 32,114,294 - -240
        //8 - geno 1, 2 - Xover 88,104,233 - -240
        //9 - geno 1, 2 - Xover 145,188,238 - -240
        let exp = [-240, 0, -240, -240, 0, -240, 0, -240, -240, -240];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and FS, triple crossover

      it('Should recombine FS and FS, single crossover', () => {
        let fs1 = {
          shifts: phageList[1].mutationList,
          deletion: phageList[1].deletion
        }; // -240
        let fs2 = {
          shifts: phageList[3].mutationList,
          deletion: phageList[3].deletion
        }; // 86
        let rec = phageExp.recombine(fs1, fs2, 1, 10);
        //0 - geno 1, 2 - Xover 126 - 0
        //1 - geno 1, 2 - Xover 246 - -240
        //2 - geno 2, 1 - Xover 336 - 86
        //3 - geno 2, 1 - Xover 154 - 86, -240
        //4 - geno 1, 2 - Xover 275 - -240
        //5 - geno 1, 2 - Xover 350 - -240
        //6 - geno 2, 1 - Xover 117 - 86, -240
        //7 - geno 1, 2 - Xover 29 - 86
        //8 - geno 2, 1 - Xover 49 - -240
        //9 - geno 2, 1 - Xover 91 - 86, 240
        let exp = [0, -240, 86, 86, -240, -240, 86, 86, -240, 86];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine FS and FS, single crossover

      it('Should recombine FS and FS, double crossover', () => {
        let fs1 = {
          shifts: phageList[1].mutationList,
          deletion: phageList[1].deletion
        }; // -240
        let fs2 = {
          shifts: phageList[3].mutationList,
          deletion: phageList[3].deletion
        }; // 86
        let rec = phageExp.recombine(fs1, fs2, 2, 10);
        //0 - geno 1, 2 - Xover 152,181 - -240
        //1 - geno 2, 1 - Xover 119,127 - 86
        //2 - geno 1, 2 - Xover 70,296 - 86
        //3 - geno 1, 2 - Xover 108,188 - -240
        //4 - geno 2, 1 - Xover 233,291 - 86, -240
        //5 - geno 1, 2 - Xover 174,275 - 0
        //6 - geno 2, 1 - Xover 42,317 - -240
        //7 - geno 1, 2 - Xover 55,118 - 86, -240
        //8 - geno 1, 2 - Xover 101,311 - 0
        //9 - geno 1, 2 - Xover 114,264 - 0
        let exp = [-240, 86, 86, -240, 86, 0, -240, 86, 0, 0];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine FS and FS, double crossover

      it('Should recombine FS and FS, triple crossover', () => {
        let fs1 = {
          shifts: phageList[1].mutationList,
          deletion: phageList[1].deletion
        }; // 89
        let fs2 = {
          shifts: phageList[3].mutationList,
          deletion: phageList[3].deletion
        }; // 229
        let rec = phageExp.recombine(fs1, fs2, 3, 10);
        //0 - geno 1, 2 - Xover 52,61,307 - -240
        //1 - geno 2, 1 - Xover 48,166,189 - -240
        //2 - geno 2, 1 - Xover 57,160,337 - 0
        //3 - geno 1, 2 - Xover 66,299,345 - 86
        //4 - geno 1, 2 - Xover 35,47,261 - -240
        //5 - geno 2, 1 - Xover 18,53,350 - 86
        //6 - geno 1, 2 - Xover 68,163,268 - 86, -240
        //7 - geno 1, 2 - Xover 14,118,338 - 86, -240
        //8 - geno 1, 2 - Xover 30,59,101 - 0
        //9 - geno 2, 1 - Xover 34,185,203 - -240
        let exp = [-240, -240, 0, 86, -240, 86, 86, 86, 0, -240];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine FS and FS, triple crossover

      it('Should recombine WT and double FS, single crossover', () => {
        let wt = {
          shifts: phageList[0].mutationList,
          deletion: phageList[0].deletion
        };
        let fs2 = {
          shifts: [79, 125],
          deletion: phageList[6].deletion
        } // 79, -125
        let rec = phageExp.recombine(wt, fs2, 1, 10);
        //0 - geno 2, 1 - Xover 250 - 79, -125
        //1 - geno 2, 1 - Xover 306 - 79, -125
        //2 - geno 2, 1 - Xover 33 - 0
        //3 - geno 2, 1 - Xover 316 - 79, -125
        //4 - geno 1, 2 - Xover 14 - 79, -125
        //5 - geno 2, 1 - Xover 136 - 79, -125
        //6 - geno 1, 2 - Xover 289 - 0
        //7 - geno 2, 1 - Xover 274 - 79, -125
        //8 - geno 2, 1 - Xover 135 - 79, -125
        //9 - geno 2, 1 - Xover 292 - 79, -125
        let exp = [79, 79, 0, 79, 79, 79, 0, 79, 79, 79];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      });

      it('Should recombine WT and double FS, double crossover', () => {
        let wt = {
          shifts: phageList[0].mutationList,
          deletion: phageList[0].deletion
        };
        let fs2 = {
          shifts: phageList[6].mutationList,
          deletion: phageList[6].deletion
        }; // 129, -193
        let rec = phageExp.recombine(wt, fs2, 2, 10);
        //0 - geno 2, 1 - Xover 81,134 - -193
        //1 - geno 2, 1 - Xover 88,301 - 0
        //2 - geno 1, 2 - Xover 29,117 - 0
        //3 - geno 2, 1 - Xover 116,137 - -193
        //4 - geno 1, 2 - Xover 79,296 - 129, -193
        //5 - geno 1, 2 - Xover 48,260 - 129, -193
        //6 - geno 2, 1 - Xover 17,187 - -193
        //7 - geno 1, 2 - Xover 250,285 - 0
        //8 - geno 1, 2 - Xover 69,146 - 129
        //9 - geno 1, 2 - Xover 41,268 - 129, -193
        let exp = [-193, 0, 0, -193, 129, 129, -193, 0, 129, 129];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and double FS, double crossover

      it('Should recombine WT and double FS, triple crossover', () => {
        let wt = {
          shifts: phageList[0].mutationList,
          deletion: phageList[0].deletion
        };
        let fs2 = {
          shifts: phageList[6].mutationList,
          deletion: phageList[6].deletion
        }; // 129, -193
        let rec = phageExp.recombine(wt, fs2, 3, 10);
        //0 - geno 2, 1 - Xover 5,94,139 - 129
        //1 - geno 1, 2 - Xover 3,11,28 - 129, -193
        //2 - geno 1, 2 - Xover 11,139,155 - 129, 193
        //3 - geno 1, 2 - Xover 32,292,294 - 129, -193
        //4 - geno 1, 2 - Xover 68,135,214 - 129
        //5 - geno 1, 2 - Xover 154,167,176 - -193
        //6 - geno 1, 2 - Xover 47,60,343 - 0
        //7 - geno 1, 2 - Xover 225,270,311 - 0
        //8 - geno 2, 1 - Xover 90,233,283 - 0
        //9 - geno 1, 2 - Xover 50,124,282 - 0
        let exp = [129, 129, 129, 129, 129, -193, 0, 0, 0, 0];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.shifts);
          let cmp = compareMut(exp[i], phage.shifts);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and double FS, triple crossover
    }); // end Test FS recombine

    describe('Test DEL recombination', () => {

      let wt, del1, del2, del3;
      before((done) => {
        wt = {
          shifts: phageList[0].mutationList,
          deletion: phageList[0].deletion
        };
        del1 = {
          shifts: phageList[2].mutationList,
          deletion: phageList[2].deletion
        };
        del2 = {
          shifts: phageList[5].mutationList,
          deletion: phageList[5].deletion
        };
        del3 = {
          shifts: phageList[7].mutationList,
          deletion: phageList[7].deletion
        };
        done();
      })

      it('Should recombine WT and DEL, single crossover', () => {
        // del1: 110-210
        let rec = phageExp.recombine(wt, del1, 1, 10);
        //0 - geno 1, 2 - Xover 238 - 0
        //1 - geno 2, 1 - Xover 10 - 0
        //2 - geno 1, 2 - Xover (136) - -1
        //3 - geno 2, 1 - Xover 241 - 110
        //4 - geno 2, 1 - Xover 48 - 0
        //5 - geno 1, 2 - Xover (137) - -1
        //6 - geno 2, 1 - Xover 21 - 0
        //7 - geno 2, 1 - Xover 266 - 110
        //8 - geno 1, 2 - Xover 83 - 110
        //9 - geno 2, 1 - Xover 80 - 0
        let exp = [0, 0, -1, 110, 0, -1, 0, 110, 110, 0]
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and DEL, single crossover

      it('Should recombine WT and DEL, double crossover', () => {
        // del1: 110-210
        let rec = phageExp.recombine(wt, del1, 2, 10);
        //0 - geno 1, 2 - Xover 88,328 - 110
        //1 - geno 1, 2 - Xover 92,264 - 110
        //2 - geno 2, 1 - Xover (142) 268 - 110
        //3 - geno 1, 2 - Xover (111) 13 - 110
        //4 - geno 1, 2 - Xover 33,341 - 110
        //5 - geno 2, 1 - Xover 66,254 - 0
        //6 - geno 1, 2 - Xover 223,345 - 0
        //7 - geno 2, 1 - Xover 55,324 - 0
        //8 - geno 2, 1 - Xover (206) 64 - 0
        //9 - geno 1, 2 - Xover (208) 216 - 0
        let exp = [110, 110, 110, 110, 110, 0, 0, 0, 0, 0];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and DEL, double crossover

      it('Should recombine WT and DEL, triple crossover', () => {
        // del1: 110-210
        let rec = phageExp.recombine(wt, del1, 3, 10);
        //0 - geno 2, 1 - Xover 92,101,240 - 110
        //1 - geno 1, 2 - Xover 93,99,109 - 110
        //2 - geno 2, 1 - Xover (110,179) 108 - 0
        //3 - geno 1, 2 - Xover 226,229,273 - 0
        //4 - geno 1, 2 - Xover (186,203) 301 - 0
        //5 - geno 1, 2 - Xover 18,243,337 - 110
        //6 - geno 1, 2 - Xover (135) 271,278 - 0
        //7 - geno 1, 2 - Xover 24,265,313 - 110
        //8 - geno 1, 2 - Xover (193) 76,288 - 110
        //9 - geno 2, 1 - Xover 27,77,312 - 110
        let exp = [110, 110, 0, 0, 0, 110, 0, 110, 110, 110];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine WT and DEL, triple crossover

      it('Should recombine DEL and DEL, no overlap, single crossover', () => {
        // del2: 190-330; del3: 80-170
        let rec = phageExp.recombine(del2, del3, 1, 10);
        //0 - geno 2, 1 - Xover (100) - -1
        //1 - geno 1, 2 - Xover (239) - -1
        //2 - geno 1, 2 - Xover (253) - -1
        //3 - geno 1, 2 - Xover 59 - 80
        //4 - geno 2, 1 - Xover (258) - -1
        //5 - geno 1, 2 - Xover (120) - -1
        //6 - geno 2, 1 - Xover (232) - -1
        //7 - geno 1, 2 - Xover (205) - -1
        //8 - geno 1, 2 - Xover 47 - 80
        //9 - geno 1, 2 - Xover 10 - 80
        let exp = [-1, -1, -1, 80, -1, -1, -1, -1, 80, 80];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine DEL and DEL, no overlap, single crossover

      it('Should recombine DEL and DEL, no overlap, double crossover', () => {
        // del2: 190-330; del3: 80-170
        let rec = phageExp.recombine(del2, del3, 2, 10);
        //0 - geno 1, 2 - Xover 33,176 - 80, 190
        //1 - geno 2, 1 - Xover (248) 22 - 190
        //2 - geno 2, 1 - Xover (100,129) - -1
        //3 - geno 1, 2 - Xover (144,298) - -1
        //4 - geno 2, 1 - Xover (80) 40 - 190
        //5 - geno 1, 2 - Xover 55,61 - 190
        //6 - geno 2, 1 - Xover (309) 5 - 190
        //7 - geno 2, 1 - Xover (236) 50 - 190
        //8 - geno 1, 2 - Xover (308) 182 - 0
        //9 - geno 1, 2 - Xover (102,170) - -1
        let exp = [80, 190, -1, -1, 190, 190, 190, 190, 0, -1]
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine DEL and DEL, no overlap, double crossover

      it('Should recombine DEL and DEL, no overlap, triple crossover', () => {
        // del2: 190-330; del3: 80-170
        let rec = phageExp.recombine(del2, del3, 3, 10);
        //0 - geno 1, 2 - Xover (206,209) 42 - 80
        //1 - geno 2, 1 - Xover (96) 32,173 - 0
        //2 - geno 2, 1 - Xover (130,85) 1 - 190
        //3 - geno 1, 2 - Xover 51,64,182 - 0
        //4 - geno 2, 1 - Xover (201,270) 18 - 190
        //5 - geno 2, 1 - Xover (232,308) 333 - -1
        //6 - geno 2, 1 - Xover (213,288,327) - -1
        //7 - geno 1, 2 - Xover (277) 34,54 - 190
        //8 - geno 2, 1 - Xover (127,316,89) - -1
        //9 - geno 2, 1 - Xover (190,244,256) - -1
        let exp = [80, 0, 190, 0, 190, -1, -1, 190, -1, -1];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine DEL and DEL, no overlap, triple crossover

      it('Should recombine DEL and DEL, overlap, single crossover', () => {
        // del1: 110-210; del2: 190-330
        let rec = phageExp.recombine(del1, del2, 1, 10);
        //0 - geno 1, 2 - Xover (219) - -1
        //1 - geno 2, 1 - Xover (226) - -1
        //2 - geno 2, 1 - Xover 339 - 190
        //3 - geno 2, 1 - Xover 49 - 110
        //4 - geno 1, 2 - Xover 339 - 110
        //5 - geno 2, 1 - Xover (239) - -1
        //6 - geno 2, 1 - Xover 79 - 110
        //7 - geno 1, 2 - Xover (310) - -1
        //8 - geno 2, 1 - Xover (272) - -1
        //9 - geno 2, 1 - Xover (127) - -1
        let exp = [-1, -1, 190, 110, 110, -1, 110, -1, -1, -1];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine DEL and DEL, overlap, single crossover

      it('Should recombine DEL and DEL, overlap, double crossover', () => {
        // del1: 110-210; del2: 190-330
        let rec = phageExp.recombine(del1, del2, 2, 10);
        //0 - geno 1, 2 - Xover (305) 29 - 190
        //1 - geno 2, 1 - Xover (280) 54 - 110
        //2 - geno 1, 2 - Xover (139) 23 - 190
        //3 - geno 2, 1 - Xover (279) 77 - 110
        //4 - geno 1, 2 - Xover (130) 50 - 190
        //5 - geno 2, 1 - Xover (298) 48 - 110
        //6 - geno 1, 2 - Xover (322) 79 - 190
        //7 - geno 2, 1 - Xover (131) 23 - 110
        //8 - geno 1, 2 - Xover (254,258) - -1
        //9 - geno 2, 1 - Xover 67,340 - 110
        let exp = [190, 110, 190, 110, 190, 110, 190, 110, -1, 110];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine DEL and DEL, overlap, double crossover

      it('Should recombine DEL and DEL, overlap, triple crossover', () => {
        // del1: 110-210; del2: 190-330
        let rec = phageExp.recombine(del1, del2, 3, 10);
        //0 - geno 2, 1 - Xover (236,258) 8 - 110
        //1 - geno 1, 2 - Xover (275,276) 89 - 190
        //2 - geno 2, 1 - Xover (238,329,329) - -1
        //3 - geno 2, 1 - Xover (148,189,287) - -1
        //4 - geno 2, 1 - Xover (131,145) 48 - 110
        //5 - geno 2, 1 - Xover (321) 49,340 - 110
        //6 - geno 2, 1 - Xover (218,277) 9 - 110
        //7 - geno 1, 2 - Xover (213,260,275) - -1
        //8 - geno 1, 2 - Xover (199,292) 77 - 190
        //9 - geno 2, 1 - Xover (237,270) 335 - 190
        let exp = [110, 190, -1, -1, 110, 110, 110, -1, 190, 190];
        rec.should.be.an.Array()
          .and.have.lengthOf(10);
        rec.forEach((phage, i) => {
          debug(i, phage.deletion);
          let cmp = compareDel(exp[i], phage.deletion);
          cmp.should.equal(true);
        });
      }); // end Should recombine DEL and DEL, overlap, triple crossover

    }); // end Test DEL recombine

    describe('Test FS middle recombination', () => {
      let fsA, fsB, fsC;
      before((done) => {
        fsA = {
          shifts: [-20],
          deletion: []
        };
        fsB = {
          shifts: [-160],
          deletion: []
        };
        fsC = {
          shifts: phageList[1].mutationList,
          deletion: []
        }; // 240
        done();
      }); // end before

      it('Should have more WT for FS-A x FS-B than FS-B x FS-C, single crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsB, 1, 100); // 20, 160
        let rec2 = phageExp.recombine(fsB, fsC, 1, 100); // 160, 240
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxB', wt1.length, 'BxC', wt2.length);
        // AxB 19 BxC 15
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-B than FS-B x FS-C, single crossover

      it('Should have more WT for FS-A x FS-C than FS-B x FS-C, single crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsC, 1, 100); // 20, 240
        let rec2 = phageExp.recombine(fsB, fsC, 1, 100); // 160, 240
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxC', wt1.length, 'BxC', wt2.length);
        // AxC 27 BxC 6
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-C than FS-B x FS-C, single crossover

      it('Should have more WT for FS-A x FS-C than FS-A x FS-B, single crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsC, 1, 100); // 20, 240
        let rec2 = phageExp.recombine(fsA, fsB, 1, 100); // 20, 160
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxC', wt1.length, 'AxB', wt2.length);
        // AxC 39 AxB 19
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-B than FS-A x FS-C, single crossover

      it('Should have more WT for FS-A x FS-B than FS-B x FS-C, double crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsB, 2, 100); // 20, 160
        let rec2 = phageExp.recombine(fsB, fsC, 2, 100); // 160, 240
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxB', wt1.length, 'BxC', wt2.length);
        // AxB 20 BxC 14
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-B than FS-B x FS-C, double crossover

      it('Should have more WT for FS-A x FS-C than FS-B x FS-C, double crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsC, 2, 100); // 20, 240
        let rec2 = phageExp.recombine(fsB, fsC, 2, 100); // 160, 240
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxC', wt1.length, 'BxC', wt2.length);
        // AxC 27 BxC 13
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-C than FS-B x FS-C, double crossover

      it('Should have more WT for FS-A x FS-C than FS-A x FS-B, double crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsC, 2, 100); // 20, 240
        let rec2 = phageExp.recombine(fsA, fsB, 2, 100); // 20, 160
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxC', wt1.length, 'AxB', wt2.length);
        // AxC 24 AxB 20
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-B than FS-A x FS-C, double crossover

      it('Should have more WT for FS-A x FS-B than FS-B x FS-C, triple crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsB, 3, 100); // 20, 160
        let rec2 = phageExp.recombine(fsB, fsC, 3, 100); // 160, 240
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxB', wt1.length, 'BxC', wt2.length);
        // AxB 20 BxC 17
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-B than FS-B x FS-C, triple crossover

      it('Should have more WT for FS-A x FS-C than FS-B x FS-C, triple crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsC, 3, 100); // 20, 240
        let rec2 = phageExp.recombine(fsB, fsC, 3, 100); // 160, 240
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxC', wt1.length, 'BxC', wt2.length);
        // AxC 28 BxC 24
        wt1.length.should.be.above(wt2.length);
      }); // end Should have more WT for FS-A x FS-C than FS-B x FS-C, triple crossover

      it('Should have similar WT for FS-A x FS-C and FS-A x FS-B, triple crossover', () => {
        let rec1 = phageExp.recombine(fsA, fsC, 3, 100); // 20, 240
        let rec2 = phageExp.recombine(fsA, fsB, 3, 100); // 20, 160
        rec1.should.be.an.Array()
          .and.have.lengthOf(100);
        rec2.should.be.an.Array()
          .and.have.lengthOf(100);
        // filter lists
        let wt1 = rec1.filter((phage) => {
          return phage.shifts.length === 0
        });
        let wt2 = rec2.filter((phage) => {
          return phage.shifts.length === 0
        });
        debug('AxC', wt1.length, 'AxB', wt2.length);
        let dif = Math.abs(wt1.length - wt2.length);
        // AxC 20 AxB 24
       dif.should.be.below(5);
      }); // end Should have similar WT for FS-A x FS-B and FS-A x FS-C, triple crossover

    }); // end Test FS middle recombination
  }); // end Test recombining

  afterEach((done) => {
    scenData.usedDeleteSpots = [];
    scenData.usedShiftSpots = [];
    done()
  })

});
