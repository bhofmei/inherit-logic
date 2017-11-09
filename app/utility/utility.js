
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
  return diceAr.apply((n)=>{
    sumDice = sumDice + n;
  });
}

exports.locSort = function(a, b){
  return a.location - b.location;
}

// TODO: expand function?
