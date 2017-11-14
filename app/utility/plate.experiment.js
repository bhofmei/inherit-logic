const util = require('./utility');
const clone = require('clone');
const randGen = require('./random.generator');
const randEngine = randGen.getEngine();
const scenConfig = require('../../config/scenario.config');
const phageEnum = require('./phage.enum');
const phageExper = require('./phage.experiment');
const phageLogic = require('./phage.logic');
const plateEnum = require('./plate.enum');
const bacteria = require('../models/bacteria.server.model');

exports.createPlate = function (phage1, phage2, lawnType, specials, capacity, whoCalled, scenData) {
  var startGenotypes, genoList;
  var replicaStrainList = [];
  var deletesInPlay = false;
  var mutagenized = (specials === 'irrad');
  // phage 1 and 2 will be full objects previously retrieved from mongoose database and numPhage property
  console.log(phage1, phage2);
  var parents;
  let getParents = (whoCalled === plateEnum.PLATECALLER.MULTIPLEXER || whoCalled === plateEnum.PLATECALLER.SUPERPLEXER ? false : true)
  var newPhage1, newPhage2, phageRatio;
  var onePhage = false;
  if (phage1.hasOwnProperty('strainNum')) {
    if (getParents) {
      parents = {
        phage: [phage1.id],
        bacteria: lawnType
      };
    }
    newPhage1 = {
      genome: {
        deletion: phage1.deletion,
        shifts: phage1.mutationList
      },
      mutag: (phage1.origin === 'mutagenesis'),
      numPhage: phage1.numPhage
    }
  } // end phage1.has property
  // if phage2 exists
  if (phage2) {
    if (getParents) {
      parents.phage.push(phage2.id)
    }
    newPhage2 = {
      genome: {
        deletion: phage2.deletion,
        shifts: phage2.mutationList
      },
      mutag: (phage2.origin === 'mutagenesis'),
      numPhage: phage2.numPhage
    };
    // determine ratio
    if (newPhage1.numPhage < newPhage2.numPhage) {
      if (newPhage1.numPhage === 0) {
        phageRatio = 1;
        startGenotypes = [newPhage2.genome, newPhage2.genome];
      } else {
        phageRatio = newPhage2.numPhage / newPhage1.numPhage;
        startGenotypes = [newPhage1.genome, newPhage2.genome];
      }
    } else {
      // newPhage1.numPhage >= newPhage2.numPhage
      if (newPhage2.numPhage === 0) {
        phageRatio = 1;
        startGenotypes = [newPhage1.genome, newPhage1.genome];
      } else {
        phageRatio = newPhage1.numPhage / newPhage2.numPhage;
        startGenotypes = [newPhage2.genome, newPhage1.genome]
      }
    } // end if newPhage1.numPhage < newPhage2.numPhage
    deletesInPlay = (newPhage1.mutag || newPhage2.mutag);
  } else {
    // phage2 is void
    onePhage = true;
    startGenotypes = [newPhage1.genome];
  } // end if phage2
  // check deletions
  for (let i = 0; i < startGenotypes.length; i++) {
    if (startGenotypes[i].deletion.length !== 0)
      deletesInPlay = true;
  }

  // handle one phage
  let numNewGenos;
  if (onePhage) {
    genoList = [startGenotypes[0]];
    numNewGenos = 0;
    if (mutagenized) {
      let numWT = scenConfig.probRadSurvive * newPhage1.numPhage;
      if (numWT > capacity) {
        // too many phage
        replicaStrainList.push(['tooMany', 0]);
      } else {
        // TODO: findSpotOnPlate
        for (let j = 0; j < numWT; j++) {
          replicaStrainList.push(['phage', 0]);
        }
      } // end capacity
      // number of deletions
      let numDeletes = newPhage1.numPhage * scenConfig.probRadSurvive * scenConfig.probDeletion;
      for (let j = 0; j < numDeletes; j++) {
        // spot on plage
        let okayDel = false;
        let leftEnd, rightEnd;
        while (!okayDel) {
          leftEnd = 250 - randGen.randDie(400, randEngine);
          rightEnd = leftEnd + 20 + randGen.randDie(225, randEngine);
          okayDel = (rightEnd > 35)
        } // end while !okayDel
        numNewGenos++;
        replicaStrainList.push(['deletion', numNewGenos]);
        genoList.push({
          shifts: [],
          deletions: [leftEnd, rightEnd]
        });
      } // end for j
    } else {
      if (newPhage1.numPhage > capacity)
        replicaStrainList.push(['tooMany', 0]);
      else {
        for (let j = 0; j < newPhage1.numPhage; j++) {
          replicaStrainList.push(['phage', 0]);
        }
      } // end if capcatiy
      let changePhage = Math.floor(scenData.mutationFreq * newPhage1.numPhage);
      changePhage = changePhage + util.gaussRand(randEngine, 2 * Math.sqrt(changePhage));
      let getMutes = phageExper.mutagenize(startGenotypes[0].shifts, changePhage);
      for (let j = 0; j < changePhage; j++) {
        numNewGenos++;
        replicaStrainList.push(['mut', numNewGenos]);
        genoList.push({
          shifts: getMutes[j],
          deletion: startGenotypes[0].deletion
        });
      } // end for j
    } // end if mutagenize
  } else {
    // two phage
    genoList = [startGenotypes[0], startGenotypes[1]];
    numNewGenos = 1;
    let numOffspring = Math.max(newPhage1.numPhage, newPhage2.numPhage);

    let errAdj = 2 * Math.sqrt(numOffspring);
    numOffspring = (randGen.randBool(randEngine) ? numOffspring + errAdj : numOffspring - errAdj);
    let numMute = [];
    console.log(numOffspring);
    // compute number of each recombinant
    let f1 = (phageRatio) / (phageRatio + 1);
    let f2 = 1 - f1;
    let numRecomb = computeRecombParameters(f1, f2, scenData.recombinationFreq, numOffspring);
    let numGeno = [Math.floor(f1 * numOffspring), Math.floor(f2 * numOffspring)];
    console.log(numGeno);
    for (let j = 0; j < 2; j++) {
      let nGeno = numGeno[j];
      if (nGeno > capacity)
        replicaStrainList.push(['tooMany', j]);
      else {
        // find spot on plate
        for (let k = 0; k < nGeno; k++) {
          replicaStrainList.push(['phage', j]);
        } // end for k
      }
      let tmp = Math.floor(scenData.mutationFreq * nGeno);
      tmp = (tmp < 1 ? 0 : tmp);
      numMute.push(tmp + util.gaussRand(randEngine, (2 * Math.sqrt(tmp))));
      // generate mutants
      let getMutes = phageExper.mutagenize(startGenotypes[j].shifts, numMute[j]);
      for (let k = 0; k < getMutes.length; k++) {
        numNewGenos++;
        replicaStrainList.push(['mut', numNewGenos]);
        genoList.push({
          shifts: getMutes[k],
          deletion: startGenotypes[j].deletion
        });
      } // end for k
    } // end for j
    console.log(numMute);
    // see if genotypes are identical
    //let identical = ((startGenotypes[0].shifts === startGenotypes[1].shifts) && (startGenotypes[0].deletion === startGenotypes[1].deletion));
    let identical = util.identicalGenotypes(startGenotypes[0], startGenotypes[1]);
    console.log(numRecomb)
    if (!identical) {
      // recombine - loop through number recombinants
      //console.log(numRecomb);
      for (let j = 0; j < numRecomb.length; j++) {
        let nRec = numRecomb[j];
        if (nRec > 0) {
          let newGenoList = phageExper.recombine(startGenotypes[0], startGenotypes[1], j, nRec);
          // add to plate
          for (let k = 0; k < newGenoList.length; k++) {
            numNewGenos++;
            replicaStrainList.push(['recomb', numNewGenos]);
            genoList.push(newGenoList[j]);
          } // end for k
        } // end if nRec > 0
      } // end for j
    } // end if !identical
  } // end if one phage
  // return genoList and strainList
  return {
    genoList: genoList,
    strainList: replicaStrainList
  }
} // end createPlage

