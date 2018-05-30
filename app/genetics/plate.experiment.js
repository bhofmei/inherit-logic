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

const debug = require('debug')('genetics'),
  debugExt = require('debug')('genetics:ext'),
  debugTest = require('debug')('genetics:test');

/**
 * Functions which handle creating plates of phage crosses
 * @module genetics.plate.experiment
 * @name Plate Exeriment
 * @type Genetics
 */

/**
 * Reset the random number generation engine using a "random" number
 * @ignore
 */
exports.resetEngine = function () {
  randGen.reset(randEngine);
}

/**
 * Set the random number generation seed value
 * Used for testing
 * @ignore
 *
 * @param {number} num - random number generation email
 */
exports.seedEngine = function (num) {
  randGen.setSeed(randEngine, num)
}

/**
 * Creates the lab room plate
 *
 * Only used in the lab room
 *
 * @param {Object} phage1 - first phage in the cross
 * @param {Object|null} phage2 - second phage in the cross or null if not crossing
 * @param {string} lawnType - E. coli bacteria type `"B"` or `"K"`
 * @param {Object} specials - other special parameters (not used)
 * @param {number} capacity - max number of plaques allowed on the plate
 * @param {string} whoCalled - location/room asking to generate the plate
 * @param {Object} scenData scenario information
 *
 * @returns {Object} new plate
 * - full (`boolean`): plate over capacity?
 * - smallPlaque (`number[]`): individual small plaques; number is index of genotype in *genotypes* list
 * - largePlaque (`number[]`): individual large plaques, number is index of genotype in *genotypes* list
 * - genotypes (`number[][]`): list of genotypes for this plate
 * - parents (`string[]`): ids of input phage
 */
exports.createPlate = function (phage1, phage2, lawnType, specials, capacity, whoCalled, scenData) {
  // combines createPlatePhage and generatePlate into one function
  // has: genoList and strainList
  // if both phage empty, throw error
  if (phage1 === null && phage2 === null)
    throw new Error('No phage specified');
  if (lawnType === null || lawnType === undefined)
    throw new Error('No bacteria specified');
  var phagePlate = this.createPlatePhage(phage1, phage2, lawnType, specials, capacity, whoCalled, scenData);
  // has: full, smallPlaque, largePlaque, genotypes, parents
  var numInput = (phage2 === null ? 1 : 2);
  var plate = this.generatePlate(lawnType, phagePlate.genoList, phagePlate.strainList, capacity, scenData, numInput);
  plate.parents = phagePlate.parents;
  return plate;
}

/**
 * Create the genotypes and strains for this plate
 *
 * Used by both the lab room and plexer room
 *
 * @returns {Object} phage for this plate
 * - genoList (): list of genotypes
 * - strainList (`number[]`): list of indices corresponding to genoList
 * - parents (`string`): ID's for original phage used to create plate
 */
