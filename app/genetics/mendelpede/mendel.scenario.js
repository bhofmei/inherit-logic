const clone = require('clone');
const util = require('../utility');
const randGen = require('../random.generator');
const randEngine = randGen.getEngine();
const tEnum = require('./traits.enum');
const pedeLogic = require('./pede.logic');
const debug = require('debug')('genetics:mendel');

exports.resetEngine = function(){
  randGen.reset(randEngine);
}

exports.seedEngine = function(num){
  randGen.setSeed(randEngine, num)
}

exports.buildScenario = function(scenario){
  console.error('scenario ', randGen.randInt(1,10000, randEngine))
  // build inheritance model
  var genoFacts = getInheritance(scenario);
  // determine traits
  genoFacts = setTraits(genoFacts);
  // get list of starting bugs
  var pedeList = createPedes(scenario, genoFacts);
  // return genoFacts and pedeList
  return {genoFacts: genoFacts, pedes: pedeList};
};

const getInheritance = function(scenario) {
  // scenario: scenType, inheritType

  // genoFacts is type of inheritance for each trait - set all to mendel then replace later
  var genoFacts = [1,2,3,4,5].map((x)=>{
    return {inherit: tEnum.INHERIT.MENDEL};
  });
  // fill genoFacts based on scenario
  switch(scenario.inheritType){
    // 3 mendel traits - inherit mode is already set
    case tEnum.INHERIT.MENDEL:
    case tEnum.INHERIT.QUIZ:
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
  // return if successful
  return genoFacts;
};

const setTraits = function(genoFacts){
  var traitRem = clone(tEnum.TRAITS);
  var bodyColRem = clone(tEnum.PHENO.bodyEyeColors);
  var dotColRem = clone(tEnum.PHENO.dotColors);

  for(var i = 0; i < genoFacts.length; i++){
    var inheritType = genoFacts[i]['inherit'];
    //  if 2-gene trait and second gene, continue
    if(i === 1 && (inheritType === tEnum.INHERIT.MULTGENES || inheritType.startsWith('epi'))){
      continue;
    }
    // handle traits by inherit type
    switch(inheritType){
      case tEnum.INHERIT.EPIDOM:
      case tEnum.INHERIT.EPICOM:
      case tEnum.INHERIT.EPIREC:
      case tEnum.INHERIT.EPIDUP:
        var res = _pickEpiTraits(inheritType, bodyColRem);
        genoFacts[0] = clone(res.geno);
        genoFacts[1] = clone(res.geno);
        bodyColRem = res.colRem;
        traitRem = util.removeFromArray(traitRem, 'SegColor');
        traitRem = util.removeFromArray(traitRem, 'NumLegs'); // never set numLegs
        break;
      case tEnum.INHERIT.MULTGENES:
        traitRem = util.removeFromArray(traitRem, 'NumLegs'); // never set numLegs
        genoFacts[1] = {inherit: inheritType, trait: 'NumSegments', rec: 0, dom: 1, interm: null};
      case tEnum.INHERIT.MULTALLELES:
        traitRem = util.removeFromArray(traitRem, 'NumSegments');
        genoFacts[0] = {inherit: inheritType, trait: 'NumSegments', rec: 0, dom: 1, interm: null};
        break; // break for multalleles and multgenes
      case tEnum.INHERIT.INCDOM:
        var res = _pickIncDom(traitRem, bodyColRem, dotColRem);
        genoFacts[0] = res.geno;
        traitRem = res.traits;
        bodyColRem = res.colRem;
        break;
      default:
        var newTrait = randGen.randPick(traitRem, randEngine);
        traitRem = util.removeFromArray(traitRem, newTrait);
        var tmpGeno = _pickTrait(i, newTrait, bodyColRem, dotColRem);
        genoFacts[i]['trait'] = newTrait;
        genoFacts[i]['dom'] = tmpGeno.dom;
        genoFacts[i]['interm'] = tmpGeno.interm;
        genoFacts[i]['rec'] = tmpGeno.rec;
        bodyColRem = tmpGeno.colRem;
    }; // end switch
  } // end for i
  return genoFacts;
}; // end setTraits

const createPedes = function( scenario, genoFacts ){
  var isQuiz = scenario.inheritType === tEnum.SCENTYPE.QUIZ;
  var genotypes = createGenotypes(genoFacts, isQuiz);
  var genes = genotypes.genos;
  var females = genotypes.female;
  var pedeList = [];
  // generate the pedes
  for(var i = 0; i < females.length; i++){
    var nextPede = {genotype: [], isFemale: females[i]};
    // loop through genes
    for(var j = 0; j < 3; j++){
      var traitInherit = genoFacts[j]['inherit'];
      nextPede.genotype.push(genes[j][i]);
      // handle special genotype info
      if(traitInherit === tEnum.INHERIT.MATEFFECT){
        var opts = [0, 4, 3, 3]; // 00, 11, 10, 10
        var randDraw = randGen.randInt(0, 3, randEngine);
        nextPede['motherGeno'] = opts[randDraw];
      } else if(traitInherit === tEnum.INHERIT.PENETRANCE){
        var randDraw = randGen.randDie(100, randEngine);
        nextPede['penetrant'] = randDraw < genoFacts[j]['howBad'];
      }
    } // end for j
    // if quiz, randomly rearrange
    if(isQuiz && randGen.randBool(randEngine)){
      var holdGeno = nextPede.genotype[0];
      nextPede.genotype[0] = nextPede.genotype[1];
      nextPede.genotype[1] = holdGeno;
    }
    nextPede['phenotype'] = pedeLogic.determinePhenotype(genoFacts, nextPede);
    pedeList.push(nextPede);
  } // end for i
  // shuffle the list and assign id
  randGen.randShuffle(pedeList, randEngine);
  pedeList.forEach((elt, i)=>{
    pedeList[i]['bugID'] = i;
  });
  return pedeList;
}; // end createPedes

const createGenotypes = function(genoFacts, isQuiz){
  var numBugs = isQuiz ? 8 : 6;
  var isFemale = [true, false];
  var genes = [[0], [0], [0]]; // genotypes are ternary-encoded

  for(var i = 0; i < 3; i++){
    var inheritType = genoFacts[i]['inherit'];
    // if 0 and QUIZ
    if(i === 0 && isQuiz){
      genes[0] = _genoQuiz();
    } else if( inheritType === tEnum.INHERIT.MULTALLELES){
      genes[i] = _genoMultAllele(numBugs);
    } else if( inheritType === tEnum.INHERIT.MITO ){
      genes[i] = _genoMito(numBugs);
      isFemale = [true, true, false];
    } else if( inheritType === tEnum.INHERIT.INCDOM){
      genes[i] = _genoIncDom(numBugs);
    } else if (inheritType === tEnum.INHERIT.SYNTHLETH){
      if(i === 1) continue; // genes were set at i=0
      var res = _genoSynthLeth(numBugs);
      genes[0] = res[0];
      genes[1] = res[1];
    } else {
      // add a dominant allele
      genes[i].push(_genoRandDom(inheritType));
    }
    // random genotype to get numBugs
    for(var k=genes[i].length; k < numBugs; k++){
      genes[i].push(_genoRandAllele(inheritType));
    }
    // shuffle alleles i > 0 except synthLeth
    // for i == 0, sex might be important
    if(i > 0 && inheritType !== tEnum.INHERIT.SYNTHLETH){
      genes[i] = randGen.randShuffle(genes[i], randEngine);
    }
  } // end for i
  // assign sex for rest of pedes
  for(var k = isFemale.length; k < numBugs; k++){
    isFemale.push(randGen.randBool(randEngine));
  }
  return {genos: genes, female: isFemale}
};

const _pickEpiTraits = function(inheritType, bodyCol){
  var colors = randGen.randShuffle(bodyCol, randEngine);
  var outGeno = {inherit: inheritType, trait: 'SegColor', rec: colors[0], dom: colors[1], interm: colors[2]};
  colors.splice(0, 3);
  return {geno: outGeno, colRem: colors};
};

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
  traitsLeft = util.removeFromArray(traitsLeft, trait);

  // return results
  return {'geno': outGeno, 'traits': traitsLeft, 'colRem': bodyColRem};
}; // end _pickIncDom

