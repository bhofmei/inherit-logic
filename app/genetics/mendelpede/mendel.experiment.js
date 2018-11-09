const clone = require('clone');
const util = require('../utility');
const randGen = require('../random.generator');
const randEngine = randGen.getEngine();
const tEnum = require('./traits.enum');
const pedeLogic = require('./pede.logic');
const debug = require('debug')('genetics:mendelexp');

exports.resetEngine = function(){
  randGen.reset(randEngine);
}

exports.seedEngine = function(num){
  randGen.setSeed(randEngine, num)
}

exports.makeChildren = function(mother, father, numChildren,  genoFacts){
  // father and mother have genotype information from database
  // genoFacts include trait type, inheritance, phenotypes, ect
  // assume father and mother sex are correct
  motherGeno = mother.genotype;
  fatherGeno = father.genotype;
  var storeZero = [];

  // generate 56
  var newKids = [];

  for(var k = 0; k < numChildren; k++){
    var newKid = {genotype: [], phenotype: [], isFemale: randGen.randBool(randEngine), bugID: -1};
  var liveKid = false;
  while(!liveKid){
    liveKid = true;
    for(var i=0; i < 3; i++){
      var inheritType = genoFacts[i]['inherit'];
      var mGeno = pedeLogic.fromTernary(motherGeno[i]); // convert to alleles
      var fGeno = pedeLogic.fromTernary(fatherGeno[i]); // convert to alleles
      var mkGeno, fkGeno, mPick, fPick;
      switch(inheritType){
        case tEnum.INHERIT.MITO:
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
            mPick = randGen.randDie(100, randEngine);
            fPick = randGen.randDie(100, randEngine);
            mkGeno = mPick > genoFacts[i]['howBad'] ? mGeno[1-storeZero[0]] : mGeno[storeZero[0]];
            fkGeno = fPick > genoFacts[i]['howBad'] ? fGeno[1-storeZero[1]] : fGeno[storeZero[1]];
          }
          break;
        case tEnum.INHERIT.SEGDISTORT:
          mkGeno = mGeno[randGen.randInt(0, 1, randEngine)];
          if(fGeno[0] === 0 || fGeno[1] === 0){
            var favorAllele = fGeno[0] === 0 ? 0 : 1;
            var randDraw = randGen.randDie(100, randEngine);
            fkGeno = randDraw <= genoFacts[i]['howBad'] ? fGeno[favorAllele] : fGeno[1-favorAllele];
          } else {
            fkGeno = fGeno[randGen.randInt(0, 1, randEngine)];
          };
          break;
        case tEnum.INHERIT.XLINK:
          mkGeno = mGeno[randGen.randInt(0, 1, randEngine)];
          fkGeno = newKid.isFemale ? fGeno[0] : 0;
          break;
        case tEnum.INHERIT.HOMODOMLETH:
          // randomly pick alleles until we don't have 11
          var isValid = false;
          while(!isValid){
            mkGeno = mGeno[randGen.randInt(0, 1, randEngine)];
            fkGeno = fGeno[randGen.randInt(0, 1, randEngine)];
            if(mkGeno !== 1 || fkGeno !== 1)
              isValid = true;
          } // end while
          break;
        default:
          mkGeno = mGeno[randGen.randInt(0, 1, randEngine)];
          fkGeno = fGeno[randGen.randInt(0, 1, randEngine)];
      } // end switch
      newKid.genotype[i] = pedeLogic.toTernary([mkGeno, fkGeno]);
      if(inheritType === tEnum.INHERIT.PENETRANCE){
        newKid['penetrant'] = (randGen.randDie(100, randEngine) < genoFacts[i]['howBad']);
      } else if(inheritType === tEnum.INHERIT.MATEFFECT){
        newKid['motherGeno'] = motherGeno[i];
      } else if( i === 1 && inheritType === tEnum.INHERIT.SYNTHLETH ){
        if( newKid.genotype[0] === 0 && newKid.genotype[1] === 0 ){
          liveKid = false;
        }
      }
    } // end for i
  } // end while
  newKid.phenotype = pedeLogic.determinePhenotype(genoFacts, newKid);
  newKids.push(newKid);
} // end for k
return newKids;
}; // end makeChildren
