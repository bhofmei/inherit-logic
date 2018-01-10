const pEnum = require('./phage.enum');
const randGen = require('./random.generator');
const debug = require('debug')('genetics'),
      debugExt = require('debug')('genetics:ext');
/*exports.howManyToMake = function(randGen, inList){
  if(inList.length === 1){
    return inList[0];
  } else {
    return randGen.integer(inList[0], inList[1]);
  }
}

exports.holyRoller = function(randGen, numSides, numTimes){
  var diceAr = randGen.dice(numSides, numTimes);
  var sumDice = 0;
  return diceAr.forEach((n)=>{
    sumDice = sumDice + n;
  });
}*/
exports.howManyToMake = function(engine, inList){
  if(inList.length === 1){
    return inList[0];
  } else {
    return randGen.randInt(inList[0], inList[1], engine);
  }
}

exports.holyRoller = function(engine, numSides, numTimes){
  var diceAr = randGen.randDice(numSides, numTimes, engine);
  var sumDice = 0;
  diceAr.forEach((n)=>{
    sumDice = sumDice + n;
  });
  return sumDice;
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
  debug('guassRand start %d', inNum);
  var notGood = true;
  var r, v, w, n1, n2;
  while(notGood){
    n1 = randGen.randDie(999, engine);
    n2 = randGen.randDie(999, engine);
    v = (2 * (n1/1000.0)) - 1;
    w = (2 * (n2/1000.0)) - 1
    r = (v*v) + (w*w);
    debugExt('guassRand vals %o', {n1: n1, n2: n2, v: v, w: w, r:r})
    if(r < 1 && r !== 0)
      notGood = false
  } // end while notGood

  var fac = Math.sqrt((-2.0 * Math.log10(r)) / r);
  var gauss = fac * w;
  debugExt('fac guass %d %d', fac, gauss);
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
      if(s1[i].location !== s2[i].location || s1[i].kind != s2[i].kind){
        return false;
      }
    }
  }
  // made it this far, they are identical
  return true;
}
