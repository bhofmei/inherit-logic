const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MendelPede = mongoose.model('MendelPede');
const mendExp = require('../../genetics/mendelpede/mendel.experiment');
const MendelFridge = mongoose.model('MendelFridge');
const MendelPedeQuiz = mongoose.model('MendelPedeQuiz');
const mendScen = require('../../genetics/mendelpede/mendel.scenario');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;

exports.makeChildren = function (req, res){
  var reqBody = req.body;
  var genoFacts = cryptr.decrypt(reqBody.genoFacts);
  var malePede = reqBody.malePede;
  var femalePede = reqBody.femalePede;
  
  malePede.genotype = JSON.parse(cryptr.decrypt(malePede.genotype));
  femalePede.genotype = JSON.parse(cryptr.decrypt(femalePede.genotype));
  
  var children = mendExp.makeChildren(femalePede, malePede, 20, JSON.parse(genoFacts));
  for (let i= 0; i < children.length; i++){
    children[i]['isFemale'] = children[i]['isFemale']?'F':'M';
    children[i].genotype = cryptr.encrypt(JSON.stringify(children[i].genotype));
  }
  res.json(children);
}

exports.calculateQuizScore = function(req, res){
  var reqBody = req.body;
  var quizPedes = reqBody.quizPedes;
  var studentAnswers = reqBody.studentAnswers;
  var fridgeId = reqBody.fridgeId


  var gradedQuiz = []
  for (let i = 0; i < quizPedes.length; i++){
    quizPedes[i]['genotype'] = JSON.parse(cryptr.decrypt(quizPedes[i]['genotype']));
    var scenCode = quizPedes[i]['scenCode']
    var genoList = [[0,0], [1,0], [2,0], [1,0], [1,1], [2,1], [2,0], [2,1], [2,2]];
    var regGenoStr = ['a', 'A', '?'];
    var alleleGenoStr = ['A<sup>0</sup>', 'A<sup>1</sup>', 'A<sup>2</sup>']
    var geno = genoList[quizPedes[i]['genotype'][0]];

    gradedQuiz.push(regGenoStr[geno[0]] + regGenoStr[geno[1]] === studentAnswers[i]['answer'])
  }
  var quizScore = gradedQuiz.filter(Boolean).length
  //console.log('**********')
  //console.log(quizFinalScore)
  //console.log(fridgeId)

  var quiz = {
    score: quizScore,
    quizTakenDate: Date.now(),
    studentAnswers: gradedQuiz
  }
  MendelPedeQuiz.create(quiz, (err, quiz) => {
    if (err)
      return res.status(500)
      .send({
        message: 'Unable to create new Quiz'
      });
    else{
      MendelFridge.update({_id: fridgeId}, 
        {
          $set:{
          quiz: quiz
        }
      }, 
      (err) => {
        if(err){
          //console.log('error occurred');
        }
      }
    );
    res.json(gradedQuiz)
    }
  })
  
}

exports.getPede = function(req, res, next, id){
  //console.log('*************************getPede method');
  MendelPede.findOne({
    _id: id
  },(error, pede) => {
    if(error){
      //console.log('error occured');
      return res.status(400)
              .send({
                message: 'Error occurred while getting pede'
              });
    }
    if(!pede){
      //console.log('No pede found');
      return res.status(400)
              .send({
                message: 'No pede found'
              });
    }
    if(pede.isFemale){
      req.femalePede = pede;
    }else if(!pede.isFemale){
      req.malePede = pede;
    }
    next();
  });
}