exports.generatePlate = function (lawnTypeStr, genoList, strainList) {
  // lawn type is "B" or "K"
  var lawnType = bacteria[lawnTypeStr];
  var readOkay = lawnType.wtPhenotype;
  var readBad = lawnType.mutPhenotype;
  var overwhelm = false;

  // loop through geno elements
  var phenoList = genoList.map((genoElmt) => {
    let pheno = phageLogic.doPheno(genoElmt);
    return (pheno === pEnum.FRAMEPHENOTYPE.ALLTRANSLATED ? readOkay : readBad);
  });

  var culledStrainList = [];
  if (lawnType.kind === plateEnum.BACTTYPE.RESTR) {
    let i = 0;
    while (!overwhelm && i < strainList.length) {
      let strain = strainList[i];
      if (phenoList[strain[1]] === plateEnum.PLAQUETYPE.DEAD) {
        // dead
        if (strain[0] === 'tooMany')
          overwhelm = true
        else
          culledStrainList.push(strain);
      }
      i++;
    } // end while
    strainList = clone(culledStrainList);
  } else if (strainList.length > 0) {
    // if didn't dilute phage to 0, check first element for tooMany
    overwhelm == (strainList[0][0] === 'tooMany');
  } // end if lawnType/strainList.length

  // if not overwhelmed, separate phage
  var littlePlaqueList = [];
  var bigPlaqueList = [];
  if (!overwhelm) {
    if (lawnType === plateEnum.BACTTYPE.PERM) {
      strainList.forEach((strain) => {
        if (phenoList[strain[1]] === plateEnum.PLAQUETYPE.SMALL)
          littlePlaqueList.push(strain);
        else
          bigPlaqueList.push(strain)
      }); // end for each
    } else {
      // restrictive bacteria
      littlePlaqueList = clone(strainList);
    }
    // shuffle plaques
    randGen.randShuffle(littlePlaqueList, randEngine);
    randGen.randShuffle(bigPlaqueList, randEngine);
  }
  return {
    full: overwhelm,
    littlePlaque: littlePlaqueList,
    bigPlaque: bigPlaqueList
  }
} // end generatePlage

const computeRecombParameters = function (f1, f2, p, n) {
  // r = phageRatio
  // p = recombFreq
  // n = numOffspring
  var numRecomb = [];
  for (let i = 0; i < 3; i++) {
    let pR = Math.pow(p, i + 1) * n * f1 * f2;
    pR = Math.sqrt(2 * Math.floor(pR))
    let nR = pR + util.gaussRand(randEngine, pR);
    numRecomb.push(nR < 0 ? 0 : Math.round(nR));
  }
  return numRecomb;
}
