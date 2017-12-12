// Load the module dependencies
const mongoose = require('mongoose');
const Fridge = mongoose.model('Fridge');
const Phage = mongoose.model('Phage');
const phageScen = require('../genetics/phage.scenario');
const phageEnum = require('../genetics/phage.enum');
const scenDefaults = require('../../config/scenario.config.js');

// Create a new error handling controller method
const getErrorMessage = function (err) {
  if (err.errors) {
    for (const errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

const getFridgeInfo = function(fridge){
  let strains = fridge.strains.map((strain)=>{
    return {
      comment: strain.comment,
      id: strain.id,
      parents: strain.parents,
      strainNum: strain.strainNum,
      phageType: strain.phageType
    }
  });
  return {
    scenarioDetails: fridge.scenarioDetails,
    guesses: fridge.guesses,
    strains: strains,
    accessGranted: fridge.accessGranted,
    userId: fridge.owner.userId,
    scenCode: fridge.scenario.scenCode
  }
}

exports.stockFridge = function (req, res) {
  var user = req.user;
  var scen = req.scenario;
  // determine if access granted -> default true bc of testing
  let accessGranted = user.get('accessGranted');
  let access;
  if(accessGranted){
    // created user
    access = accessGranted[scen.scenCode];
  } else {
    // testing user -> grant access to use predefined see
    access = true;
  }
  // get stock phage and details
  if(!access){
    phageScen.seedEngine(scen.degOfDiff);
  }
  var stock = phageScen.generateScenario(scen);
  let strainList = stock.strainList;
  var strainIdList = [];
  let unknwnStrains = [];
  // loop through strains, save strains to database, and create empty strains
  for (let i = 0; i < strainList.length; i++) {
    let strain = strainList[i];
    strain.owner = user;
    strain.scenarioOrigin = scen;
    let newPhage = new Phage(strain);
    newPhage.save((err, phage) => {
      //console.log(phage);
      if (err)
        res.status(500).send('Unable to create new phage for scenario');
    });
    strainIdList.push(newPhage);
    //console.log('p', newPhage);
    if(strain.phageType === phageEnum.PHAGETYPE.UNKNOWN){
      unknwnStrains.push(newPhage);
    }
  } // end for i
  let guessStr = '';
  // add deletion guess info if needed
  //if(scenario.createDeletionModel){
    // initialize empty guesses
    let geneLength = scenDefaults.geneLength;
    let stepSize = scenDefaults.deletionGuessLength;
    let guesses = {};
    //console.log('unknowns', unknwnStrains);
    for(let i = 0; i < unknwnStrains.length; i++){
      let guess = [];
      for(let j = 0; j < geneLength; j += stepSize){
        guess.push(false);
      } // end for j
      let s = unknwnStrains[i].strainNum;
      guesses[s] = guess;
    } // end for i
    guessStr = JSON.stringify(guesses);
  // fridge info
  var newFridge = {
    scenario: scen,
    accessGranted: access,
    owner: user,
    strains: strainIdList,
    scenarioDetails: JSON.stringify(stock.scenData),
    guesses: guessStr
  };
  // save fridge
  Fridge.create(newFridge, (err, fridge)=>{
    if(err)
      res.status(500).send('Unable to save new fridge');
    else{
      let i = getFridgeInfo(fridge);
      res.json(i);
    }
  });
};

exports.getFridge = function (req, res) {
  var user = req.user;
  var scen = req.scenario;

  Fridge.findOne({
      owner: user._id,
      scenario: scen._id
    })
    .populate('owner', 'userId')
    .populate('scenario', 'scenCode')
    .populate('strains', 'strainNum comment phageType id parents')
    .exec((err, fridge) => {
      if (err) {
        return res.status(400)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!fridge) {
        res.status(307).send('No fridge for scenario/user');
      } else {//
        let i = getFridgeInfo(fridge);
        res.json(i);
      }
    });
};

exports.saveDeletions = function(req, res){
  let newGuesses = req.body;
  let fridge = req.fridge;
  let s = JSON.stringify(req.body);

  fridge.guesses = s;
  fridge.save((err)=>{
    if(err)
      return res.status(500).send('Could not save new guesses');
    else
      res.json(s);
  });
};

exports.saveFridge = function (req, res) {
  const fridge = req.body;
  let strains = fridge.strains;
  let fridgeId = fridge.id;
  Fridge.findOneAndUpdate(fridgeId, {
    strains: strains
  }, (err) => {
    if (err) {
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      // send back fridge
      res.json(fridge);
    }
  });
};

exports.deleteFridge = function(req, res) {
  // called with findFridgebyScenOwner
  var fridge = req.fridge;
  fridge.remove((err, f) =>{
    if(err)
      res.status(500).send({message: 'Failed to remove fridge'});
    else
      res.json(fridge);
  });
}

exports.addPhageToFridge = function (req, res) {
  let fridge = req.fridge;
  let strain = req.body;
  let user = req.user;
  let scen = req.scenario;
  // create the phage
  strain.owner = user;
  strain.scenarioOrigin = scen;
  strain.phageType = phageEnum.PHAGETYPE.USER;

  Phage.create(strain, (err, newPhage) => {
    if (err) {
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      fridge.strains.push(newPhage);
      fridge.save(() => {
        res.json(newPhage);
      });

    }
  });
};

exports.updatePhage = function (req, res) {
  // Get the strain from the 'request' object
  var strain = req.strain;

  // Update the article fields
  strain.comment = req.body.comment;
  strain.strainNum = req.body.strainNum;

  // Try saving the updated article
  strain.save((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      // Send a JSON representation of the strain
      res.json(strain);
    }
  });
};

exports.deletePhage = function (req, res) {
  var fridge = req.fridge;
  var strain = req.strain;
  // delete strain from fridge list
  fridge.strains.pull(strain._id);
  fridge.save((error) => {
    if (error) {
      return res.status(500)
        .send('Unable to remove strain from fridge');
    } else {
      strain.remove((err) => {
        if (err) {
          return res.status(400)
            .send({
              message: getErrorMessage(err)
            });
        } else {
          res.json(fridge);
        }
      });
    }
  });
};

exports.phageById = function (req, res, next, id) {
  Phage.findOne({
    '_id': id
  }, (err, phage) => {
    // if error
    if (err) return next(err);
    // if user not found
    else if (!phage) return next(new Error('Phage not found'));
    // if user found -> next middleware
    req.strain = phage;
    next();
  });
};

exports.findFridgeByScenOwner = function (req, res, next) {
  var user = req.user;
  var scen = req.scenario;
  //console.log(user, scen);
  Fridge.findOne({
    owner: user._id,
    scenario: scen._id
  }, (err, fridge) => {
    if (err) {
      next(err)
    } else if (!fridge) {
      return next(new Error('Failed to find fridge'))
    } else {
      req.fridge = fridge;
      next()
    }
  });
};

// authorization
exports.hasFridgeAuthorization = function (req, res, next) {
  // current user must be owner of fridge
  if (req.fridge.owner._id !== req.user._id) {
    return res.status(403)
      .send({
        message: 'User is not authorized'
      });
  }
  // call next middleware
  next();
};

exports.hasPhageAuthorization = function(req, res, next){
  let ownerId = req.strain.owner.toString();
  if(ownerId !== req.user.id){
    return res.status(403)
      .send({
        message: 'User is not authorized'
      });
  }
  next();
}
