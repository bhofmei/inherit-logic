const clone = require('clone');
const util = require('../utility');
const randGen = require('../random.generator');
const randEngine = randGen.getEngine();
const mConfig = require('../../../config/mendelpede/mendelpede.config');
const tEnum = require('./traits.enum');
const pedeLogic = require('./pede.logic');
const debug = require('debug')('genetics:mendel');
exports.resetEngine = function(){
  randGen.reset(randEngine);
}

exports.seedEngine = function(num){
  randGen.setSeed(randEngine, num)
}

exports.setScenario = function(scenario){
  // build inheritance model
  var genoFacts = getInheritance(scenario, false);
  // determine traits
  genoFacts = setTraits(genoFacts);
  // get list of starting bugs
  var pedeList = createGenotypes(scenario, genoFacts);
  return pedeList;
}

exports.getInheritance = function(scenario, toDouble) {
  // scenario: scenType, inheritType

  // genoFacts is type of inheritance for each trait - set all to mendel then replace later
  var genoFacts = [1,2,3,4,5].map((x)=>{
    return {inherit: tEnum.INHERIT.MENDEL};
  });
  // fill genoFacts based on scenario
  switch(scenario.inheritType){
    // 3 mendel traits
    case tEnum.INHERIT.MENDEL:
    case tEnum.INHERIT.QUIZ:
      genoFacts[0] = {inherit: tEnum.INHERIT.MENDEL};
      genoFacts[1] = {inherit: tEnum.INHERIT.MENDEL};
      genoFacts[2] = {inherit: tEnum.INHERIT.MENDEL};
      break;
    // random value with it
    case tEnum.INHERIT.AUTOLINK:
      var val = randGen.randInt(0,10, randEngine) + 70;
      genoFacts[0] = {inherit: tEnum.INHERIT.AUTOLINK, howBad: val};
      genoFacts[1] = {inherit: tEnum.INHERIT.AUTOLINK, howBad: val};
      break;
    case tEnum.INHERIT.SEGDISTORT:
      var val = randGen.randInt(0,10, randEngine) + 70;
      genoFacts[0] = {inherit: tEnum.INHERIT.SEGDISTORT, howBad: val};
      break;
    case tEnum.INHERIT.PENETRANCE:
      var val = randGen.randInt(0,10, randEngine) + 75;
      genoFacts[0] = {inherit: tEnum.INHERIT.PENETRANCE, howBad: val};
      break;
    // geno 0 is set same
    case tEnum.INHERIT.INCDOM:
    case tEnum.INHERIT.XLINK:
    case tEnum.INHERIT.MITO:
    case tEnum.INHERIT.HOMODOMLETH:
    case tEnum.INHERIT.MULTALLELES:
    case tEnum.INHERIT.MATEFFECT:
      genoFacts[0] = {inherit: scenario.inheritType};
      break;
    // geno 0 and 1 is set
    case tEnum.INHERIT.SYNTHLETH:
    case tEnum.INHERIT.MULTGENES:
    case tEnum.INHERIT.EPIDUP:
    case tEnum.INHERIT.EPIREC:
    case tEnum.INHERIT.EPICOM:
    case tEnum.INHERIT.EPIDOM:
      genoFacts[0] = {inherit: scenario.inheritType};
      genoFacts[1] = {inherit: scenario.inheritType};
      break;
    default:
      genoFacts = false;
      throw Error('unknown scenario');
  } // end switch

  // secondary options by inherit type
  /*var secOpts;
  switch(scenario.inheritType) {
    case tEnum.INHERIT.INCDOM:
    case tEnum.INHERIT.AUTOLINK:
    case tEnum.INHERIT.XLINK:
    case tEnum.INHERIT.SYNTHLETH:
      secOpts = [tEnum.INHERIT.HOMODOMLETH, tEnum.INHERIT.MITO, tEnum.INHERIT.SEGDISTORT, tEnum.INHERIT.PENETRANCE];
      break;
    case tEnum.INHERIT.MITO:
      secOpts = [tEnum.INHERIT.HOMODOMLETH, tEnum.INHERIT.XLINK, tEnum.INHERIT.SEGDISTORT, tEnum.INHERIT.PENETRANCE];
      break;
    case tEnum.INHERIT.SEGDISTORT:
      secOpts = [tEnum.INHERIT.HOMODOMLETH, tEnum.INHERIT.MITO, tEnum.INHERIT.XLINK, tEnum.INHERIT.PENETRANCE];
      break;
    case tEnum.INHERIT.HOMODOMLETH:
      secOpts = [tEnum.INHERIT.MITO, tEnum.INHERIT.SEGDISTORT, tEnum.INHERIT.PENETRANCE];
      break;
    case tEnum.INHERIT.PENETRANCE:
      secOpts = [tEnum.INHERIT.MENDEL];
      break;
    case tEnum.INHERIT.MULTALLELES:
    case tEnum.INHERIT.MULTGENES:
    case tEnum.INHERIT.EPIDUP:
    case tEnum.INHERIT.EPIREC:
    case tEnum.INHERIT.EPICOM:
    case tEnum.INHERIT.EPIDOM:
    case tEnum.INHERIT.MATEFFECT:
      secOpts = [];
  }; // end switch

  if(toDouble){
    if(randGen.randBool(randEngine)){
      genoFacts[2] = {inherit: tEnum.INHERIT.MENDEL}
    } else {
      var randType = randGen.randPick(secOpts, randEngine);
      genoFacts[2] = {inherit: randType}
    }
  }*/
  // return if successful
  return genoFacts;
};

