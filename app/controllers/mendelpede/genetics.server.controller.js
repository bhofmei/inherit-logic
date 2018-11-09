const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MendelPede = mongoose.model('MendelPede');
const mendExp = require('../../genetics/mendelpede/mendel.experiment');
const MendelFridge = mongoose.model('MendelFridge');
const mendScen = require('../../genetics/mendelpede/mendel.scenario');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;

exports.makeChildren = function (req, res){
  var reqBody = req.body;
  var genoFacts = reqBody.genoFacts
  var malePede = req.malePede;
  var femalePede = req.femalePede;
    var children = mendExp.makeChildren(femalePede, malePede, 20, JSON.parse(genoFacts));
    for (let i= 0; i < children.length; i++){
      children[i]['isFemale'] = children[i]['isFemale']?'F':'M';
    }
    res.json(children);
}

exports.getPede = function(req, res, next, id){
  console.log('*************************getPede method');
  MendelPede.findOne({
    _id: id
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
