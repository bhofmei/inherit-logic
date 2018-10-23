const clone = require('clone');
const util = require('../utility');
const randGen = require('../random.generator');
const randEngine = randGen.getEngine();
const tEnum = require('./traits.enum');
const debug = require('debug')('genetics:mendel');

exports.toTernary = function(inAr){
  if(inAr === undefined || inAr.length === 0){
    return null;
  } else if (inAr.length !== 2){
    return false;
  } else {
    return 3*inAr[0]+ inAr[1];
  }
}

exports.fromTernary = function(inNum){
  var tNums = [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]];
  return inNum < 9 ? tNums[inNum] : -1;
}

exports.ternaryGenoSum = function(inNum){
  // [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]
  var sums = [0, 1, 2, 1, 2, 3, 2, 3, 4];
  return inNum < 9 ? tNums[inNum] : -1;
}

exports.determinePhenotype = function(genoFacts, inPede){
  var rawPheno = {};
  for(var i = 0; i < genoFacts.length; i++){
    var curTrait = genoFacts[i]['trait'];
    var inheritType = genoFacts[i]['inherit'];
    if( i < 3) { // traits in play
      // second trait for 2-gene traits, continue
      if(i === 1 && (inheritType === tEnum.INHERIT.MULTGENES || inheritType.startsWith('epi')))
        continue;
      var geno = inPede.genotype[i];
      var genoSum;
      switch(inheritType){
        case tEnum.INHERIT.PENETRANCE:
          genoSum = inPede.penetrant ? geno[0] + geno[1] : 0;
          break;
        case tEnum.INHERIT.MATEFFECT:
          genoSum = inPede.motherGeno[0] + inPede.motherGeno[1];
          break;
        case tEnum.INHERIT.XLINK:
          genoSum = inPede.isFemale ? geno[0] + geno[1] : geno[0]*2;
          break;
        case tEnum.INHERIT.MULTGENES:
          var firstLocus = inPede.genotype[0];
          var secondLocus = inPede.genotype[1];
          genoSum = 1 + firstLocus[0] + firstLocus[1] + secondLocus[0] + secondLocus[1];
          break;
        default:
          genoSum = geno[0] + geno[1];
      } // end switch
      if(genoSum === 1 && inheritType === tEnum.INHERIT.INCDOM){
        rawPheno[curTrait] = genoFacts[i]['interm']
      } else if(i === 0 && inheritType === tEnum.INHERIT.MULTGENES){
        rawPheno[curTrait] = genoSum;
      } else if(i === 0 && inheritType === tEnum.INHERIT.MULTALLELES){
        rawPheno[curTrait] = genoSum+1;
      }
      else if(i===0 && inheritType.startsWith('epi')){
        var locus1 = inPede.genotype[0][0] + inPede.genotype[0][1];
        var locus2 = inPede.genotype[1][0] + inPede.genotype[1][1];
        switch(inheritType){
          case tEnum.INHERIT.EPIDUP:
            // both rec -> 'dom', both dom -> 'rec'
            rawPheno['SegColor'] = ((locus1 > 0 || locus2 > 0) ? genoFacts[0]['dom'] : genoFacts[0]['rec']);
            break;
          case tEnum.INHERIT.EPICOMP:
            // both dom -> 'dom', both dom -> 'rec'
            rawPheno['SegColor'] = ((locus1 > 0 && locus2 > 0) ? genoFacts[0]['dom'] : genoFacts[0]['rec']);
            break;
          case tEnum.INHERIT.EPIREC:
            rawPheno['SegColor'] = (locus1 === 0 ? genoFacts[0]['rec'] : (locus2 === 0 ? genoFacts[0]['interm'] : genoFacts[0]['dom']));
            break;
          case tEnum.INHERIT.EPIDOM:
            rawPheno['SegColor'] = (locus1 > 0 ? genoFacts[0]['rec'] : (locus2 === 0 ? genoFacts[0]['interm'] : genoFacts[0]['dom']));
            break;
        }
      } else {
        rawPheno[curTrait] = genoSum > 0 ? genoFacts[i]['dom'] : genoFacts[i]['rec'];
      } // end if-else
    } // end i < 3
    else {
      // cosmetic trait
      rawPheno[curTrait] = genoFacts[i]['dom'];
    }
  } // end for i
  if(genoFacts[0]['inherit'] === tEnum.INHERIT.MULTGENES || genoFacts[0]['inherit'] === tEnum.INHERIT.MULTALLELES){
    rawPheno['EyeColor'] = 'Red';
    rawPheno['SegColor'] = 'LightGray';
    rawPheno['DotColor'] = 'Black';
    rawPheno['NumLegs'] = 1;
  } else if(genoFacts[0]['inherit'].startsWith('epi')){
    rawPheno['EyeColor'] =  'Red';
    rawPheno['NumSegments'] = 4;
    rawPheno['DotColor'] = 'Pink';
    rawPheno['NumLegs'] = 1;
  }
  return rawPheno;
};
