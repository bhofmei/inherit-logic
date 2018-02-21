const util = require('./utility');
const clone = require('clone');
//const randGen = require('./random.generator')();
const randGen = require('./random.generator');
const randEngine = randGen.getEngine();
const scenConfig = require('../../config/scenario.config');
const pEnum = require('./phage.enum');
const phageLogic = require('./phage.logic');
const debug = require('debug')('genetics');

exports.resetEngine = function(){
  randGen.reset(randEngine);
}

exports.seedEngine = function(num){
  randGen.setSeed(randEngine, num)
}

exports.generateScenario = function (scenario) {
  // scenario = scenario details - mutationFreq, recombinationFreq, gcProb, minStops, intraMuteDist, interMuteDist, referencePhage, otherPhage, alternatePhage
  // returns JSON list of phage for the scenario (controller handles creating the phage)
  // needed in makeGene
  // if scenario.code is test, reseed random generators
  var phageNum = 0;

  var muteList = [];
  var strainList = [];

  var scenDetails = {
    interMuteDist: scenario.interMuteDist,
    intraMuteDist: scenario.intraMuteDist,
    mutationFreq: scenario.mutationFreq,
    recombinationFreq: scenario.recombinationFreq,
    deleteSizes: clone(scenConfig.deleteSizes),
    deleteSpots: clone(scenConfig.deleteSpots),
    usedDeleteSpots: [],
    usedShiftSpots: []
  };

  // make wt gene
  //console.log(scenDetails,  scenario);
  var geneDetails = this.makeGene(scenario.gcProb, scenario.minStops);
  scenDetails.wtGene = geneDetails.wtGene;
  scenDetails.realStops = geneDetails.realStops;
  scenDetails.framesStopList = geneDetails.framesStopList;
  let otherPhageList = scenario.otherPhage;
  let refPhageList = scenario.referencePhage;

  // create reference phages
  for (let i = 0; i < refPhageList.length; i++) {
    // for each phage type in list
    let rPhage = JSON.parse(refPhageList[i]);
    for (let j = 0; j < rPhage.numToMake; j++) {
      try{
      let newPhageDet = this.makePhage(rPhage, phageNum, pEnum.PHAGETYPE.REF, scenDetails);

      strainList.push(newPhageDet.phage);
      scenDetails = newPhageDet.scenData;
      phageNum++;
      } catch (err){
        console.log(err);
      }
    } // end for j
  } // end for i

  // tmp other list bc it might need shuffled later or handled differently
  let tmpStrainList = [];
  for (let i = 0; i < otherPhageList.length; i++) {
    let rPhage = JSON.parse(otherPhageList[i]);
    // negative how many needs handled special
    if (rPhage.numToMake >= 0) {
      for (let j = 0; j < rPhage.numToMake; j++) {
        let newPhageDet = this.makePhage(rPhage, phageNum, pEnum.PHAGETYPE.UNKNOWN, scenDetails);
        tmpStrainList.push(newPhageDet.phage);
        scenDetails = newPhageDet.scenData;
        phageNum++;
      }
    } else {
      let howMany = Math.abs(rPhage.numToMake);
      for (let j = 0; j < howMany; j++) {
        let newPhage;
        //if (tmpStrainList.length == 0 || randGen.bool(1, 3)) {
        if (tmpStrainList.length == 0 || randGen.randBoolFrac(1, 3, randEngine)) {
          // create new phage
          newPhageDet = this.makePhage(rPhage, phageNum, pEnum.PHAGETYPE.UNKNOWN, scenDetails);
          newPhage = newPhageDet.phage;
          scenDetails = newPhageDet.scenData;
        } else {
          // duplicate exisiting
          //let pickPhage = randGen.pick(tmpStrainList);
          let pickPhage = randGen.randPick(tmpStrainList, randEngine);
          newPhage = clone(pickPhage);
          newPhage.strainNum = phageNum;
        }
        tmpStrainList.push(newPhage);
        phageNum++;
      } // end for j
    } // else howMany > 0
  } // end for i

  // shuffle tmpStrainList
  //randGen.shuffle(tmpStrainList);
  randGen.randShuffle(tmpStrainList, randEngine);
  // add to full strainList
  strainList = strainList.concat(tmpStrainList);
  var output = {
    strainList: strainList,
    scenData: scenDetails
  };
  return output;
} // end generateScenario