exports.setTraits = function(genoFacts){
  // genoFacts has 'inherit' and optional 'howBad'
  var handled = tEnum.TRAITS.map((x)=>{return false});
  var traitRem = clone(tEnum.TRAITS);
  var bodyColRem = clone(tEnum.PHENO.bodyEyeColors);
  var dotColRem = clone(tEnum.PHENO.dotColors);

  for(var i=0; i<handled.length; i++){
    var inheritType = genoFacts[i]['inherit'];
    if(!handled[i]){
      // handle it
      switch(inheritType){
        case tEnum.INHERIT.INCDOM:
          handled[0] = true;
          var res = _pickIncDom(traitRem, bodyColRem, dotColRem);
          genoFacts[0] = res.geno;
          traitRem = res.traits;
          bodyColRem = res.colRem;
          break; // end incdom
        case tEnum.INHERIT.EPICOM:
        case tEnum.INHERIT.EPIDOM:
        case tEnum.INHERIT.EPIDUP:
        case tEnum.INHERIT.EPIREC:
          handled[0] = true;
          handled[1] = true;
          var useCol = util.makeLongEnoughArray(randEngine, bodyColRem, 2);
          genoFacts[i]['dom'] = useCol[0];
          var tmpGeno = {inherit: inheritType, trait: 'SegColor', rec: useCol[0], dom: useCol[1], interm: useCol[2]};
          genoFacts[0] = clone(tmpGeno);
          genoFacts[1] = clone(tmpGeno);
          bodyColRem = util.removeFromArray(bodyColRem, useCol);
          traitRem.splice(traitRem.indexOf('SegColor'), 1);
          break; // endnd Epi
        case tEnum.INHERIT.MULTGENES:
          //handled[0] = true;
          handled[1] = true;
          //var tmpGeno = {inherit: tEnum.INHERIT.MULTGENES, trait: 'NumSegments', rec: 0, dom: 1, interm: null};
          /*traitRem.splice( traitRem.indexOf('NumSegments'), 1 );
          genoFacts[0] = clone(tmpGeno);
          genoFacts[1] = clone(tmpGeno);
          genoFacts[2] = clone(tmpGeno);
          break; // end multgenes*/
        case tEnum.INHERIT.MULTALLELES:
          handled[0] = true;
          //var tmpGeno = {inherit: tEnum.INHERIT.MULTALLELES, trait: 'NumSegments', rec: 0, dom: 1, interm: null};
          if(traitRem.indexOf('NumSegments') !== -1)
            traitRem.splice( traitRem.indexOf('NumSegments'), 1 );
          genoFacts[0] = {inherit: genoFacts[0]['inherit'], trait: 'NumSegments', rec: 0, dom: 1, interm: null};
          genoFacts[1] = {inherit: genoFacts[1]['inherit'], trait: 'NumSegments', rec: 0, dom: 1, interm: null};
          genoFacts[2] = {inherit: genoFacts[2]['inherit'], trait: 'NumSegments', rec: 0, dom: 1, interm: null};
      } // end switch
    } // if not handled
    // check if it was handled by switch above
    if(handled[i])  continue; // go to next trait
    // otherwise, pick one of the remaining traits
    var newTrait = randGen.randPick(traitRem, randEngine);
    traitRem.splice( traitRem.indexOf(newTrait), 1 );
    var tmpGeno = _pickTrait(i, newTrait, bodyColRem, dotColRem);
    genoFacts[i]['trait'] = tmpGeno.trait;
    genoFacts[i]['dom'] = tmpGeno.dom;
    genoFacts[i]['interm'] = tmpGeno.interm;
    genoFacts[i]['rec'] = tmpGeno.rec;
    bodyColRem = tmpGeno.colRem;
    //debug(i, genoFacts[i], bodyColRem);
  } // end for i
  debug(genoFacts);

  return genoFacts;
};