exports.createPlatePhage = function (phage1, phage2, lawnTypeStr, specials, capacity, whoCalled, scenData) {
  var lawnType = bacteria[lawnTypeStr];
  var startGenotypes, genoList, nPhage2Larger;
  var replicaStrainList = [];
  var deletesInPlay = false;
  var mutagenized = (specials === 'irrad');
  // phage 1 and 2 will be full objects previously retrieved from mongoose database and numPhage property
  var parents = [];
  var newPhage1, newPhage2, phageRatio;
  var onePhage = false;
  if (phage1.hasOwnProperty('strainNum')) {
    parents = [phage1._id]
    newPhage1 = {
      genome: {
        deletion: phage1.deletion,
        shifts: phage1.mutationList,
      },
      mutag: (phage1.origin === 'mutagenesis'),
      numPhage: phage1.numPhage
    }
  } // end phage1.has property
  // if phage2 exists
  if (phage2 && phage2.hasOwnProperty('strainNum')) {
    parents = [phage1._id, phage2._id]
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
        startGenotypes = [newPhage2.genome, newPhage1.genome];
      }
    } else {
      // newPhage1.numPhage >= newPhage2.numPhage
      nPhage2Larger = false;
      if (newPhage2.numPhage === 0) {
        phageRatio = 1;
        startGenotypes = [newPhage1.genome, newPhage1.genome];
      } else {
        phageRatio = newPhage1.numPhage / newPhage2.numPhage;
        startGenotypes = [newPhage1.genome, newPhage2.genome]
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
      // number of deletions
      let numDeletes = newPhage1.numPhage * scenConfig.probRadSurvive * scenConfig.probDeletion;
      if ((numWT + numDeletes > capacity) && (lawnType.kind === plateEnum.BACTTYPE.PERM)) {
        // too many phage
        return {
          genoList: genoList,
          strainList: false,
          parents: parents
        }
      }
      // TODO: findSpotOnPlate
      for (let j = 0; j < numWT; j++) {
        replicaStrainList.push(0);
      }
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
        replicaStrainList.push(numNewGenos);
        genoList.push({
          shifts: [],
          deletions: [leftEnd, rightEnd]
        });
      } // end for j
    } else {
      // not mutagenized
      let changePhage1 = Math.round(scenData.mutationFreq * newPhage1.numPhage);
      debug('change phage %d', changePhage1);
      let changePhage = changePhage1 + util.gaussRand(randEngine, 2 * Math.sqrt(changePhage1));
      changePhage = Math.abs(Math.round(changePhage));
      debugTest('numMut %d', changePhage);
      if ((newPhage1.numPhage + changePhage > capacity) && (lawnType.kind === plateEnum.BACTTYPE.PERM)) {
        // if too many, return so we don't waste time computing
        return {
          genoList: [startGenotypes[0]],
          strainList: false
        };
      }
      for (let j = 0; j < newPhage1.numPhage; j++) {
        replicaStrainList.push(0);
      }
      let getMutes = phageExper.mutagenize(startGenotypes[0].shifts, changePhage);

      for (let j = 0; j < changePhage; j++) {
        numNewGenos++;
        debugExt('mut phage single %o', getMutes[j]);
        replicaStrainList.push(numNewGenos);
        genoList.push({
          shifts: getMutes[j],
          deletion: startGenotypes[0].deletion
        });
      } // end for j
    } // end if mutagenize
  } else {
    // two phage
    genoList = [startGenotypes[0], startGenotypes[1]];
    let identical = util.identicalGenotypes(startGenotypes[0], startGenotypes[1]);
    numNewGenos = 1;
    // compute offspring counts
    var nOffspring = _computeNumOffspring(newPhage1.numPhage, newPhage2.numPhage, phageRatio, scenData.mutationFreq, scenData.recombinationFreq, identical);
    debugTest('num offspring %o', nOffspring);
    // check capacity for PERM bact
    if (nOffspring.total > capacity && (lawnType.kind === plateEnum.BACTTYPE.PERM)) {
      return {
        genoList: genoList,
        strainList: false,
        parents: parents
      }
    }
    for (let j = 0; j < 2; j++) {
      let nGeno = nOffspring.numGeno[j];
      // find spot on plate
      for (let k = 0; k < nGeno; k++) {
        replicaStrainList.push(j); // add duplicates of parent
      } // end for k

      // generate mutants
      let getMutes = phageExper.mutagenize(startGenotypes[j].shifts, nOffspring.numMut[j]);
      for (let k = 0; k < getMutes.length; k++) {
        numNewGenos++;
        debugExt('mut phage double %o', getMutes[k]);
        replicaStrainList.push(numNewGenos);
        genoList.push({
          shifts: getMutes[k],
          deletion: startGenotypes[j].deletion
        });
      } // end for k
    } // end for
    if (!identical) {
      // recombine - loop through number recombinants
      for (let j = 0; j < nOffspring.numRecomb.length; j++) {
        let nRec = nOffspring.numRecomb[j];
        if (nRec > 0) {
          let newGenoList = phageExper.recombine(startGenotypes[0], startGenotypes[1], j + 1, nRec);
          // add to plate
          for (let k = 0; k < newGenoList.length; k++) {
            numNewGenos++;
            debugExt('recomb %d phage %o', j + 1, newGenoList[k]);
            replicaStrainList.push(numNewGenos);
            genoList.push(newGenoList[k]);
          } // end for k
        } // end if nRec > 0
      } // end for j
    } // end if !identical
  } // end if one phage
  // return genoList and strainList
  return {
    genoList: genoList,
    strainList: replicaStrainList,
    parents: parents
  }
} // end createPlatePhage

