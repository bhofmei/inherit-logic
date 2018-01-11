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
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "always", "readable": "can", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage bearing compensating +1 and -1 frameshifts resulting in successful translation and a wild type phenotype"}'],
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
  */

  describe('Testing create phage list for single phage input', () => {

    it('Should create small phage list for WT phage, PERM bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    });

    it('Should create large phage list for WT phage, PERM bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 1300;
      let expMut = 1;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 2 genotypes (1 mut)
      plate.genoList.should.have.lengthOf(1 + expMut);
      plate.strainList.should.have.length(phage1.numPhage + expMut);
    });

    it('Should not create over capacity phage list for WT phage, PERM bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let expMut = 5;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 6 genotype (5 mut) and toomany phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.equal(false);
    });

    it('Should create small phage list for WT phage, REST bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    });

    it('Should create large phage list for WT phage, REST bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 1300;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      let expMut = 1
      // plate should have 2 genotypes (1 mut)
      plate.genoList.should.have.lengthOf(1 + expMut);
      //debug(plate.genoList);
      plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    });

    it('Should create pseudo over capacity phage list for WT phage, REST bact', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      let expMut = 8;
      // plate should have 9 genotypes (8 mut) and 1 toomany phage
      plate.genoList.should.have.lengthOf(1 + expMut);
      plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    });

    it('Should create small phage list for FS phage, PERM bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    });

    it('Should create large phage list for FS phage, PERM bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 1300;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      let expMut = 1;
      // plate should have 2 genotypes (1 mut)
      plate.genoList.should.have.lengthOf(1 + expMut);
      plate.strainList.should.have.length(phage1.numPhage + expMut);
    });

    it('Should not create over capacity phage list for FS phage, PERM bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.equal(false);
    });

    it('Should create small phage list for FS phage, REST bact', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(phage1.numPhage);
    });

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
      let expMut = 10;
      // plate should have 11 genotypes (10 mut)
      plate.genoList.should.have.lengthOf(1 + expMut);
      plate.strainList.should.have.lengthOf(phage1.numPhage + expMut);
    });

    it('Should create plate for DEL phage, under capacity', () => {
      let phage1 = clone(phageList[2]);
      phage1.numPhage = 1000;
      let plate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype and 10 phage
      //  plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.lengthOf(phage1.numPhage);
    });
  });

  describe('Testing create phage list for double phage input', () => {
    it('Should create phage list for cross WT to WT, PERM bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 1000;
      phage2.numPhage = 500;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1063,
      // numGeno: [ 709, 354 ], numMut: [ 0, 0 ],
      // numRecomb: [ 0, 0, 0 ] }
      let total = 1063;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2);
      nStrains.should.equal(total);
    });

    it('Should not create phage list WT x WT over capacity, PERM bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 4000;
      phage2.numPhage = 3500;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      plate.genoList.should.have.lengthOf(2);
      plate.strainList.should.equal(false);
    });

    it('Should create phage list for cross WT to WT, REST bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
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

    it('Should create pseudo phage list WT x WT over capacity, REST bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 4000;
      phage2.numPhage = 3500;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 4128,
      // numGeno: [ 2201, 1926 ], numMut: [ 0, 1 ],
      // numRecomb: [ 0, 0, 0 ] }
      let nMut = 1,
          total = 4128;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2 + nMut);
      nStrains.should.equal(total);
    });

    it('Should create phage list for cross WT to FS, PERM bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[1]);
      phage1.numPhage = 550;
      phage2.numPhage = 1000;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1070,
      // numGeno: [ 686, 377 ], numMut: [ 0, 0 ],
      // numRecomb: [ 7, 0, 0 ] }
      let nRecomb = 7,
          total = 1070;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2 + nRecomb);
      nStrains.should.equal(total);
    });

    it('Should not create phage list WT x FS over capacity, PERM bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[1]);
      phage1.numPhage = 8700;
      phage2.numPhage = 3200;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 8540,
      // numGeno: [ 6224, 2289 ], numMut: [ 2, 2 ],
      // numRecomb: [ 20, 3, 0 ] }
      plate.genoList.should.have.lengthOf(2);
      plate.strainList.should.equal(false);
    });

    it('Should create phage list for cross WT to FS, REST bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[1]);
      phage1.numPhage = 550;
      phage2.numPhage = 1000;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1066,
      // numGeno: [ 686, 377 ], numMut: [ 0, 0 ],
      // numRecomb: [ 3, 0, 0 ] }
      let nRecomb = 3,
          total = 1066;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2+nRecomb);
      nStrains.should.equal(total);
    });

    it('Should create pseudo phage list WT x FS over capacity, REST bact', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[1]);
      phage1.numPhage = 8700;
      phage2.numPhage = 3200;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 8522,
      // numGeno: [ 6224, 2289 ], numMut: [ 1, 1 ],
      // numRecomb: [ 5, 2, 0 ] }
      let nMut = 2,
          nRecomb = 7,
          total = 8522;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2+nMut+nRecomb);
      nStrains.should.equal(total);
    });

    it('Should create phage list for cross FS to FS, PERM bact', () => {
      let phage1 = clone(phageList[1]);
      let phage2 = clone(phageList[3]);
      phage1.numPhage = 800;
      phage2.numPhage = 950;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 897,
      // numGeno: [ 482, 406 ], numMut: [ 0, 0 ],
      // numRecomb: [ 9, 0, 0 ] }
      let nRecomb = 9,
          total = 897;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2+nRecomb);
      nStrains.should.equal(total);
    });

    it('Should not create phage list for cross FS to FS over capacity, PERM bact', () => {
      let phage1 = clone(phageList[1]);
      let phage2 = clone(phageList[3]);
      phage1.numPhage = 4100;
      phage2.numPhage = 7800;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 7641,
      // numGeno: [ 4997, 2627 ], numMut: [ 3, 4 ],
      // numRecomb: [ 10, 0, 0 ] }
      plate.genoList.should.have.lengthOf(2);
      plate.strainList.should.equal(false);
    });

    it('Should create phage list for cross FS to FS, REST bact', () => {
      let phage1 = clone(phageList[1]);
      let phage2 = clone(phageList[3]);
      phage1.numPhage = 1000;
      phage2.numPhage = 950;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1071,
      // numGeno: [ 545, 518 ], numMut: [ 0, 0 ],
      // numRecomb: [ 8, 0, 0 ] }
      let nRecomb = 8,
          total = 1071;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2+nRecomb);
      nStrains.should.equal(total);
    });

    it('Should create pseudo phage list for cross FS to FS over capacity, REST bact', () => {
      let phage1 = clone(phageList[1]);
      let phage2 = clone(phageList[3]);
      phage1.numPhage = 4100;
      phage2.numPhage = 7800;
      let plate = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 7985,
      // numGeno: [ 5228, 2748 ], numMut: [ 3, 1 ],
      // numRecomb: [ 3, 2, 0 ] }
      let nMut = 4,
          nRecomb = 5,
          total = 7985;
      let nStrains = plate.strainList.length;
      plate.genoList.should.have.lengthOf(2+nMut+nRecomb);
      nStrains.should.equal(total);
    });
  });

  describe('Testing generate plate for single phage input', () => {

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
        // 1 mutants
        // 1. [ { kind: 'plusOne', location: 246 } ]

        nMutLg = plateLg.genoList.length - 1;
        for (let i = 0; i < nMutLg; i++) {
          debug(plateLg.genoList[i+1].shifts);
        }
        done();
      });

      it('Should generate small plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.smallPlaque.should.have.lengthOf(nSmall);
        plate.largePlaque.should.have.lengthOf(0);
      });

      it('Should generate small plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.smallPlaque.should.have.lengthOf(nSmall);
        plate.largePlaque.should.have.lengthOf(0);
      });

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nLarge + nMutLg);
        plate.smallPlaque.should.have.lengthOf(nLarge);
        plate.largePlaque.should.have.lengthOf(nMutLg);
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nLarge);
        plate.smallPlaque.should.have.lengthOf(nLarge);
        plate.largePlaque.should.have.lengthOf(0);
      });

    }); // end Test WT phage

    describe('Test for FS phage', () => {
      let plateSm, plateLg, nMut;
      let nSmall = 500,
        nLarge = 1300;
      before((done) => {
        let phage1 = clone(phageList[1]);
        phage1.numPhage = nSmall;
        plateSm = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        let phage2 = clone(phage1);
        phage2.numPhage = nLarge;
        plateLg = plateExp.createPlatePhage(phage2, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // 2 new mutants
        // 1. [ { kind: 'minusOne', location: 111 },
        //    { kind: 'minusOne', location: 240 } ]
        // 2. [ { kind: 'minusOne', location: 240 },
        //    { kind: 'minusOne', location: 283 } ]

        nMut = plateLg.genoList.length - 1;
        for (let i = 0; i < nMut; i++) {
          debug(plateLg.genoList[i+1].shifts);
        }
        done();
      });

      it('Should generate small plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.smallPlaque.should.have.lengthOf(0);
        plate.largePlaque.should.have.lengthOf(nSmall);
      });

      it('Should generate small plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.smallPlaque.should.have.lengthOf(0);
        plate.largePlaque.should.have.lengthOf(0);
      });

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nLarge + nMut);
        plate.smallPlaque.should.have.lengthOf(0);
        plate.largePlaque.should.have.lengthOf(nLarge + nMut);
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(0);
       plate.smallPlaque.should.have.lengthOf(0);
      plate.largePlaque.should.have.lengthOf(0);
      });
    }); // end Test FS phage

  }); // end Test generate plate for single phage input

  describe('Testing generate plate for double phage input', () => {

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
        plateB = plateExp.createPlatePhage(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
        // { total: 1325,
        // numGeno: [ 687, 638 ], numMut: [ 0, 0 ],
        // numRecomb: [ 0, 0, 0 ] }

        nPhage1 = 687, nPhage2 = 638;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < plateB.genoList.length; i++) {
          debug(plateB.genoList[i].shifts);
        }
        done();
      });

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
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        lPhage.should.equal(nPhage1 + nPhage2);
        bPhage.should.equal(0);
      });
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
        // { total: 1920,
        // numGeno: [ 1274, 637 ], numMut: [ 2, 0 ],
        // numRecomb: [ 7, 0, 0 ] }
        // FS geno first
        // 2 mutant translated, 3 recomb WT


        nPhage1 = 637, nPhage2 = 1274;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < nMut + 2; i++) {
          debug(plateB.genoList[i].shifts);
        }
        nMutHiddenPheno = 5;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      });

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
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        lPhage.should.equal(nPhage1 + nMutHiddenPheno);
        bPhage.should.equal(0);
      });
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
        // { total: 1481,
        // numGeno: [ 737, 737 ], numMut: [ 0, 0 ],
        // numRecomb: [ 7, 0, 0 ] }
        // FS geno first
        // 0 mutant translated, 0 recomb WT

        nPhage1 = 737, nPhage2 = 737;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < plateB.genoList.length; i++) {
          debug(plateB.genoList[i].shifts);
        }
        nMutHiddenPheno = 0;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      });

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
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenDefaults.plateCapacity, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.smallPlaque.length;
        let bPhage = plate.largePlaque.length;
        lPhage.should.equal(nMutHiddenPheno);
        bPhage.should.equal(0);
      });
    }); // end Test WTxFS phage

  }); // end Test generate plate for double phage input

  describe('Test generate plate over capacity', () => {
    it('Should not create plate for single WT phage input, PERM bact', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let phagePlate = plateExp.createPlatePhage(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      var plate = plateExp.generatePlate(bactPerm, phagePlate.genoList, phagePlate.strainList, scenDefaults.plateCapacity, scenData);
      plate.full.should.equal(true);
      plate.smallPlaque.should.have.lengthOf(0);
      plate.largePlaque.should.have.lengthOf(0);
    });

    it('Should not create plate for single WT phage input, REST bact', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let phagePlate = plateExp.createPlatePhage(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      var plate = plateExp.generatePlate(bactRest, phagePlate.genoList, phagePlate.strainList, scenDefaults.plateCapacity, scenData);
      plate.full.should.equal(true);
      plate.smallPlaque.should.have.lengthOf(0);
      plate.largePlaque.should.have.lengthOf(0);
    });

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
    });

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
    });
  }); // end Test generate plate over capacity

  describe('Test create full plate', () => {
    // before, reset random engines so we can use the results from this to test the controller
    before((done) => {
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
      done();
    });
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
      nGeno.should.equal(nMut+1);
    });

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
      nGeno.should.equal(nMut+1);
    });

    it('Should create plate for single, FS input, PERM bacteria', () => {
      let nPhage = 1300,
        nMutWT = 0,
        nMut = 2;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // numMut 2 (0 WT pheno)
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(nPhage + nMut - nMutWT);
      nGeno.should.equal(nMut+1);
    });

    it('Should create plate for single, FS input, REST bacteria', () => {
      let nPhage = 1300,
        nMutWT = 1,
        nMut = 2;
      // numMut 2 (1 WT pheno)
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      // numMut 3, 1 WT mut
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+1);
    });

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
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2);
      bPhage.should.equal(nMut);
      nGeno.should.equal(nMut+2);
    });

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
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      // { total: 1325,
      // numGeno: [ 687, 638 ], numMut: [ 0, 0 ],
      // numRecomb: [ 0, 0, 0 ] }
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+2);
    });

    it('Should create plate for WTxFS input, PERM bacteria', () => {
      let mPhage1 = 1100,
        mPhage2 = 1400,
        nMut = 4,
        nPhage1 = 649,
        nPhage2 = 826,
        nMutWT = 6;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1485,
      // numGeno: [ 826, 649 ], numMut: [ 0, 0 ],
      // numRecomb: [ 10, 0, 0 ] }
      // FS is first
      // 6 recomb WT, 4 recomb FS
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      plate.full.should.equal(false);
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(nPhage2 + nMut);
      nGeno.should.equal(nMut+nMutWT+2)
    });

    it('Should create plate for WTxFS input, REST bacteria', () => {
      let mPhage1 = 1200,
        mPhage2 = 1500,
        nMut = 5,
        nPhage1 = 632,
        nPhage2 = 790,
        nMutWT = 0;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1427,
      // numGeno: [ 790, 632 ], numMut: [ 0, 0 ],
      // numRecomb: [ 5, 0, 0 ] }
      // FS is first
      // 0 recomb WT, 5 recomb FS
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+nMutWT+2)
    });

    it('Should create plate for FSxFS input, PERM bacteria', () => {
      let mPhage1 = 1400,
        mPhage2 = 1400,
        nMut = 8,
        nPhage1 = 663,
        nPhage2 = 663,
        nMutWT = 0;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1334,
      // numGeno: [ 663, 663 ], numMut: [ 0, 0 ],
      // numRecomb: [ 8, 0, 0 ] }
      // FS 1 first
      // 0 recomb WT, 8 recomb FS
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(nPhage1 + nPhage2 + nMut);
      nGeno.should.equal(nMut+nMutWT+2)
    });

    it('Should create plate for FSxFS input, REST bacteria', () => {
      let mPhage1 = 1500,
        mPhage2 = 1400,
        nMut = 6,
        nPhage1 = 736,
        nPhage2 = 687,
        nMutWT = 0;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 1429,
      // numGeno: [ 736, 687 ], numMut: [ 0, 0 ],
      // numRecomb: [ 6, 0, 0 ] }
      // FS 1 is first
      // 0 recomb WT, 6 recomb FS
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+nMutWT+2)
    });

    it('Should not create plate FS x FS over capacity, PERM bacteria', () => {
      let mPhage1 = 2000,
        mPhage2 = 2800;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 2912,
      // numGeno: [ 1695, 1211 ], numMut: [ 1, 0 ],
      // numRecomb: [ 3, 2, 0 ] }
      // FS 2 is first
      plate.full.should.equal(true);
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(2);
    });

    it('Should not create plate WT x FS over capacity, REST bacteria', () => {
      let mPhage1 = 3000,
        mPhage2 = 2500,
          nMut = 6,
          nMutWT = 8;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenData);
      // { total: 2905,
      // numGeno: [ 1577, 1314 ], numMut: [ 4, 4 ],
      // numRecomb: [ 6, 0, 0 ] }
      // WT is first
      // 5 mut, 3 mut WT, 1 recomb FS, 5 recomb WT
      plate.genotypes.forEach((geno)=>{debug(geno.shifts)});
      plate.full.should.equal(true);
      let lPhage = plate.smallPlaque.length;
      let bPhage = plate.largePlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+nMutWT+2);
    });
  }); // end Test create full plate
});
