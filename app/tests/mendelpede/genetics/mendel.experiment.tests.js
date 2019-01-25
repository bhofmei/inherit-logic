const app = require('../../../../index.js');
const should = require('should');
const clone = require('clone');
const scenarios = require('../../../../config/mendelpede/scenario.data');
const mendelScen = require('../../../genetics/mendelpede/mendel.scenario');
const mendelExp = require('../../../genetics/mendelpede/mendel.experiment');
const tEnum = require('../../../genetics/mendelpede/traits.enum')
const debug = require('debug')('genetics:mendel');

describe('Mendel experiment unit tests: ', ()=>{
  before((done)=>{
    mendelScen.resetEngine();
    done();
  });

  describe('Test all mendel traits', ()=>{
    var genoFacts = [ { inherit: 'mendel', trait: 'SegColor', dom: 'Orange', interm: null, rec: 'LightGray' },
    { inherit: 'mendel', trait: 'EyeColor', dom: 'Red', interm: null, rec: 'Cyan' },
    { inherit: 'mendel', trait: 'NumSegments', dom: 2, interm: null, rec: 3 },
    { inherit: 'mendel', trait: 'DotColor', dom: 'Black', interm: null, rec: 'Black' },
    { inherit: 'mendel', trait: 'NumLegs', dom: 1, interm: null, rec: 1 } ];

    it('should make heterozygous babies', ()=>{
      var mother = {genotype: [4,4,4]}; // mother dominant for everything
      var father = {genotype: [0,0,0]};
      var babies = mendelExp.makeChildren(mother, father, 10, genoFacts);
      babies.should.have.lengthOf(10);
      // test baby 0 and 9 - should be all heterozygous
      var baby1 = babies[0];
      baby1.genotype.should.deepEqual([3,3,3]);
      baby1.phenotype.should.deepEqual(['Black', 'Red','Orange', 1, 2]);
      var baby2 = babies[9];
      baby2.genotype.should.deepEqual([3,3,3]);
      baby2.phenotype.should.deepEqual(['Black', 'Red','Orange', 1, 2]);
    }); // end should make heterozygous babies

    it('should make recessive babies', ()=>{
      var mother = {genotype: [0,0,0]}; // mother dominant for everything
      var father = {genotype: [0,0,0]};
      var babies = mendelExp.makeChildren(mother, father, 5, genoFacts);
      babies.should.have.lengthOf(5);
      // test baby 0 and 4 - should be all recessive
      var baby1 = babies[0];
      baby1.genotype.should.deepEqual([0,0,0]);
      baby1.phenotype.should.deepEqual(['Black', 'Cyan','LightGray', 1, 3]);
      var baby2 = babies[4];
      baby2.genotype.should.deepEqual([0,0,0]);
      baby2.phenotype.should.deepEqual(['Black', 'Cyan','LightGray', 1, 3]);
    }); // end should make recessive babies

    it('should make mixed babies', ()=>{
      var mother = {genotype: [3,0,4]};
      var father = {genotype: [0,4,1]};
      var babies = mendelExp.makeChildren(mother, father, 5, genoFacts);
      babies.should.have.lengthOf(5);
      // test baby 0 and 4 - should be all recessive
      var baby1 = babies[0];
      //baby1.genotype.should.deepEqual([0,1,3]);
      //baby1.phenotype.should.deepEqual(['Black', 'Red','LightGray', 1, 2]);
      var baby2 = babies[2];
      //console.log(baby2);
      //baby2.genotype.should.deepEqual([3,1,4]);
      //baby2.phenotype.should.deepEqual(['Black', 'Red','Orange', 1, 3]);
    }); // end should make recessive babies
  }); // end Test all mendel traits
}); // end Mendel experiment unit tests