exports.createGenotypes = function(scenario, genoFacts){
  // scenario has 'inherit' and 'scenType'
  var numBugs;
  var isFemale = [true, false];
  var geneGenos = {0:[[0,0]], 1:[[0,0]], 2:[[0,0]]};
  var i;
  // quiz type
  if(scenario.inheritType === tEnum.INHERIT.QUIZ){
    numBugs = 8;
    geneGenos[0].push([1,0]);
    for(i=0; i < 4; i++){
      geneGenos[0].push([1,1]);
    }
    for(i=0; i < 2; i++){
      geneGenos[0].push(randGen.randBool(randEngine) ? [1,1] : [0,0]);
    }
  } else {
    numBugs = 6;
  }

  // fill other traits
  for (var j = 0; j < 3; j++){
    var traitInherit = genoFacts[j]['inherit'];
    // trait inc_dom
    if( traitInherit === tEnum.INHERIT.INCDOM){
      geneGenos[j].push([1,1]);
      geneGenos[j].push([0,1]);
      /// CHECK THIS LOGIC IT SEEMS WRONG
      var nFilled = geneGenos.length;
      for(nFilled; nFilled < numBugs; nFilled++){
        geneGenos[0].push(randGen.randBool(randEngine) ? [1,1] : [0,0]);
      }
    } else if (traitInherit === tEnum.INHERIT.MITO){
      geneGenos[j].push([1,1]);
      for(var k=2; k < numBugs; k++){
        // always homozygous
        geneGenos[j].push(randGen.randBool(randEngine) ? [1,1] : [0,0]);
      }
      isFemale = [true, true, false];
    } else {
      // all other traits
      switch(randGen.randDie(3, randEngine)){
        case 1:
          geneGenos[j].push([1,0]);
          break;
        case 2:
          geneGenos[j].push([0,1]);
          break;
        case 3:
          if(traitInherit === tEnum.INHERIT.HOMODOMLETH){
            geneGenos[j].push(randGen.randBool(randEngine) ? [1,0] : [0,1]);
          } else {
            geneGenos[j].push([1,1]);
          }
          break;
      } // end switch
    } // end else
    if(traitInherit === tEnum.INHERIT.MULTALLELES && j == 0){
      geneGenos[0] = [[0,1],[1,2],[0,1],[2,0],[1,0],[2,0]];
    }
  } // end for j

  // assign the rest of the sexes
  for(var k=isFemale.length; k < numBugs; k++){
    isFemale.push(randGen.randBool(randEngine));
  }

  // fill in everything else randomly
  for(var j=0; j < 3; j++){
    var traitInherit = genoFacts[j]['inherit'];
    for(var k=0; k<numBugs; k++){
      // not defined yet
      if(geneGenos[j][k] === undefined){
        var randDraw = randGen.randDie(10, randEngine);
        if(randDraw < 5) {
          geneGenos[j].push([0,0]);
        } else if (randDraw < 7){
          if(traitInherit === tEnum.INHERIT.HOMODOMLETH){
            geneGenos[j].push(randGen.randBool(randEngine) ? [1,0] :[0,1]);
          } else {
            geneGenos[j].push([1,1]);
          }
        }else if (randDraw < 9){
          if(traitInherit === tEnum.INHERIT.HOMODOMLETH){
            geneGenos[j].push(randGen.randBool(randEngine) ? [1,0] :[0,1]);
          } else {
            geneGenos[j].push([1,0]);
          }
        } else {
          geneGenos[j].push([0,1]);
        } // end if
      } // end undefined
    } // end k
    // shuffle
    if(j > 0){
      geneGenos[j] = util.makeLongEnoughArray(randEngine, geneGenos[j], numBugs);
    }
  } // end for j

  var tmpList = [];
  for(var j=0; j < numBugs; j++){
    var nextPede = {genotype:[], isFemale: isFemale[j]};
    for(var k=0; k < 3; k++){
      var traitInherit = genoFacts[k]['inherit'];
      nextPede.genotype.push(geneGenos[k][j]);
      if(traitInherit === tEnum.INHERIT.MATEFFECT){
        var randDraw = randGen.randDie(4, randEngine);
        switch(randDraw){
          case 1:
            nextPede['motherGeno'] = [0,0];
            break;
          case 2:
            nextPede['motherGeno'] = [1,1];
            break;
          default:
            nextPede['motherGeno'] = [1,0];
        }
      } else if(traitInherit === tEnum.INHERIT.PENETRANCE){
        nextPede['penetrant'] = (randGen.randDie(100, randEngine) < genoFacts[k]['howBad']);
      }
    } // end for k
    // if quiz, do something
    if(scenario.scenType === tEnum.INHERIT.QUIZ){
      if(randGen.randBool(randEngine)){
        var holdGeno = nextPede.genotype[0];
        nextPede.genotype[0] = nextPede.genotype[1];
        nextPede.genotype[1] = holdGeno;
      }
    } // end if quiz

    // determine genotype
    nextPede['phenotype'] = pedeLogic.determinePhenotype(genoFacts, nextPede);
    tmpList.push(nextPede);
  } // end for j

  // prevent dead parents
  if(genoFacts[0]['inherit'] === tEnum.INHERIT.SYNTHLETH){
    var deadBugs = [];
    // set first 2 bugs guaranteed to live
    tmpList[0]['genotype'][0] = [0,0];
    tmpList[0]['genotype'][1] = [1,1];
    tmpList[0]['phenotype'] = pedeLogic.determinePhenotype(genoFacts, tmpList[0]);

    tmpList[1]['genotype'][0] = [1,1];
    tmpList[1]['genotype'][1] = [0,0];
    tmpList[1]['phenotype'] = pedeLogic.determinePhenotype(genoFacts, tmpList[1]);
    // check the others
    for(var j=2; j < numBugs; j++){
      if(tmpList[j]['genotype'][0] === [0,0] && tmpList[j]['genotype'][1] === [0,0]){
        deadBugs.push(j);
      }
    }
    if(deadBugs.length > 0){
      deadBugs.forEach((x)=>{
        var randG = randGen.randDie(4, randEngine);
        switch(randG){
          case 1:
            tmpList[x]['genotype'][0] = [0,1];
            break;
          case 2:
            tmpList[x]['genotype'][0] = [1,0];
            break;
          case 3:
            tmpList[x]['genotype'][1] = [0,1];
            break;
          case 4:
            tmpList[x]['genotype'][1] = [1,0];
        } // end switch
        tmpList[x]['phenotype'] = pedeLogic.determinePhenotype(genoFacts, tmpList[x]);
      })
    } // end deadbugs
  } // end synthleth

  // shuffle the list
  randGen.randShuffle(tmpList, randEngine);
  tmpList.forEach((elt, i)=>{
    tmpList[i]['bugID'] = i+1;
  });
  return tmpList;

}; // end createGenotypes

