const pEnum = require('./cricket/phage.enum');
const randGen = require('./random.generator');
const debug = require('debug')('genetics:util');
const clone = require('clone');

exports.howManyToMake = function(engine, inList){
  if(inList.length === 1){
    return inList[0];
  } else {
    return randGen.randInt(inList[0], inList[1], engine);
  }
}

exports.inArray = function(searchVal, inAr){
  return inAr.indexOf(searchVal) != -1;
}

exports.holyRoller = function(engine, numSides, numTimes){
  var diceAr = randGen.randDice(numSides, numTimes, engine);
  var sumDice = 0;
  diceAr.forEach((n)=>{
    sumDice = sumDice + n;
  });
  return sumDice;
}

exports.removeFromArray = function(inAr, removeElm){
  if(inAr.length === 0){
    return inAr;
  }

    var j = inAr.indexOf(removeElm);
    if(j!== -1){
      inAr.splice(j, 1);
    }
  return inAr;
}

exports.makeLongEnoughArray = function(engine, inAr, numNeeded){
  var outArray = clone(inAr);
  if (outArray.length > 0){
    var groupsNeeds = Math.ceil(numNeeded / inAr.length);
    for(var i=2; i <= groupsNeeds; i++){
      outArray = outArray.concat(inAr);
    }
    outArray = randGen.randShuffle(outArray, engine);
  }
  return outArray;
}

exports.absSort = function(a, b){
  return Math.abs(a) - Math.abs(b)
}

exports.locSort = function(a, b){
  return a.location - b.location;
}

// TODO: expand function?
exports.expand = function(inList, guesses){
  var expandList = [];
  for(let i =0; i < inList.length; i++){
    let muteElement = inList[i];
    if(muteElement.kind === pEnum.MUTEKIND.MINUSONE){
      expandList.push({
        kind: pEnum.MUTEKIND.MINUSONE,
        location: guesses.minusGuesses[muteElement.allele]
      });
    } else if(muteElement.kind === pEnum.MUTEKIND.PLUSONE){
      expandList.push({
        kind: pEnum.MUTEKIND.PLUSONE,
        location: guesses.plusGuesses[muteElement.allele]
      });
    }
  } // end for i
  return expandList;
}

exports.gaussRand = function(engine, inNum){
  // if test environment, return 0
  if(process.env.NODE_ENV === 'test'){
    return 0;
  }
  // else generate number
  debug('guassRand start %d', inNum);
  var notGood = true;
  var r, v, w, n1, n2;
  while(notGood){
    n1 = randGen.randDie(999, engine);
    n2 = randGen.randDie(999, engine);
    v = (2 * (n1/1000.0)) - 1;
    w = (2 * (n2/1000.0)) - 1
    r = (v*v) + (w*w);
    debug('guassRand vals %o', {n1: n1, n2: n2, v: v, w: w, r:r})
    if(r < 1 && r !== 0)
      notGood = false
  } // end while notGood

  var fac = Math.sqrt((-2.0 * Math.log10(r)) / r);
  var gauss = fac * w;
  debug('fac guass %d %d', fac, gauss);
  var outVal = inNum * gauss;
  debug('guassRand out %d', outVal);
  return outVal
}

exports.identicalGenotypes = function( phage1, phage2){
  // check deletion
  let d1 = phage1.deletion;
  let d2 = phage2.deletion;
  if(d1.length !== d2.length){
    // only one has deletion -> no match
    return false;
  } else if (d1.length > 0 && d2.length > 0){
    if(d1[0] !== d2[0] || d1[1] !== d2[1])
      return false;
  }

  // check mutations
  let s1 = phage1.shifts;
  let s2 = phage2.shifts;
  // number of shifts must match
  if(s1.length !== s2.length){
    return false;
  } else {
    // loop through deletions
    for(let i = 0; i < s1.length; i++){
      if(s1[i] !== s2[i]){
        return false;
      }
    }
  }
  // made it this far, they are identical
  return true;
}
