const app = require('../../../index.js');
const should = require('should');
const clone = require('clone');
const scenDefaults = require('../../../config/scenario.config');
const scenarios = require('../../../config/scenario.data');
const phageScen = require('../../genetics/phage.scenario.js');
const phageExp = require('../../genetics/phage.experiment');
const plexerExp = require('../../genetics/plexer.experiment');
const phageEnum = require('../../genetics/phage.enum');
const plateEnum = require('../../genetics/plate.enum');

var scenario = {
  id: 0,
  mutationFreq: scenDefaults.mutationFreq,
  recombinationFreq: scenDefaults.recombinationFreq,
  gcProb: scenDefaults.gcProb,
  minStops: scenDefaults.minStops,
  intraMuteDist: scenDefaults.intraMuteDist,
  interMuteDist: scenDefaults.interMuteDist,
  referencePhage: [scenDefaults.wildtypePhage, scenDefaults.frameShiftPhage, '{"numToMake": 1, "isWildType": false, "deletion": true, "comment": "Deletion phage"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [1,1], "mixed": "never", "readable": "any", "frameChoice": 1}, "deletion": false, "comment": "Mutant phage containing a single +1 frameshift mutation"}', '{"numToMake": 1, "isWildType": false, "frameshifts": {"howMany": [2,2], "mixed": "never", "readable": "any", "frameChoice": -1}, "deletion": false, "comment": "Mutant phage containing a two -1 frameshift mutation"}', '{"numToMake": 5, "isWildType": false, "frameshifts": {"howMany": [1,2], "mixed": "sometimes", "readable": "any", "frameChoice": 0}, "deletion": false, "comment": "Mutant phage containing a one to two frameshifts"}'],
  otherPhage: []
};

var bactPerm = 'B';
var bactRest = 'K';

describe('Plexer experiments unit tests', () => {
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
  plexerExp.resetEngine();
  let tmp = phageScen.generateScenario(scenario);
  scenData = tmp.scenData;
  phageList = tmp.strainList;
  //console.log(phageList);
  for (let i = 0; i < phageList.length; i++) {
    //console.log(i, phageList[i].mutationList, phageList[i].deletion);
  }
  done();
});
/* PHAGE:
0. WT
1. [ { kind: 'minusOne', location: 240 } ]
2. deletion: [ 110, 205 ]
3. [ { kind: 'plusOne', location: 86 } ]
4. [ { kind: 'minusOne', location: 211 }, { kind: 'minusOne', location: 287 } ]
5. [ { kind: 'minusOne', location: 201 }, { kind: 'minusOne', location: 226 } ]
6. [ { kind: 'plusOne', location: 270 }, { kind: 'plusOne', location: 344 } ]
7. [ { kind: 'plusOne', location: 142 } ]
8. [ { kind: 'minusOne', location: 79 }, { kind: 'plusOne', location: 156 } ]
9. [ { kind: 'minusOne', location: 243 } ]
*/

