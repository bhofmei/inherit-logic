const pEnum = require('./phage.enum');
exports.howManyToMake = function(randGen, inList){
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
