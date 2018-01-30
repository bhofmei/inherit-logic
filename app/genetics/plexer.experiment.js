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
const plateExper = require('./plate.experiment');
const debug = require('debug')('genetics');

exports.resetEngine = function(){
  //randGen.reset(randEngine);
  // resets the plateExper engine
  plateExper.resetEngine();
}

exports.seedEngine = function(num){
  randGen.setSeed(randEngine, num)
}

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
      //console.log('**', i, j);
      phagePlate.genoList.forEach((geno)=>{
        //console.log(geno.shifts);
      });
      // has: full, smallPlaque, largePlaque
      var plate = this.generatePlexerPlate(lawnType, phagePlate.genoList, phagePlate.strainList, scenData);
      outMat[i][j] = plate;
      //console.log(i, j, plate);
    } // end for j
  } // end for i
  return outMat;
}

exports.generatePlexerPlate = function (lawnTypeStr, genoList, strainList, scenData) {
  // return full, smallPlaque, largePlaque
  // lawn type is "B" or "K"

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
  return {
    full: overwhelm,
    smallPlaque: smallPlaque,
    largePlaque: largePlaque
  }
} // end generatePlage
