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


const stockFridge = function (scenario, user) {
  // get stock phage and details
  var stock = phageScen.generateScenario(scenario);
  //console.log(stock.strainList);
  let strainList = stock.strainList;
  var strainIdList = [];
  let unknwnStrains = [];
  // loop through strains, save strains to database, and create empty strains
  for (let i = 0; i < strainList.length; i++) {
    let strain = strainList[i];
    strain.owner = user;
    strain.scenarioOrigin = scenario;
    let newPhage = new Phage(strain);
    newPhage.save((err, phage) => {
      if (err)
        console.log(err)
    });
    strainIdList.push(newPhage);
    if(strain.phageType === phageEnum.PHAGETYPE.UNKNOWN){
      unknwnStrains.push(newPhage);
    }
  } // end for i
  // add deletion guess info if needed
  if(scenario.createDeletionModel){
    // initialize empty guesses
    let guesses = {};
    for(let i = 0; i < unknwnStrains.length; i++){
      let guess = [];
      for(let j = 0; j < scenDefaults.geneLength; j += scenDefaults.deletionGuessLength){
        guess.push(false);
      } // end for j
      guesses[i] = guess;
    } // end for i
    let m = {
      strains: unknwnStrains,
      user: user,
      scenario: scenario,
      guesses: guesses
    };
    Deletions.create(m, (err, newM)=>{
      if(err)
        throw new Error('Unable to create deletion model');
    });
  }
  // fridge info
  return {
    scenario: scenario,
    owner: user,
    strains: strainIdList,
    scenarioDetails: JSON.stringify(stock.scenData)
  };
}

exports.getFridge = function (req, res) {
  var user = req.user;
  var scen = req.scenario;

  Fridge.findOne({
      owner: user._id,
      scenario: scen._id
    })
    .populate('owner', 'userId')
    .populate('scenario', 'scenCode')
    .populate('strains', 'strainNum comment phageType id')
    .exec((err, fridge) => {
      if (err) {
        return res.status(400)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!fridge) {
        // create a fridge
        const fridgeDetails = stockFridge(scen, user);
        //console.log(fridgeDetails);
        const newFridge = new Fridge(fridgeDetails);
        newFridge.save((err, f) => {
          if (err) {
            return res.status(400)
              .send({
                message: getErrorMessage(err)
              });
          } else {
            res.json(f);
          }
        });
      } else {
        res.json(fridge);
      }
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