/**
 * Phenotypes the plate phage and ensures not too many phage on the plate
 *
 * This function is only used in the lab room
 *
 * @returns {object} representation of plate
 * - full (`boolean`): plate over capacity?
 * - smallPlaque (`number[]`): individual small plaques; number is index of genotype in *genotypes* list
 * - largePlaque (`number[]`): individual large plaques; number is index of genotype in *genotypes* list
 * - genotypes
 */
exports.generatePlate = function (lawnTypeStr, genoList, strainList, capacity, scenData, numInput) {
  // return full, smallPlaque, largePlaque, genotypes -> this only applies to the lab scenario
  // lawn type is "B" or "K"

  var lawnType = bacteria[lawnTypeStr];
  var readOkay = lawnType.wtPhenotype;
  var readBad = lawnType.mutPhenotype;
  var overwhelm = (strainList === false);

  // if too many, return immediately
  if (overwhelm) {
    return {
      full: true,
      smallPlaque: [],
      largePlaque: [],
      genotypes: genoList
    }
  }

  // loop through geno elements
  var curCount = 0;
  var genoMapping = [];

  var phenoList = genoList.map((genoElmt) => {
    let pheno = phageLogic.doPheno(genoElmt, scenData.realStops);
    let rType;
    if (pheno === phageEnum.FRAMEPHENOTYPE.ALLTRANSLATED) {
      rType = readOkay;
      genoMapping.push(curCount);
      curCount++;
    } else {
      rType = readBad;
      genoMapping.push(null);
    }
    return rType;
  });

  // separate phage
  var smallPlaqueList = [];
  var largePlaqueList = [];
  if (lawnType.kind === plateEnum.BACTTYPE.PERM) {
    strainList.forEach((strain) => {
      if (phenoList[strain] === plateEnum.PLAQUETYPE.SMALL)
        smallPlaqueList.push(strain);
      else
        largePlaqueList.push(strain);
    }); // end for each
  } else {
    // restrictive bacteria
    // update genoList
    debugTest('parents: ', genoList.slice(0, numInput))
    genoList = genoList.filter((genoElt, i) => {
      return genoMapping[i] !== null;
    });
    strainList.forEach((strain) => {
      if (phenoList[strain] === plateEnum.PLAQUETYPE.SMALL) {
        // update geno mapping
        let pos = genoMapping[strain];
        smallPlaqueList.push(pos);
      }
      // else it's dead - do nothing
    });
    let tmp = Math.max(...smallPlaqueList);
    if (tmp >= genoList.length) {
      console.err('ERROR with genotype mapping');
    }
    // check capacity
    if (smallPlaqueList.length + largePlaqueList.length > capacity) {
      return {
        full: true,
        smallPlaque: [],
        largePlaque: [],
        genotypes: genoList
      }
    }
  }
  // shuffle plaques
  smallPlaqueList = _shufflePlaqueList(smallPlaqueList, numInput);
  largePlaqueList = _shufflePlaqueList(largePlaqueList, numInput);
  return {
    full: overwhelm,
    genotypes: genoList,
    smallPlaque: smallPlaqueList,
    largePlaque: largePlaqueList
  }
} // end generatePlate

/**
 * Compute the recombination parameters
 * @protected
 *
 * @param {number} f1 - fraction of phage1
 * @param {number} f2 - fraction of phage2
 * @param {number} p - recombination probability
 * @param {number} n - total number of offspring expected
 *
 * @returns {number[]} - number of single, double, and triple recombinants to create
 */
