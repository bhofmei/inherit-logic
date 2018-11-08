const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MendelPede = mongoose.model('MendelPede');
const mendExp = require('../../genetics/mendelpede/mendel.experiment');
const MendelFridge = mongoose.model('MendelFridge');
const mendScen = require('../../genetics/mendelpede/mendel.scenario');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;

exports.makeChildren = function (req, res){
  console.log('*************************Make Children method');
  var user = req.curUser;
  var scen = req.scenario;
  var malePede = req.malePede;
  console.log('printing male pede');
  console.log(malePede);
  var femalePede = req.femalePede;
  console.log('printing female pede');
  console.log(femalePede);

  MendelFridge.findOne({
    owner: user._id,
    scenario: scen._id
  }, (error, fridge) => {
    if(error){
      console.log('error occured');
    }
    if(!fridge){
      console.log('No fridge found');
    }
    console.log('got fridge');
    console.log(fridge);
    var children = mendExp.makeChildren(femalePede, malePede, 20,  fridge.genoFacts)
    console.log('got children');
    console.log(children);
    res.json(children);
  });
}

exports.getPede = function(req, res, next, bugId){
  console.log('*************************getPede method');
  var user = req.curUser;
  var scen = req.scenario;
  MendelPede.findOne({
    bugID: bugId,
    owner: user._id,
    scenario: scen._id
  },(error, pede) => {
    if(error){
      console.log('error occured');
    }
    if(!pede){
      console.log('No pede found');
    }
    if(pede.isFemale){
      req.femalePede = pede;
    }else if(!pede.isFemale){
      req.malePede = pede;
    }
    next();
  });
}

const getFridge = function(user, scen){
  MendelFridge.findOne({
    owner: user._id,
    scenario: scen._id
  }, (error, fridge) => {
    if(error){
      console.log('error occured');
    }
    if(!fridge){
      console.log('No fridge found');
    }
    console.log('got fridge');
    console.log(fridge);
    return {
      genoFacts: fridge.genoFacts
    };
  });
}
