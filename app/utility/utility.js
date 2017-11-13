const pEnum = require('./phage.enum');
const randGen = require('./random.generator');
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
  var notGood = true;
  var r, v, w;
  while(notGood){
    //v = (2 * randGen.real(0,1, false)) - 1;
    //w = (2 * randGen.real(0,1, false)) - 1;
    v = (2 * randGen.randReal(0,1, engine)) - 1;
    w = (2 * randGen.randReal(0,1, engine)) - 1;
    r = Math.pow(v, 2) + Math.pow(w, 2);
    if(r < 1 && r !== 0)
      notGood = false
  } // end while notGood
  var fac = Math.sqrt((-2 * Math.log10(r)) / r);
  var gauss = fac * w;
  return Math.floor(inNum * gauss);
}