const _pickTrait = function(i, inTrait, bodyColRem, dotCol){
  var outGeno = {interm: null};
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
    outGeno['rec'] = i > 2 ? cOpts[0] : cOpts[1]; // i > 2, superficial trait
    var rmNum = i > 2 ? 1 : 2;
    bodyColRem.splice(0,rmNum);
  }
  // attach rem color to output
  outGeno['colRem'] = bodyColRem;
  return outGeno;
}; // end _pickTrait

const _genoQuiz = function(){
  // gneotypes are ternary encoded
  var outGeno = [0, 3, 4, 4, 4, 4];
  outGeno.push(randGen.randBool(randEngine) ? 4 : 0);
  outGeno.push(randGen.randBool(randEngine) ? 4 : 0);
  return outGeno
};

const _genoMultAllele = function(numBugs){
  // must have 01, 12, 02 -> randomly pick other three
  var outGeno = [1, 5, 2];
  for(var k = outGeno.length; k < numBugs; k++){
    outGeno.push(randGen.randInt(0, 8, randEngine));
  }
  return outGeno;
};

const _genoIncDom = function(numBugs){
  // must have 00, 11, 01
  var outGeno = [0, 4, 1];
  for(var k = outGeno.length; k < numBugs; k++){
    outGeno.push(randGen.randPick([4, 0],randEngine)); // [1,1] or [0,0]
  }
  return outGeno;
}

