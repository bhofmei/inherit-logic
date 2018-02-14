const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../config/scenario.config');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../genetics/phage.scenario.js');
const phageExp = require('../../genetics/phage.experiment');
const plateExp = require('../../genetics/plate.experiment');;
const phageEnum = require('../../genetics/phage.enum');
const plateEnum = require('../../genetics/plate.enum');
const debug = require('debug')('genetics:test');

var scenario = {
  id: 0,
  mutationFreq: scenDefaults.mutationFreq,
  recombinationFreq: scenDefaults.recombinationFreq,
  gcProb: scenDefaults.gcProb,
  minStops: scenDefaults.minStops,
  intraMuteDist: scenDefaults.intraMuteDist,
  interMuteDist: scenDefaults.interMuteDist,
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "always", "readable": "can", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage bearing compensating +1 and -1 frameshifts resulting in successful translation and a wild type phenotype"}', '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Second deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}'],
  otherPhage: []
};

var bactPerm = 'B';
var bactRest = 'K';

describe('Plate experiments unit tests', () => {
  let phages = scenario.referencePhage;
  var phageList = [];
  let scenData = {
    mutationFreq: scenario.mutationFreq,
    recombinationFreq: scenario.recombinationFreq,
    interMuteDist: scenario.interMuteDist,
    intraMuteDist: scenario.intraMuteDist,
    deleteSizes: clone(scenDefaults.deleteSizes),
    deleteSpots: clone(scenDefaults.deleteSpots)
  };
  before((done) => {
    phageExp.resetEngine();
    phageScen.resetEngine();
    plateExp.resetEngine();
    let tmp = phageScen.generateScenario(scenario);
    scenData = tmp.scenData;
    phageList = tmp.strainList;
    phageList.forEach((phage) => {
      debug('begin %d %o %o', phage.strainNum, phage.mutationList, phage.deletion);
    })
    done();
  });
  /* PHAGE:
  0. WT
  1. mutationList: [ { kind: 'minusOne', location: 240 } ]
  2. deletion: [ 110, 210 ]
  3. mutationList: [ { kind: 'plusOne', location: 86 } ]
  4. [ { kind: 'minusOne', location: 211 }, { kind: 'minusOne', location: 287 } ]
  5. [ { kind: 'plusOne', location: 201 }, { kind: 'minusOne', location: 226 } ]
  6. deletion: [ 40, 130 ]
  7. [ { kind: 'plusOne', location: 132 } ]
  8. [ { kind: 'plusOne', location: 270 } ]
  */

  /*describe('Testing create phage list for single phage input', () => {

    before((done) => {
      phageExp.seedEngine(435);
      phageScen.seedEngine(134);
      plateExp.seedEngine(794);
      done();
    });

    it('Should create small phage list for WT phage, PERM bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    }); // end Should create small phage list for WT phage, PERM bact

    it('Should create large phage list for WT phage, PERM bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 1300;
      let expMut = 2;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 3 genotypes (2 mut)
      plate.genoList.should.have.lengthOf(1 + expMut);
      plate.strainList.should.have.length(phage1.numPhage + expMut);
    }); // end Should create large phage list for WT phage, PERM bact

    it('Should not create over capacity phage list for WT phage, PERM bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let expMut = 8;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype - over capacity
            plate.genoList.should.have.lengthOf(1);
            plate.strainList.should.equal(false);
    }); // end Should not create over capacity phage list for WT phage, PERM bact

    it('Should create small phage list for WT phage, REST bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    }); // end Should not create over capacity phage list for WT phage, PERM bact

    it('Should create large phage list for WT phage, REST bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 1300;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      let expMut = 0
      // plate should have 1 genotypes (0 mut)
     plate.genoList.should.have.lengthOf(1 + expMut);
      plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    }); // end Should create large phage list for WT phage, REST bact

    it('Should create pseudo over capacity phage list for WT phage, REST bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      let expMut = 9;
      // plate should have 10 genotypes (9 mut) and 1 toomany phage
            plate.genoList.should.have.lengthOf(1 + expMut);
            plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    }); // end Should create pseudo over capacity phage list for WT phage, REST bact

    it('Should create small phage list for FS phage, PERM bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    }); // end Should create small phage list for FS phage, PERM bact

    it('Should create large phage list for FS phage, PERM bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 1300;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      let expMut = 1;
      // plate should have 2 genotypes (1 mut)
            plate.genoList.should.have.lengthOf(1 + expMut);
            plate.strainList.should.have.length(phage1.numPhage + expMut);
    }); // end Should create large phage list for FS phage, PERM bact

    it('Should not create over capacity phage list for FS phage, PERM bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.equal(false);
    }); // end Should not create over capacity phage list for FS phage, PERM bact

    it('Should create small phage list for FS phage, REST bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    }); // end Should create small phage list for FS phage, REST bact

    it('Should create large phage list for FS phage, REST bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 1300;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      let expMut = 2;
      // plate should have 3 genotypes (2 mut)
            plate.genoList.should.have.lengthOf(1 + expMut);
            plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    });

    it('Should create pseudo-over capacity phage list for FS phage, REST bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      let expMut = 4;
      // plate should have 5 genotypes (4 mut)
            plate.genoList.should.have.lengthOf(1 + expMut);
            plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    });

    it('Should create plate for DEL phage, under capacity', () => {
      let phage1 = clone(phageList[2]);
      phage1.numPhage = 1000;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype
        plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.lengthOf(phage1.numPhage);
    }); // end Should create plate for DEL phage, under capacity
  });*/

  describe('Testing create phage list for double phage input', () => {

    before((done) => {
      phageExp.seedEngine(189);
      phageScen.seedEngine(347);
      plateExp.seedEngine(971);
      done();
    });

    describe('Test WT x WT', () => {
      let phage1, phage2;
      beforeEach((done) => {
        phage1 = clone(phageList[0]);
        phage2 = clone(phageList[0]);
        done();
      });

      it('Should create phage list, PERM bact', () => {
        phage1.numPhage = 1000;
        phage2.numPhage = 500;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 937,
        // numGeno: [ 625, 312 ], numMut: [ 0, 0 ],
        // numRecomb: [ 0, 0, 0 ] }
        let total = 937;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 4000;
        phage2.numPhage = 3500;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1000;
        phage2.numPhage = 500;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1063,
        // numGeno: [ 709, 354 ], numMut: [ 0, 0 ],
        // numRecomb: [ 0, 0, 0 ] }
        let total = 1063;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 4000;
        phage2.numPhage = 3500;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 3879,
        // numGeno: [ 2066, 1808 ], numMut: [ 3, 2 ],
        // numRecomb: [ 0, 0, 0 ] }
        let nMut = 5,
          total = 3879;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nMut);
        nStrains.should.equal(total);
      });
    }); // end Test WT x WT

    describe('Test WT x FS', () => {
      let phage1, phage2;
      beforeEach((done) => {
        phage1 = clone(phageList[0]);
        phage2 = clone(phageList[1]);
        done();
      });

      it('Should create phage list, PERM bact', () => {
        phage1.numPhage = 550;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1071,
        // numGeno: [ 686, 377 ], numMut: [ 0, 0 ],
        // numRecomb: [ 8, 0, 0 ] }
        let nRecomb = 8,
          total = 1071;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8529,
        // numGeno: [ 6224, 2289 ], numMut: [ 0, 2 ],
        // numRecomb: [ 12, 2, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 550;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1068,
        // numGeno: [ 686, 377 ], numMut: [ 0, 0 ],
        // numRecomb: [ 5, 0, 0 ] }
        let nRecomb = 5,
          total = 1068;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8900, numGeno: [ 6497, 2390 ], numMut: [ 6, 2 ], numRecomb: [ 0, 5, 0 ] }
        let nMut = 8,
          nRecomb = 5,
          total = 8900;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nMut + nRecomb);
        nStrains.should.equal(total);
      });
    }); // end Test WT x FS

    describe('Test FS x FS', () => {
      let phage1, phage2;
      beforeEach((done) => {
        phage1 = clone(phageList[1]);
        phage2 = clone(phageList[3]);
        done();
      });

      it('Should create phage list, PERM bact', () => {
        phage1.numPhage = 800;
        phage2.numPhage = 950;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1015,
        // numGeno: [ 549, 462 ], numMut: [ 0, 0 ],
        // numRecomb: [ 4, 0, 0 ] }
        let nRecomb = 4,
          total = 1015;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 4100;
        phage2.numPhage = 7800;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 7992,
        // numGeno: [ 5228, 2748 ], numMut: [ 1, 0 ],
        // numRecomb: [ 12, 3, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1000;
        phage2.numPhage = 950;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 938,
        // numGeno: [ 480, 456 ], numMut: [ 0, 0 ],
        // numRecomb: [ 2, 0, 0 ] }
        let nRecomb = 2,
          total = 938;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 4100;
        phage2.numPhage = 7800;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 7984,
        // numGeno: [ 5228, 2748 ], numMut: [ 4, 0 ],
        // numRecomb: [ 0, 4, 0 ] }
        let nMut = 4,
          nRecomb = 4,
          total = 7984;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nMut + nRecomb);
        nStrains.should.equal(total);
      });
    }); // end Test FS x FS

    describe('Test WT x double FS', () => {
      let phage1, phage2;
      beforeEach((done) => {
        phage1 = clone(phageList[0]);
        phage2 = clone(phageList[5]);
        done();
      });

      it('Should create phage list, PERM bact', () => {
        phage1.numPhage = 550;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 938,
        // numGeno: [ 604, 332 ], numMut: [ 0, 0 ], // numRecomb: [ 2, 0, 0 ] }
        let nRecomb = 2,
          total = 938;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8522,
        // numGeno: [ 6224, 2289 ], numMut: [ 3, 2 ],
        // numRecomb: [ 3, 1, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 550;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1068,
        // numGeno: [ 686, 377 ], numMut: [ 0, 0 ],
        // numRecomb: [ 5, 0, 0 ] }
        let nRecomb = 5,
          total = 1068;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 1400;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 3329,
        // numGeno: [ 2305, 1008 ], numMut: [ 1, 0 ],
        // numRecomb: [ 14, 1, 0 ] }
        let nMut = 1,
          nRecomb = 15,
          total = 3329;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nMut + nRecomb);
        nStrains.should.equal(total);
      });
    }); // end Test WT x double FS

    describe('Test WT x DEL', () => {
      let phage1, phage2;
      beforeEach((done) => {
        phage1 = clone(phageList[0]);
        phage2 = clone(phageList[2]);
        done();
      });

      it('Should create phage list, PERM bact', () => {
        phage1.numPhage = 1200;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1275,
        // numGeno: [ 692, 577 ], numMut: [ 0, 0 ],
        // numRecomb: [ 4, 2, 0 ] }
        let nRecomb = 6,
          total = 1275;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8915,
        // numGeno: [ 6497, 2390 ], numMut: [ 6, 1 ],
        // numRecomb: [ 18, 3, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1400;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1482,
        // numGeno: [ 860, 615 ], numMut: [ 0, 0 ],
        // numRecomb: [ 6, 1, 0 ] }
        let nRecomb = 7,
          total = 1482;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8535,
        // numGeno: [ 6224, 2289 ], numMut: [ 3, 2 ],
        // numRecomb: [ 14, 3, 0 ] }
        let nMut = 5,
          nRecomb = 17,
          total = 8535;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nMut + nRecomb);
        nStrains.should.equal(total);
      });
    }); // end Test WT x DEL

    describe('Test DEL x DEL', () => {
      let phage1, phage2;
      beforeEach((done) => {
        phage1 = clone(phageList[2]);
        phage2 = clone(phageList[6]);
        done();
      });

      it('Should create phage list, PERM bact', () => {
        phage1.numPhage = 1250;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1179,
        // numGeno: [ 655, 524 ], numMut: [ 0, 0 ],
        // numRecomb: [ 0, 0, 0 ] }
        let nRecomb = 0,
          total = 1179;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8894,
        // numGeno: [ 6497, 2390 ], numMut: [ 3, 0 ],
        // numRecomb: [ 0, 4, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1400;
        phage2.numPhage = 1200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1487,
        // numGeno: [ 794, 681 ], numMut: [ 0, 0 ],
        // numRecomb: [ 11, 1, 0 ] }
        let nRecomb = 12,
          total = 1487;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8533,
        // numGeno: [ 6224, 2289 ], numMut: [ 2, 2 ],
        // numRecomb: [ 13, 3, 0 ] }
        let nMut = 4,
          nRecomb = 16,
          total = 8533;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nMut + nRecomb);
        nStrains.should.equal(total);
      });
    }); // end Test DEL x DEL

    describe('Test FS x FS, who middle', () => {
      let phageA, phageB, phageC;
      let numPhagePerm = 1400,
          numPhageRest=3500;

      beforeEach((done) => {
        phageA = clone(phageList[3]);
        phageA.mutationList[0].location = 2;
        //phageA.numPhage = numPhage;
        phageB = clone(phageList[7]);
        phageB.mutationList[0].location = 320;
        //phageB.numPhage = numPhage;
        phageC = clone(phageList[8]);
        phageC.mutationList[0].location = 345
        //phageC.numPhage = numPhage;
        done();
      });

      it('Should have more WT for FS-A x FS-B vs FS-B x FS-C, PERM bact', () => {
        phageA.numPhage = numPhagePerm;
        phageB.numPhage = numPhagePerm;
        phageC.numPhage = numPhagePerm;
        let plateAB = plateExp.createPlatePhage(phageA, phageB, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        let plateBC = plateExp.createPlatePhage(phageB, phageC, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // A x B (2, 320) { total: 1482,
        // numGeno: [ 737, 737 ], numMut: [ 0, 0 ],
        // numRecomb: [ 6, 2, 0 ] }
        //0 - geno 1, 2 - Xover 308 - 2, 320
        //1 - geno 2, 1 - Xover 328 - 320
        //2 - geno 1, 2 - Xover 70 - 2, 320
        //3 - geno 2, 1 - Xover 99 - 0
        //4 - geno 2, 1 - Xover 146 - 0
        //5 - geno 2, 1 - Xover 237 - 0
        //0 - geno 1, 2 - Xover 220,305 - 2
        //1 - geno 1, 2 - Xover 110,257 - 2
        // B x C (320, 345) { total: 1331,
        // numGeno: [ 663, 663 ], numMut: [ 0, 0 ],
        // numRecomb: [ 4, 1, 0 ] }
        // 0 - geno 1, 2 - Xover 47 - 345
        // 1 - geno 2, 1 - Xover 74 - 320
        // 2 - geno 2, 1 - Xover 93 - 320
        // 3 - geno 1, 2 - Xover 216 - 345
        // 0 - geno 2, 1 - Xover 160,199 - 345
        let wtAB = plateAB.genoList.filter((el, i) => {
            debug(i, 'AxB', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        let wtBC = plateBC.genoList.filter((el, i) => {
            debug(i, 'BxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        //wtAB.should.be.above(wtBC);
      }); // end Should have more WT for FS-A x FS-B vs FS-B x FS-C, PERM bact

      it('Should have more WT for FS-A x FS-B vs FS-B x FS-C, REST bact', () => {
        phageA.numPhage = numPhageRest;
        phageB.numPhage = numPhageRest;
        phageC.numPhage = numPhageRest;
        let plateAB = plateExp.createPlatePhage(phageA, phageB, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        let plateBC = plateExp.createPlatePhage(phageB, phageC, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // A x B (2, 320) { total: 3407,
        // numGeno: [ 1691, 1691 ], numMut: [ 3, 2 ],
        // numRecomb: [ 17, 3, 0 ] }
        //0 - mut 229
        //1 - mut 127
        //2 - mut 350
        //0 - mut 158
        //1 - mut -98
        //0 - geno 2, 1 - Xover 178 - 0
        //1 - geno 2, 1 - Xover 225 - 0
        //2 - geno 2, 1 - Xover 224 - 0
        //3 - geno 2, 1 - Xover 227 - 0
        //4 - geno 2, 1 - Xover 309 - 0
        //5 - geno 1, 2 - Xover 297 - 2, 320
        //6 - geno 1, 2 - Xover 287 - 2, 320
        //7 - geno 1, 2 - Xover 282 - 2, 320
        //8 - geno 2, 1 - Xover 204 - 0
        //9 - geno 2, 1 - Xover 2 - 2
        //10 - geno 1, 2 - Xover 109 - 2, 320
        //11 - geno 1, 2 - Xover 348 - 2
        //12 - geno 1, 2 - Xover 62 - 2, 320
        //13 - geno 1, 2 - Xover 110 - 2, 320
        //14 - geno 2, 1 - Xover 331 - 320
        //15 - geno 1, 2 - Xover 327 - 2
        //16 - geno 2, 1 - Xover 234 - 0
        //0 - geno 2, 1 - Xover 180,229 - 320
        //1 - geno 2, 1 - Xover 223,252 - 320
        //2 - geno 2, 1 - Xover 13,174 - 320
        // B x C (320, 345) { total: 3623,
        // numGeno: [ 1809, 1809 ], numMut: [ 2, 0 ],
        // numRecomb: [ 0, 3, 0 ] }
        //0 - mut -209
        //1 - mut 32
        //0 - geno 1, 2 - Xover 21,325 - 0
        //1 - geno 2, 1 - Xover 111,246 - 345
        //2 - geno 1, 2 - Xover 113,229 - 320
        let wtAB = plateAB.genoList.filter((el, i) => {
            debug(i, 'AxB',  el.shifts);
            return el.shifts.length === 0
          })
          .length;
        let wtBC = plateBC.genoList.filter((el, i) => {
            debug(i, 'BxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        wtAB.should.be.above(wtBC);
      }); // Should have more WT for FS-A x FS-B vs FS-B x FS-C, REST bact

      it('Should have more WT for FS-A x FS-C vs FS-B x FS-C, PERM bact', () => {
        phageA.numPhage = numPhagePerm;
        phageB.numPhage = numPhagePerm;
        phageC.numPhage = numPhagePerm;
        let plateAC = plateExp.createPlatePhage(phageA, phageC, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        let plateBC = plateExp.createPlatePhage(phageB, phageC, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // A x C (2, 345) { total: 1331,
        // numGeno: [ 663, 663 ], numMut: [ 0, 0 ],
        // numRecomb: [ 2, 3, 0 ] }
        //0 - geno 2, 1 - Xover 142 - 0
        //1 - geno 2, 1 - Xover 208 - 0
        //0 - geno 2, 1 - Xover 23,96 - 345
        //1 - geno 2, 1 - Xover 8,273 - 345
        //2 - geno 1, 2 - Xover 72,120 - 2
        // B x C (320, 345) { total: 1484,
        // numGeno: [ 737, 737 ], numMut: [ 0, 0 ],
        // numRecomb: [ 9, 1, 0 ] }
        //0 - geno 1, 2 - Xover 308 - 345
        //1 - geno 2, 1 - Xover 233 - 320
        //2 - geno 1, 2 - Xover 93 - 345
        //3 - geno 2, 1 - Xover 300 - 320
        //4 - geno 2, 1 - Xover 244 - 320
        //5 - geno 2, 1 - Xover 139 - 320
        //6 - geno 2, 1 - Xover 36 - 320
        //7 - geno 2, 1 - Xover 158 - 320
        //8 - geno 2, 1 - Xover 103 - 320
        //0 - geno 1, 2 - Xover 63,322 - 0
        let wtAC = plateAC.genoList.filter((el, i) => {
            debug(i, 'AxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        let wtBC = plateBC.genoList.filter((el, i) => {
            debug(i, 'BxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        wtAC.should.be.above(wtBC);
      }); // end Should have more WT for FS-A x FS-C vs FS-B x FS-C, PERM bact

      it('Should have more WT for FS-A x FS-C vs FS-B x FS-C, REST bact', () => {
        phageA.numPhage = numPhageRest;
        phageB.numPhage = numPhageRest;
        phageC.numPhage = numPhageRest;
        let plateAC = plateExp.createPlatePhage(phageA, phageC, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        let plateBC = plateExp.createPlatePhage(phageB, phageC, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // A x C (2, 345) { total: 3628,
        // numGeno: [ 1809, 1809 ], numMut: [ 2, 1 ],
        // numRecomb: [ 6, 1, 0 ] }
        //0 - mut 55
        //1 - mut -18
        //0 - mut -271
        //0 - geno 1, 2 - Xover 3 - 2, 345
        //1 - geno 1, 2 - Xover 316 - 2, 345
        //2 - geno 2, 1 - Xover 208 - 0
        //3 - geno 1, 2 - Xover 6 - 2, 345
        //4 - geno 2, 1 - Xover 28 - 0
        //5 - geno 2, 1 - Xover 71 - 0
        //0 - geno 1, 2 - Xover 26,32 - 2
        // B x C (320, 345) { total: 3394,
        // numGeno: [ 1691, 1691 ], numMut: [ 1, 1 ],
        // numRecomb: [ 9, 1, 0 ] }
        //0 - mut -240
        //0 - mut 212
        //0 - geno 2, 1 - Xover 311 - 320
        //1 - geno 1, 2 - Xover 62 - 345
        //2 - geno 1, 2 - Xover 48 - 345
        //3 - geno 1, 2 - Xover 131 - 345
        //4 - geno 2, 1 - Xover 85 - 320
        //5 - geno 2, 1 - Xover 156 - 320
        //6 - geno 2, 1 - Xover 187 - 320
        //7 - geno 2, 1 - Xover 299 - 320
        //8 - geno 2, 1 - Xover 102 - 320
        //0 - geno 2, 1 - Xover 213,222 - 345
        let wtAC = plateAC.genoList.filter((el, i) => {
            debug(i, 'AxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        let wtBC = plateBC.genoList.filter((el, i) => {
            debug(i, 'BxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        wtAC.should.be.above(wtBC);
      }); // Should have more WT for FS-A x FS-C vs FS-B x FS-C, REST bact

      it('Should have more WT for FS-A x FS-C vs FS-A x FS-B, PERM bact', () => {
        phageA.numPhage = numPhagePerm;
        phageB.numPhage = numPhagePerm;
        phageC.numPhage = numPhagePerm;
        let plateAC = plateExp.createPlatePhage(phageA, phageC, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        let plateAB = plateExp.createPlatePhage(phageA, phageB, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // A x C (2, 345) { total: 1333,
        // numGeno: [ 663, 663 ], numMut: [ 0, 0 ],
        // numRecomb: [ 6, 1, 0 ] }
        //0 - geno 2, 1 - Xover 159 - 0
        //1 - geno 2, 1 - Xover 200 - 0
        //2 - geno 1, 2 - Xover 84 - 2, 345
        //3 - geno 2, 1 - Xover 340 - 0
        //4 - geno 2, 1 - Xover 1 - 2
        //5 - geno 1, 2 - Xover 84 - 2
        //0 - geno 2, 1 - Xover 84,112 - 345
        // A x B (2, 320) { total: 1330,
        // numGeno: [ 663, 663 ], numMut: [ 0, 0 ],
        // numRecomb: [ 3, 1, 0 ] }
        //0 - geno 2, 1 - Xover 125 - 0
        //1 - geno 2, 1 - Xover 336 - 320
        //2 - geno 1, 2 - Xover 120 - 2, 320
        //0 - geno 2, 1 - Xover 44,53 - 320
        let wtAC = plateAC.genoList.filter((el, i) => {
            debug(i, 'AxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        let wtAB = plateAB.genoList.filter((el, i) => {
            debug(i, 'AxB', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        wtAC.should.be.above(wtAB);
      }); // end Should have more WT for FS-A x FS-C vs FS-A x FS-B, PERM bact

      it('Should have more WT for FS-A x FS-C vs FS-A x FS-B, REST bact', () => {
        phageA.numPhage = numPhageRest;
        phageB.numPhage = numPhageRest;
        phageC.numPhage = numPhageRest;
        let plateAC = plateExp.createPlatePhage(phageA, phageC, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        let plateAB = plateExp.createPlatePhage(phageA, phageB, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // A x C (2, 345) { total: 3386,
        // numGeno: [ 1691, 1691 ], numMut: [ 1, 1 ],
        // numRecomb: [ 1, 1, 0 ] }
        //0 - mut -143
        //0 - mut 132
        //0 - geno 2, 1 - Xover 201 - 0
        //0 - geno 2, 1 - Xover 23,121 - 345
        // A x B (2, 320) { total: 3623,
        // numGeno: [ 1809, 1809 ], numMut: [ 2, 0 ],
        // numRecomb: [ 2, 1, 0 ] }
        //0 - mut -334
        //1 - mut 144
        //0 - geno 1, 2 - Xover 210 - 2, 320
        //1 - geno 1, 2 - Xover 286 - 2, 320
        //0 - eno 2, 1 - Xover 266,347 - 0
        let wtAC = plateAC.genoList.filter((el, i) => {
            debug(i, 'AxC', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        let wtAB = plateAB.genoList.filter((el, i) => {
            debug(i, 'AxB', el.shifts);
            return el.shifts.length === 0
          })
          .length;
        wtAC.should.be.aboveOrEqual(wtAB);
      }); // Should have more WT for FS-A x FS-C vs FS-A x FS-B, REST bact
    }); // end Test FS x FS, who middle

  }); // end Testing create phage list for double phage input

  /*describe('Testing generate plate for single phage input', () => {

      before((done) => {
        phageExp.seedEngine(639);
        phageScen.seedEngine(373);
        plateExp.seedEngine(882);
        done();
      });

      describe('Test for WT phage', () => {
        let plateSm, plateLg, nMutLg;
        let nSmall = 500,
          nLarge = 1300;

        before((done) => {
          let phage1 = clone(phageList[0]);
          phage1.numPhage = nSmall;
          plateSm = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          let phage2 = clone(phage1);
          phage2.numPhage = nLarge;
          plateLg = plateExp.createPlatePhage(phage2, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // 2 mutants
          // 1. [ { kind: 'minusOne', location: 305 } ]
          // 2. [ { kind: 'plusOne', location: 248 } ]

          nMutLg = plateLg.genoList.length - 1;
          for (let i = 0; i < nMutLg; i++) {
            debug(plateLg.genoList[i + 1].shifts);
          }
          done();
        });

        it('Should generate small plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nSmall);
          bPhage.should.equal(0);
        }); // end Should generate small plate, PERM bacteria

        it('Should generate small plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nSmall);
          bPhage.should.equal(0);
        }); // end Should generate small plate, REST bacteria

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nLarge + nMutLg);
          lPhage.should.equal(nLarge);
          bPhage.should.equal(nMutLg);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nLarge);
          lPhage.should.equal(nLarge);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria

      }); // end Test WT phage

      describe('Test for FS phage', () => {
        let plateSm, plateLg, nMut;
        let nSmall = 500,
          nLarge = 1450;
        before((done) => {
          let phage1 = clone(phageList[1]);
          phage1.numPhage = nSmall;
          plateSm = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          let phage2 = clone(phage1);
          phage2.numPhage = nLarge;
          plateLg = plateExp.createPlatePhage(phage2, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // 1 mutants
          // 1. [ { kind: 'plus', location: 19 },
          //    { kind: 'minusOne', location: 240 } ]

          // has WT phenotype
          nMut = plateLg.genoList.length - 1;
          for (let i = 0; i < nMut; i++) {
            debug(plateLg.genoList[i + 1].shifts);
          }
          done();
        }); // end before

        it('Should generate small plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(0);
          bPhage.should.equal(nSmall);
        }); // end Should generate small plate, PERM bacteria

        it('Should generate small plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(0);
          bPhage.should.equal(0);
        }); // end Should generate small plate, REST bacteria

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nLarge + nMut);
          lPhage.should.equal(nMut);
          bPhage.should.equal(nLarge);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nMut);
          lPhage.should.equal(nMut);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria
      }); // end Test FS phage

    }); // end Test generate plate for single phage input*/

/*  describe('Testing generate plate for double phage input', () => {

      before((done) => {
        phageExp.seedEngine(790);
        phageScen.seedEngine(16);
        plateExp.seedEngine(723);
        done();
      }); // end before

      describe('Test for WT x WT phage', () => {
        let plateB, nMut, nPhage1, nPhage2;
        let mPhage1 = 1400,
          mPhage2 = 1300;

        before((done) => {
          let phage1 = clone(phageList[0]);
          phage1.numPhage = mPhage1;
          let phage2 = clone(phage1);
          phage2.numPhage = mPhage2;
          plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // { total: 1475,
          // numGeno: [ 765, 710 ], numMut: [ 0, 0 ], // numRecomb: [ 0, 0, 0 ] }

          nPhage1 = 765, nPhage2 = 710;
          nMut = plateB.genoList.length - 2;
          for (let i = 0; i < plateB.genoList.length; i++) {
            debug(plateB.genoList[i].shifts);
          }
          done();
        }); // end before

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nPhage1 + nPhage2 + nMut);
          lPhage.should.equal(nPhage1 + nPhage2);
          bPhage.should.equal(nMut);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nPhage1 + nPhage2);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria
      }); // end Test WTxWT phage

      describe('Test for WT x FS phage', () => {
        let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
        let mPhage1 = 1000,
          mPhage2 = 2000;
        before((done) => {
          let phage1 = clone(phageList[0]);
          phage1.numPhage = mPhage1;
          let phage2 = clone(phageList[1]);
          phage2.numPhage = mPhage2;
          plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // { total: 1919,
          // numGeno: [ 1274, 637 ], numMut: [ 2, 0 ],
          // numRecomb: [ 5, 1, 0 ] }
          // FS geno first
          // 1 mut, 1 mut WT, 1 recomb mut, 5 recomb WT
          nPhage1 = 637, nPhage2 = 1274;
          nMut = plateB.genoList.length - 2;
          for (let i = 0; i < nMut + 2; i++) {
            debug(plateB.genoList[i].shifts);
          }
          nMutHiddenPheno = 6;
          nMutPheno = nMut - nMutHiddenPheno;
          done();
        }); // end before

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nPhage1 + nPhage2 + nMut);
          lPhage.should.equal(nPhage1 + nMutHiddenPheno);
          bPhage.should.equal(nPhage2 + nMutPheno);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nPhage1 + nMutHiddenPheno);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria
      }); // end Test WTxFS phage

      describe('Test for FS x FS phage', () => {
        let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
        let mPhage1 = 1400,
          mPhage2 = 1400;
        before((done) => {
          let phage1 = clone(phageList[1]);
          phage1.numPhage = mPhage1;
          let phage2 = clone(phageList[3]);
          phage2.numPhage = mPhage2;
          plateB = plateExp.createPlatePhage(phage1, phage2, null, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // { total: 1484,
          // numGeno: [ 737, 737 ], numMut: [ 0, 0 ],
          // numRecomb: [ 8, 2, 0 ] }
          // FS1 geno first
          // 4 recomb mut, 4 recomb WT
          nPhage1 = 737, nPhage2 = 737;
          nMut = plateB.genoList.length - 2;
          for (let i = 0; i < plateB.genoList.length; i++) {
            debug(plateB.genoList[i].shifts);
          }
          nMutHiddenPheno = 4;
          nMutPheno = nMut - nMutHiddenPheno;
          done();
        }); // end before

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nPhage1 + nPhage2 + nMut);
          lPhage.should.equal(nMutHiddenPheno);
          bPhage.should.equal(nPhage1 + nPhage2 + nMutPheno);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nMutHiddenPheno);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria
      }); // end Test FSxFS phage

      describe('Test for WT x double FS phage', () => {
        let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
        let mPhage1 = 1000,
          mPhage2 = 1400;
        before((done) => {
          let phage1 = clone(phageList[0]);
          phage1.numPhage = mPhage1;
          let phage2 = clone(phageList[5]);
          // adjust positon to increase chances of recomb
          phage2.mutationList[0].location = 103;
          phage2.numPhage = mPhage2;
          plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // { total: 1334,
          // numGeno: [ 773, 552 ], numMut: [ 0, 0 ],
          // numRecomb: [ 8, 1, 0 ] }
          // FS geno first
          // 3 recomb mut, 6 recomb WT
          nPhage1 = 552, nPhage2 = 773;
          nMut = plateB.genoList.length - 2;
          for (let i = 0; i < nMut + 2; i++) {
            debug(plateB.genoList[i].shifts);
          }
          nMutHiddenPheno = 6;
          nMutPheno = nMut - nMutHiddenPheno;
          done();
        }); // end before

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nPhage1 + nPhage2 + nMut);
          lPhage.should.equal(nPhage1 + nPhage2 + nMutHiddenPheno);
          bPhage.should.equal( nMutPheno);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nPhage1 + nPhage2 + nMutHiddenPheno);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria
      }); // end Test WTxdouble FS phage

      describe('Test for WT x DEL phage', () => {
        let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
        let mPhage1 = 1400,
          mPhage2 = 1300;
        before((done) => {
          let phage1 = clone(phageList[0]);
          phage1.numPhage = mPhage1;
          let phage2 = clone(phageList[2]);
          phage2.numPhage = mPhage2;
          plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // { total: 1331,
          // numGeno: [ 687, 638 ], numMut: [ 0, 0 ],
          // numRecomb: [ 5, 1, 0 ] }
          // WT geno first
          // 0 mut, 0 mut WT, 3 recomb mut, 3 recomb WT
          nPhage1 = 687, nPhage2 = 638;
          nMut = plateB.genoList.length - 2;
          for (let i = 0; i < nMut + 2; i++) {
            debug(plateB.genoList[i].shifts, plateB.genoList[i].deletion);
          }
          nMutHiddenPheno = 3;
          nMutPheno = nMut - nMutHiddenPheno;
          done();
        }); // end before

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nPhage1 + nPhage2 + nMut);
          lPhage.should.equal(nPhage1 + nMutHiddenPheno);
          bPhage.should.equal(nPhage2 + nMutPheno);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nPhage1 + nMutHiddenPheno);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria
      }); // end Test WTxDEL phage

      describe('Test for DEL x DEL phage', () => {
        let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
        let mPhage1 = 1500,
          mPhage2 = 1500;
        before((done) => {
          let phage1 = clone(phageList[2]);
          phage1.numPhage = mPhage1;
          let phage2 = clone(phageList[6]);
          phage2.numPhage = mPhage2;
          plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
          // { total: 1432,
          // numGeno: [ 711, 711 ], numMut: [ 0, 0 ],
          // numRecomb: [ 8, 2, 0 ] }
          // DEL1 geno first
          // 0 mut, 0 mut WT, 10 recomb mut, 0 recomb WT
          nPhage1 = 711, nPhage2 = 711;
          nMut = plateB.genoList.length - 2;
          for (let i = 0; i < nMut + 2; i++) {
            debug(plateB.genoList[i].shifts, plateB.genoList[i].deletion);
          }
          nMutHiddenPheno = 0;
          nMutPheno = nMut - nMutHiddenPheno;
          done();
        }); // end before

        it('Should generate large plate, PERM bacteria', () => {
          let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          let nPhage = lPhage + bPhage;
          nPhage.should.equal(nPhage1 + nPhage2 + nMut);
          lPhage.should.equal(nMutHiddenPheno);
          bPhage.should.equal(nPhage1 + nPhage2 + nMutPheno);
        }); // end Should generate large plate, PERM bacteria

        it('Should generate large plate, REST bacteria', () => {
          let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
          plate.should.be.an.Object();
          plate.full.should.equal(false);
          let lPhage = plate.smallPlaque.length;
          let bPhage = plate.largePlaque.length;
          lPhage.should.equal(nMutHiddenPheno);
          bPhage.should.equal(0);
        }); // end Should generate large plate, REST bacteria
      }); // end Test DELxDEL phage
    }); // end Test generate plate for double phage input*/

  /*describe('Test generate plate over capacity', () => {

    before((done) => {
      phageExp.seedEngine(763);
      phageScen.seedEngine(917);
      plateExp.seedEngine(748);
      done();
    }); // end before

    it('Should not create plate for single WT phage input, PERM bact', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let phagePlate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      var plate = plateExp.generatePlate(bactPerm, phagePlate.genoList, phagePlate.strainList, scenDefaults.plateCapacity, scenData);
      plate.full.should.equal(true);
      plate.smallPlaque.should.have.lengthOf(0);
      plate.largePlaque.should.have.lengthOf(0);
    }); // end Should not create plate for single WT phage input, PERM bact

    it('Should not create plate for single WT phage input, REST bact', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let phagePlate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      var plate = plateExp.generatePlate(bactRest, phagePlate.genoList, phagePlate.strainList, scenDefaults.plateCapacity, scenData);
      plate.full.should.equal(true);
      plate.smallPlaque.should.have.lengthOf(0);
      plate.largePlaque.should.have.lengthOf(0);
    }); // end Should not create plate for single WT phage input, REST bact

    it('Should not create plate for WT x FS phage input, PERM bact', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 2000;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = 3000;
      let phagePlate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      var plate = plateExp.generatePlate(bactPerm, phagePlate.genoList, phagePlate.strainList, scenDefaults.plateCapacity, scenData);
      plate.full.should.equal(true);
      plate.smallPlaque.should.have.lengthOf(0);
      plate.largePlaque.should.have.lengthOf(0);
    }); // end Should not create plate for WT x FS phage input, PERM bact

    it('Should not create plate for WT x FS phage input, REST bact', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 3000;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = 2000;
      let phagePlate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 2912,
      // numGeno: [ 1734, 1156 ], numMut: [ 4, 0 ],
      // numRecomb: [ 15, 3, 0 ] }
      // WT first
      var plate = plateExp.generatePlate(bactRest, phagePlate.genoList, phagePlate.strainList, scenDefaults.plateCapacity, scenData);
      plate.full.should.equal(true);
      plate.smallPlaque.should.have.lengthOf(0);
      plate.largePlaque.should.have.lengthOf(0);
    }); // end Should not create plate for WT x FS phage input, REST bact
  }); // end Test generate plate over capacity*/

  /*describe('Test create full plate', () => {
    // before, reset random engines so we can use the results from this to test the controller
    before((done) => {
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
      done();
    }); // end before

    it('Should create plate for single, WT input, PERM bacteria', () => {
      let nPhage = 1300,
        nMut = 0;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // numMut 0
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage);
      bPhage.should.equal(nMut);
      nGeno.should.equal(nMut + 1);
    }); // end Should create plate for single, WT input, PERM bacteria

    it('Should create plate for single, WT input, REST bacteria', () => {
      let nPhage = 1300,
        nMut = 3;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // numMut 3
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + 1);
    }); // end Should create plate for single, WT input, REST bacteria

    it('Should create plate for single, FS input, PERM bacteria', () => {
      let nPhage = 1300,
        nMutWT = 0,
        nMut = 2;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // numMut 2 (0 WT pheno)
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(nPhage + nMut - nMutWT);
      nGeno.should.equal(nMut + 1);
    }); // end Should create plate for single, FS input, PERM bacteria

    it('Should create plate for single, FS input, REST bacteria', () => {
      let nPhage = 1300,
        nMutWT = 1,
        nMut = 2;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      // numMut 2 (1 WT mut)
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + 1);
    }); // end Should create plate for single, FS input, REST bacteria

    it('Should create plate for WTxWT input, PERM bacteria', () => {
      let mPhage1 = 1300,
        mPhage2 = 1400,
        nMut = 0,
        nPhage1 = 710,
        nPhage2 = 765;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phage1);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1475,
      // numGeno: [ 765, 710 ], numMut: [ 0, 0 ],
      // numRecomb: [ 0, 0, 0 ] }
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2);
      bPhage.should.equal(nMut);
      nGeno.should.equal(nMut + 2);
    }); // end Should create plate for WTxWT input, PERM bacteria

    it('Should create plate for WTxWT input, REST bacteria', () => {
      let mPhage1 = 1400,
        mPhage2 = 1300,
        nMut = 0,
        nPhage1 = 687,
        nPhage2 = 638;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phage1);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      // { total: 1325,
      // numGeno: [ 687, 638 ], numMut: [ 0, 0 ],
      // numRecomb: [ 0, 0, 0 ] }
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + 2);
    }); // end Should create plate for WTxWT input, REST bacteria

    it('Should create plate for WTxFS input, PERM bacteria', () => {
      let mPhage1 = 1100,
        mPhage2 = 1400,
        nMut = 9,
        nPhage1 = 649,
        nPhage2 = 826,
        nMutWT = 2;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1486,
      // numGeno: [ 826, 649 ], numMut: [ 0, 0 ],
      // numRecomb: [ 10, 1, 0 ]  }
      // FS is first
      // 2 recomb WT, 9 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      plate.full.should.equal(false);
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(nPhage2 + nMut);
      nGeno.should.equal(nMut + nMutWT + 2)
    }); // end Should create plate for WTxFS input, PERM bacteria

    it('Should create plate for WTxFS input, REST bacteria', () => {
      let mPhage1 = 1200,
        mPhage2 = 1500,
        nMut = 5,
        nPhage1 = 632,
        nPhage2 = 790,
        nMutWT = 6;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1433,
      // numGeno: [ 790, 632 ], numMut: [ 0, 0 ],
      // numRecomb: [ 10, 1, 0 ] }
      // FS is first
      // 6 recomb WT, 5 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + nMutWT + 2)
    }); // end Should create plate for WTxFS input, REST bacteria

    it('Should create plate for FSxFS input, PERM bacteria', () => {
      let mPhage1 = 1400,
        mPhage2 = 1400,
        nMut = 5,
        nPhage1 = 663,
        nPhage2 = 663,
        nMutWT = 4;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1335,
      // numGeno: [ 663, 663 ], numMut: [ 0, 0 ],
      // numRecomb: [ 8, 1, 0 ] }
      // FS 1 first
      // 4 recomb WT, 5 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(nPhage1 + nPhage2 + nMut);
      nGeno.should.equal(nMut + nMutWT + 2)
    }); // end Should create plate for FSxFS input, PERM bacteria

    it('Should create plate for FSxFS input, REST bacteria', () => {
      let mPhage1 = 1500,
        mPhage2 = 1400,
        nMut = 2,
        nPhage1 = 736,
        nPhage2 = 687,
        nMutWT = 2;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1427,
      // numGeno: [ 736, 687 ], numMut: [ 0, 0 ],
      // numRecomb: [ 2, 2, 0 ] }
      // FS 1 is first
      // 2 recomb WT, 2 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + nMutWT + 2)
    }); // end Should create plate for FSxFS input, REST bacteria

    it('Should create plate for WT x double FS input, PERM bacteria', () => {
      let mPhage1 = 1100,
        mPhage2 = 1400,
        nMut = 0,
        nPhage1 = 583,
        nPhage2 = 742,
        nMutWT = 7;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[5]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1332,
      // numGeno: [ 742, 583 ], numMut: [ 0, 0 ],
      // numRecomb: [ 6, 1, 0 ] }
      // FS is first
      // 7 recomb WT, 0 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      plate.full.should.equal(false);
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(nPhage1 + nPhage2 + nMutWT);
      bPhage.should.equal(nMut);
      nGeno.should.equal(nMut + nMutWT + 2)
    }); // end Should create plate for WT x double FS input, PERM bacteria

    it('Should create plate for WT x double FS input, REST bacteria', () => {
      let mPhage1 = 1200,
        mPhage2 = 1400,
        nMut = 2,
        nPhage1 = 681,
        nPhage2 = 794,
        nMutWT = 5;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[5]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1482,
      // numGeno: [ 794, 681 ], numMut: [ 0, 0 ],
      // numRecomb: [ 6, 1, 0 ] }
      // FS is first
      // 5 recomb WT, 2 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + nMutWT + 2)
    }); // end Should create plate for WT x double FS input, REST bacteria

    it('Should create plate for WT x DEL input, PERM bacteria', () => {
      let mPhage1 = 1200,
        mPhage2 = 1300,
        nMut = 2,
        nPhage1 = 589,
        nPhage2 = 639,
        nMutWT = 6;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1236,
      // numGeno: [ 639, 589 ], numMut: [ 0, 0 ],
      // numRecomb: [ 8, 0, 0 ] }
      // DEL is first
      // 6 recomb WT, 2 recomb DEL
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(nPhage2 + nMut);
      nGeno.should.equal(nMut + nMutWT + 2)
    });

    it('Should create plate for WT x DEL input, REST bacteria', () => {
      let mPhage1 = 1100,
        mPhage2 = 1300,
        nMut = 0,
        nPhage1 = 563,
        nPhage2 = 665,
        nMutWT = 2;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1230,
      // numGeno: [ 665, 563 ], numMut: [ 0, 0 ],
      // numRecomb: [ 2, 0, 0 ] }
      // DEL is first
      // 2 recomb WT, 0 recomb DEL
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + nMutWT + 2)
    });

     it('Should create plate for DEL x DEL input, PERM bacteria', () => {
      let mPhage1 = 1200,
        mPhage2 = 1250,
        nMut = 2,
        nPhage1 = 578,
        nPhage2 = 602,
        nMutWT = 0;
      let phage1 = clone(phageList[2]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1182,
      // numGeno: [ 602, 578 ], numMut: [ 0, 0 ],
       // numRecomb: [ 2, 0, 0 ] }
      // DEL2 is first
      // 0 recomb WT, 2 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(nPhage1 + nPhage2 + nMut);
      nGeno.should.equal(nMut + nMutWT + 2)
    });

    it('Should create plate for DEL x DEL input, REST bacteria', () => {
      let mPhage1 = 1350,
        mPhage2 = 1200,
        nMut = 10,
        nPhage1 = 754,
        nPhage2 = 670,
        nMutWT = 0;
      let phage1 = clone(phageList[2]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1434,
      // numGeno: [ 754, 670 ], numMut: [ 0, 0 ],
      // numRecomb: [ 9, 1, 0 ] }
      // DEL1 is first
      // 0 recomb WT, 10 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + nMutWT + 2)
    });

    it('Should not create plate FS x FS over capacity, PERM bacteria', () => {
      let mPhage1 = 2000,
        mPhage2 = 2800;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 2708,
      // numGeno: [ 1572, 1123 ], numMut: [ -0, 0 ],
      // numRecomb: [ 11, 2, 0 ] }
      // FS 2 is first
      plate.full.should.equal(true);
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(2);
    }); // end Should not create plate FS x FS over capacity, PERM bacteria

    it('Should not create plate WT x FS over capacity, REST bacteria', () => {
      let mPhage1 = 3000,
        mPhage2 = 2500,
        nMut = 8,
        nMutWT = 6;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 3123,
      // numGeno: [ 1696, 1413 ], numMut: [ 2, 1 ],
      // numRecomb: [ 9, 2, 0 ]}
      // WT is first
      // 2 mut, 1 mut WT, 6 recomb FS, 5 recomb WT
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      plate.full.should.equal(true);
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + nMutWT + 2);
    }); // end Should not create plate WT x FS over capacity, REST bacteria

    it('Should not create plate WT x DEL over capacity, REST bacteria', () => {
      let mPhage1 = 3000,
        mPhage2 = 2700,
        nMut = 6,
        nMutWT = 3;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[2]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 2899,
      // numGeno: [ 1521, 1369 ], numMut: [ 3, 0 ],
      // numRecomb: [ 5, 1, 0 ] }
      // WT is first
      // 3 mut, 3 recomb DEL, 3 recomb WT
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      plate.full.should.equal(true);
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut + nMutWT + 2);
    }); // end Should not create plate WT x DEL over capacity, REST bacteria
  }); // end Test create full plate*/

});
