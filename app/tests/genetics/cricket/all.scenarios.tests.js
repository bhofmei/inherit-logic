const app = require('../../../../index.js');
const should = require('should');
const clone = require('clone');
const scenarios = require('../../../../config/cricket/scenario.data');
const phageScen = require('../../../genetics/cricket/phage.scenario.js');
const pEnum = require('../../../genetics/cricket/phage.enum');
const debug = require('debug')('genetics:scenario');

const compareMut = function(expected, actual){
  // expected is int: negative is minusOne, positive is plusOne, 0 is none
  // expected int value is location
  // actual is full list of mutations -> only look at first
  if(expected !== 0){
    let mut = actual[0];
    return (mut === expected);
  } else {
    // no expected mutations
    return (actual.length === 0)
  }
};

describe('Defined scenario creator tests: ', () => {
  describe('Random generator', () => {
    beforeEach((done) => {
      phageScen.resetEngine();
      done();
    }); // end beforeEach

    it('Should be able to create scenario WTorMute', () => {
      let scenario = scenarios[0];
      let exp = [0, 240];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario WTorMute

    it('Should be able to create scenario ThreeOther', () => {
      let scenario = scenarios[1];
      let exp = [0,-240];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario ThreeOther

    it('Should be able to create scenario SameOrDiff1', () => {
      let scenario = scenarios[2];
      let exp = [0, 180, 180];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario SameOrDiff1

    it('Should be able to create scenario OneEach', () => {
      let scenario = scenarios[3];
      let exp = [0, 180];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario OneEach

    it('Should be able to create scenario WhoMiddle', () => {
      let scenario = scenarios[4];
      let exp = [0, 215, 180, 240];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(4);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario WhoMiddle

    it('Should be able to create scenario CombineTwo', () => {
      let scenario = scenarios[5];
      let exp = [0, -230, 86];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
      });
    }); // end Should be able to create scenario CombineTwo

    it('Should be able to create scenario MapDelete', () => {
      let scenario = scenarios[6];
      let delStart = [0, 210, 80, 110, 10, 60, 190, -10, 40];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(9);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        if(delStart[i] !== 0)
          strain.deletion[0].should.equal(delStart[i]);
      });
    }); // end Should be able to create scenario MapDelete

    it('Should be able to create scenario ProveCode', () => {
      let scenario = scenarios[7];
      let exp = [0, -152];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario ProveCode

    it('Should be able to create scenario FindStop', () => {
      let scenario = scenarios[8];
      let exp = [0, -240];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario FindStop

    it('Should be able to create scenario SameOrDiff2', () => {
      let scenario = scenarios[9];
      let exp = [0, -176, -152];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario SameOrDiff2

    it('Should be able to create scenario HowMany', () => {
      let scenario = scenarios[10];
      let exp = [0, -180, 215];
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario HowMany
  }); // end random generator

  describe('Practice test generator', () => {

    it('Should be able to create scenario WTorMute', () => {
      let scenario = scenarios[0];
      let exp = [-234, 0];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario WTorMute

    it('Should be able to create scenario ThreeOther', () => {
      let scenario = scenarios[1];
      let exp = [0, -88];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario ThreeOther

    it('Should be able to create scenario SameOrDiff1', () => {
      let scenario = scenarios[2];
      let exp =[0, 304, 304];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario SameOrDiff1

    it('Should be able to create scenario OneEach', () => {
      let scenario = scenarios[3];
      let exp = [0, 79];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario OneEach

    it('Should be able to create scenario WhoMiddle', () => {
      let scenario = scenarios[4];
      let exp = [0, 28, 58, 163];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(4);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario WhoMiddle

    it('Should be able to create scenario CombineTwo', () => {
      let scenario = scenarios[5];
      let exp = [0, 74, 252];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario CombineTwo

    it('Should be able to create scenario MapDelete', () => {
      let scenario = scenarios[6];
      let delStart = [0, 10, 110, 210, 190, 40, 130, 60, 160];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(9);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        if(delStart[i] !== 0)
          strain.deletion[0].should.equal(delStart[i]);
      });
    }); // end Should be able to create scenario MapDelete

    it('Should be able to create scenario ProveCode', () => {
      let scenario = scenarios[7];
      let exp = [0, 291];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario ProveCode

    it('Should be able to create scenario FindStop', () => {
      let scenario = scenarios[8];
      let exp = [0, 32];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario FindStop

    it('Should be able to create scenario SameOrDiff2', () => {
      let scenario = scenarios[9];
      let exp = [0, 263, -59];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // end Should be able to create scenario SameOrDiff2

    it('Should be able to create scenario HowMany', () => {
      let scenario = scenarios[10];
      let exp = [0, -152, 184];
      phageScen.seedEngine(scenario.degOfDiff);
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
      scenOutput.strainList.forEach((strain, i) => {
        debug(strain.strainNum, strain.mutationList, strain.deletion);
        let cmp = compareMut(exp[i], strain.mutationList);
        cmp.should.equal(true);
      });
    }); // Should be able to create scenario HowMany

  }); // end practice generator
});
