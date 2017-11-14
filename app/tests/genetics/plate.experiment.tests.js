const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../config/scenario.config');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../utility/phage.scenario.js');
//const phageExp = require('../utility/phage.experiment');
const plateExp = require('../../utility/plate.experiment');;
const phageEnum = require('../../utility/phage.enum');
const plateEnum = require('../../utility/plate.enum');
const bacteria = require('../../models/bacteria.server.model');

var scenario = {
  id: 0,
  mutationFreq: scenDefaults.mutationFreq,
  recombinationFreq: scenDefaults.recombinationFreq,
  gcProb: scenDefaults.gcProb,
  minStops: scenDefaults.minStops,
  intraMuteDist: scenDefaults.intraMuteDist,
  interMuteDist: scenDefaults.interMuteDist,
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletions": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletions": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletions": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}'],
  otherPhage: []
}

describe('Plate experiments unit tests', () => {
  let phages = scenario.referencePhage;
  var phageList = [];
  let scenData = {
    interMuteDist: scenario.interMuteDist,
    intraMuteDist: scenario.intraMuteDist,
    deleteSizes: clone(scenDefaults.deleteSizes),
    deleteSpots: clone(scenDefaults.deleteSpots)
  };
  before((done) => {
    let geneData = phageScen.makeGene(scenario.gcProb, scenario.minStops);
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
    }
    done();
  });
  /* PHAGE:
  0. WT
  1. mutationList: [ { kind: 'minusOne', location: 143 } ]
  2. deletion: [ 110, 205 ]
  3. mutationList: [ { kind: 'plusOne', location: 193 } ]
  4. [ { kind: 'minusOne', location: 6 }, { kind: 'minusOne', location: 82 } ]
  */

  describe('Testing for single phage input', () => {

    it('Should create plate for WT phage - under capacity', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10;
      let plate = plateExp.createPlate(phage1, null, plateEnum.BACTTYPE.PERM, null, 20, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype and 10 phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(10);
    });

    it('Should not create plate for WT phage over capacity', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10;
      let plate = plateExp.createPlate(phage1, null, plateEnum.BACTTYPE.PERM, null, 5, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype and 1 toomany phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.equal(false);
    });

    it('Should create huge plate for WT phage', () => {
      // wt phage
      let phage1 = clone(phageList[0]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlate(phage1, null, plateEnum.BACTTYPE.PERM, null, 20000, plateEnum.PLATECALLER.LAB, scenario);
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
      // wt phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 10;
      let plate = plateExp.createPlate(phage1, null, plateEnum.BACTTYPE.PERM, null, 20, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype and 10 phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(10);
    });

    it('Should create huge plate for FS phage', () => {
      // wt phage
      let phage1 = clone(phageList[1]);
      phage1.numPhage = 10000;
      let plate = plateExp.createPlate(phage1, null, plateEnum.BACTTYPE.PERM, null, 20000, plateEnum.PLATECALLER.LAB, scenario);
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
      let plate = plateExp.createPlate(phage1, null, plateEnum.BACTTYPE.PERM, null, 20, plateEnum.PLATECALLER.LAB, scenario);
      // plate should have 1 genotype and 10 phage
      plate.genoList.should.have.lengthOf(1);
      plate.strainList.should.have.length(10);
    });
  });

  describe('Testing for double phage input', () => {
    it('Should create plate for cross WT to WT', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 100;
      phage2.numPhage = 50;
      let plate = plateExp.createPlate(phage1, phage2, plateEnum.BACTTYPE.PERM, null, 200, plateEnum.PLATECALLER.LAB, scenario);
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
      let plate = plateExp.createPlate(phage1, phage2, plateEnum.BACTTYPE.PERM, null, 20, plateEnum.PLATECALLER.LAB, scenario);
      plate.genoList.should.have.lengthOf(2);
      plate.strainList.should.equal(false);
    });

    it('Should create plate for huge cross WT to WT', () => {
      let phage1 = clone(phageList[0]);
      let phage2 = clone(phageList[0]);
      phage1.numPhage = 10000;
      phage2.numPhage = 8000;
      let plate = plateExp.createPlate(phage1, phage2, plateEnum.BACTTYPE.PERM, null, 20000, plateEnum.PLATECALLER.LAB, scenario);
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
      let plate = plateExp.createPlate(phage1, phage2, plateEnum.BACTTYPE.PERM, null, 200, plateEnum.PLATECALLER.LAB, scenario);
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
      let plate = plateExp.createPlate(phage1, phage2, plateEnum.BACTTYPE.PERM, null, 10000, plateEnum.PLATECALLER.LAB, scenario);
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
      let plate = plateExp.createPlate(phage1, phage2, plateEnum.BACTTYPE.PERM, null, 200, plateEnum.PLATECALLER.LAB, scenario);
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
      let plate = plateExp.createPlate(phage1, phage2, plateEnum.BACTTYPE.PERM, null, 10000, plateEnum.PLATECALLER.LAB, scenario);
      /*{ numOffspring: 7976.635217326557, total: 7989,
          numGeno: [ 5228, 2748 ], numMut: [ 2, 2 ],
          numRecomb: [ 7, 2, 0 ] }*/
      plate.genoList.should.have.lengthOf(15);
      plate.strainList.should.have.length(7989);
    });

  });
});
