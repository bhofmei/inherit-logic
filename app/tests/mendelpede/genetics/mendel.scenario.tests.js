const app = require('../../../../index.js');
const should = require('should');
const clone = require('clone');
const scenarios = require('../../../../config/mendelpede/scenario.data');
const mendelScen = require('../../../genetics/mendelpede/mendel.scenario');
const tEnum = require('../../../genetics/mendelpede/traits.enum')
const debug = require('debug')('genetics:mendel');

var scenario = scenarios[0];

describe('Scenario mendel creator unit tests: ', ()=>{
  before((done)=>{
    mendelScen.resetEngine();
    done();
  });
  describe('Test create inheritance models', ()=>{
    it('should create all mendel', ()=>{
      var genoFacts = mendelScen.getInheritance(scenarios[0]);
      genoFacts.should.have.lengthOf(5);
      genoFacts[0].should.have.property('inherit', 'mendel');
      genoFacts[4].should.have.property('inherit', 'mendel');
    }); // end should create all mendel

    it('should create incDom', ()=>{
      var genoFacts = mendelScen.getInheritance(scenarios[1]);
      genoFacts.should.have.lengthOf(5);
      genoFacts[0].should.have.property('inherit', 'incDom');
      genoFacts[4].should.have.property('inherit', 'mendel');
    }); // end should create incDom

    it('should create mito', ()=>{
      var genoFacts = mendelScen.getInheritance(scenarios[2]);
      genoFacts.should.have.lengthOf(5);
      genoFacts[0].should.have.property('inherit', 'mito');
      genoFacts[4].should.have.property('inherit', 'mendel');
    }); // end should create mito

    it('should create autolink', ()=>{
      var genoFacts = mendelScen.getInheritance(scenarios[3]);
      genoFacts.should.have.lengthOf(5);
      genoFacts[0].should.have.property('inherit', 'autoLink');
      genoFacts[0].should.have.property('howBad');
      genoFacts[4].should.have.property('inherit', 'mendel');
    }); // end should create mito

    it('should create synthleth', ()=>{
      var genoFacts = mendelScen.getInheritance(scenarios[6]);
      genoFacts.should.have.lengthOf(5);
      genoFacts[0].should.have.property('inherit', 'synthLeth');
      genoFacts[1].should.have.property('inherit', 'synthLeth');
      genoFacts[4].should.have.property('inherit', 'mendel');
    }); // end should create mito


  }); // end Test create inheritance models

  describe('Test set traits', ()=>{
    it('should give traits for mendel', ()=>{
      var genoFacts = mendelScen.getInheritance(scenarios[0]);
      var genoFacts = mendelScen.setTraits(genoFacts)
      genoFacts.should.have.lengthOf(5);

    }); // end should give traits for mendel

    it('should give traits for autolink', ()=>{
      var genoFacts = mendelScen.getInheritance(scenarios[3]);
      var genoFacts = mendelScen.setTraits(genoFacts)
      genoFacts.should.have.lengthOf(5);

    }); // end should give traits for mendel
  }); // end Test set traits

  describe('Test get starting bugs', ()=>{
    it('should produce bugs', ()=>{
      var scenario = scenarios[0];

      var genoTraits = mendelScen.getInheritance(scenario);
      genoTraits = mendelScen.setTraits(genoTraits);
      var bugs = mendelScen.createGenotypes(scenario, genoTraits);
      bugs.should.have.lengthOf(6);
      debug(bugs);
    });
  }); // end Test get starting bugs

}); // end Scenario mendel creator unit tests
