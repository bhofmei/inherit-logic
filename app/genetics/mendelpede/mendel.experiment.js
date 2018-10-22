const clone = require('clone');
const util = require('../utility');
const randGen = require('../random.generator');
const randEngine = randGen.getEngine();
const mConfig = require('../../../config/mendelpede/mendelpede.config');
const tEnum = require('./traits.enum');
const pedeLogic = require('./pede.logic');
const debug = require('debug')('genetics:mendel');

exports.resetEngine = function(){
  randGen.reset(randEngine);
}

exports.seedEngine = function(num){
  randGen.setSeed(randEngine, num)
}

exports.makeChildren = function(father, mother, genoFacts){
  // father and mother have genotype information from database
  // genoFacts include trait type, inheritance, phenotypes, ect
  // assume father and mother sex are correct
  fatherGeno = father.genotype;
  motherGeno = mother.genotype;
  var storeZero = [];
  var kidder = 0;

  // generate 56
  var newKids = [];

  for(var k = 0; k < 56; i++){
    var newKid = {genotype: [], phenotype: {}, isFemale: randGen.randBool(randEngine), bugId: -1};
  var liveKid = false;
  while(!liveKid){
    liveKid = true;
    for(var i=0; i < 3; i++){
      var inheritType = genoFacts[i]['inherit'];
      var mGeno = motherGeno[i];
      var fGeno = fatherGeno[i];
      var mkGeno, fkGeno, mPick, fPick;
      switch(inheritType){
        case tEnum.INHERIT.MITO:
          //newKid.genotype[i] = [motherGeno[i][0], motherGeno[i][0]];
          mkGeno = mGeno[0];
          fkGeno = mGeno[0];
          break;
        case tEnum.INHERIT.AUTOLINK:
          if(i !== 1){ // source or normal case
            mPick = randGen.randInt(0, 1, randEngine)
            mkGeno = mGeno[mPick];
            fPick = randGen.randInt(0, 1, randEngine)
            fkGeno = fGeno[fPick];
            storeZero = i === 0 ? [mPick, fPick] : []; // i==0, store choice
          } else { // i===1 - linked case
            // greater than howBad parameter
            mPick = randGen.randDie(100);
            fPick = randGen.randDie(100);
            mkGeno = mPick > genoFacts[i]['howBad'] ? mGeno[1-storeZero[0]] : mGeno[storeZero[0]];
            fkGeno = fPick > genoFacts[i]['howBad'] ? fGeno[1-storeZero[1]] : fGeno[storeZero[1]];
          }
          break;
        case tEnum.INHERIT.SEGDISTORT:
          mkGeno = mGeno[randGen.randInt(0, 1, randEngine)];
          var favorAllele = -1;
          if(fGeno[0] === 0)
            favorAllele = 0;
          else if(fGeno[1] === 0)
            favorAllele = 1;
          if(favorAllele > -1){
            if(randGen.randDie(100, randEngine) <= genoFacts[i]['howBad']){
              fkGeno = fGeno[favorAllele];
            } else {
              fkGeno = fGeno[1-favorAllele];
            }
          } else {
            fkGeno = fGeno[randGen.randInt(0, 1, randEngine)];
          };
          break;
        case tEnum.INHERIT.XLINK:
          mkGeno = mGeno[randGen.randInt(0, 1, randEngine)];
          fkGeno = newKid.isFemale ? fGeno[0] : 0;
          break;
        default:
          mkGeno = mGeno[randGen.randInt(0, 1, randEngine)];
          fkGeno = fGeno[randGen.randInt(0, 1, randEngine)];
      } // end switch
      newKid.genotype[i] = [mkGeno, fkGeno];
      if(inheritType === tEnum.INHERIT.PENETRANCE){
        newKid['penetrant'] = (randGen.randDie(100) < genoFacts[i]['howBad']);
      } else if(inheritType === tEnum.INHERIT.MATEFFECT){
        newKid['motherGeno'] = mGeno;
      } else if( inhertType === tEnum.INHERIT.SYNTHLETH && i === 1){
        if(newKid.genotype[0][0] === 0 && newKid.genotype[0][1] === 0 && newKid.genotype[1][0] === 0 && newKid.genotype[1][1] === 0){
          liveKid = false;
        }
      } else if(inheritType === tEnum.INHERIT.HOMODOMLETH){
        if(newKid.genotype[i][0] === 1 && newKid.genotype[i][1] === 1){
          liveKid = false;
        }
      }
    } // end for I
  } // end while
  kidder++;
  newKid.phenotype = pedeLogic.determinePhenotype(genoFacts, newKid);
  newKids.push(newKid);
} // end for i
return newKids;
}; // end makeChildren
