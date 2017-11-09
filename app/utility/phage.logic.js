const util = require('./utility');
const clone = require('clone');
const randGen = require('./random.generator');
const scenConfig = require('../../config/scenario.config');
const pEnum = require('./phage.enum');

exports.doPheno = function (mutantList, stopList) {
  if (mutantList.deletes.length !== 0)
    return pEnum.FRAMEPHENOTYPE.DELETED;
  var frameInfo = getFrames(pEnum.FRAMECALLER.TRUTH, mutantList.shifts, stopList);
  // TODO: decode ilk (returns type of object)
  if (typeof frameInfo === 'string')
    return frameInfo;
  var lastFrame = frameInfo.frameList[frameInfo.frameList.length - 1];
  switch (lastFrame) {
    case 1:
      return pEnum.FRAMEPHENOTYPE.FRAMESHIFTED;
    case -1:
      return pEnum.FRAMEPHENOTYPE.FRAMESHIFTED;
    case -100:
      return pEnum.FRAMEPHENOTYPE.STOPPED;
    default:
      return pEnum.FRAMEPHENOTYPE.ALLTRANSLATED;
  } // end switch
} // end doPheno

exports.getFrames = function (whoSays, mutantList, stopList) {
  var intStopList = [];
  if (whoSays === pEnum.FRAMECALLER.TRUTH) {
    intStopList = stopList;
  } else {
    for (let i = 0; i < stopList.length; i++) {
      let rStop = stopList[i];
      intStopList.push([
        (rStop.kind === pEnum.MUTEKIND.PLUSONE ? 1 : -1),
        rStop.location
      ]);
    } // end for i
  } // end stopList
  if (whoSays === pEnum.FRAMECALLER.USER) {
    // TODO: function expand
    mutantList = expand(mutantList);
  }

  // sort mutant list
  mutantList.sort(util.locSort);

  var readFrame = 0;
  var totalFramage = [];
  var currentFrameInfo = [0, 1];
  for (let j = 0; j < mutantList.length; j++) {
    let baseElement = mutantList[j];
    let lookSpot = baseElement.location;
    currentFrameInfo.push(lookSpot - 1) // mark end of old frame
    totalFramage.push(currentFrameInfo) // add frame region to new info
    if (baseElement.kind === pEnd.MUTEKIND.PLUSONE)
      readFrame++;
    else if (baseElement.kind === pEnum.MUTEKIND.MINUSONE)
      readFrame--;
    // adjust so everything is 0 or +/- 1 frame
    switch (readFrame) {
      case 2:
        readFrame = -1;
        break;
      case -2:
        readFrame = 1;
        break;
      case 3:
        readFrame = 0;
    } // end switch
    // start a new register reflecting current frame
    currentFrameInfo = [readFrame, lookSpot];
  } // end for j
  currentFrameInfo.push(scenConfig.geneLength / 3);
  totalFramage.push(currentFrameInfo);

  var stoppedFramage = [];
  var stopped = false;
  for (let k = 0; k < totalFramage.length; k++) {
    // determine if any stops
    let readElement = totalFramage[k];
    if (readElement[0] !== 0) {
      // not in frame
      for (let e = 0; e < intStopList.length; e++) {
        let stopElement = intStopList[e];
        if (readElement[0] === stopElement[0]) {
          if (readElement[1] <= stopElement[1] && readElement[2] >= stopElement[1]) {
            if (whoSays === pEnum.FRAMECALLER.TRUTH)
              return pEnum.FRAMEPHENOTYPE.STOPPED;
            else {
              stoppedFramage.push([
                readElement[0],
                readElement[1],
                stopElement[1]
              ]);
              stoppedFramage.push([
                100, stopElement[1], scenConfig.geneLength / 3
              ]);
              stopped = true;
            }
          }
        } // readElement[0] == stopElement[0]
        if (stopped)
          break;
      } // end e
    }
    if (!stopped)
      stoppedFramage.push(readElement); // no stops detected, add unchanged
    else
      break;
  } // end for k
  return {
    frame: readFrame,
    frameList: stoppedFramage
  };
} // end getFrames