describe('Testing generate plates for multiplexer', () => {

  it('Should create multiplexer for all WT input, PERM bacteria', () => {
    let mPhage = 10000;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 2; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 4 mut, 9800 WT    1, 0: 1 mut, 10200 WT
      0, 1: 6 mut, 9800 WT    1, 1: 2 mut, 10200 WT
      0, 2: 5 mut, 10200 WT   1, 2: 4 mut, 9800 WT
      0, 3: 5 mut, 10200 WT   1, 3: 6 mut, 10200 WT
      0, 4: 2 mut, 10200 WT   1, 4: 1 mut, 10200 WT
      0, 5: 2 mut, 9800 WT    1, 5: 3 mut, 9800 WT
      0, 6: 6 mut, 10200 WT   1, 6: 3 mut, 9800 WT
      0, 7: 4 mut, 10200 WT   1, 7: 6 mut, 10200 WT
    */
    let expectedMut = [4, 6, 5, 5, 2, 2, 6, 4, 1, 2, 4, 6, 1, 3, 3, 6];
    let expectedWT = [9800, 9800, 10200, 10200, 10200, 9800, 10200, 10200, 10200, 10200, 9800, 10200, 10200, 9800, 9800, 10200];
    //console.log(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', expectedMut[exp]);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for all WT input, REST bacteria', () => {
    let mPhage = 11000;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 2; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 1 mut, 10790 WT   1, 0: 1 mut, 10790 WT
      0, 1: 1 mut, 10790 WT   1, 1: 4 mut, 10790 WT
      0, 2: 4 mut, 10790 WT   1, 2: 3 mut, 11208 WT
      0, 3: 3 mut, 10790 WT   1, 3: 3 mut, 10790 WT
      0, 4: 8 mut, 11208 WT   1, 4: 1 mut, 11208 WT
      0, 5: 5 mut, 10790 WT   1, 5: 1 mut, 10790 WT
      0, 6: 3 mut, 11208 WT   1, 6: 2 mut, 11208 WT
      0, 7: 7 mut, 10790 WT   1, 7: 1 mut, 10790 WT
    */
    let expectedWT = [10790, 10790, 10790, 10790, 11208, 10790, 11208, 10790, 10790, 10790, 11208, 10790, 11208, 10790, 11208, 10790];
    //console.log(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for WT X FS input, PERM bacteria', () => {
    let mPhage = 10500;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 2; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp;
      if (i === 0)
        tmp = clone(phageList[1]);
      else
        tmp = clone(phageList[i + 2]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 5147 FS, 5147 WT, 1 mut, 1 mWT, 5 recomb, 6 rWT
      0, 1: 5147 FS, 5147 WT, 1 mut, 1 mWT, 3 recomb, 4 rWT
      0, 2: 5352 FS, 5352 WT, 2 mut, 1 mWT, 3 recomb, 0 rWT
      0, 3: 5147 FS, 5147 WT, 1 mut, 0 mWT, 6 recomb, 13 rWT
      0, 4: 5147 FS, 5147 WT, 0 mut, 3 mWT, 8 recomb, 10 rWT
      0, 5: 5352 FS, 5352 WT, 4 mut, 2 mWT, 8 recomb, 5 rWT
      0, 6: 0 FS, 10704 WT, 3 mut, 0 mWT, 2 recomb, 4 rWT
      0, 7: 5147 FS, 5147 WT, 1 mut, 0 mWT, 5 recomb, 13 rWT
      1, 0: 5352 FS, 5352 WT, 3 mut, 0 mWT, 12 recomb, 25 rWT
      1, 1: 5147 FS, 5147 WT, 0 mut, 0 mWT, 1 recomb, 2 rWT
      1, 2: 5147 FS, 5147 WT, 6 mut, 0 mWT, 15 recomb, 12 rWT
      1, 3: 5352 FS, 5352 WT, 0 mut, 1 mWT, 25 recomb, 14 rWT
      1, 4: 5352 FS, 5352 WT, 2 mut, 2 mWT, 12 recomb, 15 rWT
      1, 5: 5352 FS, 5352 WT, 3 mut, 0 mWT, 6 recomb, 3 rWT
      1, 6: 0 FS, 10704 WT, 4 mut, 0 mWT, 1 recomb, 21 rWT
      1, 7: 5147 FS, 5147 WT, 3 mut, 1 mWT, 8 recomb, 12 rWT
    */
    let expectedMut = [5153, 5151, 5357, 5154, 5155, 5364, 5, 5153, 5367, 5148, 5168, 5377, 5366, 5361, 5, 5158];
    let expectedWT = [5154, 5152, 5353, 5160, 5160, 5359, 10708, 5160, 5377, 5149, 5159, 5367, 5369, 5355, 10725, 5160];
    //console.log(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', expectedMut[exp]);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for WT X FS input, REST bacteria', () => {
    let mPhage = 10600;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 2; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp;
      if (i === 0)
        tmp = clone(phageList[1]);
      else
        tmp = clone(phageList[i + 2]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 5197 FS, 5197 WT, 3 mut, 1 mWT, 1 recomb, 2 rWT
      0, 1: 5197 FS, 5197 WT, 2 mut, 0 mWT, 6 recomb, 11 rWT
      0, 2: 5402 FS, 5402 WT, 7 mut, 1 mWT, 19 recomb, 8 rWT
      0, 3: 5402 FS, 5402 WT, 3 mut, 3 mWT, 10 recomb, 9 rWT
      0, 4: 5197 FS, 5197 WT, 3 mut, 1 mWT, 11 recomb, 2 rWT
      0, 5: 5402 FS, 5402 WT, 1 mut, 0 mWT, 18 recomb, 17 rWT
      0, 6: 0 FS, 10804 WT, 5 mut, 0 mWT, 1 recomb, 20 rWT
      0, 7: 5402 FS, 5402 WT, 2 mut, 1 mWT, 9 recomb, 15 rWT
      1, 0: 5402 FS, 5402 WT, 3 mut, 2 mWT, 6 recomb, 3 rWT
      1, 1: 5402 FS, 5402 WT, 2 mut, 1 mWT, 11 recomb, 10 rWT
      1, 2: 5402 FS, 5402 WT, 3 mut, 0 mWT, 9 recomb, 6 rWT
      1, 3: 5197 FS, 5197 WT, 4 mut, 2 mWT, 1 recomb, 1 rWT
      1, 4: 5402 FS, 5402 WT, 2 mut, 3 mWT, 15 recomb, 11 rWT
      1, 5: 5197 FS, 5197 WT, 2 mut, 2 mWT, 7 recomb, 7 rWT
      1, 6: 0 FS, 10394 WT, 7 mut, 0 mWT, 1 recomb, 3 rWT
      1, 7: 5402 FS, 5402 WT, 2 mut, 1 mWT, 14 recomb, 19 rWT
    */
    let expectedWT = [5200, 5208, 5411, 5414, 5200, 5419, 10824, 5418, 5407, 5413, 5408, 5200, 5416, 5206, 10397, 5422];
    //console.log(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for FS X FS input, PERM bacteria', () => {
    let mPhage = 12300;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 1; i < 4; i += 2) {
      let tmp = clone(phageList[i]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp;
      if (i === 0)
        tmp = clone(phageList[1]);
      else
        tmp = clone(phageList[i + 2]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 12520 FS, 0 WT, 1 mut, 0 mWT, 0 recomb, 0 rWT
      0, 1: 12520 FS, 0 WT, 3 mut, 1 mWT, 36 recomb, 0 rWT
      0, 2: 12078 FS, 0 WT, 5 mut, 1 mWT, 9 recomb, 0 rWT
      0, 3: 12078 FS, 0 WT, 1 mut, 0 mWT, 36 recomb, 0 rWT
      0, 4: 12078 FS, 0 WT, 3 mut, 2 mWT, 1 recomb, 0 rWT
      0, 5: 12078 FS, 0 WT, 0 mut, 0 mWT, 4 recomb, 2 rWT
      0, 6: 6039 FS, 6039 WT, 0 mut, 4 mWT, 8 recomb, 9 rWT
      0, 7: 12520 FS, 0 WT, 2 mut, 3 mWT, 16 recomb, 0 rWT
      1, 0: 12520 FS, 0 WT, 4 mut, 4 mWT, 1 recomb, 2 rWT
      1, 1: 12520 FS, 0 WT, 3 mut, 2 mWT, 0 recomb, 0 rWT
      1, 2: 12078 FS, 0 WT, 0 mut, 2 mWT, 3 recomb, 0 rWT
      1, 3: 12520 FS, 0 WT, 3 mut, 2 mWT, 3 recomb, 0 rWT
      1, 4: 12078 FS, 0 WT, 3 mut, 1 mWT, 6 recomb, 1 rWT
      1, 5: 12078 FS, 0 WT, 2 mut, 1 mWT, 27 recomb, 0 rWT
      1, 6: 6260 FS, 6260 WT, 7 mut, 1 mWT, 8 recomb, 13 rWT
      1, 7: 12078 FS, 0 WT, 2 mut, 0 mWT, 14 recomb, 2 rWT
    */
    let expectedMut = [12521, 12559, 12092, 12115, 12082, 12082, 6047, 12538, 12525, 12523, 12081, 12526, 12087, 12107, 6275, 12094];
    let expectedWT = [0, 1, 1, 0, 2, 2, 6052, 3, 6, 2, 2, 2, 2, 1, 6274, 2];
    //console.log(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', expectedMut[exp]);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  }); // end Should create multiplexer for FS X FS input, PERM bacteria

    it('Should create multiplexer for FS X FS input, REST bacteria', () => {
    let mPhage = 12600;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 1; i < 4; i += 2) {
      let tmp = clone(phageList[i]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp;
      if (i === 0)
        tmp = clone(phageList[1]);
      else
        tmp = clone(phageList[i + 2]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 12374 FS, 0 WT, 0 mut, 2 mWT, 0 recomb, 0 rWT
      0, 1: 12374 FS, 0 WT, 1 mut, 2 mWT, 15 recomb, 1 rWT
      0, 2: 12374 FS, 0 WT, 2 mut, 4 mWT, 5 recomb, 0 rWT
      0, 3: 12824 FS, 0 WT, 2 mut, 5 mWT, 41 recomb, 0 rWT
      0, 4: 12824 FS, 0 WT, 3 mut, 4 mWT, 25 recomb, 0 rWT
      0, 5: 12824 FS, 0 WT, 3 mut, 2 mWT, 0 recomb, 0 rWT
      0, 6: 6187 FS, 6187 WT, 1 mut, 0 mWT, 10 recomb, 4 rWT
      0, 7: 12824 FS, 0 WT, 4 mut, 6 mWT, 12 recomb, 0 rWT
      1, 0: 12824 FS, 0 WT, 0 mut, 6 mWT, 28 recomb, 1 rWT
      1, 1: 12374 FS, 0 WT, 4 mut, 1 mWT, 0 recomb, 0 rWT
      1, 2: 12824 FS, 0 WT, 0 mut, 2 mWT, 3 recomb, 0 rWT
      1, 3: 12374 FS, 0 WT, 2 mut, 1 mWT, 39 recomb, 0 rWT
      1, 4: 12374 FS, 0 WT, 1 mut, 1 mWT, 9 recomb, 1 rWT
      1, 5: 12824 FS, 0 WT, 4 mut, 1 mWT, 15 recomb, 0 rWT
      1, 6: 6187 FS, 6187 WT, 2 mut, 0 mWT, 13 recomb, 12 rWT
      1, 7: 12824 FS, 0 WT, 2 mut, 5 mWT, 10 recomb, 2 rWT
    */
    let expectedWT = [2, 3, 4, 5, 4, 2, 6191, 6, 7, 1, 2, 1, 2, 1, 6199, 7];
    //console.log(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  }); // end Should create multiplexer for FS X FS input, PERM bacteria

}); // end Test generate plate for multiplexer

/*describe('Testing generate plate for super plexer', () => {

  it('Should create superplexer for all WT input, PERM bacteria', () => {
    let mPhage = 10000;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        plate[i][j].should.have.property('largePlaque');
        plate[i][j].should.have.property('smallPlaque');
      }
    }
  });

  it('Should create superplexer for all WT input, REST bacteria', () => {
    let mPhage = 10000;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, 20000, plateEnum.PLATECALLER.SUPERPLEXER, scenData);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque');
      }
    }
  });

      it('Should create multiplexer for WT X FS input, PERM bacteria', () => {
    let mPhage = 10500;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp;
      if(i === 0)
        tmp = clone(phageList[1]);
      else
        tmp = clone(phageList[i+2]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        //console.log(plate[i][j]);
        plate[i][j].should.have.property('largePlaque');
        plate[i][j].should.have.property('smallPlaque');
      }
    }
  });

   it('Should create multiplexer for WT X FS input, REST bacteria', () => {
    let mPhage = 10600;
    let rowPhage = [];
    let colPhage = [];
    for (let i = 0; i < 8; i++) {
      let tmp = clone(phageList[0]);
      tmp.numPhage = mPhage;
      rowPhage.push(tmp);
    }
    for (let i = 0; i < 8; i++) {
      let tmp;
      if(i === 0)
        tmp = clone(phageList[1]);
      else
        tmp = clone(phageList[i+2]);
      tmp.numPhage = mPhage;
      colPhage.push(tmp);
    }
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, 20000, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque');
      }
    }
  });

}); // end Test generate plate for super plexer*/
});
