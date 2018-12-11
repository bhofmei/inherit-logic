const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MendelPede = mongoose.model('MendelPede');
const mendExp = require('../../genetics/mendelpede/mendel.experiment');
const MendelFridge = mongoose.model('MendelFridge');
const MendelQuiz = mongoose.model('MendelQuiz');
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
    var genoList = [[0,0], [1,0], [2,0], [1,0], [1,1], [2,1], [2,0], [2,1], [2,2]];
    var regGenoStr = ['a', 'A', '?'];
    var geno = genoList[quizPedes[i]['genotype'][0]];
    var studentAnswer = studentAnswers[i];
    if( ['AA', 'Aa', 'aa'].indexOf(studentAnswer) === -1){
      return res.status(500)
        .send({message: 'Error: '+ studentAnswer+' is not a valid genotype.'})
    }
    gradedQuiz.push(regGenoStr[geno[0]] + regGenoStr[geno[1]] === studentAnswer)
  }
  var quizScore = gradedQuiz.filter(Boolean).length
  //console.log('**********')
  //console.log(quizFinalScore)
  //console.log(fridgeId)

  var quiz = {
    score: quizScore,
    quizTakenDate: Date.now(),
    submittedAnswers: studentAnswers,
    isAnswerCorrect: gradedQuiz
  }
  MendelQuiz.create(quiz, (err, quiz) => {
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
          return res.status(400)
          .send({message: getErrorMessage(err)})
        }
      }
    );
    res.json(quiz)
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
