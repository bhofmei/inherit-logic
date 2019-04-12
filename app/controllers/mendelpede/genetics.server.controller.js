const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MendelPede = mongoose.model('MendelPede');
const mendExp = require('../../genetics/mendelpede/mendel.experiment');
const MendelFridge = mongoose.model('MendelFridge');
const MendelQuiz = mongoose.model('MendelQuiz');
const mendScen = require('../../genetics/mendelpede/mendel.scenario');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;

/**
 * Middleware which creates 20 children based on genofacts of the fridge,
 * Male mendelpede and female mendelpede
 * @protected
 *
 * @apiPath /api/mendelpede/make-children
 *
 * @param {Object} req - Express request object
 * @property {external:MENDELPEDEPEDE} malepede - male mendelpede [mendelpedeById](@link fridge-controller.html#mendelpedeById) with scenCode `mendelPedeId`
 * @property {external:MENDELPEDEPEDE} femalepede - female mendelpede [mendelpedeById](@link fridge-controller.html#mendelpedeById) with scenCode `mendelPedeId`
 * @property {req.genoFacts} genoFacts - Genofacts of the fridge
 * @param {Object} res - Express response object
 * @param {Function} next - next function to go to
 *
 * @yields {200_OK} Return list of mendelpede children
 */
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

/**
 * Middleware which calculates quiz score and returns a quiz object
 * @apiPath /api/mendelpede/calculate-score
 *
 * @param {Object} req - Express request object
 * @property {req.quizPedes} quizPedes - list of mendelpedes for which quiz was asked
 * @property {req.studentAnswers} studentAnswers - string array containing student's answers
 * @property {req.fridgeId} fridgeId - fridge id
 * @param {Object} res - Express response object
 * @yields {400_NOT_OK} - error while calculating quiz score
 * @yields {500_QUIZ_NOT_CREATE} - Error while creating a new quiz
 * @yields {200_OK} Creates a Mendelpede quiz and return it
 */
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
  var quiz = {
    score: quizScore,
    quizTakenDate: Date.now(),
    submittedAnswers: studentAnswers,
    isAnswerCorrect: gradedQuiz
  }
  // Create mendelquiz object
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

/**
 * Retreives a Mendelpede from a Mendelpede id and sets female and male pede in req object
 * @protected
 *
 * @apiPath :mendelPedeId
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware to follow
 * @param {String} id - mendelpede id from URL
 *
 * @returns {Function} - next middleware
 * @yields {next(error)} On error, pass the error to next middleware
 * @yields {next('No pede found for id')} - If mendelpede doesn't exist, pass message to next middleware
 * @yields {next()} - if successful, set request `Mendelpede` and go to next middleware
 */
exports.getPede = function(req, res, next, id){
  MendelPede.findOne({
    _id: id
  },(error, pede) => {
    if(error){
      return res.status(400)
              .send({
                message: 'Error occurred while getting pede'
              });
    }
    if(!pede){
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