const _genoMito = function(numBugs){
  // always have 00, 11
  var outGeno = [0, 4];
  for(var k = outGeno.length; k < numBugs; k++){
    outGeno.push(randGen.randPick([4, 0],randEngine)); // [1,1] or [0,0]
  }
  return outGeno;
}

const _genoSynthLeth = function(numBugs){
  // guarantee first 2 bugs live
  var gList1 = [0, 4]; // 00, 11
  var gList2 = [4, 0]; // 11, 00
  for(var k = gList1.length; k < numBugs; k++){
    // randomly generate 2 alleles
    var allele1 = _genoRandAllele(tEnum.INHERIT.SYNTHLETH);
    var allele2 = _genoRandAllele(tEnum.INHERIT.SYNTHLETH);
    // if lethal, switch one
    if(allele1 === 0 && allele2 === 0){
      switch(randGen.randDie(4, randEngine)){
        case 1:
          allele1 = 1; // 01
          break;
        case 2:
          allele1 = 3; // 10
          break;
        case 3:
          allele2 = 1; // 01;
          break;
        default:
          allele2 = 3; // 10
      } // end switch
    } // end if al1 = 0 & al2 = 0
    gList1.push(allele1);
    gList2.push(allele2);
  } // end for k
  return {0: gList1, 1: gList2};
}; // end _genoSynthLeth

const _genoRandDom = function(inheritType){
  var isHDL = (inheritType === tEnum.INHERIT.HOMODOMLETH);
  switch(randGen.randDie(3, randEngine)){
    case 1:
      return 3; // [1,0]
    case 2:
      return 1; // [0,1]
    case 3:
      if(isHDL)
        return randGen.randPick([3,1], randEngine); // [1,0] [0,1]
      return 4; // [1,1]
  }
};

const _genoRandAllele = function(inheritType){
  var isHDL = (inheritType === tEnum.INHERIT.HOMODOMLETH);
  var randDraw = randGen.randDie(10, randEngine);
    if(randDraw < 5){
      return 0; // [0,0]
    } else if(randDraw < 9 && isHDL){
      return randGen.randPick([3,1], randEngine); // [1,0] [0,1]
    } else if(randDraw < 7){
      return 4; // [1,1]
    } else if(randDraw < 9){
      return 3; // [1,0]
    } else {
      return 1; // [0,1]
    }
  }; // end _genoRandDraw
