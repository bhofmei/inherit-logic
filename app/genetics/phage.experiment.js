const util = require('./utility');
const clone = require('clone');
const randGen = require('./random.generator');
const randEngine = randGen.getEngine();
const scenConfig = require('../../config/scenario.config');
const pEnum = require('./phage.enum');
const debug = require('debug')('genetics:phage'),
  debugExt = require('debug', 'genetics:ext');

/**
 * Set the random number generation see to a "random" number
 */
exports.resetEngine = function () {
  randGen.reset(randEngine);
}

/**
 * Set the random number generation seed to a specific number;
 * used for testing
 *
 * @param {number} num - new seed value
 */
exports.seedEngine = function (num) {
  randGen.setSeed(randEngine, num)
}

/**
 * Recombine 2 strains with specified number of crossovers and number of offspring
 *
 * @param {Object} phageGeno1 - genotype of phage 1
 * @param {Object} phageGeno2 - genotype of phage 2
 * @param {number} numXOver - number of corssovers
 * @param {number} numToDo - how many offspring to create
 *
 * @retuns {Object[]} - list of recombined offspring
 */
exports.recombine = function (phageGeno1, phageGeno2, numXOver, numToDo) {
  var recGenos = [];
  for (let k = 0; k < numToDo; k++) {
    let debugText = '';
    let startGeno, endGeno;
    if (randGen.randBool(randEngine)) {
      startGeno = clone(phageGeno1);
      endGeno = clone(phageGeno2);
      debugText += 'geno 1, 2 - ';
    } else {
      startGeno = clone(phageGeno2);
      endGeno = clone(phageGeno1);
      debugText += 'geno 2, 1 - ';
    }

    let recSpot = [];
    for (let i = 0; i < numXOver; i++) {
      recSpot.push(randGen.randInt(1, scenConfig.geneLength, randEngine));
    } // end for i
    recSpot.sort();
    var newPhageShiftList = [];
    var newPhageDeletes = [];
    var okRecSpots = [];
    var notOk = [];
    for (let i = 0; i < recSpot.length; i++) {
      let checkRec = recSpot[i];
      // check recombin point within parent deletions
      let validStart = _validRecombDel(checkRec, startGeno.deletion);
      let validEnd = _validRecombDel(checkRec, endGeno.deletion);
      if (validStart && validEnd)
        okRecSpots.push(checkRec); // add to okay recombination spots
      else
        notOk.push(checkRec);
    } // end for i
    okRecSpots.sort(function (a, b) {
      return a - b
    });

    debugText += 'Xover ';
    if(notOk.length > 0){
      notOk.sort();
      debugText += ' (' + notOk + ') ';
    }
    debugText += okRecSpots;
    if (okRecSpots.length === 0) {
      // no recombinations successful, return parent
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
      let tmpDeletes = [];
      startGenoPieces.forEach((copyZone) => {
        for (let j = 0; j < startGeno.shifts.length; j++) {
          let shiftElt = startGeno.shifts[j];
          let absShift = Math.abs(shiftElt);
          if (absShift >= copyZone[0] && absShift < copyZone[1])
            newPhageShiftList.push(clone(shiftElt));
        } // end for j
        // copy deletion
        if (startGeno.deletion.length > 0) {
          tmpDeletes.push.apply(tmpDeletes, _copyDeletion(copyZone[0], copyZone[1], startGeno.deletion));
        }
      }); // end for copyZone
      endGenoPieces.forEach((copyZone) => {
        for (let j = 0; j < endGeno.shifts.length; j++) {
          let shiftElt = endGeno.shifts[j];
          let absShift = Math.abs(shiftElt);
          if (absShift >= copyZone[0] && absShift < copyZone[1])
            newPhageShiftList.push(clone(shiftElt));
        } // end for j
        if (endGeno.deletion.length > 0) {
          tmpDeletes.push.apply(tmpDeletes, _copyDeletion(copyZone[0], copyZone[1], endGeno.deletion));
        }
      }); // end for copyZone
      // sort and flatten deletions
      debugExt('copied deletes', tmpDeletes);
      newPhageDeletes = [];
      if (tmpDeletes.length > 0) {
        tmpDeletes.sort(util.locSort);
        tmpDeletes.forEach((del) => {
          newPhageDeletes.push(del.location, del.locationEnd);
        });
      }
    } // end if okRecSpots
    newPhageShiftList.sort(util.absSort);
    // check for multi-deletes
    debugExt('deletes %o', newPhageDeletes);
    recGenos.push({
      shifts: newPhageShiftList,
      deletion: newPhageDeletes
    });
    debug('%s - %s - %o', k, debugText, (newPhageDeletes.length ===0 ? newPhageShiftList : newPhageDeletes));
  } // end for k
  return recGenos;

} // end recombine

/**
 * Create N number of mutants; checks that mutations aren't too close
 * together on the chromosome
 *
 * @param {number[]} inList - mutations (shifts) of phage to mutagenize
 * @param {number} numDesitred - number of new mutants to generate
 *
 * @returns {number[][]} - 2D array of new mutants; numDesired x (len. inList+1)
 */
exports.mutagenize = function (inList, numDesired) {
  var okDist = scenConfig.mutOkDist;
  var muteGuys = [];
  var maxTries = scenConfig.maxMuteTries;
  for (let i = 0; i < numDesired; i++) {
    let count = 0;
    let goodMute = false;
    let mutantList = [];
    while (!goodMute && count < maxTries) {
      mutantList = clone(inList);
      let spotShot = randGen.randInt(1, scenConfig.geneLength, randEngine);
      let kind = (randGen.randBool(randEngine) ? 1 : -1)
      mutantList.push(
       kind * spotShot
      );
      // resort list
      mutantList.sort(util.absSort);
      goodMute = true;
      let mutePoint = -100; // first mutant is okay
      for (let shiftMute in mutantList) {
        if ((Math.abs(shiftMute) - mutePoint) < okDist)
          goodMute = false;
        else
          mutePoint = Math.abs(shiftMute);
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

/**
 * check if recombination position is within a deletion
 *
 * @param {number} checkPos - position to check
 * @param {number[]} delList - lit of deletions for phage
 *
 * @returns {boolean} - true if recombination is valid (not in a deletion),
 * false otherwise
 */
const _validRecombDel = function (checkPos, delList) {
  if (delList.length === 0) {
    return true;
  } else if (delList.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < delList.length; i += 2) {
    if (checkPos >= delList[i] && checkPos <= delList[i + 1]) {
      return false;
    }
  } // end for
  return true;
};

/**
 * Create a copy of deletions within the start and end positions of
 * chromosome chunk to be copied
 *
 * @param {number} sPos - start position of chrosomome chunk to copy
 * @param {number} ePos - end position of chromosome chunk to copy
 * @param {number[]} delList - list of deletions for this phage
 *
 * @returns {number[]} - copy of the deletions
 */
const _copyDeletion = function (sPos, ePos, delList) {
  let outDel = [];
  let mLength = (delList.length % 2 === 0 ? delList.length : delList.length - 1);
  // loop through
  for (let i = 0; i < mLength; i += 2) {
    if (delList[i] >= sPos && delList[i + 1] <= ePos) {
      outDel.push({
        location: delList[i],
        locationEnd: delList[i + 1]
      });
    }
  }
  debugExt('copy', sPos, ePos, delList, outDel);
  return outDel;
}
