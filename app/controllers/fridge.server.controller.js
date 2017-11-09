// Load the module dependencies
const mongoose = require('mongoose');
const Fridge = mongoose.model('Fridge');
const Phage = mongoose.model('Phage');
const scenPhage = require('../utility/phage.scenario');

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

exports.createFridge = function (req, res) {

  const fridge = new Fridge({
    scenario: req.scenario,
    owner: null
  });
  fridge.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(fridge);
    }
  });
};

const stockFridge = function (scenario, user) {
  // get stock phage and details
  var stock = scenPhage(scenario);
  let strainList = stock.strainList;
  let strainIdList = [];
  // loop through strains and save strains to database
  for (let i = 0; i < strainList.length; i++) {
    let strain = strainList.length;
    strain.owner = user.id;
    let newPhage = new Phage(strain);
    let strainId = newPhage.save((err, phage) => {
      if (err)
        return -1;
      else
        return phage.id
    });
    if (strainId !== -1)
      strainIdList.push(strainId);
  }
  // fridge info
  return {
    scenario: scenario,
    owner: user,
    strains: strainIdList,
    wtGene: stock.wtGene,
    stopList: stock.stopList
  };
}

exports.getFridge = function (req, res) {
  var user = req.user;
  var scen = req.scenario;

  Fridge.findOne({
      owner: user.id,
      scenario: scen.id
    })
    .populate('owner', 'userId')
    .populate('scenario', 'scenCode')
  .populate('strains')
    .exec((err, fridge) => {
      if (err) {
        return res.status(400)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!fridge) {
        // create a fridge
        const fridgeDetails = stockFridge(scen, user);
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
  // get fridge
  console.log(req.body);
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
  //fridge.strains = req.body.strains;

  /*fridge.save((err)=>{
    if(err){
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // send back fridge
      res.json(fridge);
    }
  })*/

};

// authorization
exports.hasFridgeAuthorization = function (req, res, next) {
  // current user must be owner of fridge
  if (req.fridge.owner.id !== req.user.id) {
    return res.status(403)
      .send({
        message: 'User is not authorized'
      });
  }
  // call next middleware
  next();
}