const _computeRecombParameters = function (f1, f2, p, n) {
  var numRecomb = [];
  for (let i = 0; i < 3; i++) {
    let pR = Math.pow(p, i + 1) * n * 2 * f1 * f2;
    let kR = Math.sqrt(2 * Math.round(pR))
    let nR = pR + util.gaussRand(randEngine, kR);
    debugExt('prob %d recomb %d adjusted %d', i, pR, nR);
    numRecomb.push(nR < 0 ? 0 : Math.round(nR));
  }
  debugExt('nrecomb %o', numRecomb);
  return numRecomb;
} // end _computeRecombParameters

/**
 * Compute the expected number of offspring
 * @protected
 *
 * @param {number} n1 - number of input for phage1
 * @param {number} n2 - number of input for phage2
 * @param {number} nR - ratio of phage1 to phage2
 * @param {number} mutFreq - mutation frequency for the scenario
 * @param {number} recFreq - frequency of recombination for scenario
 * @param {boolean} identical - are the two phage identical
 *
 * @returns {Object} numbers/types of offspring to create
 * - numOffspring (`number`): number of offspring aiming for
 * - total (`number`): actual number of offspring to be generated
 * - numGeno (`number[]`): number of each parental geonotype
 * - numMuts (`number[]`): number of mutants for each parental genotype
 * - numRecomb (`number[]`): number of single, double, and triple recomb
 */
const _computeNumOffspring = function (n1, n2, nR, mutFreq, recFreq, identical) {
  let numOffspring = Math.max(n1, n2);

  let errAdj = 2 * Math.sqrt(numOffspring);
  numOffspring = (randGen.randBool(randEngine) ? numOffspring + errAdj : numOffspring - errAdj);
  // compute number of each recombinant
  let f1 = (nR) / (nR + 1);
  let f2 = 1 - f1;
  let numRecomb = (identical ? [0, 0, 0] : _computeRecombParameters(f1, f2, recFreq, numOffspring));
  let numGeno = [Math.round(f1 * numOffspring), Math.round(f2 * numOffspring)];
  let numMut = numGeno.map((nGeno) => {
    let nMut = Math.round(mutFreq * nGeno);
    let changeBy = util.gaussRand(randEngine, (2 * Math.sqrt(nMut)))
    nMut = Math.round(nMut + changeBy);
    debugExt('nmut %d', nMut);
    return nMut < 0 ? 0 : nMut;
  });
  let total = numGeno[0] + numGeno[1] + numRecomb[0] + numRecomb[1] + numRecomb[2] + numMut[0] + numMut[1];
  // return results
  return {
    numOffspring: numOffspring,
    total: total,
    numGeno: numGeno,
    numMut: numMut,
    numRecomb: numRecomb
  };
} // end _computeNumOffspring

/**
 * shuffle strains; force mutants/recombinants to be towards the front of the list
 * @protected
 *
 * @param {number[]} inList - strain list to shuffle
 * @param {number} numInput - number of input/parent phage
 *
 * @returns {number[]} shuffled strain list
 */
const _shufflePlaqueList = function(inList, numInput){
  if(inList.length < 100){
    return randGen.randShuffle(inList, randEngine);
  }
  let newPhage = inList.filter((x)=>{
    return x > (numInput-1);
  });
  let numNew = newPhage.length;
  let parentPhage = inList.filter((x)=>{
    return x <= (numInput-1);
  });
  let numParent = parentPhage.length;

  if(numParent > 25){
    randGen.randShuffle(parentPhage, randEngine);
    // numNew > 75 -> 25, otherwise get to 100
    let nP = (numNew <= 75 ? 100 - numNew : 25);
    let tmp = parentPhage.slice(0, nP).concat(newPhage);
    randGen.randShuffle(tmp, randEngine);
    return tmp.concat(parentPhage.slice(nP));
  } else {
    // just shuffle everything
    return randGen.randShuffle(inList, randEngine);
  }
} // end _shufflePlaqueList
