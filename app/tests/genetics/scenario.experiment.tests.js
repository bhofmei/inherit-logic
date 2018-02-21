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

var bactPerm = 'B';
var bactRest = 'K';
var numPhageSmall = 1400,
  numPhageLarge = 10000;

describe('Scenario experiment tests: ', () => {

  beforeEach((done) => {
    phageExp.resetEngine();
    plateExp.resetEngine();
    done();
  }); // end beforeEach
  describe('WTorMute', () => {
    let scenDetails, phageList;
    before((done) => {
      // generate scenario
      let scenario = scenarios[0];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenDetails = scenOutput.scenData;
      phageList = scenOutput.strainList;
      // -234, 0
      done();
    }); // end before

    it('Should identify phage1 is FS on PERM', () => {
      let phage1 = clone(phageList[0]); // -234
      phage1.numPhage = numPhageSmall;
      let phage2 = clone(phageList[1]); // 0
      phage2.numPhage = numPhageSmall;

      let plate1 = plateExp.createPlate(phage1, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);

      let plate2 = plateExp.createPlate(phage2, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
      let large1 = plate1.largePlaque.length;
      let large2 = plate2.largePlaque.length;
      large1.should.be.above(large2)
    }); // end Should identify phage1 is FS on PERM

    it('Should identify phage2 is WT on REST', () => {
      let phage1 = clone(phageList[0]); // -234
      phage1.numPhage = numPhageLarge;
      let phage2 = clone(phageList[1]); // 0
      phage2.numPhage = numPhageLarge;

      let plate1 = plateExp.createPlate(phage1, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);

      let plate2 = plateExp.createPlate(phage2, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
      plate2.full.should.equal(true);
    }); // end Should identify phage1 is FS on PERM
  }); //end WTorMute

  describe('ThreeOther', () => {
    let scenDetails, phageList;
    before((done) => {
      // generate scenario
      let scenario = scenarios[1];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenDetails = scenOutput.scenData;
      phageList = scenOutput.strainList;
      // 0, -88
      done();
    }); // end before

    it('Should identify 3 compensating on REST', () => {
      let triesLeft = 20;
      let wtFound = 0;
      let phage = clone(phageList[1]);
      phage.numPhage = numPhageSmall;
      while (wtFound < 3 && triesLeft > 0) {
        // generate plate
        let plate = plateExp.createPlate(phage, null, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wtFound += plate.smallPlaque.length;
        triesLeft--;
      }; // end while
      triesLeft.should.be.above(0); // should have found enough already
      wtFound.should.be.above(2);
    }); // end Should identify 3 compensating on REST

    it('Should identify 3 compensating on PERM', () => {
      let triesLeft = 20;
      let wtFound = 0;
      let phage = clone(phageList[1]);
      phage.numPhage = numPhageSmall;
      while (wtFound < 3 && triesLeft > 0) {
        // generate plate
        let plate = plateExp.createPlate(phage, null, bactPerm, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wtFound += plate.smallPlaque.length;
        triesLeft--;
      }; // end while
      triesLeft.should.be.above(0); // should have found enough already
      wtFound.should.be.above(2);
    }); // end Should identify 3 compensating on PERM
  }); // end ThreeOther

  describe('SameOfDiff1', () => {
    let scenDetails, phageList;
    before((done) => {
      // generate scenario
      let scenario = scenarios[2];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenDetails = scenOutput.scenData;
      phageList = scenOutput.strainList;
      // 0, 304, 304
      done();
    }); // end before

  }); // end SameOrDiff1

  describe('OneEach', () => {
    let scenDetails, phageList;
    before((done) => {
      // generate scenario
      let scenario = scenarios[3];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenDetails = scenOutput.scenData;
      phageList = scenOutput.strainList;
      // 0, (79, -125)
      done();
    }); // end before

  }); // end SameOrDiff1

  describe('WhoMiddle', () => {
    let scenDetails, phageList;
    before((done) => {
      // generate scenario
      let scenario = scenarios[4];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenDetails = scenOutput.scenData;
      phageList = scenOutput.strainList;
      // 0, 28, 58, 163 (30, 105, 135)
      done();
    }); // end before

    it('Should have more WT for phage1 x phage3 vs phage1 x phage2 on REST', () => {
      let phage1 = clone(phageList[1]); // 28
      phage1.numPhage = numPhageLarge;
      let phage2 = clone(phageList[2]); // 58
      phage2.numPhage = numPhageLarge;
      let phage3 = clone(phageList[3]); // 163
      phage3.numPhage = numPhageLarge;
      let wt13 = 0,
        wt12 = 0;
      for (let i = 0; i < 20; i++) {
        let plate13 = plateExp.createPlate(phage1, phage3, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wt13 += plate13.smallPlaque.length;
        let plate12 = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wt12 += plate12.smallPlaque.length;
      } // end for
      console.log('wt13 (135)',wt13, 'wt12 (30)', wt12);
      // wt13 (135) 108 wt12 (30) 59
      wt13.should.be.above(wt12);
    }); // end Should have more WT for phage1 x phage3 vs phage1 x phage2 on REST

    it('Should have more WT for phage1 x phage3 vs phage2 x phage3 on REST', () => {
      let phage1 = clone(phageList[1]); // 28
      phage1.numPhage = numPhageLarge;
      let phage2 = clone(phageList[2]); // 58
      phage2.numPhage = numPhageLarge;
      let phage3 = clone(phageList[3]); // 163
      phage3.numPhage = numPhageLarge;
      let wt13 = 0,
        wt23 = 0;
      for (let i = 0; i < 20; i++) {
        let plate13 = plateExp.createPlate(phage1, phage3, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wt13 += plate13.smallPlaque.length;
        let plate23 = plateExp.createPlate(phage2, phage3, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wt23 += plate23.smallPlaque.length;
      } // end for
      console.log('wt13 (135)',wt13, 'wt23 (105)', wt23);
      // wt13 (135) 123 wt23 (105) 115
      wt13.should.be.above(wt23);
    }); // end Should have more WT for phage1 x phage3 vs phage2 x phage3 on REST

    it('Should have more WT for phage2 x phage3 vs phage1 x phage2 on REST', () => {
      let phage1 = clone(phageList[1]); // 28
      phage1.numPhage = numPhageLarge;
      let phage2 = clone(phageList[2]); // 58
      phage2.numPhage = numPhageLarge;
      let phage3 = clone(phageList[3]); // 163
      phage3.numPhage = numPhageLarge;
      let wt12 = 0,
        wt23 = 0;
      for (let i = 0; i < 20; i++) {
        let plate12 = plateExp.createPlate(phage1, phage2, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wt12 += plate12.smallPlaque.length;
        let plate23 = plateExp.createPlate(phage2, phage3, bactRest, null, scenDefaults.plateCapacity, plateEnum.PLATECALLER.LAB, scenDetails);
        wt23 += plate23.smallPlaque.length;
      } // end for
      console.log('wt12 (30)',wt12, 'wt23 (105)', wt23);
      // wt12 (30) 72 wt23 (105) 105
      wt23.should.be.above(wt12);
    }); // end Should have more WT for phage1 x phage3 vs phage2 x phage3 on REST
  }); // end WhoMiddle
}); // end Scenario experiment tests
