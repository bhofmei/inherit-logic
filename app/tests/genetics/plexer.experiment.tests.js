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
const debug = require('debug')('genetics:plexer');

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
  phageList.forEach((phage, i)=>{
    debug(i, phage.mutationList, phage.deletion);
  })
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
  // used in genetics controller testing

  it('Should create multiplexer for all WT input, PERM bacteria', () => {
    let mPhage = 150;
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
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, scenDefaults.plexerCapcaity, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 126 WT    1, 0: 174 WT
      0, 1: 126 WT    1, 1: 174 WT
      0, 2: 174 WT    1, 2: 126 WT
      0, 3: 174 WT    1, 3: 174 WT
      0, 4: 174 WT    1, 4: 174 WT
      0, 5: 126 WT    1, 5: 126 WT
      0, 6: 174 WT    1, 6: 126 WT
      0, 7: 174 WT    1, 7: 174 WT
    */
    let expectedMut = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let expectedWT = [126, 126, 174, 174, 174, 126, 174, 174, 174, 174, 126, 174, 174, 126, 126, 174];
    debug(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', expectedMut[exp]);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for all WT input, REST bacteria', () => {
    let mPhage = 154;
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
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, scenDefaults.plexerCapcaity, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 130 WT    1, 0: 130 WT
      0, 1: 130 WT    1, 1: 130 WT
      0, 2: 130 WT    1, 2: 178 WT
      0, 3: 130 WT    1, 3: 130 WT
      0, 4: 178 WT    1, 4: 178 WT
      0, 5: 130 WT    1, 5: 130 WT
      0, 6: 178 WT    1, 6: 178 WT
      0, 7: 130 WT    1, 7: 130 WT
    */
    let expectedWT = [130, 130, 130, 130, 178, 130, 178, 130, 130, 130, 178, 130, 178, 130, 178, 130];
    debug(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for WT X FS input, PERM bacteria', () => {
    let mPhage = 152;
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
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, scenDefaults.plexerCapcaity, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 64 WT, 64 FS, 1 rFS
      0, 1: 64 WT, 64 FS
      0, 2: 88 WT, 88 FS
      0, 3: 64 WT, 64 FS, 2 rFS
      0, 4: 64 WT, 64 FS, 1 rFS
      0, 5: 88 WT, 88 FS, 1 rWT
      0, 6: 88 WT 88 mutWT
      0, 7: 64 WT, 64 FS, 2 rWT
      1, 0: 88 WT, 88 FS, 5 rWT
      1, 1: 64 WT, 64 FS
      1, 2: 64 WT, 64 FS, 2 rFS
      1, 3: 88 WT, 88 FS, 2 rWT, 3 rFS,
      1, 4: 88 WT, 88 FS, 3 rFS
      1, 5: 88 WT, 88 FS, 1 rFS
      1, 6: 88 WT, 88 mutWT, 2 rWT
      1, 7: 64 WT, 64 FS, 1 rFS, 1 rWT
    */
    let expectedMut = [65, 64, 88, 66, 65, 88, 0, 64, 88, 64, 66, 91, 91, 89, 0, 65];
    let expectedWT = [64, 64, 88, 64, 64, 89, 176, 66, 93, 64, 64, 90, 88, 88, 178, 65];
    debug(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', expectedMut[exp]);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for WT X FS input, REST bacteria', () => {
    let mPhage = 160;
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
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, scenDefaults.plexerCapcaity, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 67 WT, 67 FS
      0, 1: 67 WT, 67 FS, 1 rWT
      0, 2: 93 WT, 93 FS, 1 rWT, 3 rFS
      0, 3: 93 WT, 93 FS, 2 rFS
      0, 4: 67 WT, 67 FS, 1 rFS
      0, 5: 93 WT, 93 FS, 2 rFS, 3 rWT
      0, 6: 93 WT 93 mutWT, 2 rWT
      0, 7: 93 WT, 93 FS, 1 rWT, 2 rFS
      1, 0: 93 WT, 93 FS, 1 rWT
      1, 1: 93 WT, 93 FS, 1 rWT, 2 rFS
      1, 2: 93 WT, 93 FS, 2 rFS
      1, 3: 67 WT, 67 FS
      1, 4: 93 WT, 93 FS, 3 rFS
      1, 5: 67 WT, 67 FS, 1 rFS
      1, 6: 67 WT, 67 mutWT
      1, 7: 93 WT, 93 FS, 3 rFS, 1 rWT
    */
    let expectedWT = [67, 68, 94, 93, 67, 96, 189, 94, 94, 94, 93, 67, 93, 67, 134, 94];
    debug(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  });

  it('Should create multiplexer for FS X FS input, PERM bacteria', () => {
    let mPhage = 123;
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
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactPerm, null, scenDefaults.plexerCapcaity, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 73 FS1 WT, 73 FS2
      0, 1: 73 FS1 WT, 73 FS2, 2 rWT, 1 rFS
      0, 2: 50 FS1, 50 FS2
      0, 3: 50 FS1, 50 FS2, 1 rWT, 2 rFS
      0, 4: 50 FS1, 50 FS2
      0, 5: 50 FS1, 50 FS2
      0, 6: 50 FS1, 50 mutWT, 1 rFS
      0, 7: 73 FS1, 73 FS2, 1 rFS
      1, 0: 73 FS1, 73 FS2
      1, 1: 73 FS1, 73 FS2
      1, 2: 50 FS1, 50 FS2
      1, 3: 73 FS1, 73 FS2
      1, 4: 50 FS1, 50 FS2, 1 rWT
      1, 5: 50 FS1, 50 FS2, 2 rFS
      1, 6: 73 FS1, 73 mutWT, 1 rWT
      1, 7: 50 FS1, 50 FS2, 1 rWT
    */
    let expectedMut = [146, 147, 100, 102, 100, 100, 51, 147, 146, 146, 100, 146, 100, 102, 73, 100];
    let expectedWT = [0, 2, 0, 1, 0, 0, 50, 0, 0, 0, 0, 0, 1, 0, 74, 1];
    debug(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', expectedMut[exp]);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  }); // end Should create multiplexer for FS X FS input, PERM bacteria

    it('Should create multiplexer for FS X FS input, REST bacteria', () => {
    let mPhage = 126;
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
    let plate = plexerExp.createPlexerPlate(rowPhage, colPhage, bactRest, null, scenDefaults.plexerCapcaity, plateEnum.PLATECALLER.MULTIPLEXER, scenData);
    /*
      0, 0: 52 FS1, 52 FS2
      0, 1: 52 FS1, 52 FS2, 1 rWT
      0, 2: 52 FS1, 52 FS2
      0, 3: 74 FS1, 74 FS2, 3 rFS
      0, 4: 74 FS1, 74 FS2, 2 rFS
      0, 5: 74 FS1, 74 FS2
      0, 6: 52 FS1, 52 mutWT, 1 rWT
      0, 7: 74 FS1, 74 FS2, 1 rFS
      1, 0: 74 FS1, 74 FS2, 1 rWT, 2 rFS
      1, 1: 52 FS1, 52 FS2
      1, 2: 74 FS1, 74 FS2
      1, 3: 52 FS1, 52 FS2, 3 rFS
      1, 4: 52 FS1, 52 FS2, 1 rFS
      1, 5: 74 FS1, 74 FS2, 1 rFS
      1, 6: 52 FS1, 52 mutWT, 2 rFS
      1, 7: 74 FS1, 74 FS2, 1 rFS
    */
    let expectedWT = [0, 1, 0, 0, 0, 0, 53, 0, 1, 0, 0, 0, 0, 0, 52, 0];
    debug(plate);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 8; j++) {
        let exp = i * 8 + j;
        plate[i][j].should.have.property('largePlaque', 0);
        plate[i][j].should.have.property('smallPlaque', expectedWT[exp]);
      }
    }
  }); // end Should create multiplexer for FS X FS input, PERM bacteria

}); // end Test generate plate for multiplexer
});
