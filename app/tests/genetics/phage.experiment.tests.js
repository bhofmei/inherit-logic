const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../config/scenario.config');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../genetics/phage.scenario');
const phageExp = require('../../genetics/phage.experiment');
const pEnum = require('../../genetics/phage.enum');
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
}

describe('Phage experiments unit tests', () => {
  // set up
  let phages = scenario.referencePhage;
  var phageList = [];
  let scenData = {
    interMuteDist: scenario.interMuteDist,
    intraMuteDist: scenario.intraMuteDist,
    deleteSizes: clone(scenDefaults.deleteSizes),
    deleteSpots: clone(scenDefaults.deleteSpots)
  };
  before((done) => {
    // reset random generators
    phageExp.resetEngine();
    phageScen.resetEngine();
    let geneData = phageScen.makeGene(scenario.gcProb, scenario.minStops);
    scenData.wtGene = geneData.wtGene;
    scenData.realStops = geneData.realStops;
    scenData.framesStopList = geneData.framesStopList;
    for (let i = 0; i < phages.length; i++) {
      var phageDetails = phageScen.makePhage(JSON.parse(phages[i]), i, pEnum.PHAGETYPE.REF, scenData);
      scenData = phageDetails.scenData;
      debug('original  phage', phageDetails.phage);
      phageList.push(phageDetails.phage);
    }
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

  describe('Test mutagenize', () => {
    before((done)=>{
      // reset engines
      phageExp.seedEngine(699);
      phageScen.seedEngine(504);
      done();
    });

    it('Should be able to mutagenize WT', () => {
      let wtPhage = phageList[0];
      let newPhage = phageExp.mutagenize(wtPhage.mutationList, 2);
      // newPhage = [ [ { kind: 'minusOne', location: 41 } ],
      // [ { kind: 'plusOne', location: 346 } ] ]
      debug(newPhage);
//      newPhage.should.be.an.Array()
//        .and.have.lengthOf(2);
//      newPhage[0].should.have.length(1); // should have one mutation
//      newPhage[0][0].should.have.property('location', 41);
//      newPhage[1][0].should.have.property('location', 346);

    });
    it('Should be able to mutagenize frameshift', () => {
      let fsPhage = phageList[1];
      let newPhage = phageExp.mutagenize(fsPhage.mutationList, 2);
      // newPhage = [ [ { kind: 'plusOne', location: 226 }, { kind: 'minusOne', location: 240 }],
      //  [ { kind: 'minusOne', location: 23 },
      //    { kind: 'minusOne', location: 240 } ] ]
      debug(newPhage);
//      newPhage.should.be.an.Array()
//        .and.have.lengthOf(2);
//      newPhage[0].should.have.length(2); // should have two mutations
//      newPhage[0][0].should.have.property('location',226);
//      newPhage[1][0].should.have.property('location',23);
    });
  });

  describe('Test recombining', ()=>{

    before((done)=>{
      // reset engines
      phageExp.seedEngine(703);
      phageScen.seedEngine(348);
      done();
    });

    it('Should recombine WT and FS, single crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let fs = {shifts: phageList[1].mutationList, deletion: phageList[1].deletion};
      let rec = phageExp.recombine(wt, fs, 1, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1  - geno fs, wt - break at 81 - mut none
      // phage 2 - geno fs, wt - break at 104 - mut none
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].shifts.should.have.length(0);
//      rec[1].shifts.should.have.length(0);
    });

    it('should recombine WT and FS, double crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let fs = {shifts: phageList[1].mutationList, deletion: phageList[1].deletion};
      let rec = phageExp.recombine(wt, fs, 2, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1 - geno fs, wt - break at 159, 325 - mut at 143
      // phage 2 - geno fs, wt - break at 122, 311 - mut none
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].shifts.should.have.length(1);
//      rec[0].shifts[0].should.have.property('location', 143);
//      rec[1].shifts.should.have.length(0);
    });

    it('should recombine WT and FS, triple crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let fs = {shifts: phageList[1].mutationList, deletion: phageList[1].deletion};
      let rec = phageExp.recombine(wt, fs, 3, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1 - geno fs, wt - break at 129, 134, 148 - mut at 143
      // phage 2 - geno fs, wt - break at 217, 241, 342 - mut at 89
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].shifts.should.have.length(1);
//      rec[0].shifts[0].should.have.property('location', 143);
//      rec[1].shifts.should.have.length(1);
//      rec[1].shifts[0].should.have.property('location', 143);
    });

    it('Should recombine FS and FS, single crossover', ()=>{
      let fs1 = {shifts: phageList[1].mutationList, deletion: phageList[1].deletion}; // 143
      let fs2 = {shifts: phageList[3].mutationList, deletion: phageList[3].deletion}; // 193
      let rec = phageExp.recombine(fs1, fs2, 1, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1 - geno fs1, fs2 - break at 270 - mut at 143
      // phage 2 - geno fs2, fs1 - break at 61 - mut at 143
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].shifts.should.have.length(1);
//      rec[0].shifts[0].should.have.property('location', 143);
//      rec[1].shifts.should.have.length(1);
//      rec[1].shifts[0].should.have.property('location', 143);
    });

    it('Should recombine FS and FS, double crossover', ()=>{
      let fs1 = {shifts: phageList[1].mutationList, deletion: phageList[1].deletion}; // 143
      let fs2 = {shifts: phageList[3].mutationList, deletion: phageList[3].deletion}; // 193
      let rec = phageExp.recombine(fs1, fs2, 2, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1 - geno fs1, fs2 - break at 41, 331 - mut at 193
      // phage 2 - geno fs1, fs2 - break at 218, 276 - mut at 143, 229
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].shifts.should.have.length(1);
//      rec[0].shifts[0].should.have.property('location', 193);
//      rec[1].shifts.should.have.length(1);
//      rec[1].shifts[0].should.have.property('location', 143);
    });

    it('Should recombine FS and FS, triple crossover', ()=>{
      let fs1 = {shifts: phageList[1].mutationList, deletion: phageList[1].deletion}; // 89
      let fs2 = {shifts: phageList[3].mutationList, deletion: phageList[3].deletion}; // 229
      let rec = phageExp.recombine(fs1, fs2, 3, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1 - geno fs1, fs2 - break at 240, 265, 321 - mut at 143
      // phage 2 - geno fs1, fs2 - break at 258, 316, 340 - mut at 143
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].shifts.should.have.length(1);
//      rec[0].shifts[0].should.have.property('location', 143);
//      rec[1].shifts.should.have.length(1);
//      rec[1].shifts[0].should.have.property('location', 143);
    });

    it('should recombine WT and DEL, single crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let del = {shifts: phageList[2].mutationList, deletion: phageList[2].deletion}; // 110, 205
      let rec = phageExp.recombine(wt, del, 1, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1  - geno wt, del - break at 48 - del 110-205
      // phage 2 - geno wt, del - break at 340 - del none
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].deletion.should.have.length(2);
//      rec[0].deletion[0].should.be.equal(110);
//      rec[1].deletion.should.have.length(0);
    });

    it('should recombine WT and DEL, double crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let del = {shifts: phageList[2].mutationList, deletion: phageList[2].deletion}; // 110, 205
      let rec = phageExp.recombine(wt, del, 2, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1 - geno wt, del - break at 30, 348 - del none
      // phage 2 - geno wt, del - break at none - del none
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].deletion.should.have.length(0);
//      rec[1].deletion.should.have.length(0);
    });

    it('should recombine WT and DEL, triple crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let del = {shifts: phageList[2].mutationList, deletion: phageList[2].deletion}; // 110, 205
      let rec = phageExp.recombine(wt, del, 3, 2);
      rec.forEach((phage)=>{debug(phage.shifts)});
      // phage 1 - geno fs, wt - break at 287, 314 - del none
      // phage 2 - geno fs, wt - break at 276, 311 - del none
//      rec.should.be.an.Array().and.have.lengthOf(2);
//      rec[0].deletion.should.have.length(0);
//      rec[1].deletion.should.have.length(0);
    });

    it('should recombine WT and double FS, single crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      //let fs2 = {shifts: phageList[5].mutationList, deletion: phageList[5].deletion};
      let fs2 = {shifts: [ { kind: 'plusOne', location: 79 },
  { kind: 'minusOne', location: 125 } ], deletion: phageList[5].deletion}
      let rec = phageExp.recombine(wt, fs2, 1, 10);
      rec.forEach((phage)=>{debug(phage.shifts)});
    });

    it('should recombine WT and double FS, double crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let fs2 = {shifts: phageList[5].mutationList, deletion: phageList[5].deletion};
      let rec = phageExp.recombine(wt, fs2, 2, 10);
      rec.forEach((phage)=>{debug(phage.shifts)});
    });

    it('should recombine WT and double FS, triple crossover', ()=>{
      let wt = {shifts: phageList[0].mutationList, deletion: phageList[0].deletion};
      let fs2 = {shifts: phageList[5].mutationList, deletion: phageList[5].deletion};
      let rec = phageExp.recombine(wt, fs2, 3, 10);
      rec.forEach((phage)=>{debug(phage.shifts)});
    });

  });

  afterEach((done)=>{
    scenData.usedDeleteSpots = [];
    scenData.usedShiftSpots = [];
    done()
  })

});