const _pickIncDom = function(traitsLeft, bodyColRem, dotCol){
  var trait = randGen.randPick(traitsLeft, randEngine);
  var outGeno = {inherit: tEnum.INHERIT.INCDOM};
  var val;
  switch(trait){
      // numLegs
      //TODO: update so dom/rec is random
    case "NumLegs":
      outGeno['trait'] = 'NumLegs';
      outGeno['dom'] = 0;
      outGeno['interm'] = 1;
      outGeno['rec'] = 2;
      break;
    case "NumSegments":
      outGeno['trait'] = 'NumSegments';
      val = randGen.randInt(1, 3, randEngine);
      outGeno['dom'] = val;
      outGeno['interm'] = val+1;
      outGeno['rec'] = val+2;
      break;
    case "DotColor":
      // randomly choose black,gray,white or yellow,green,blue scheme
      outGeno['trait'] = 'DotColor';
      val = randGen.randBool(randEngine);
      outGeno['dom'] = val ? dotCol[0] : dotCol[3];
      outGeno['interm'] = val ? dotCol[1] : dotCol[4];
      outGeno['rec'] = val ? dotCol[2] : dotCol[5];
      break;
    case 'EyeColor':
    case 'BodyColor':
      // randomly choose red, orange, beige or purple, skyblue, cyan schmeme
      outGeno['trait'] = trait;
      val = randGen.randBool(randEngine);
      outGeno['dom'] = val ? bodyColRem[3] : bodyColRem[0];
      outGeno['interm'] = val ? bodyColRem[4] : bodyColRem[1];
      outGeno['rec'] = val ? bodyColRem[5] : bodyColRem[2];
      // remove those colors
      bodyColRem.splice(val*3, 3)
  } // end switch trait

  // remove trait from available traits
  var i = traitsLeft.indexOf(trait);
  traitsLeft.splice(i, 1);

  // return results
  return {'geno': outGeno, 'traits': traitsLeft, 'colRem': bodyColRem};
}; // end _pickIncDom

