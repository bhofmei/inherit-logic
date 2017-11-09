const util = require('./utility');
const clone = require('clone');
const randGen = require('./random.generator');
const scenConfig = require('../../config/scenario.config');
const pEnum = require('./phage.enum');
const phageLogic = require('./phage.logic');

module.exports = function (scenario) {
  // scenario = scenario details - mutationFreq, recombinationFreq, gcProb, minStops, intraMuteDist, interMuteDist, referencePhage, otherPhage, alternatePhage
  // returns JSON list of phage for the scenario (controller handles creating the phage)
  // needed in makeGene
  var wtGene, realStops, framesStopList;
  var usedShiftSpots = [];
  var usedDeleteSpots = [];

  var deleteSizes = scenConfig.deleteSizes; // deletion sizes allowed
  var deleteSpots = scenConfig.deleteSpots; // deletion locations allowed
  var shiftMin = 18;
  var phageNum = 0;

  var muteList = [];
  var strainList = [];

  // make wt gene
  makeGene();

  let otherPhageList = scenario.otherPhage;
  let refPhageList = scenario.referencePhage;

  // create reference phage
  //this.generateScenarioPhage = function () {
  for (let i = 0; i < refPhageList.length; i++) {
    // for each phage type in list
    let rPhage = JSON.parse(refPhageList[i]);
    for (let j = 0; j < rPhage.howMany; j++) {
      let newPhage = makePhage(rPhage, phageNum, pEnum.PHAGETYPE.REF);
      strainList.push(newPhage);
      phageNum++;
    } // end for j
  } // end for i

  // tmp other list bc it might need shuffled later or handled differently
  let tmpStrainList = [];
  for (let i = 0; i < otherPhageList.length; i++) {
    let rPhage = JSON.parse(otherPhageList[i]);
    // negative how many needs handled special
    if (rPhage.howMany >= 0) {
      for (let j = 0; j < rPhage.howMany; j++) {
        let newPhage = makePhage(rPhage, phageNum, pEnum.PHAGETYPE.UNKNOWN);
        tmpStrainList.push(newPhage);
        phageNum++;
      }
    } else {
      let howMany = Math.abs(rPhage.howMany);
      for (let j = 0; j < howMany; j++) {
        let newPhage;
        if (tmpStrainList.length == 0 || randGen.bool(1, 3)) {
          // create new phage
          newPhage = makePhage(rPhage, phageNum, pEnum.PHAGETYPE.UNKNOWN);
        } else {
          // duplicate exisiting
          let pickPhage = randGen.pick(tmpStrainList);
          newPhage = clone(pickPhage);
          newPhage.strainNum = phageNum;
        }
        tmpStrainList.push(newPhage);
        phageNum++;
      } // end for j
    } // else howMany > 0
  } // end for i

  // shuffle tmpStrainList
  randGen.shuffle(tmpStrainList);
  // add to full strainList
  strainList = strainList.concat(tmpStrainList);
  var output = {
    strainList: strainList,
    wtGene: wtGene,
    stopList: framesStopList
  };
  return output;
  //} // end generateScenario

  const makeGene = function () {
    // return wtGene, realStops, frameStopList
    let codons = [];
    let stopCodons = ['TAA', 'TGA', 'TAG'];
    let goodGene = false;
    while (!goodGene) {
      wtGene = '';
      for (let i = 0; i < scenConfig.geneLength; i++) {
        let currCodon = '';
        let goodCodon = false;
        while (!goodCodon) {
          for (let j = 0; j < 2; j++) {
            let cgVal = randGen.dice(100);
            if (cgVal <= scenario.gcProb) {
              currCodon = currCodon + (randGen.bool() ? 'G' : 'C');
            } else {
              currCodon = currCodon + (randGen.bool() ? 'A' : 'T');
            }
          } // end for j
          // if currCodon is not stop
          if (stopCodons.indexOf(currCodon) === -1)
            goodCodon = true;
        } // end not for goodCodon
        wtGene = wtGene + currCodon;
      } // end for i

      // single frame shift
      var dupliGene = 'X' + wtGene;
      realStops = [];
      let position = 1;
      while (dupliGene.length > 2) {
        if (stopCodons.indexOf(dupliGene.slice(0, 3)) !== -1) {
          realStops.push({
            kind: pEnum.MUTEKIND.PLUSONE,
            location: position
          });
        }
        dupliGene = dupliGene.slice(3);
        position++;
      } // end dupliGene

      // double frame shift
      dupliGene = 'XX' + wtGene;
      dupliGene.slice(3);
      position = 1;
      while (dupliGene.length > 2) {
        if (stopCodons.indexOf(dupliGene.slice(0, 3)) !== -1) {
          realStops.push({
            kind: pEnum.MUTEKIND.MINUSONE,
            location: position
          });
        }
        dupliGene = dupliGene.slice(3);
        position++;
      } // end dupliGene
      if (realStops.length <= 16 && realStops.length >= scenario.minStops)
        goodGene = true;
    } // end not goodGene

    // get frame stop list
    framesStopList = [];
    for (let i = 0; i < realStops.length; i++) {
      let rStop = realStops[i];
      framesStopList.push([(rStop.kind === pEnum.MUTEKIND.PLUSONE ? 1 : -1), rStop.location]);
    } // end for i
  } // end for makeGene

  const makePhage = function (phageDetails, strainNum, phageType) {
    /*phageDetails: {
      isWildType: true/false,
      frameShifts: { howMany: [lowNum, highNum],
      mixed: always/sometimes/never,
      delete: { position: outLeft, outRight, internal, choose,
        ends: [#,#]
      },
      comments: ''
      }
    }*/
    /* phageType: reference or unknown */
    var outPhage;

    if (phageDetails.isWildType) {
      // wild type phage
      outPhage = makeWTPhage(phageDetails, strainNum, phageType);
    } else if (phageDetails.deletions) {
      // phage has deletions
      outPhage = makeDelPhage(phageDetails, strainNum, phageType);
    } else if (phageDetails.frameshifts !== null) {
      // phage has frame shifts
      outPhage = makeFrameshiftPhage(phageDetails, strainNum, phageType);
    } else {
      throw new Error('Incorrect phage detail format');
      return false;
    }
    // return new strain
    return outPhage;

  }

  const makeWTPhage = function (phage, strainNum, phageType) {
    return {
      strainNum: strainNum,
      scenarioOrigin: scenario._id,
      phageType: phageType,
      mutationList: [],
      deletion: [],
      comment: phage.comment
    }
  };

  const makeDelPhage = function (phage, strainNum, phageType) {
    var goodDelete = false;
    var realDelete;
    // still deletions to be made
    if (deleteSizes.length > 0) {
      // pick a deletion size
      let useDelete = randGen.integer(0, deleteSizes.length - 1);
      let deleteSize = deleteSizes[useDelete];
      deleteSizes.splice(useDelete, 1);
      if (deleteSpots.length > 0) {
        let useSpot = randGen.integer(0, deleteSpots.length);
        let deleteSpot = deleteSpots[useSpot];
        deleteSpots.splice(useSpot, 1);
        realDelete = [deleteSpot, deleteSpot + deleteSize];
        goodDelete = true
      } // end deleteSpots.length
    } // end deleteSizes.length

    // predefined deletion chouldn't be found, generate one
    realDelete = generateDeletion();

    // have a deletion
    if (realDelete.length > 0) {
      // add deletion
      usedDeleteSpots.push(realDelete);
      // return new phage
      return {
        strainNum: strainNum,
        scenarioOrigin: scenario._id,
        phageType: phageType,
        mutationList: [],
        deletion: realDelete,
        comment: phage.comment
      }
    } // end realDelete.length
  } // end makeDelPhage

  const generateDeletion = function () {
    var deleteTries = 0;
    var goodDelete = false;
    var realDelete;

    const maxDeleteTries = scenConfig.maxDeleteTries;
    while (!goodDelete && deleteTries < maxDeleteTries) {
      let randInt = randGen.integer(1, 7);
      let deleteKind;
      switch (randInt) {
        case 1:
          deleteKind = pEnum.DELETEKIND.OUTLEFT;
          break;
        case 2:
          deleteKind = pEnum.DELETEKIND.OUTRIGHT;
          break;
        default:
          deleteKind = pEnum.DELETEKIND.INTERNAL;
      } // end switch
      deleteTries++;
      if (deleteKind === pEnum.DELETEKIND.OUTLEFT) {
        realDelete = [-100, util.holyRoller(randGen, 70, 3)];
        realDelete[1] = (realDelete[1] < 40 ? realDelete[1] + 25 : realDelete[1]);
      } else if (deleteKind === pEnum.DELETEKIND.OUTRIGHT) {
        realDelete = [util.holyRoller(randGen, 70, 3), 500];
        realDelete[0] = (realDelete[0] > 270 ? realDelete[0] - 50 : realDelete[0]);
      } else { // internal
        let unsatisfactory = true;
        let leftSide, rightSide;
        while (unsatisfactory) {
          let core = randGen.dice(22) * 17;
          let delSize = randGen.dice(25) * 6 + randGen.dice(15);
          if (core < 70) {
            leftSide = core;
            rightSide = core + delSize;
          } else if (core > 290) {
            rightSide = core;
            leftSide = core - delSize;
          } else {
            leftSide = core - delSize / 2;
            rightSide = core + delSize / 2;
          } // end if core
          if (leftSide > 25 && (350 - rightSide) > 25 && (rightSide - leftSide) > 18)
            unsatisfactory = false;
        } // end while unsatisfactory
        realDelete = [leftSide, rightSide];
      } // end deleteKind
      goodDelete = checkPhageDeleteion(realDelete);
    } //end while not goodDelete
    if (deleteTries === maxDeleteTries)
      throw new Error('no deleteion in', maxDeleteTries, ' tries');
    return realDelete;
  } // end generateDeletion

  const checkPhageDeletion = function (keyMutes) {
    for (let i = 0; i < usedDeleteSpots.length; i++) {
      let inDelete = usedDeleteSpots[i];
      let dist00 = Math.abs(keyMutes[0] - inDelete[0]);
      let dist11 = Math.abs(keyMutes[1] - inDelete[1]);
      let dist01 = Math.abs(keyMutes[0] - inDelete[1]);
      let dist10 = Math.abs(keyMutes[1] - inDelete[0]);
      if (keyMutes[0] > 0 && keyMutes[1] < 350) {
        if (dist00 < 13 || dist11 < 13 || dist01 < 13 || dist10 < 13) {
          return false
        }
      } else if (keyMutes[0] === -100 && dist11 < 25) {
        // check for outLeft
        return false;
      } else if (keyMutes[1] === 500 && dist00 < 25)
        // check outright
        return false;
    }
    return true;
  } // end checkPhageDeletion

  const makeFrameshiftPhage = function (phage, strainNum, phageType) {
    var shiftInfo = phage.frameshifts;
    var nShifts = util.howManyToMake(randGen, shiftInfo.howMany);
    var shiftType;
    var muteList = [];
    if (shiftInfo.frameChoice !== 0) {
      shiftType = shiftInfo.frameChoice;
    } else {
      // randomly pick type based on mixed property
      switch (shiftInfo.mixed) {
        case pEnum.SHIFTMIXED.NEVER:
          shiftType = (randGen.bool() ? 1 : -1);
          break;
        case pEnum.SHIFTMIXED.ALWAYS:
          shiftType = (nShifts > 1 ? 2 : 0);
          break;
        case pEnum.SHIFTMIXED.SOMETIMES:
          shiftType = (randGen.bool() ? 0 : (randGen.bool() ? 1 : -1));
          break;
        default:
          shiftType = 0;
      } // end switch
    } // end if frame choice

    // loop till we find a good phage
    let iTries = 0;
    let maxTries = scenConfig.maxFrameTries;
    var goodPhage = false;
    while (!goodPhage && iTries < maxTries) {
      muteList = generateFrameshift(shiftType, nShifts, shiftInfo.readable);
      iTries++;
      // have a mutation list, check the frameshift
      if (muteList.length > 0) {
        goodPhage = checkPhageFrameshift(muteList);
      }
    } // end while !goodPhage

    // too many tries
    if (iTries === maxTries) {
      throw new Error('could not make frameshift phage species');
    }
    if (muteList.length > 0) {
      usedShiftSpots = usedShiftSpots.concat(muteList);
      return {
        strainNum: strainNum,
        scenarioOrigin: scenario._id,
        phageType: phageType,
        mutationList: muteList,
        deletion: [],
        comment: phage.comment
      }
    } // end mutelist.length
  } // end makeFrameshiftPhage

  const generateFrameshift = function (shiftType, nShifts, readable) {
    // attempts to generate a single frameshift mutation
    var goodPhage = true;
    var muteList = [];
    var lastMade = null;
    var okDist = scenConfig.shiftOkDist;
    var shifter;
    // loop through each frame shift
    for (let i = 0; i < nShifts; i++) {
      switch (shiftType) {
        case 1:
          shifter = pEnum.MUTEKIND.PLUSONE;
          break;
        case -1:
          shifter = pEnum.MUTEKIND.MINUSONE;
          break;
        case 0:
          shifter = (randGen.bool() ? MUTEKIND.MINUSONE : MUTEKIND.PLUSONE);
          break;
        default:
          shifter = ((shiftType + 1) % 2 ? MUTEKIND.MINUSONE : MUTEKIND.PLUSONE);
      } // end switch shiftType
      var newSpot = getNewSpot(lastMade);
      // add to mutation list
      muteList.push({
        kind: shifter,
        location: newSpot
      });
      lastMade = newSpot;
    } // end for i

    // sort the mutation list
    muteList.sort(util.locSort);

    // make sure first mutant is good regardless of location from end point
    if (nShifts > 1) {
      let mutePoint = -100;
      for (let i = 0; i < muteList.length; i++) {
        let shiftMute = muteList[i];
        if ((shiftMute.location - mutePoint) < okDist)
          goodPhage = true;
        else
          mutePoint = shiftMute.location;
      } // end for i
    } // end nShifts > 1

    // if good phage, check frame
    if (goodPhage) {
      let allTranslated = phageLogic.doPheno({
        shifts: muteList,
        deletes: []
      });
      if (readable === pEnum.READABLE.CAN && allTranslated !== pEnum.FRAMEPHENOTYPE.ALLTRANSLATED)
        goodPhage = false;
      if (readable === pEnum.READABLE.CANNOT && allTranslated === pEnum.FRAMEPHENOTYPE.ALLTRANSLATED)
        goodPhage = false
    } // end if goodPhage
    // return good mutation list or empty mutation if not good
    return (goodPhage ? muteList : []);
  } // end generateFrameShift

  const getNewSpot = function (lastMade) {
    var newSpot;
    // if interMuteDist not defined
    if (scenario.interMuteDist == null) {
      if (lastMade === null) {
        newSpot = randGen.integer(25, 300);
      } else {
        let friendly = false;
        while (!friendly) {
          let newDist = randGen.integer(scenario.intraMuteDist[0], scenario.intraMuteDist[1]);
          newSpot = (randGen.bool() ? lastMade + newDist : lastMade - newDist);
          if (newSpot > 0 && Math.abs(newSpot - lastMade) > 10)
            friendly = true;
        } // end while not friendly
      } // end lastMade
    } else {
      // interMuteDist defined
      if (usedShiftSpots.length === 0) {
        // first shift to be made
        newSpot = randGen.integer(25, (350 - scenario.interMuteDisance + 50));
        // allow mutation to be at either end
        newSpot = (randGen.bool() ? 350 - newSpot : newSpot);
      } else {
        let friendly = false;
        while (!friendly) {
          newSpot = randGen.integer(25, 300);
          friendly = true;
          for (let j = 0; j < usedShiftSpots.length; j++) {
            friendly = (Math.abs(usedShiftSpots.location - newSpot) < scenario.interMuteDisance);
          } // end for j
        } // end while not friendly
      } // end if usedShiftSpots
    } // end if interMuteDist
    return newSpot;
  } // end getNewSpot

  const checkPhageFrameshift = function (keyMutes) {
    let chainLength = keyMutes.length;
    for (let i = 0; i < chainLength; i++) {
      let stopSpot;
      let mute = keyMutes[i];
      // check internal spacing
      let sameKind = 500;
      let otherKind = 500;
      for (stopSpot in realStops) {
        if (stopSpot.kind === mute.kind) {
          // make sure no inframe stops immediately downstream
          if (stopSpot.location >= mute.location)
            sameKind = Math.min(sameKind, stopSpot.location - mute.location);
        } else if (stopSpot.location < mute.location) {
          // make sure no opposite stops are upstream
          otherKind = Math.min(otherKind, mute.location - stopSpot.location)
        } // end if stopSpot.kind/location
        if (sameKind < 16 && otherKind < 16) {
          // can't be supppressed by changes within 15 on one side or the other
          return false;
        }
      } // end for stopSpot
      // make sure all mutants in this phage are separated
      for (let j = i; j < chainLength; j++) {
        let brotherLoc = keyMutes[j].location;
        if (Math.abs(brotherLoc - mute.location) < 20)
          return false;
      } // end for j

      // check shift spots
      for (let j = 0; j < usedShiftSpots; j++) {
        let usedMute = usedShiftSpots[j];
        if (Math.abs(usedMute.location - mute.location) < shiftMin)
          return false;
      } // end for j
    } // end for mute
    // made it through all mutations
    return true;
  } // end checkPhageFrameshift

} // end module.exports