exports.recombine = function (phageGeno1, phageGeno2, numXOver, numToDo) {
  var recGenos = [];
  for (let k = 0; k < numToDo; k++) {
    let startGeno, endGeno;
    if (randGen.bool()) {
      startGeno = phageGeno1;
      endGeno = phageGeno2;
    } else {
      startGeno = phageGeno2;
      endGeno = phageGeno1;
    }

    let recSpot = [];
    for (let i = 0; i < numXOver; i++) {
      recSpot.push(randGen.integer(1, scenConfig.geneLength / 3));
    } // end for i
    recSpot.sort();

    var newPhageShiftList = [];
    var newPhageDeletes = [];
    var okRecSpots = [];
    for (let i = 0; i < recSpot.length; i++) {
      let recOk = true;
      let checkRec = recSpot[i];
      if (startGeno.deletes.length > 0) {
        // if chosen recobmination point is in a delete, skip
        if (checkRec >= startGeno.deletes[0] && checkRec <= startGeno.deletes[1])
          recOk = false;
      }
      if (endGeno.deletes.length > 0) {
        if (checkRec >= endGeno.deletes[0] && checkRec <= endGeno.deletes[1])
          recOk = false;
      }
      if (recOk)
        okRecSpots.push(checkRec); // add to okay recombination spots
    } // end for i

    if (okRecSpots.length == 0) {
      // no recombinations successful, return parent
      if (randGen.bool()) {
        newPhageShiftList = startGeno.shifts;
        newPhageDeletes = startGeno.deletes;
      } else {
        newPhageShiftList = endGeno.shifts;
        newPhageDeletes = endGeno.deletes;
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
            [-500, okRecSpots[1]],
            [okRecSpots[2], okRecSpots[3]]
          ];
          endGenoPieces = [
            [okRecSpots[1], okRecSpots[2]],
            [okRecSpots[3], 5000]
          ];
      } // end switch
      newPhageDeletes = [];
      for (let copyZone in startGenoPieces) {
        if (startGeno.shifts.length !== 0) {
          for (let muteElement in startGeno.shifts) {
            if (muteElement.location >= copyZone[0] && muteElement.location < copyZone[1])
              newPhageShiftList.push(muteElement);
          } // end for muteElement
        } // end if startGeno.shifts.length
        if (startGeno.deletes.length !== 0) {
          if (startGeno.deletes[0] >= copyZone[0] && startGeno.deletes[1] < copyZone[1])
            newPhageDeletes.push(startGeno.deletes);
        } // end startGeno.deletes.length
      } // end for copyZone

      for (let copyZone in endGenoPieces) {
        if (endGeno.shifts.length !== 0) {
          for (let muteElement in endGeno.shifts) {
            if (muteElement.location >= copyZone[0] && muteElement.location < copyZone[1])
              newPhageShiftList.push(muteElement);
          } // end for muteElement
        } // end if endGeno.shifts.length
        if (endGeno.deletes.length !== 0) {
          if (endGeno.deletes[0] >= copyZone[0] && endGeno.deletes[1] < copyZone[1])
            newPhageDeletes.push(endGeno.deletes);
        } // end endGeno.deletes.length
      } // end for copyZone
    } // end if okRecSpots
    newPhageShiftList.sort(util.locSort);
    newPhageDeletes.sort();
    recGenos.push({
      shifts: newPhageShiftList,
      deletes: newPhageDeletes
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
    while (!goodMute && count < maxTries) {
      let mutantList = clone(inList);
      let spotShot = randGen.integer(1, scenConfig.geneLength / 3);
      mutantList.push({
        location: spotShot,
        kind: (randGen.bool() ? pEnum.MUTEKIND.PLUSONE : pEnum.MUTEKIND.MINUSONE)
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

exports.getAlleleLoc = function (kind, allele, guesses) {
  var plusGuesses = guesses.plusGuesses;
  var minusGuesses = guesses.minusGuesses;
  if (kind === pEnum.MUTEKIND.PLUSONE) {
    for (let pElmt in plusGuesses) {
      if (pElmt[0] === allele)
        return pElmt[1];
    }
  } else if (kind === pEnum.MUTEKIND.MINUSONE) {
    for (let mElmt in minusGuesses) {
      if (mElmt[0] === allele)
        return mElmt[1];
    }
  } // end if kind
} // end getAlleleLoc

exports.updateAllele = function (kind, allele, location, guesses) {
  var plusGuesses = clone(guesses.plusGuesses);
  var minusGuesses = clone(guesses.minusGuesses);
  var foundIt = false;
  if (kind === pEnum.MUTEKIND.PLUSONE) {
    for (let pElmt in plusGuesses) {
      if (pElmt[0] === allele) {
        pElmt[1] = location;
        foundIt = true;
        break;
      }
    }
    if (!foundIt) {
      plusGuesses.push([allele, location]);
    }
  } else if (kind === plusGuesses.MUTEKIND.MINUSONE) {
    for (let mElmt in minusGuesses) {
      if (mElmt[0] === allele) {
        mElmt[1] = location;
        foundIt = true;
        break;
      }
    }
    if (!foundIt) {
      minusGuesses.push([allele, location]);
    }
  } // end if kind
  return {
    plusGuesses: plusGuesses,
    minusGuesses: minusGuesses
  }
} // end updateAllele
