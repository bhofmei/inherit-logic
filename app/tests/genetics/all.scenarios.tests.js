const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../genetics/phage.scenario.js');
const pEnum = require('../../genetics/phage.enum');

describe('Defined scenario creator tests: ', () => {
  beforeEach((done)=>{
    phageScen.resetEngine();
    done();
  });

  it('Should be able to create scenario WTorMute', () => {
    let scenario = scenarios[0];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
    });

  it('Should be able to create scenario SameOrDiff1', () => {
    let scenario = scenarios[1];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
    });

  it('Should be able to create scenario ThreeOther', () => {
    let scenario = scenarios[2];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
    //console.log(scenOutput.strainList);
    });

  it('Should be able to create scenario OneEach', () => {
    let scenario = scenarios[3];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
    });

  it('Should be able to create scenario MapDelete', () => {
    let scenario = scenarios[4];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(9);
    });

  it('Should be able to create scenario WhoMiddle', () => {
    let scenario = scenarios[5];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(4);
    });

  it('Should be able to create scenario HowMany', () => {
    let scenario = scenarios[6];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
    });

  it('Should be able to create scenario SameOrDiff2', () => {
    let scenario = scenarios[7];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
    });

  it('Should be able to create scenario ProveCode', () => {
    let scenario = scenarios[8];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
    });

  it('Should be able to create scenario FindStop', () => {
    let scenario = scenarios[9];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(2);
    });

  it('Should be able to create scenario CombineTwo', () => {
    let scenario = scenarios[10];
    var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(3);
    });

});
