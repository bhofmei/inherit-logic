const app = require('../../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../../config/cricket/scenario.config');
const scenarios = require('../../../../config/cricket/scenario.data');
const phageScen = require('../../../genetics/cricket/phage.scenario.js');
const phageExp = require('../../../genetics/cricket/phage.experiment');
const plateExp = require('../../../genetics/cricket/plate.experiment');;
const phageEnum = require('../../../genetics/cricket/phage.enum');
const plateEnum = require('../../../genetics/cricket/plate.enum');
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
  1. mutationList: [ -240 ]
  2. deletion: [ 110, 210 ]
  3. mutationList: [ 86 ]
  4. [ -211, -287 ]
  5. [ 201, -226 ]
  6. deletion: [ 40, 130 ]
  7. [ 132 ]
  8. [ 270 ]
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
      let expMut = 1;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 2 genotypes (1 mut)
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
      let expMut = 1;
      // plate should have 2 genotypes (1 mut)
      plate.genoList.should.have.lengthOf(1 + expMut);
      plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    }); // end Should create large phage list for WT phage, REST bact

    it('Should create pseudo over capacity phage list for WT phage, REST bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      let expMut = 4;
      // plate should have 5 genotypes (4 mut) and 1 toomany phage
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
      let expMut = 1;
      // plate should have 2 genotypes (1 mut)
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
  }); // end Testing create phage list for single phage input

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
        // { total: 937, numGeno: [ 625, 312 ],
        // numMut: [ 0, 0 ], numRecomb: [ 0, 0, 0 ] }
        let total = 937;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 4000;
        phage2.numPhage = 3500;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 3876, numGeno: [ 2066, 1808 ],
        // numMut: [ 1, 1 ], numRecomb: [ 0, 0, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1000;
        phage2.numPhage = 500;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 937, numGeno: [ 625, 312 ],
        // numMut: [ 0, 0 ], numRecomb: [ 0, 0, 0 ] }
        let total = 937;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 4000;
        phage2.numPhage = 3500;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 3876, numGeno: [ 2066, 1808 ],
        // numMut: [ 1, 1 ], numRecomb: [ 0, 0, 0 ] }
        let nMut = 2,
          total = 3876;
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
        // { total: 1083, numGeno: [ 686, 377 ],
        // numMut: [ 0, 0 ], numRecomb: [ 19, 1, 0 ] }
        let nRecomb = 20,
          total = 1083;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8655, numGeno: [ 6224, 2289 ],
        // numMut: [ 2, 1 ], numRecomb: [ 134, 5, 0 ]}
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 550;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 954, numGeno: [ 604, 332 ],
        // numMut: [ 0, 0 ], numRecomb: [ 17, 1, 0 ] }
        let nRecomb = 18,
          total = 954;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 9037, numGeno: [ 6497, 2390 ],
        // numMut: [ 3, 1 ], numRecomb: [ 140, 6, 0 ] }
        let nMut = 4,
          nRecomb = 146,
          total = 9037;
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
        // { total: 1032, numGeno: [ 549, 462 ],
        // numMut: [ 0, 0 ], numRecomb: [ 20, 1, 0 ] }
        let nRecomb = 21,
          total = 1032;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 4100;
        phage2.numPhage = 7800;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8129, numGeno: [ 5228, 2748 ],
        // numMut: [ 2, 1 ], numRecomb: [ 144, 6, 0  }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1000;
        phage2.numPhage = 950;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 956, numGeno: [ 480, 456 ],
        // numMut: [ 0, 0 ], numRecomb: [ 19, 1, 0 ] }
        let nRecomb = 20,
          total = 956;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 4100;
        phage2.numPhage = 7800;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 7771, numGeno: [ 4997, 2627 ],
        // numMut: [ 2, 1 ], numRecomb: [ 138, 6, 0 ] }
        let nMut = 3,
          nRecomb = 144,
          total = 7771;
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
        // { total: 954, numGeno: [ 604, 332 ],
        // numMut: [ 0, 0 ], numRecomb: [ 17, 1, 0 ] }
        let nRecomb = 18,
          total = 954;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8655, numGeno: [ 6224, 2289 ],
        // numMut: [ 2, 1 ], numRecomb: [ 134, 5, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 550;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1083, numGeno: [ 686, 377 ],
        // numMut: [ 0, 0 ], numRecomb: [ 19, 1, 0 ] }
        let nRecomb = 20,
          total = 1083;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 1400;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 3372, numGeno: [ 2305, 1008 ],
        // numMut: [ 1, 0 ], numRecomb: [ 56, 2, 0 ] }
        let nMut = 1,
          nRecomb = 58,
          total = 3372;
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
        // { total: 1295, numGeno: [ 692, 577 ],
        // numMut: [ 0, 0 ], numRecomb: [ 25, 1, 0 ] }
        let nRecomb = 26,
          total = 1295;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 9037, numGeno: [ 6497, 2390 ],
        // numMut: [ 3, 1 ], numRecomb: [ 140, 6, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1400;
        phage2.numPhage = 1000;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1352, numGeno: [ 773, 552 ],
        // numMut: [ 0, 0 ], numRecomb: [ 26, 1, 0 ] }
        let nRecomb = 27,
          total = 1352;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8655, numGeno: [ 6224, 2289 ],
        // numMut: [ 2, 1 ], numRecomb: [ 134, 5, 0 ] }
        let nMut = 3,
          nRecomb = 139,
          total = 8655;
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
        // { total: 1348, numGeno: [ 734, 587 ],
        // numMut: [ 0, 0 ], numRecomb: [ 26, 1, 0 ] }
        let nRecomb = 27,
          total = 1348;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should not create phage list over capacity, PERM bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 8655, numGeno: [ 6224, 2289 ],
        // numMut: [ 2, 1 ], numRecomb: [ 134, 5, 0 ] }
        plate.genoList.should.have.lengthOf(2);
        plate.strainList.should.equal(false);
      });

      it('Should create phage list, REST bact', () => {
        phage1.numPhage = 1400;
        phage2.numPhage = 1200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1353, numGeno: [ 714, 612 ],
        // numMut: [ 0, 0 ], numRecomb: [ 26, 1, 0 ] }
        let nRecomb = 27,
          total = 1353;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nRecomb);
        nStrains.should.equal(total);
      });

      it('Should create pseudo-over capacity phage list, REST bact', () => {
        phage1.numPhage = 8700;
        phage2.numPhage = 3200;
        let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 9037, numGeno: [ 6497, 2390 ],
        // numMut: [ 3, 1 ], numRecomb: [ 140, 6, 0 ] }
        let nMut = 4,
          nRecomb = 146,
          total = 9037;
        let nStrains = plate.strainList.length;
        plate.genoList.should.have.lengthOf(2 + nMut + nRecomb);
        nStrains.should.equal(total);
      });
    }); // end Test DEL x DEL

  }); // end Testing create phage list for double phage input

  describe('Testing generate plate for single phage input', () => {

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
        // 1 mutant: [ -305 ]


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
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(1);
        lPhage.should.equal(nSmall);
        bPhage.should.equal(0);
      }); // end Should generate small plate, PERM bacteria

      it('Should generate small plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(1);
        lPhage.should.equal(nSmall);
        bPhage.should.equal(0);
      }); // end Should generate small plate, REST bacteria

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(1 + nMutLg);
        nPhage.should.equal(nLarge + nMutLg);
        lPhage.should.equal(nLarge);
        bPhage.should.equal(nMutLg);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(1);
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
        // 1 mutant: [ -240, 248 ]

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
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(1);
        lPhage.should.equal(0);
        bPhage.should.equal(nSmall);
      }); // end Should generate small plate, PERM bacteria

      it('Should generate small plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(0);
        lPhage.should.equal(0);
        bPhage.should.equal(0);
      }); // end Should generate small plate, REST bacteria

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(1 + nMut);
        nPhage.should.equal(nLarge + nMut);
        lPhage.should.equal(nMut);
        bPhage.should.equal(nLarge);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(nMut);
        nPhage.should.equal(nMut);
        lPhage.should.equal(nMut);
        bPhage.should.equal(0);
      }); // end Should generate large plate, REST bacteria
    }); // end Test FS phage

  }); // end Test generate plate for single phage input

  describe('Testing generate plate for double phage input', () => {

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
        // { total: 1475, numGeno: [ 765, 710 ],
        // numMut: [ 0, 0 ], numRecomb: [ 0, 0, 0 ] }

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
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(nMut + 2);
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nPhage1 + nPhage2);
        bPhage.should.equal(nMut);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(2);
        lPhage.should.equal(nPhage1 + nPhage2);
        bPhage.should.equal(0);
      }); // end Should generate large plate, REST bacteria
    }); // end Test WTxWT phage

    describe('Test for WT x FS phage', () => {
      let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
      let mPhage1 = 1000,
        mPhage2 = 1300;
      before((done) => {
        let phage1 = clone(phageList[0]);
        phage1.numPhage = mPhage1;
        let phage2 = clone(phageList[1]);
        phage2.numPhage = mPhage2;
        plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1401, numGeno: [ 776, 597 ],
        // numMut: [ 0, 0 ], numRecomb: [ 27, 1, 0 ] }
        // FS geno first
        // 12 recomb mut, 16 recomb WT
        nPhage1 = 597, nPhage2 = 776;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < nMut + 2; i++) {
          debug(plateB.genoList[i].shifts);
        }
        nMutHiddenPheno = 12;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      }); // end before

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(nMut + 2);
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nPhage1 + nMutHiddenPheno);
        bPhage.should.equal(nPhage2 + nMutPheno);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(nMutHiddenPheno + 1);
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
        plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1354, numGeno: [ 663, 663 ],
        // numMut: [ 0, 0 ], numRecomb: [ 27, 1, 0 ] }
        // FS1 geno first
        // 13 recomb mut, 15 recomb WT
        nPhage1 = 663, nPhage2 = 663;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < plateB.genoList.length; i++) {
          debug(plateB.genoList[i].shifts);
        }
        nMutHiddenPheno = 15;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      }); // end before

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(nMut + 2);
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nMutHiddenPheno);
        bPhage.should.equal(nPhage1 + nPhage2 + nMutPheno);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(nMutHiddenPheno);
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
        phage2.mutationList[0] = 103;
        phage2.numPhage = mPhage2;
        plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1352, numGeno: [ 773, 552 ],
        // numMut: [ 0, 0 ], numRecomb: [ 26, 1, 0 ] }
        // FS geno first
        // 11 recomb mut, 16 recomb WT
        nPhage1 = 552, nPhage2 = 773;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < nMut + 2; i++) {
          debug(plateB.genoList[i].shifts);
        }
        nMutHiddenPheno = 16;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      }); // end before

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(nMut + 2);
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nPhage1 + nPhage2 + nMutHiddenPheno);
        bPhage.should.equal(nMutPheno);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(nMutHiddenPheno + 2);
        lPhage.should.equal(nPhage1 + nPhage2 + nMutHiddenPheno);
        bPhage.should.equal(0);
      }); // end Should generate large plate, REST bacteria
    }); // end Test WT x double FS phage

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
        // { total: 1352, numGeno: [ 687, 638 ],
        // numMut: [ 0, 0 ], numRecomb: [ 26, 1, 0 ] }
        // WT geno first
        // 15 recomb mut, 12 recomb WT
        nPhage1 = 687, nPhage2 = 638;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < nMut + 2; i++) {
          debug(plateB.genoList[i].shifts, plateB.genoList[i].deletion);
        }
        nMutHiddenPheno = 12;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      }); // end before

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(nMut + 2);
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nPhage1 + nMutHiddenPheno);
        bPhage.should.equal(nPhage2 + nMutPheno);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(nMutHiddenPheno + 1);
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
        // { total: 1451, numGeno: [ 711, 711 ],
        // numMut: [ 0, 0 ], numRecomb: [ 28, 1, 0 ] }
        // DEL1 geno first
        // 29 recomb mut, 0 recomb WT
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
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nGeno.should.equal(nMut + 2);
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nMutHiddenPheno);
        bPhage.should.equal(nPhage1 + nPhage2 + nMutPheno);
      }); // end Should generate large plate, PERM bacteria

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let nGeno = plate.genotypes.length;
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        nGeno.should.equal(nMutHiddenPheno);
        lPhage.should.equal(nMutHiddenPheno);
        bPhage.should.equal(0);
      }); // end Should generate large plate, REST bacteria
    }); // end Test DELxDEL phage
  }); // end Test generate plate for double phage input

  describe('Test generate plate over capacity', () => {

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

  describe('Test create full plate', () => {
    // before, reset random engines so we can use the results from this to test the controller
    before((done) => {
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
      done();
    }); // end before

    it('Should create plate for single, WT input, PERM bacteria', () => {
      let nPhage = 1300,
        nMut = 1;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // numMut 1
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
        nMut = 1;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // numMut 1
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage);
      bPhage.should.equal(0);
      nGeno.should.equal(1);
    }); // end Should create plate for single, WT input, REST bacteria

    it('Should create plate for single, FS input, PERM bacteria', () => {
      let nPhage = 1300,
        nMutWT = 1,
        nMut = 1;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // numMut 1 (1 WT pheno)
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
        nMutWT = 0,
        nMut = 1;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      // numMut 1 (0 WT mut)
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT);
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
      // { total: 1475, numGeno: [ 765, 710 ],
      // numMut: [ 0, 0 ], numRecomb: [ 0, 0, 0 ] }
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
        nPhage1 = 765,
        nPhage2 = 710;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phage1);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1475, numGeno: [ 765, 710 ],
      // numMut: [ 0, 0 ], numRecomb: [ 0, 0, 0 ] }
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2);
      bPhage.should.equal(0);
      nGeno.should.equal(2);
    }); // end Should create plate for WTxWT input, REST bacteria

    it('Should create plate for WTxFS input, PERM bacteria', () => {
      let mPhage1 = 1100,
        mPhage2 = 1400,
        nMut = 17,
        nPhage1 = 583,
        nPhage2 = 742,
        nMutWT = 10;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1352, numGeno: [ 742, 583 ],
      // numMut: [ 0, 0 ], numRecomb: [ 26, 1, 0 ]  }
      // FS is first
      // 10 recomb WT, 17 recomb FS
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
        nMut = 21,
        nPhage1 = 701,
        nPhage2 = 876,
        nMutWT = 11;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1609, numGeno: [ 876, 701 ],
      // numMut: [ 0, 0 ], numRecomb: [ 31, 1, 0 ] }
      // FS is first
      // 11 recomb WT, 21 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT + 1)
    }); // end Should create plate for WTxFS input, REST bacteria

    it('Should create plate for FSxFS input, PERM bacteria', () => {
      let mPhage1 = 1400,
        mPhage2 = 1400,
        nMut = 14,
        nPhage1 = 663,
        nPhage2 = 663,
        nMutWT = 14;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1354, numGeno: [ 663, 663 ],
      // numMut: [ 0, 0 ], numRecomb: [ 27, 1, 0 ] }
      // FS 1 first
      // 14 recomb WT, 14 recomb FS
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
        nMut = 19,
        nPhage1 = 816,
        nPhage2 = 762,
        nMutWT = 14;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1611, numGeno: [ 816, 762 ],
      // numMut: [ 0, 0 ], numRecomb: [ 32, 1, 0 ] }
      // FS 1 is first
      // 14 recomb WT, 19 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT)
    }); // end Should create plate for FSxFS input, REST bacteria

    it('Should create plate for WT x double FS input, PERM bacteria', () => {
      let mPhage1 = 1100,
        mPhage2 = 1300,
        nMut = 2,
        nPhage1 = 629,
        nPhage2 = 743,
        nMutWT = 26;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[5]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1400, numGeno: [ 743, 629 ],
      // numMut: [ 0, 0 ], numRecomb: [ 27, 1, 0 ] }
      // FS is first
      // 26 recomb WT, 2 recomb FS
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
        nMut = 6,
        nPhage1 = 681,
        nPhage2 = 794,
        nMutWT = 24;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[5]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1505, numGeno: [ 794, 681 ],
      // numMut: [ 0, 0 ], numRecomb: [ 29, 1, 0 ] }
      // FS is first
      // 24 recomb WT, 6 recomb FS
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT + 2)
    }); // end Should create plate for WT x double FS input, REST bacteria

    it('Should create plate for WT x DEL input, PERM bacteria', () => {
      let mPhage1 = 1200,
        mPhage2 = 1300,
        nMut = 15,
        nPhage1 = 589,
        nPhage2 = 639,
        nMutWT = 11;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1254, numGeno: [ 639, 589 ],
      // numMut: [ 0, 0 ], numRecomb: [ 25, 1, 0 ] }
      // DEL is first
      // 11 recomb WT, 15 recomb DEL
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
    }); // end Should create plate for WT x DEL input, PERM bacteria

    it('Should create plate for WT x DEL input, REST bacteria', () => {
      let mPhage1 = 1100,
        mPhage2 = 1300,
        nMut = 15,
        nPhage1 = 563,
        nPhage2 = 665,
        nMutWT = 10;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1253, numGeno: [ 665, 563 ],
      // numMut: [ 0, 0 ], numRecomb: [ 24, 1, 0 ] }
      // DEL is first
      // 10 recomb WT, 15 recomb DEL
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT + 1)
    }); // end Should create plate for WT x DEL input, REST bacteria

    it('Should create plate for DEL x DEL input, PERM bacteria', () => {
      let mPhage1 = 1200,
        mPhage2 = 1250,
        nMut = 27,
        nPhage1 = 647,
        nPhage2 = 674,
        nMutWT = 0;
      let phage1 = clone(phageList[2]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1348, numGeno: [ 674, 647 ],
      // numMut: [ 0, 0 ], numRecomb: [ 26, 1, 0 ] }
      // DEL2 is first
      // 0 recomb WT, 27 recomb DEL
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
    }); // end Should create plate for DEL x DEL input, PERM bacteria

    it('Should create plate for DEL x DEL input, REST bacteria', () => {
      let mPhage1 = 1350,
        mPhage2 = 1200,
        nMut = 26,
        nPhage1 = 676,
        nPhage2 = 601,
        nMutWT = 0;
      let phage1 = clone(phageList[2]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[6]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1303, numGeno: [ 676, 601 ],
      // numMut: [ 0, 0 ], numRecomb: [ 25, 1, 0 ] }
      // DEL1 is first
      // 0 recomb WT, 26 recomb DEL
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT)
    }); // end Should create plate for DEL x DEL input, REST bacteria

    it('Should not create plate FS x FS over capacity, PERM bacteria', () => {
      let mPhage1 = 2000,
        mPhage2 = 2800;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 2966, numGeno: [ 1695, 1211 ],
      // numMut: [ 1, 0 ], numRecomb: [ 57, 2, 0 ] }
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
        nMut = 32,
        nMutWT = 32;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 3175, numGeno: [ 1696, 1413 ],
      // numMut: [ 1, 1 ], numRecomb: [ 62, 2, 0 ] }
      // WT is first
      // 5 mut, 0 mut WT, 9 recomb FS, 32 recomb WT
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts)
      });
      plate.full.should.equal(true);
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT + 1);
    }); // end Should not create plate WT x FS over capacity, REST bacteria

    it('Should not create plate WT x DEL over capacity, REST bacteria', () => {
      let mPhage1 = 3000,
        mPhage2 = 2700,
        nMut = 33,
        nMutWT = 26;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[2]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 2952, numGeno: [ 1521, 1369 ],
      // numMut: [ 1, 1 ], numRecomb: [ 58, 2, 0 ] }
      // WT is first
      // 33 recomb DEL, 26 recomb WT
      plate.genotypes.forEach((geno) => {
        debug(geno.shifts, geno.deletion)
      });
      plate.full.should.equal(true);
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT + 1);
    }); // end Should not create plate WT x DEL over capacity, REST bacteria
  }); // end Test create full plate

});
