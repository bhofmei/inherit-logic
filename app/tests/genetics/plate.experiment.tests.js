const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../config/scenario.config');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../utility/phage.scenario.js');
const phageExp = require('../../utility/phage.experiment');
const plateExp = require('../../utility/plate.experiment');;
const phageEnum = require('../../utility/phage.enum');
const plateEnum = require('../../utility/plate.enum');

var scenario = {
  id: 0,
  mutationFreq: scenDefaults.mutationFreq,
  recombinationFreq: scenDefaults.recombinationFreq,
  gcProb: scenDefaults.gcProb,
  minStops: scenDefaults.minStops,
  intraMuteDist: scenDefaults.intraMuteDist,
  interMuteDist: scenDefaults.interMuteDist,
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}'],
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
    /*let geneData = phageScen.makeGene(scenario.gcProb, scenario.minStops);
    scenData.wtGene = geneData.wtGene;
    scenData.realStops = geneData.realStops;
    scenData.framesStopList = geneData.framesStopList;
    for (let i = 0; i < phages.length; i++) {
      var phageDetails = phageScen.makePhage(JSON.parse(phages[i]), i, phageEnum.PHAGETYPE.REF, scenData);
      let phage = phageDetails.phage;
      // add id property to pretend it is from mongo
      phage.id = 'testing' + i;
      scenData = phageDetails.scenData;
      phageList.push(phage);
    }*/
    let tmp = phageScen.generateScenario(scenario);
    scenData = tmp.scenData;
    phageList = tmp.strainList;
    //console.log(phageList);
    done();
  });
  /* PHAGE:
  0. WT
  1. mutationList: [ { kind: 'minusOne', location: 143 } ]
  2. deletion: [ 110, 205 ]
  3. mutationList: [ { kind: 'plusOne', location: 193 } ]
  4. [ { kind: 'minusOne', location: 6 }, { kind: 'minusOne', location: 82 } ]
  */

  describe('Testing create plate phage for single phage input', () => {

    it('Should create plate for WT phage - under capacity', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10;
      let plate = plateExp.createPlatePhage(phage1, null, null, null, 20, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype and 10 phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(10);
    });

    it('Should not create plate for WT phage over capacity', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10;
      let plate = plateExp.createPlatePhage(phage1, null, null, null, 5, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype and 1 toomany phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.equal(false);
    });

    it('Should create huge plate for WT phage', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 6 genotype and 10005 phage
      /* 5 mutant phage: [ [ { kind: 'minusOne', location: 41 } ],
        [ { kind: 'plusOne', location: 346 } ],
        [ { kind: 'plusOne', location: 226 } ],
        [ { kind: 'minusOne', location: 23 } ],
        [ { kind: 'minusOne', location: 259 } ] ]*/
      plate.genoList.should.have.lengthOf(6);
      plate.strainList.should.have.length(10005);
    });

    it('Should create plate for FS phage, under capacity', () => {
      // fs phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 10;
      let plate = plateExp.createPlatePhage(phage1, null, null, null, 20, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype and 10 phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(10);
    });

    it('Should create huge plate for FS phage', () => {
      // wt phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlatePhage(phage1, null, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 5 genotype and 10004 phage
      /* 4 mutant phage: have double mutations */
      plate.genoList.should.have.lengthOf(5);
      plate.strainList.should.have.length(10004);
      // check second mutations
      for (let i = 1; i < plate.genoList.length; i++) {
        let muts = plate.genoList[i].shifts;
        muts.should.have.lengthOf(2);
      }
    });

    it('Should create plate for DEL phage, under capacity', () => {
      let phage1 = clone(phageList[2]);
      phage1.numPhage = 10;
      let plate = plateExp.createPlatePhage(phage1, null, null, null, 20, plateEnum.PLATECALLER.LAB, scenData);
      // plate should have 1 genotype and 10 phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(10);
    });
  });

  describe('Testing create plate phage for double phage input', () => {
    it('Should create plate for cross WT to WT', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 100;
      phage2.numPhage = 50;
      let plate = plateExp.createPlatePhage(phage1, phage2, null, null, 200, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 80, total: 79,
          numGeno: [ 53, 26 ], numMut: [ 0, 0 ],
          numRecomb: [ 0, 0, 0 ] }*/
      plate.genoList.should.have.lengthOf(2);
      plate.strainList.should.have.length(79);
    });

    it('Should not create plate over capacity', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 40;
      phage2.numPhage = 35;
      let plate = plateExp.createPlatePhage(phage1, phage2, null, null, 20, plateEnum.PLATECALLER.LAB, scenData);
      plate.genoList.should.have.lengthOf(2);
      plate.strainList.should.equal(false);
    });

    it('Should create plate for huge cross WT to WT', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 10000;
      phage2.numPhage = 8000;
      let plate = plateExp.createPlatePhage(phage1, phage2, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 10200, total: 10201,
          numGeno: [ 5666, 4533 ], numMut: [ 1, 1 ],
          numRecomb: [ 0, 0, 0 ] }*/
      plate.genoList.should.have.lengthOf(4);
      plate.strainList.should.have.length(10201);
    });

    it('Should create plate for cross WT to FS', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[1]);
      phage1.numPhage = 55;
      phage2.numPhage = 100;
      let plate = plateExp.createPlatePhage(phage1, phage2, null, null, 200, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 120, total: 119,
          numGeno: [ 77, 42 ], numMut: [ 0, 0 ],
          numRecomb: [ 0, 0, 0 ] }*/
      plate.genoList.should.have.lengthOf(2);
      plate.strainList.should.have.length(119);
    });

    it('Should create plate for huge cross WT to FS', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[1]);
      phage1.numPhage = 8700;
      phage2.numPhage = 3200;
      let plate = plateExp.createPlatePhage(phage1, phage2, null, null, 10000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 8886.547581061775, total: 8894,
          numGeno: [ 6496, 2389 ], numMut: [ 1, 0 ],
          numRecomb: [ 8, 0, 0 ] } */
      plate.genoList.should.have.lengthOf(11);
      plate.strainList.should.have.length(8894);
    });

    it('Should create plate for cross FS to FS', () => {
      let phage1 = clone(phageList[1]);
      let phage2 = clone(phageList[3]);
      phage1.numPhage = 80;
      phage2.numPhage = 95;
      let plate = plateExp.createPlatePhage(phage1, phage2, null, null, 200, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 114.49358868961792, total: 116,
          numGeno: [ 62, 52 ], numMut: [ 0, 0 ],
          numRecomb: [ 2, 0, 0 ] }*/
      plate.genoList.should.have.lengthOf(4);
      plate.strainList.should.have.length(116);
    });

    it('Should create plate for huge cross FS to FS', () => {
      let phage1 = clone(phageList[1]);
      let phage2 = clone(phageList[3]);
      phage1.numPhage = 4100;
      phage2.numPhage = 7800;
      let plate = plateExp.createPlatePhage(phage1, phage2, null, null, 10000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 7976.635217326557, total: 7989,
          numGeno: [ 5228, 2748 ], numMut: [ 2, 2 ],
          numRecomb: [ 7, 2, 0 ] }*/
      plate.genoList.should.have.lengthOf(15);
      plate.strainList.should.have.length(7989);
    });
  });

  describe('Testing generate plate for single phage input', () => {

    describe('Test for WT phage', () => {
      let plateSm, plateLg, nMut;
      let nSmall = 10,
        nLarge = 15000;
      before((done) => {
        let phage1 = clone(phageList[0]);
        phage1.numPhage = nSmall;
        plateSm = plateExp.createPlatePhage(phage1, null, null, null, 20, plateEnum.PLATECALLER.LAB, scenData);
        let phage2 = clone(phage1);
        phage2.numPhage = nLarge;
        plateLg = plateExp.createPlatePhage(phage2, null, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
        /* 9 mutants
          1. [ { kind: 'minusOne', location: 251 } ]
          2. [ { kind: 'minusOne', location: 195 } ]
          3. [ { kind: 'minusOne', location: 89 } ]
          4. [ { kind: 'minusOne', location: 268 } ]
        */
        nMut = plateLg.genoList.length - 1;
        for (let i = 0; i < nMut; i++) {
          //console.log(plateLg.genoList[i+1].shifts);
        }
        done();
      });

      it('Should generate small plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateSm.genoList, plateSm.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.littlePlaque.should.have.lengthOf(nSmall);
        plate.bigPlaque.should.have.lengthOf(0);
      });

      it('Should generate small plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.littlePlaque.should.have.lengthOf(nSmall);
        plate.bigPlaque.should.have.lengthOf(0);
      });

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nLarge + nMut);
        plate.littlePlaque.should.have.lengthOf(nLarge);
        plate.bigPlaque.should.have.lengthOf(nMut);
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nLarge);
        plate.littlePlaque.should.have.lengthOf(nLarge);
        plate.bigPlaque.should.have.lengthOf(0);
      });
    }); // end Test WT phage

    describe('Test for FS phage', () => {
      let plateSm, plateLg, nMut;
      let nSmall = 10,
        nLarge = 15000;
      before((done) => {
        let phage1 = clone(phageList[1]);
        phage1.numPhage = nSmall;
        plateSm = plateExp.createPlatePhage(phage1, null, null, null, 20, plateEnum.PLATECALLER.LAB, scenData);
        let phage2 = clone(phage1);
        phage2.numPhage = nLarge;
        plateLg = plateExp.createPlatePhage(phage2, null, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
        /* 1 new mutant
          1. [ { kind: 'minusOne', location: 143 },
            { kind: 'minusOne', location: 224 } ]
        */
        nMut = plateLg.genoList.length - 1;
        //console.log(nMut);
        for (let i = 0; i < nMut; i++) {
          //console.log(plateLg.genoList[i+1].shifts);
        }
        done();
      });

      it('Should generate small plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateSm.genoList, plateSm.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.littlePlaque.should.have.lengthOf(0);
        plate.bigPlaque.should.have.lengthOf(nSmall);
      });

      it('Should generate small plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateSm.genoList, plateSm.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        plate.littlePlaque.should.have.lengthOf(0);
        plate.bigPlaque.should.have.lengthOf(0);
      });

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateLg.genoList, plateLg.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nLarge + nMut);
        plate.littlePlaque.should.have.lengthOf(0);
        plate.bigPlaque.should.have.lengthOf(nLarge + nMut);
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateLg.genoList, plateLg.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(0);
        plate.littlePlaque.should.have.lengthOf(0);
        plate.bigPlaque.should.have.lengthOf(0);
      });
    }); // end Test FS phage

  }); // end Test generate plate for single phage input

  describe('Testing generate plate for double phage input', () => {

    describe('Test for WT x WT phage', () => {
      let plateB, nMut, nPhage1, nPhage2;
      let mPhage1 = 12000,
        mPhage2 = 15000;
      before((done) => {
        let phage1 = clone(phageList[0]);
        phage1.numPhage = mPhage1;
        let phage2 = clone(phage1);
        phage2.numPhage = mPhage2;
        plateB = plateExp.createPlatePhage(phage1, phage2, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
        /* 1 mutants
          { numOffspring: 15244.948974278317, total: 15245,
          numGeno: [ 8469, 6775 ], numMut: [ 0, 1 ],
          numRecomb: [ 0, 0, 0 ] }
        */
        nPhage1 = 8469, nPhage2 = 6775;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < nMut; i++) {
          //console.log(plateLg.genoList[i+1].shifts);
        }
        done();
      });

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nPhage1 + nPhage2);
        bPhage.should.equal(nMut);
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        lPhage.should.equal(nPhage1 + nPhage2);
        bPhage.should.equal(0);
      });
    }); // end Test WTxWT phage

    describe('Test for WT x FS phage', () => {
      let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
      let mPhage1 = 10000,
        mPhage2 = 12000;
      before((done) => {
        let phage1 = clone(phageList[0]);
        phage1.numPhage = mPhage1;
        let phage2 = clone(phageList[1]);
        phage2.numPhage = mPhage2;
        plateB = plateExp.createPlatePhage(phage1, phage2, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
        /* 32 mutants
          { numOffspring: 11780.910976997933, total: 11811,
          numGeno: [ 6425, 5354 ], numMut: [ 6, 3 ],
          numRecomb: [ 21, 2, 0 ] }
          1 mutant translated, 14 recomb WT
          WT geno first
        */
        nPhage1 = 6425, nPhage2 = 5354;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < nMut + 2; i++) {
          //console.log(plateB.genoList[i].shifts);
        }
        nMutHiddenPheno = 15;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      });

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nPhage1 + nMutHiddenPheno);
        bPhage.should.equal(nPhage2 + nMutPheno);
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        lPhage.should.equal(nPhage1 + nMutHiddenPheno);
        bPhage.should.equal(0);
      });
    }); // end Test WTxFS phage

    describe('Test for FS x FS phage', () => {
      let plateB, nMut, nPhage1, nPhage2, nMutHiddenPheno, nMutPheno;
      let mPhage1 = 15000,
        mPhage2 = 19000;
      before((done) => {
        let phage1 = clone(phageList[1]);
        phage1.numPhage = mPhage1;
        let phage2 = clone(phageList[3]);
        phage2.numPhage = mPhage2;
        plateB = plateExp.createPlatePhage(phage1, phage2, null, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
        /* 32 mutants
          { numOffspring: 18724.319024958197, total: 18746,
          numGeno: [ 10463, 8260 ], numMut: [ 0, 4 ],
          numRecomb: [ 18, 1, 0 ] }
          3 mutant translated, 0 recomb WT
          WT geno first
        */
        nPhage1 = 10463, nPhage2 = 8260;
        nMut = plateB.genoList.length - 2;
        for (let i = 0; i < plateB.genoList.length; i++) {
          //console.log(plateB.genoList[i].shifts);
        }
        nMutHiddenPheno = 3;
        nMutPheno = nMut - nMutHiddenPheno;
        done();
      });

      it('Should generate large plate, PERM bacteria', () => {
        let plate = plateExp.generatePlate(bactPerm, plateB.genoList, plateB.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        let nPhage = lPhage + bPhage;
        nPhage.should.equal(nPhage1 + nPhage2 + nMut);
        lPhage.should.equal(nMutHiddenPheno);
        bPhage.should.equal(nPhage1 + nPhage2 + nMutPheno);
      });

      it('Should generate large plate, REST bacteria', () => {
        let plate = plateExp.generatePlate(bactRest, plateB.genoList, plateB.strainList, scenData);
        plate.should.be.an.Object();
        plate.full.should.equal(false);
        let lPhage = plate.littlePlaque.length;
        let bPhage = plate.bigPlaque.length;
        lPhage.should.equal(nMutHiddenPheno);
        bPhage.should.equal(0);
      });
    }); // end Test WTxFS phage

  }); // end Test generate plate for double phage input

  describe('Test generate plate over capacity', () => {
    it('Should not create plate for single phage input', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 100;
      let phagePlate = plateExp.createPlatePhage(phage1, null, null, null, 20, plateEnum.PLATECALLER.LAB, scenData);
      var plate = plateExp.generatePlate(bactPerm, phagePlate.genoList, phagePlate.strainList, scenData);
      plate.full.should.equal(true);
      plate.littlePlaque.should.have.lengthOf(0);
      plate.bigPlaque.should.have.lengthOf(0);
    });

    it('Should not create plate for double phage input', () => {
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 200;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = 300;
      let phagePlate = plateExp.createPlatePhage(phage1, phage2, null, null, 250, plateEnum.PLATECALLER.LAB, scenData);
      var plate = plateExp.generatePlate(bactPerm, phagePlate.genoList, phagePlate.strainList, scenData);
      plate.full.should.equal(true);
      plate.littlePlaque.should.have.lengthOf(0);
      plate.bigPlaque.should.have.lengthOf(0);
    });
  }); // end Test generate plate over capacity

  describe('Test create full plate', () => {
    // before, reset random engines so we can use the results from this to test the controller
    before((done) => {
      //console.log('******FIND ME*******');
      phageExp.resetEngine();
      phageScen.resetEngine();
      plateExp.resetEngine();
      done();
    });
    it('Should create plate for single, WT input, PERM bacteria', () => {
      let nPhage = 15000,
        nMut = 4;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactPerm, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /* numMut 4 */
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage);
      bPhage.should.equal(nMut);
      nGeno.should.equal(nMut+1);
    });

    it('Should create plate for single, WT input, REST bacteria', () => {
      let nPhage = 15000,
        nMut = 5;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactRest, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /* numMut 5 */
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+1);
    });

    it('Should create plate for single, FS input, PERM bacteria', () => {
      let nPhage = 15000,
        nWT = 3,
        nMut = 4;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactPerm, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /* numMut 4, 3 WT mut */
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nWT);
      bPhage.should.equal(nPhage + nMut - nWT);
      nGeno.should.equal(nMut+1);
    });

    it('Should create plate for single, FS input, REST bacteria', () => {
      let nPhage = 15000,
        nWT = 1,
      nMut = 3;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = nPhage;
      let plate = plateExp.createPlate(phage1, null, bactRest, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /* numMut 3, 1 WT mut */
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+1);
    });

    it('Should create plate for WTxWT input, PERM bacteria', () => {
      let mPhage1 = 15000,
        mPhage2 = 10000,
        nMut = 13,
        nPhage1 = 9146,
        nPhage2 = 6097;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phage1);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 15244.948974278317, total: 15256,
          numGeno: [ 9146, 6097 ], numMut: [ 12, 1 ],
          numRecomb: [ 0, 0, 0 ] }*/
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2);
      bPhage.should.equal(nMut);
      nGeno.should.equal(nMut+2);
    });

    it('Should create plate for WTxWT input, REST bacteria', () => {
      let mPhage1 = 15000,
        mPhage2 = 10000,
        nMut = 11,
        nPhage1 = 9146,
        nPhage2 = 6097;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phage1);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 15244.948974278317, total: 15254,
          numGeno: [ 9146, 6097 ], numMut: [ 7, 4 ],
          numRecomb: [ 0, 0, 0 ] }*/
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage1 + nPhage2);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+2);
    });

    it('Should create plate for WTxFS input, PERM bacteria', () => {
      let mPhage1 = 15000,
        mPhage2 = 10000,
        nMut = 11,
        nPhage1 = 8853,
        nPhage2 = 5902,
        nMutWT = 6;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 14755.051025721683, total: 14772,
          numGeno: [ 8853, 5902 ], numMut: [ 4, 0 ],
          numRecomb: [ 12, 1, 0 ] }*/
      // FS is first
      // 1 mut WT, 3 mut, 5 recomb WT, 8 recomb FS
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      plate.full.should.equal(false);
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(nPhage2 + nMutWT);
      bPhage.should.equal(nPhage1 + nMut);
      nGeno.should.equal(nMut+nMutWT+2)
    });

    it('Should create plate for WTxFS input, REST bacteria', () => {
      let mPhage1 = 15000,
        mPhage2 = 10000,
        nMut = 22,
        nPhage1 = 8853,
        nPhage2 = 5902,
        nMutWT = 11;
      let phage1 = clone(phageList[0]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[1]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 14755.051025721683, total: 14788,
          numGeno: [ 8853, 5902 ], numMut: [ 7, 3 ],
          numRecomb: [ 20, 3, 0 ] }*/
      // FS is first
      // 3 mut WT, 7 mut, 8 recomb WT, 15 recomb FS
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nPhage2 + nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMut+nMutWT+2)
    });

    it('Should create plate for FSxFS input, PERM bacteria', () => {
      let mPhage1 = 15000,
        mPhage2 = 10000,
        nMut = 6,
        nPhage1 = 8853,
        nPhage2 = 5902,
        nMutWT = 7;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 14755.051025721683, total: 14768,
          numGeno: [ 8853, 5902 ], numMut: [ 5, 4 ],
          numRecomb: [ 3, 1, 0 ] }*/
      // 7 mut WT, 2 mut, 0 recomb WT, 4 recomb FS
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(nPhage1 + nPhage2 + nMut);
      nGeno.should.equal(nMut+nMutWT+2)
    });

    it('Should create plate for FSxFS input, REST bacteria', () => {
      let mPhage1 = 15000,
        mPhage2 = 10000,
        nMut = 32,
        nPhage1 = 8853,
        nPhage2 = 5902,
        nMutWT = 6;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      /*{ numOffspring: 14755.051025721683, total: 14793,
          numGeno: [ 8853, 5902 ], numMut: [ 9, 1 ],
          numRecomb: [ 27, 1, 0 ] }*/
      // 6 mut WT, 4 mut, 0 recomb WT, 28 recomb FS
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      plate.full.should.equal(false);
      lPhage.should.equal(nMutWT);
      bPhage.should.equal(0);
      nGeno.should.equal(nMutWT+nMut+2);
    });

    it('Should not create plate over capacity, PERM bacteria', () => {
      let mPhage1 = 20000,
        mPhage2 = 28000;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactPerm, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      plate.full.should.equal(true);
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(2);
    });

    it('Should not create plate over capacity, REST bacteria', () => {
      let mPhage1 = 25000,
        mPhage2 = 28000;
      let phage1 = clone(phageList[1]);
      phage1.numPhage = mPhage1;
      let phage2 = clone(phageList[3]);
      phage2.numPhage = mPhage2;
      let plate = plateExp.createPlate(phage1, phage2, bactRest, null, 20000, plateEnum.PLATECALLER.LAB, scenData);
      plate.full.should.equal(true);
      let lPhage = plate.littlePlaque.length;
      let bPhage = plate.bigPlaque.length;
      let nGeno = plate.genotypes.length;
      lPhage.should.equal(0);
      bPhage.should.equal(0);
      nGeno.should.equal(2);
    });
  }); // end Test create full plate
});
