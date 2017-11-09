const app = require('../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../config/scenario.config');
const scenarios = require('../../config/scenario.data');
const phageScen = require('../utility/phage.scenario.js');
const pEnum = require('../utility/phage.enum')

var scenario = {
  id: 0,
  mutationFreq: scenDefaults.mutationFreq,
    recombinationFreq: scenDefaults.recombinationFreq,
    gcProb: scenDefaults.gcProb,
    minStops: scenDefaults.minStops,
    intraMuteDist: scenDefaults.intraMuteDist,
    interMuteDist: scenDefaults.interMuteDist,
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage],
  otherPhage: ['{"numToMake": 1, "isWildType": false, "deletions": true, "comment": "Deletion phage"}', '{"numToMake": 3, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletions": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}']
}

describe('Scenario phage creator unit tests: ', () =>{
  it('Should be able to make a gene', ()=> {
    var gene = phageScen.makeGene(scenario.gcProb, scenario.minStops);
    gene.should.be.an.Object().and.have.property('wtGene');
    gene.wtGene.should.have.length(350*3);
    gene.realStops.should.have.length(11);
  });

  describe('Test phage making', () =>{
    let scenGeneData = {
      interMuteDist: scenario.interMuteDist,
      intraMuteDist: scenario.intraMuteDist,
      deleteSizes: clone(scenDefaults.deleteSizes),
      deleteSpots: clone(scenDefaults.deleteSpots)
    };
    before((done)=>{
      let geneData = phageScen.makeGene(scenario.gcProb, scenario.minStops);
      scenGeneData.wtGene = geneData.wtGene;
      scenGeneData.realStops = geneData.realStops;
      scenGeneData.framesStopList = geneData.framesStopList;
      done();
    });

    it('Should be able to make WT phage', ()=>{
      var refPhage = JSON.parse(scenario.referencePhage[0]);
      var wtPhageDet = phageScen.makeWTPhage( refPhage, 100, pEnum.PHAGETYPE.REF, scenGeneData);
      var wtPhage = wtPhageDet.phage;
      wtPhage.should.be.an.Object();
      wtPhage.should.have.property('mutationList', []);
      wtPhage.should.have.property('deletion', []);
    });

    it('Should be able to make FS phage', ()=>{
       var fsPhage = JSON.parse(scenario.referencePhage[1]);
       //console.log(fsPhage);
      var frameDetails = phageScen.makeFrameshiftPhage(fsPhage, 101, pEnum.PHAGETYPE.REF, scenGeneData);
      frameDetails.should.be.an.Object();
      frameDetails.scenData.usedShiftSpots.should.have.length(1);
      frameDetails.phage.mutationList.should.have.length(1);
      frameDetails.phage.mutationList[0].should.have.property('location',98);
      });

    it('Should be able to make multiple FS phage', ()=>{
      var fsPhage = JSON.parse(scenario.referencePhage[1]);
      var phageList = []
      for(let i = 0; i < 6; i++){
        let frameDetails = phageScen.makeFrameshiftPhage(fsPhage, i, pEnum.PHAGETYPE.REF, scenGeneData);
        scenGeneData = frameDetails.scenData;
        phageList.push(frameDetails.phage);
      }
      //console.log(phageList);
      phageList.should.have.length(6);
      scenGeneData.usedShiftSpots.should.have.length(6);

     //console.log(scenGeneData.usedShiftSpots); phageList[0].mutationList.should.have.property('location', 183);
    });

    it('Should be able to make DEL phage', ()=>{
      var delPhage = JSON.parse(scenario.referencePhage[0]);
      delPhage.deletions = true;
      delPhage.isWildType = false;
      delPhage.comment = 'Mutant phage containing a deletion';
      var phageDetails = phageScen.makeDeletionPhage(delPhage, 102, pEnum.PHAGETYPE.REF, scenGeneData);
      var phage = phageDetails.phage;
      phage.should.be.an.Object();
      phage.should.have.property('mutationList', []);
      phage.should.have.property('deletion', [243, 266]);
    });

    it('Should be able to make multiple DEL phage', ()=>{
      var delPhage = JSON.parse(scenario.referencePhage[0]);
      delPhage.deletions = true;
      delPhage.isWildType = false;
      delPhage.comment = 'Mutant phage containing a deletion';
      var phageList = [];
      for(let i = 0; i < 6; i++){
        let delDetails = phageScen.makeDeletionPhage(delPhage, i+10, pEnum.PHAGETYPE.REF, scenGeneData);
        scenGeneData = delDetails.scenData;
        phageList.push(delDetails.phage);
      }
      phageList.should.have.length(6);
    });

    it('Should be able to create one of each type', ()=>{
      var phages = [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletions": true, "comment": "Deletion phage"}'];
      var phageList = [];
      for(let i = 0; i < phages.length; i++){
        var phageDetails = phageScen.makePhage(JSON.parse(phages[i]), i+20, pEnum.PHAGETYPE.REF, scenGeneData);
        scenGeneData = phageDetails.scenData;
        phageList.push(phageDetails.phage);
      }
      phageList.should.be.an.Array();
      phageList.should.and.have.lengthOf(3);
    });

    afterEach((done)=>{
      scenGeneData.usedShiftSpots = [];
      scenGeneData.usedDeleteSpots = [];
      done();
    });
  });

  describe('Test create full scenario phages', ()=>{
    it('Should be able to create full scenario', ()=>{
    var scenOutput = phageScen.generateScenario(scenario);
    scenOutput.should.be.an.Object();
      scenOutput.strainList.should.have.length(6);
      });
  });
});
