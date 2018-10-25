const clone = require('clone');
const util = require('../utility');
const randGen = require('../random.generator');
const randEngine = randGen.getEngine();
const scenConfig = require('../../../config/cricket/scenario.config');
const phageEnum = require('./phage.enum');
const phageExper = require('./phage.experiment');
const phageLogic = require('./phage.logic');
const plateEnum = require('./plate.enum');
const bacteria = require('../../models/cricket/bacteria.server.model');
const plateExper = require('./plate.experiment');
const debug = require('debug')('genetics:plexer');

/**
 * Functions which handle creating plexer plates
 * @module cricket/genetics.plexer.experiment
 * @name Plexer Exeriment
 * @type Genetics
 */

/**
 * Reset the random number generation engine using a "random" number
 * @ignore
 */
exports.resetEngine = function(){
  // resets the plateExper engine
  plateExper.resetEngine();
}

/**
 * Set the random number generation seed value
 * Used for testing
 * @ignore
 *
 * @param {number} num - random number generation email
 */
exports.seedEngine = function(num){
  randGen.setSeed(randEngine, num)
}

/**
 * Creates the plexer results
 *
 * Only used in the plexer room
 *
 * @param {Object[]} rowPhage - list of input phage representing the rows
 * @param {Object[]} colPhage - list of input phage representing the columns
 * @param {string} lawnType - E. coli bacteria type; `"B"` or `"K"`
 * @param {Object} special - other parameters; not used
 * @param {number} capacity - maximum number of phage per plate
 * @param {string} whoCalled - location asking to create the plexer
 * @param {Object} scenData - current scenario data
 *
 * @returns {Object} plexer results; 2D array (but as an object) where each cell is a "plate" that has
 * - full (`boolean`): plate over capacity?
 * - smallPlaque (`number`): number of small plaque on the plate
 * - largePlaque (`number`): number of large plaque on the plate
 */
exports.createPlexerPlate = function (rowPhage, colPhage, lawnType, specials, capacity, whoCalled, scenData){
  var outMat = {};
  // loop through rowPhage
  for(let i = 0; i < rowPhage.length; i++){
    let rPhage = rowPhage[i];
    outMat[i] = {};
    // loop through colPhage
    for(let j = 0; j < colPhage.length; j++){
      debug('**', i, ',', j, '**');

      let cPhage = colPhage[j];
      // generate the plate; has genoList and strainList
      var phagePlate = plateExper.createPlatePhage(rPhage, cPhage, lawnType, specials, capacity, whoCalled, scenData);
      phagePlate.genoList.forEach((geno)=>{
        //console.log(geno.shifts);
      });
      // has: full, smallPlaque, largePlaque
      var plate = this.generatePlexerPlate(lawnType, phagePlate.genoList, phagePlate.strainList, capacity, scenData);
      outMat[i][j] = plate;
    } // end for j
  } // end for i
  return outMat;
}

/**
 * Phenotype the phage and format results for front-end
 *
 * Only used by the plexer room
 *
 * @param {string} lawnTypeStr - E. coli bacteria type; `"B"` or `"K"`
 * @param {number[]} genoList - list of genotypes on the plate
 * @param {number[]} strainList - list of strains which is the index to the genotype
 * @param {number} capacity - capacity of each plexer plate
 * @param {Object} scenData - current scenario data
 *
 * @returns {Object} - results for this single plexer plate
 * - full (`boolean`): is plate over capacity
 * - smallPlaque (`number`): number of small plaque on plate
 * - largePlaque (`number`): number of large plaque on plate
 */
exports.generatePlexerPlate = function (lawnTypeStr, genoList, strainList, capacity,  scenData) {

  var lawnType = bacteria[lawnTypeStr];
  var readOkay = lawnType.wtPhenotype;
  var readBad = lawnType.mutPhenotype;
  var overwhelm = (strainList === false);

  // if too many, return immediately
  if (overwhelm) {
    return {
      full: true,
      smallPlaque: 0,
      largePlaque: 0
    }
  }

  // loop through geno elements
  var phenoList = genoList.map((genoElmt, i) => {
    debug(i, genoElmt.shifts, genoElmt.deletion)
    let pheno = phageLogic.doPheno(genoElmt, scenData.realStops);
    let rType = (pheno === phageEnum.FRAMEPHENOTYPE.ALLTRANSLATED ? readOkay : readBad);
    return rType;
  });

  // separate phage
  let nPlaque = strainList.length;
  let smallPlaqueList = strainList.filter((strain)=>{
    return (phenoList[strain] === plateEnum.PLAQUETYPE.SMALL);
  });
  let smallPlaque = smallPlaqueList.length;
  let largePlaque = (lawnType.kind === plateEnum.BACTTYPE.PERM  ? nPlaque - smallPlaque : 0);
  if(smallPlaque + largePlaque > capacity){
    return {
      full: true,
      smallPlaque: 0,
      largePlaque: 0
    }
  }
  return {
    full: overwhelm,
    smallPlaque: smallPlaque,
    largePlaque: largePlaque
  }
} // end generatePlage