const _pickTrait = function(i, inTrait, bodyColRem, dotCol){
  var outGeno = {trait: inTrait, interm: null};
  // number type trait
  if(inTrait === 'NumSegments' || inTrait === 'NumLegs'){
    var tOpts = inTrait === 'NumSegments' ? tEnum.PHENO.numSegments : tEnum.PHENO.numLegs;
    tOpts = randGen.randShuffle(tOpts, randEngine);
    // dom is always first one
    outGeno['dom'] = tOpts[0];
    // if i > 2, rec is first one otherwise second one
    outGeno['rec'] = i > 2 ? tOpts[0] : tOpts[1];
  }
  // color trait
  else {
    var cOpts = inTrait === 'DotColor' ? dotCol : bodyColRem;
    cOpts = randGen.randShuffle(cOpts, randEngine);
    outGeno['dom'] = cOpts[0];
    outGeno['rec'] = i > 2 ? cOpts[0] : cOpts[1];
    var rmNum = i > 2 ? 1 : 2;
    bodyColRem.splice(0,rmNum);
  }
  // attach rem color to output
  outGeno['colRem'] = bodyColRem;
  return outGeno;
}; // end _pickTrait

const _getTraitList = function(genoFacts){
  return genoFacts.map((x)=>{
    return x.trait;
  })
};
