const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../config/scenario.config');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../genetics/phage.scenario.js');
const pEnum = require('../../genetics/phage.enum')

var scenario = {
  id: 0,
  mutationFreq: scenDefaults.mutationFreq,
  recombinationFreq: scenDefaults.recombinationFreq,
  gcProb: scenDefaults.gcProb,
  minStops: scenDefaults.minStops,
  intraMuteDist: scenDefaults.intraMuteDist,
  interMuteDist: scenDefaults.interMuteDist,
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage],
  otherPhage: ['{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 3, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}']
}

describe('Scenario phage creator unit tests: ', () => {
  before((done)=>{
    phageScen.resetEngine();
    done();
  });
  it('Should be able to make a gene', () => {
    var gene = phageScen.makeGene(scenario.gcProb, scenario.minStops);
    gene.should.be.an.Object()
      .and.have.property('wtGene');
    gene.wtGene.should.have.length(350 * 3);
    gene.realStops.should.have.length(11);
  });

  describe('Test phage making', () => {
    let scenGeneData = {
      interMuteDist: scenario.interMuteDist,
      intraMuteDist: scenario.intraMuteDist,
      deleteSizes: clone(scenDefaults.deleteSizes),
      deleteSpots: clone(scenDefaults.deleteSpots)
    };
    before((done) => {
      let geneData = phageScen.makeGene(scenario.gcProb, scenario.minStops);
      scenGeneData.wtGene = geneData.wtGene;
      scenGeneData.realStops = geneData.realStops;
      scenGeneData.framesStopList = geneData.framesStopList;
      done();
    });

    it('Should be able to make WT phage', () => {
      var refPhage = JSON.parse(scenario.referencePhage[0]);
      var wtPhageDet = phageScen.makeWTPhage(refPhage, 100, pEnum.PHAGETYPE.REF, scenGeneData);
      var wtPhage = wtPhageDet.phage;
      wtPhage.should.be.an.Object();
      wtPhage.should.have.property('mutationList', []);
      wtPhage.should.have.property('deletion', []);
    });

    it('Should be able to make FS phage', () => {
      var fsPhage = JSON.parse(scenario.referencePhage[1]);
      //console.log(fsPhage);
      var frameDetails = phageScen.makeFrameshiftPhage(fsPhage, 101, pEnum.PHAGETYPE.REF, scenGeneData);
      frameDetails.should.be.an.Object();
      /* mutationList: [ { kind: 'plusOne', location: 98 } ] */
      frameDetails.scenData.usedShiftSpots.should.have.length(1);
      frameDetails.phage.mutationList.should.have.length(1);
      frameDetails.phage.mutationList[0].should.have.property('location', 98);
    });

    it('Should be able to make multiple FS phage', () => {
      var fsPhage = JSON.parse(scenario.referencePhage[1]);
      var phageList = []
      var expectedShifts = [183, 211, 276, 197, 137, 63];
      for (let i = 0; i < 6; i++) {
        let frameDetails = phageScen.makeFrameshiftPhage(fsPhage, i + 10, pEnum.PHAGETYPE.REF, scenGeneData);
        scenGeneData = frameDetails.scenData;
        phageList.push(frameDetails.phage);
      }
      phageList.should.have.length(6);
      let shiftSpots = scenGeneData.usedShiftSpots;
      shiftSpots.should.have.length(6);
      // check that shift spots match
      for (let i = 0; i < phageList.length; i++) {
        //console.log('shift', phageList[i].mutationList);
        phageList[i].mutationList[0].should.equal(shiftSpots[i]);
      }
    });

    it('Should be able to make DEL phage', () => {
      var delPhage = JSON.parse(scenario.referencePhage[0]);
      delPhage.deletions = true;
      delPhage.isWildType = false;
      delPhage.comment = 'Mutant phage containing a deletion';
      var phageDetails = phageScen.makeDeletionPhage(delPhage, 102, pEnum.PHAGETYPE.REF, scenGeneData);
      var phage = phageDetails.phage;
      /* deletion: [ -15, 35 ] */
      phage.should.be.an.Object();
      phage.should.have.property('mutationList', []);
      phage.should.have.property('deletion', [-15, 35]);
    });

    it('Should be able to make multiple DEL phage', () => {
      var delPhage = JSON.parse(scenario.referencePhage[0]);
      delPhage.deletions = true;
      delPhage.isWildType = false;
      delPhage.comment = 'Mutant phage containing a deletion';
      var phageList = [];
      for (let i = 0; i < 6; i++) {
        let delDetails = phageScen.makeDeletionPhage(delPhage, i + 10, pEnum.PHAGETYPE.REF, scenGeneData);
        scenGeneData = delDetails.scenData;
        phageList.push(delDetails.phage);
      }
      let deleteSpots = scenGeneData.usedDeleteSpots
      phageList.should.have.length(6);
      deleteSpots.should.have.length(6);

      for (let i = 0; i < phageList.length; i++) {
        phageList[i].deletion.should.equal(deleteSpots[i]);
      }
    });

    it('Should be able to create one of each type', () => {
      var phages = [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}'];
      var phageList = [];
      for (let i = 0; i < phages.length; i++) {
        var phageDetails = phageScen.makePhage(JSON.parse(phages[i]), i + 20, pEnum.PHAGETYPE.REF, scenGeneData);
        scenGeneData = phageDetails.scenData;
        phageList.push(phageDetails.phage);
      }
      phageList.should.be.an.Array();
      phageList.should.and.have.lengthOf(3);
      // wt
      let wt = phageList[0];
      wt.mutationList.should.have.lengthOf(0);
      wt.deletion.should.have.lengthOf(0);
      // fs - mutationList: [ { kind: 'plusOne', location: 233 } ]
      let fs = phageList[1];
      /* [ { kind: 'minusOne', location: 238 } ] */;
      fs.mutationList.should.have.lengthOf(1);
      //fs.mutationList[0].should.have.property('location', 238);
      fs.deletion.should.have.lengthOf(0);
      // del - deletion: [ 160, 255 ]
      let del = phageList[2];
      del.mutationList.should.have.lengthOf(0);
      del.deletion.should.have.lengthOf(2);
      del.deletion[0].should.be.equal(160);
      del.deletion[1].should.be.equal(255);

    });

    afterEach((done) => {
      scenGeneData.usedShiftSpots = [];
      scenGeneData.usedDeleteSpots = [];
      done();
    });
  });

  describe('Test create full scenario phages', () => {
    it('Should be able to create full scenario', () => {
      var scenOutput = phageScen.generateScenario(scenario);
      scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(6);
      /* check the strains for expected
      0. WT
      1. [ { kind: 'minusOne', location: 34 } ]
      2. (3) [ { kind: 'plusOne', location: 54 } ]
      3. (2) [ 185, 280 ]
      4. (5) [ { kind: 'plusOne', location: 189 } ]
      5. (4) [ { kind: 'plusOne', location: 294 } ]
      */
      var mutList = [-1, 34, 54, -1, 189, 294];
      var delList = [-1, -1, -1, 185, -1, -1];
      for(let i = 0; i < scenOutput.strainList.length; i++){
        let s = scenOutput.strainList[i];
        if(mutList[i] !== -1)
          s.mutationList[0].should.have.property('location', mutList[i]);
        if(delList[i] !== -1)
          s.deletion[0].should.be.equal(delList[i]);
      } //end for i
    });

  });
});
