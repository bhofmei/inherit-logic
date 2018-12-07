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
  return inNum < 9 ? sums[inNum] : null;
}

exports.determinePhenotype = function(genoFacts, inPede){
  var traits = tEnum.TRAITS; // ["DotColor","EyeColor","SegColor","NumLegs","NumSegments"];
  var rawPheno = [null, null, null, null, null];
  for(var i = 0; i < genoFacts.length; i++){
    var curTrait = genoFacts[i]['trait'];
    var traitInt = traits.indexOf(curTrait);
    var inheritType = genoFacts[i]['inherit'];
    if( i < 3 ) { // traits in play
      // second trait for 2-gene traits, continue
      if(i === 1 && (inheritType === tEnum.INHERIT.MULTGENES || inheritType.startsWith('epi')))
        continue;
      var geno = inPede.genotype[i];
      var genoSum;
      switch(inheritType){
        case tEnum.INHERIT.PENETRANCE:
          genoSum = inPede.penetrant ? this.ternaryGenoSum(geno) : 0;
          break;
        case tEnum.INHERIT.MATEFFECT:
          genoSum = this.ternaryGenoSum(inPede.motherGeno);
          break;
        case tEnum.INHERIT.XLINK:
          genoSum = inPede.isFemale ? this.ternaryGenoSum(geno) : this.fromTernary(geno)[0]*2;
          break;
        case tEnum.INHERIT.MULTGENES:
          genoSum = 1 + this.ternaryGenoSum(inPede.genotype[0]) + this.ternaryGenoSum(inPede.genotype[1]);
          break;
        /*case tEnum.INHERIT.MULTALLELES:
          genoSum = 1 + this.ternaryGenoSum(geno);
          break;*/
        default:
          genoSum = this.ternaryGenoSum(geno)
      } // end switch
      if(genoSum === 1 && inheritType === tEnum.INHERIT.INCDOM){
        rawPheno[traitInt] = genoFacts[i]['interm']
      } else if(i === 0 && inheritType === tEnum.INHERIT.MULTGENES){
        rawPheno[traitInt] = genoSum;
        rawPheno[3] = 1; // numLegs = 1
      } else if(i === 0 && inheritType === tEnum.INHERIT.MULTALLELES){
        rawPheno[traitInt] = genoSum + 1;
      } else if(i===0 && inheritType.startsWith('epi')){ // epistatis
        rawPheno[3] = 1; // numLegs = 1
        var locus1 = this.ternaryGenoSum(inPede.genotype[0]);
        var locus2 = this.ternaryGenoSum(inPede.genotype[1]);
        switch(inheritType){
          case tEnum.INHERIT.EPIDUP:
            // either dom -> 'dom', both rec -> `rec`
            rawPheno[traitInt] = ((locus1 > 0 || locus2 > 0) ? genoFacts[0]['dom'] : genoFacts[0]['rec']);
            break;
          case tEnum.INHERIT.EPICOMP:
            // both dom -> 'dom', either rec -> `rec`
            rawPheno[traitInt] = ((locus1 > 0 && locus2 > 0) ? genoFacts[0]['dom'] : genoFacts[0]['rec']);
            break;
          case tEnum.INHERIT.EPIREC:
          // gene1 rec -> 'rec' (no progress); gene1 dom and gene2 rec -> `inter`; both dom -> `dom`
            rawPheno[traitInt] = (locus1 === 0 ? genoFacts[0]['rec'] : (locus2 === 0 ? genoFacts[0]['interm'] : genoFacts[0]['dom']));
            break;
          case tEnum.INHERIT.EPIDOM:
          // gene1 dom -> `rec` (no progress); gene1 and gene 2 rec -> `inter`; gene1 rec and gene 2 dom -> `dom`
            rawPheno[traitInt] = (locus1 > 0 ? genoFacts[0]['rec'] : (locus2 === 0 ? genoFacts[0]['interm'] : genoFacts[0]['dom']));
            break;
        }
      } else {
        rawPheno[traitInt] = genoSum > 0 ? genoFacts[i]['dom'] : genoFacts[i]['rec'];
      } // end if-else
    } // end i < 3
    else {
      // cosmetic trait
      rawPheno[traitInt] = genoFacts[i]['dom'];
    }
  } // end for i
  return rawPheno;
};
