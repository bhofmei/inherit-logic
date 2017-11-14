const util = require('./utility');
const clone = require('clone');
const randGen = require('./random.generator');
const randEngine = randGen.getEngine();
const scenConfig = require('../../config/scenario.config');
const pEnum = require('./phage.enum');

exports.recombine = function (phageGeno1, phageGeno2, numXOver, numToDo) {
  var recGenos = [];
  for (let k = 0; k < numToDo; k++) {
    let startGeno, endGeno;
    //if (randGen.bool()) {
    if (randGen.randBool(randEngine)) {
      startGeno = clone(phageGeno1);
      endGeno = clone(phageGeno2);
    } else {
      startGeno = clone(phageGeno2);
      endGeno = clone(phageGeno1);
    }

    let recSpot = [];
    for (let i = 0; i < numXOver; i++) {
      //recSpot.push(randGen.integer(1, scenConfig.geneLength));
      recSpot.push(randGen.randInt(1, scenConfig.geneLength, randEngine));
    } // end for i
    recSpot.sort();
    var newPhageShiftList = [];
    var newPhageDeletes = [];
    var okRecSpots = [];
    for (let i = 0; i < recSpot.length; i++) {
      let recOk = true;
      let checkRec = recSpot[i];
      if (startGeno.deletion.length > 0) {
        // if chosen recobmination point is in a delete, skip
        if (checkRec >= startGeno.deletion[0] && checkRec <= startGeno.deletion[1])
          recOk = false;
      }
      if (endGeno.deletion.length > 0) {
        if (checkRec >= endGeno.deletion[0] && checkRec <= endGeno.deletion[1])
          recOk = false;
      }
      if (recOk)
        okRecSpots.push(checkRec); // add to okay recombination spots
    } // end for i
    okRecSpots.sort(function(a, b){return a-b});

    if (okRecSpots.length === 0) {
      // no recombinations successful, return parent
      //if (randGen.bool()) {
      if (randGen.randBool(randEngine)) {
        newPhageShiftList = startGeno.shifts;
        newPhageDeletes = startGeno.deletion;
      } else {
        newPhageShiftList = endGeno.shifts;
        newPhageDeletes = endGeno.deletion;
      }
    } else {
      // success recombinations
      let startGenoPieces = [];
      let endGenoPieces = [];
      // divide up gene sections
      switch (okRecSpots.length) {
        case 1:
          startGenoPieces = [
            [-500, okRecSpots[0]]
          ];
          endGenoPieces = [
            [okRecSpots[0], 5000]
          ];
          break;
        case 2:
          startGenoPieces = [
            [-500, okRecSpots[0]],
            [okRecSpots[1], 5000]
          ];
          endGenoPieces = [
            [okRecSpots[0], okRecSpots[1]]
          ];
          break;
        case 3:
          startGenoPieces = [
            [-500, okRecSpots[0]],
            [okRecSpots[1], okRecSpots[2]]
          ];
          endGenoPieces = [
            [okRecSpots[0], okRecSpots[1]],
            [okRecSpots[2], 5000]
          ];
      } // end switch
      newPhageDeletes = [];
      startGenoPieces.forEach((copyZone) => {
        for (let j = 0; j < startGeno.shifts.length; j++) {
          let shiftElt = startGeno.shifts[j];
          if (shiftElt.location >= copyZone[0] && shiftElt.location < copyZone[1])
            newPhageShiftList.push(clone(shiftElt));
        } // end for j
        // copy deletion
        if (startGeno.deletion.length !== 0 && startGeno.deletion[0] >= copyZone[0] && startGeno.deletion[1] < copyZone[1])
          newPhageDeletes.push(clone(startGeno.deletion));
      }); // end for copyZone
      endGenoPieces.forEach((copyZone) => {
        for (let j = 0; j < endGeno.shifts.length; j++) {
          let shiftElt = endGeno.shifts[j];
          if (shiftElt.location >= copyZone[0] && shiftElt.location < copyZone[1])
            newPhageShiftList.push(clone(shiftElt));
        } // end for j
        if (endGeno.deletion.length !== 0 && endGeno.deletion[0] >= copyZone[0] && endGeno.deletion[1] < copyZone[1])
          newPhageDeletes.push(clone(endGeno.deletion));
      }); // end for copyZone
    } // end if okRecSpots
    newPhageShiftList.sort(util.locSort);
    // check for multi-deletes
    if(newPhageDeletes.length > 1){
      // randomly pick a delete
      let pickDel = randGen.pick(newPhageDeletes, randEngine);
      newPhageDeletes = pickDel;
    } else if(newPhageDeletes.length === 1){
      newPhageDeletes = newPhageDeletes[0];
    }
    recGenos.push({
      shifts: newPhageShiftList,
      deletion: newPhageDeletes
    });
  } // end for k
  return recGenos;
} // end recombine

exports.mutagenize = function (inList, numDesired) {
  // TODO: mutangenize function
  var okDist = scenConfig.mutOkDist;
  var muteGuys = [];
  var maxTries = scenConfig.maxMuteTries;
  for (let i = 0; i < numDesired; i++) {
    let count = 0;
    let goodMute = false;
    let mutantList = [];
    while (!goodMute && count < maxTries) {
      mutantList = clone(inList);
      //let spotShot = randGen.integer(1, scenConfig.geneLength);
      let spotShot = randGen.randInt(1, scenConfig.geneLength, randEngine);
      mutantList.push({
        //kind: (randGen.bool() ? pEnum.MUTEKIND.PLUSONE : pEnum.MUTEKIND.MINUSONE),
        kind: (randGen.randBool(randEngine) ? pEnum.MUTEKIND.PLUSONE : pEnum.MUTEKIND.MINUSONE),
        location: spotShot
      });
      // resort list
      mutantList.sort(util.locSort);
      goodMute = true;
      let mutePoint = -100; // first mutant is okay
      for (let shiftMute in mutantList) {
        if ((shiftMute.location - mutePoint) < okDist)
          goodMute = false;
        else
          mutePoint = shiftMute.location;
      } // end for shiftMute
      count++;
    } // end while
    if (count === maxTries) {
      throw new Error('cannot mutagenize in', maxTries, 'tries');
    }
    muteGuys.push(mutantList);
  } // end for i
  return muteGuys;
} // end mutagenize