exports.makeGene = function (gcProb, minStops) {
  // input: scenario
  // return wtGene, realStops, frameStopList
  let codons = [];
  let stopCodons = ['TAA', 'TGA', 'TAG'];
  let goodGene = false;
  var wtGene;
  while (!goodGene) {
    wtGene = '';
    for (let i = 0; i < scenConfig.geneLength; i++) {
      let currCodon = '';
      let goodCodon = false;
      while (!goodCodon) {
        currCodon = '';
        for (let j = 0; j < 3; j++) {
          //let cgVal = randGen.die(100);
          let cgVal = randGen.randDie(100, randEngine);
          if (cgVal <= gcProb) {
            //currCodon = currCodon + (randGen.bool() ? 'G' : 'C');
            currCodon = currCodon + (randGen.randBool(randEngine) ? 'G' : 'C');
          } else {
            //currCodon = currCodon + (randGen.bool() ? 'A' : 'T');
            currCodon = currCodon + (randGen.randBool(randEngine) ? 'A' : 'T');
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
    var realStops = [];
    let position = 1;
    while (dupliGene.length > 2) {
      if (stopCodons.indexOf(dupliGene.slice(0, 3)) !== -1) {
        realStops.push(position
        );
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
        realStops.push(-1*position
        );
      }
      dupliGene = dupliGene.slice(3);
      position++;
    } // end dupliGene
    if (realStops.length <= 16 && realStops.length >= minStops)
      goodGene = true;
  } // end not goodGene

  // get frame stop list
  var framesStopList = [];
  for (let i = 0; i < realStops.length; i++) {
    let rStop = realStops[i];
    framesStopList.push([(rStop > 0 ? 1 : -1), rStop.location]);
  } // end for i
  return {
    wtGene: wtGene,
    realStops: realStops,
    framesStopList: framesStopList
  };
} // end for makeGene

exports.makePhage = function (phageDetails, strainNum, phageType, scenData) {
  var outPhage; // note: has phage and updated scenData\
  if (phageDetails.isWildType) {
    // wild type phage
    outPhage = this.makeWTPhage(phageDetails, strainNum, phageType, scenData);
  } else if (phageDetails.deletion) {
    // phage has deletions
    outPhage = this.makeDeletionPhage(phageDetails, strainNum, phageType, scenData);
  } else if (phageDetails.frameshifts !== null) {
    // phage has frame shifts
    outPhage = this.makeFrameshiftPhage(phageDetails, strainNum, phageType, scenData);
  } else {
    throw new Error('Incorrect phage detail format');
    return false;
  }
  // return new strain
  return outPhage;

}

exports.makeWTPhage = function (phage, strainNum, phageType, scenData) {
  return {
    phage: {
      strainNum: strainNum,
      phageType: phageType,
      mutationList: [],
      deletion: [],
      comment: phage.comment
    },
    scenData: scenData
  }
};

exports.makeFrameshiftPhage = function (phage, strainNum, phageType, scenData) {
  // return {phage: phageObj, scenData: updatedScenData}
  if (scenData.usedShiftSpots === undefined)
    scenData.usedShiftSpots = [];
  var shiftInfo = phage.frameshifts;
  var nShifts = util.howManyToMake(randEngine, shiftInfo.howMany);
  var shiftType;
  var muteList = [];
  if (shiftInfo.frameChoice !== 0) {
    shiftType = shiftInfo.frameChoice;
  } else {
    // randomly pick type based on mixed property
    switch (shiftInfo.mixed) {
      case pEnum.SHIFTMIXED.NEVER:
        //shiftType = (randGen.bool() ? 1 : -1);
        shiftType = (randGen.randBool(randEngine) ? 1 : -1);
        break;
      case pEnum.SHIFTMIXED.ALWAYS:
        shiftType = (nShifts > 1 ? 2 : 0);
        break;
      case pEnum.SHIFTMIXED.SOMETIMES:
        //shiftType = (randGen.bool() ? 0 : (randGen.bool() ? 1 : -1));
        shiftType = (randGen.randBool(randEngine) ? 0 : (randGen.randBool(randEngine) ? 1 : -1));
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
    muteList = generateFrameshift(shiftType, nShifts, shiftInfo.readable, scenData);
    iTries++;
    //console.log(muteList);
    // have a mutation list, check the frameshift
    if (muteList.length > 0) {
      goodPhage = checkPhageFrameshift(muteList, scenData);
    }
  } // end while !goodPhage

  // too many tries
  if (iTries === maxTries) {
    throw new Error('could not make frameshift phage species');
  }
  if (muteList.length > 0) {
    scenData.usedShiftSpots = scenData.usedShiftSpots.concat(muteList);
    debug('fs phage %o', muteList);
    return {
      phage: {
        strainNum: strainNum,
        phageType: phageType,
        mutationList: muteList,
        deletion: [],
        comment: phage.comment
      },
      scenData: scenData
    }
  } // end mutelist.length
} // end makeFrameshiftPhage

const generateFrameshift = function (shiftType, nShifts, readable, scenData) {
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
        shifter = 1;
        break;
      case -1:
        shifter = -1;
        break;
      case 0:
        shifter = (randGen.randBool(randEngine) ? -1 : 1);
        break;
      default:
        shifter = ((shiftType + i) % 2 ? -1 : 1);
    } // end switch shiftType
    var newSpot = getNewSpot(lastMade, scenData);
    // add to mutation list
    muteList.push(shifter*newSpot);
    lastMade = newSpot;
  } // end for i

  // sort the mutation list
  muteList.sort(util.absSort);
  // make sure first mutant is good regardless of location from end point
  if (nShifts > 1) {
    let mutePoint = -100;
    for (let i = 0; i < muteList.length; i++) {
      let shiftMute = muteList[i];
      if ((Math.abs(shiftMute) - mutePoint) < okDist)
        goodPhage = true;
      else
        mutePoint = shiftMute;
    } // end for i
  } // end nShifts > 1

  // if good phage, check frame
  if (goodPhage) {
    let allTranslated = phageLogic.doPheno({
      shifts: muteList,
      deletion: []
    }, scenData.realStops);
    if (readable === pEnum.READABLE.CAN && allTranslated !== pEnum.FRAMEPHENOTYPE.ALLTRANSLATED)
      goodPhage = false;
    if (readable === pEnum.READABLE.CANNOT && allTranslated === pEnum.FRAMEPHENOTYPE.ALLTRANSLATED)
      goodPhage = false
  } // end if goodPhage
  // return good mutation list or empty mutation if not good
  return (goodPhage ? muteList : []);
} // end generateFrameShift

const checkPhageFrameshift = function (keyMutes, scenData) {
  let chainLength = keyMutes.length;
  for (let i = 0; i < chainLength; i++) {
    let stopSpot;
    let mute = keyMutes[i];
    let absMute = Math.abs(mute);
    // check internal spacing
    let sameKind = 500;
    let otherKind = 500;
    for (stopSpot in scenData.realStops) {
      let absStop = Math.abs(stopSpot);

      if (stopSpot * mute > 0) {
        // if same kind, mulitiple will be positive -1*-1 = 1
        // make sure no inframe stops immediately downstream
        if (absStop >= absMute)
          sameKind = Math.min(sameKind, absStop-absMute);
      } else if (absStop < absMute) {
        // make sure no opposite stops are upstream
        otherKind = Math.min(otherKind, absMute - absStop)
      } // end if stopSpot.kind/location
      if (sameKind < 16 && otherKind < 16) {
        // can't be supppressed by changes within 15 on one side or the other
        //console.log('samekind, otherkind');
        return false;
      }
    } // end for stopSpot
    // make sure all mutants in this phage are separated
    for (let j = i + 1; j < chainLength; j++) {
      let brotherLoc = Math.abs(keyMutes[j]);
      if (Math.abs(brotherLoc - absMute) < 20) {
        //console.log('brotherLoc')
        return false;
      }
    } // end for j

    // check shift spots
    for (let j = 0; j < scenData.usedShiftSpots; j++) {
      let usedMute = Math.abs(scenData.usedShiftSpots[j]);
      if (Math.abs(usedMute - absMute) < scenConfig.shiftMin) {
        //console.log('shift spot')
        return false;
      }
    } // end for j
  } // end for mute
  // made it through all mutations
  return true;
} // end checkPhageFrameshift

const getNewSpot = function (lastMade, scenData) {
  var newSpot;
  // if interMuteDist not defined
  if (scenData.interMuteDist === -1) {
    if (lastMade === null) {
      //newSpot = randGen.integer(25, 300);
      newSpot = randGen.randDie(300, randEngine) + 25;
    } else {
      let friendly = false;
      while (!friendly) {
        //let newDist = randGen.integer(scenData.intraMuteDist[0], scenData.intraMuteDist[1]);
        let newDist = randGen.randInt(scenData.intraMuteDist[0], scenData.intraMuteDist[1], randEngine);
        //newSpot = (randGen.bool() ? lastMade + newDist : lastMade - newDist);
        newSpot = (randGen.randBool(randEngine) ? lastMade + newDist : lastMade - newDist);
        if (newSpot > 0 && Math.abs(newSpot - lastMade) > 10)
          friendly = true;
      } // end while not friendly
    } // end lastMade
  } else {
    // interMuteDist defined
    if (scenData.usedShiftSpots.length === 0) {
      let tmp = (350 - scenData.interMuteDist + 50);
      // first shift to be made
      //newSpot = randGen.integer(25, (350 - scenData.interMuteDisance + 50));
      newSpot = randGen.randDie(tmp, randEngine)+25;
      // allow mutation to be at either end
      //newSpot = (randGen.bool() ? 350 - newSpot : newSpot);
      newSpot = (randGen.randBool(randEngine) ? 350 - newSpot : newSpot);
    } else {
      let friendly = false;
      while (!friendly) {
        newSpot = randGen.randDie(300, randEngine) + 25;
        friendly = true;
        for (let j = 0; j < scenData.usedShiftSpots.length; j++) {
          friendly = (Math.abs(Math.abs(scenData.usedShiftSpots[j]) - newSpot) < scenData.interMuteDist);
        } // end for j
      } // end while not friendly
    } // end if usedShiftSpots
  } // end if interMuteDist
  return newSpot;
} // end getNewSpot

exports.makeDeletionPhage = function (phage, strainNum, phageType, scenData) {
  if (scenData.usedDeleteSpots === undefined) {
    scenData.usedDeleteSpots = [];
  }
  var goodDelete = false;
  var realDelete;
  // still deletions to be made
  if (scenData.deleteSizes.length > 0) {
    // pick a deletion size
    //let useDelete = randGen.integer(0, scenData.deleteSizes.length - 1);
    let useDelete = randGen.randInt(0, scenData.deleteSizes.length - 1, randEngine);
    let deleteSize = scenData.deleteSizes[useDelete];
    scenData.deleteSizes.splice(useDelete, 1);
    if (scenData.deleteSpots.length > 0) {
      //let useSpot = randGen.integer(0, scenData.deleteSpots.length);
      let useSpot = randGen.randInt(0, scenData.deleteSpots.length-1, randEngine);
      let deleteSpot = scenData.deleteSpots[useSpot];
      scenData.deleteSpots.splice(useSpot, 1);
      realDelete = [deleteSpot, deleteSpot + deleteSize];
      goodDelete = true
    } // end deleteSpots.length
  } // end deleteSizes.length
  // predefined deletion couldn't be found, generate one
  if(!goodDelete)
    realDelete = generateDeletion(scenData.usedDeleteSpots);

  // have a deletion
  if (realDelete.length > 0) {
    // add deletion
    scenData.usedDeleteSpots.push(realDelete);
    // return new phage
    debug('del phage %o', realDelete);
    return {
      phage: {
        strainNum: strainNum,
        phageType: phageType,
        mutationList: [],
        deletion: realDelete,
        comment: phage.comment
      },
      scenData: scenData
    }
  } // end realDelete.length
} // end makeDelPhage

const generateDeletion = function (usedDeleteSpots) {
  var deleteTries = 0;
  var goodDelete = false;
  var realDelete;

  const maxDeleteTries = scenConfig.maxDeleteTries;
  while (!goodDelete && deleteTries < maxDeleteTries) {
    //let randInt = randGen.integer(1, 7);
    let randInt = randGen.randInt(1, 7, randEngine);
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
      //realDelete = [-100, util.holyRoller(randGen, 70, 3)];
      realDelete = [-100, util.holyRoller(randEngine, 70, 3)];
      realDelete[1] = (realDelete[1] < 40 ? realDelete[1] + 25 : realDelete[1]);
    } else if (deleteKind === pEnum.DELETEKIND.OUTRIGHT) {
      //realDelete = [util.holyRoller(randGen, 70, 3), 500];
      realDelete = [util.holyRoller(randEngine, 70, 3), 500];
      realDelete[0] = (realDelete[0] > 270 ? realDelete[0] - 50 : realDelete[0]);
    } else { // internal
      let unsatisfactory = true;
      let leftSide, rightSide;
      while (unsatisfactory) {
        //let core = randGen.die(22) * 17;
        let core = randGen.randDie(22, randEngine) * 17;
        //let delSize = randGen.die(25) * 6 + randGen.die(15);
        let delSize = randGen.randDie(25, randEngine) * 6 + randGen.randDie(15, randEngine);
        if (core < 70) {
          leftSide = core;
          rightSide = core + delSize;
        } else if (core > 290) {
          rightSide = core;
          leftSide = core - delSize;
        } else {
          leftSide = Math.floor(core - delSize / 2);
          rightSide = Math.floor(core + delSize / 2);
        } // end if core
        if (leftSide > 25 && (350 - rightSide) > 25 && (rightSide - leftSide) > 18)
          unsatisfactory = false;
      } // end while unsatisfactory
      realDelete = [leftSide, rightSide];
    } // end deleteKind
    goodDelete = checkPhageDeletion(realDelete, usedDeleteSpots);
  } //end while not goodDelete
  if (deleteTries === maxDeleteTries)
    throw new Error('no deleteion in', maxDeleteTries, ' tries');
  return realDelete;
} // end generateDeletion

const checkPhageDeletion = function (keyMutes, usedDeleteSpots) {
  for (let i = 0; i < usedDeleteSpots.length; i++) {
    let inDelete = usedDeleteSpots[i];
    let dist00 = Math.abs(keyMutes[0] - inDelete[0]);
    let dist11 = Math.abs(keyMutes[1] - inDelete[1]);
    let dist01 = Math.abs(keyMutes[0] - inDelete[1]);
    let dist10 = Math.abs(keyMutes[1] - inDelete[0]);
    if (keyMutes[0] > 0 && keyMutes[1] < 350) {
      //if (dist00 < 13 || dist11 < 13 || dist01 < 13 || dist10 < 13) {
      if (dist00 < 10 || dist11 < 10 || dist01 < 10 || dist10 < 10) {
        return false
      }
    //} else if (keyMutes[0] === -100 && dist11 < 25) {
      } else if (keyMutes[0] === -100 && dist11 < 20) {
      // check for outLeft
      return false;
    //} else if (keyMutes[1] === 500 && dist00 < 25)
      } else if (keyMutes[1] === 500 && dist00 < 20)
      // check outright
      return false;
  }
  return true;
} // end checkPhageDeletion
