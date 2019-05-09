/**
 * The Mendelpede Fridge-related controller functions
 * @module mendelpede/fridge.server.controller
 * @name MendelPede Fridge Controller
 * @type Controller
 */

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MendelPede = mongoose.model('MendelPede');
const MendelFridge = mongoose.model('MendelFridge');
const MendelQuiz = mongoose.model('MendelQuiz')
const mendScen = require('../../genetics/mendelpede/mendel.scenario');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;
/**
 * @external MENDELFRIDGE
 * @see {@link ../models/mendelpede/mendelpede-fridge-model.html}
 */
/**
 * @external MENDELSCENARIO
 * @see {@link ../models/mendel-scenario-model.html}
 */
/**
 * @external USER
 * @see {@link ../models/user-model.html}
 */

const getPedeInfo = function(pede){
  return {
      bugID: pede.bugID,
      isFemale: pede.isFemale?'F':'M',
      genotype: cryptr.encrypt(JSON.stringify(pede.genotype)),
      //genotype: pede.genotype,
      phenotype: pede.phenotype,
      id: pede.id,
      scenCode: pede.scenario.shortCode
    }
}
/**
 * Helper method to return fridge details in consistent
 * format
 *
 * @param {external:MENDELFRIDGE} mendelfridge - fridge object from DB
 *
 * @returns {Object} - cleaned up fridge object with properties
 * `scenarioDetails`, `guesses`, `accessGranted`, `userId`, `scenCode`, and `strains`
 * - Each strain of `strains` has `comment`, `id`, `parents`, `strainNum`, `phageType`, `submitted`, and `numParents`
 */
const getMendelFridgeInfo = function (mendelFridge) {
  var count = 0;
  let pedeList = mendelFridge.pedeList.map((pede) => {
    var pede = getPedeInfo(pede)
    //pede.bugID = count
    count++;
    return pede;
  });
  return {
    genoFacts: mendelFridge.genoFacts,
    accessGranted: mendelFridge.accessGranted,
    userId: mendelFridge.owner.userId,
    pedes: pedeList,
    shortCode: mendelFridge.scenario.shortCode,
    id: mendelFridge.id,
    //quizScore: mendelFridge.quizScore
  }
}

/**
 * Create a new mendel fridge stocked with mendelpedes
 *
 * @apiType GET
 * @apiPath /api/mendelpede/:userId/:scenShortCode/new-fridge
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:MENDELSCENARIO} mendelscenario - current mendelpede scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {400_Bad_Request} Error creating phage for this fridge, sends error as `{message: 'Unable to create new phage for scenario'}`
 * @yields {500_Internal_Server_Error} Error saving the new fridge, sends error as `{message: 'Unable to save new fridge'}`
 * @yields {200_OK} Newly created fridge cleaned by [getFridgeInfo]{@link #getFridgeInfo}
 */
exports.stockMendelFridge = function (req, res) {
  var user = req.curUser;
  var scen = req.scenario;
  let access = true;
  var stock = mendScen.buildScenario(scen);
  let pedeList = stock.pedes;
  var pedeIdList = [];

  for (let i = 0; i < pedeList.length; i++) {
    let pede = pedeList[i];
    pede.owner = user;
    pede.scenario = scen;
    let newPede = new MendelPede(pede);
    newPede.save((err, mpede) => {
      if (err)
        return res.status(400)
        .send({
          message: 'Unable to create new pede for scenario'
        });
    });
    pedeIdList.push(newPede);

  }
  // fridge info
  var newFridge = {
    scenario: scen,
    accessGranted: access,
    owner: user,
    pedeList: pedeIdList,
    genoFacts: JSON.stringify(stock.genoFacts),
  };
  // save fridge
  MendelFridge.create(newFridge, (err, fridge) => {
    if (err)
      return res.status(500)
      .send({
        message: 'Unable to save new fridge'
      });
    else {
      fridge.genoFacts = cryptr.encrypt(fridge.genoFacts);

      let i = getMendelFridgeInfo(fridge);

      if (scen.shortCode.toUpperCase().includes("QUIZ")){
        i['firstTraitForQuiz'] = JSON.parse(cryptr.decrypt(fridge.genoFacts))[0]['trait'];
      }
      res.json(i);
    }
  });
};

/**
 * Insert mendelpede in a fridge (called by click on store button)
 *
 * @apiType POST
 * @apiPath /api/mendelpede/:scenShortCode/add-pede
 *
 * @param {Object} req - Express request object
 * @property {external:MENDELSCENARIO} mendelscenario - current mendelpede scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {400_Bad_Request} Error creating phage for this fridge, sends error as `{message: 'Unable to create new pede for scenario'}`
 */
exports.insertPedeToFridge = function(req, res){
  var reqBody = req.body;
  var fridgeId = reqBody.fridgeId;
  var scen = req.scenario;
  var pedeToBeInserted = reqBody.pedeToBeInserted;
  pedeToBeInserted.genotype = JSON.parse(cryptr.decrypt(pedeToBeInserted.genotype));
  pedeToBeInserted = new MendelPede(pedeToBeInserted)

      MendelFridge.findOne({
        _id: fridgeId
      })
      .populate('owner', 'userId')
      .populate('scenario', 'shortCode')
      .populate({
        path: 'pedeList',
        select: 'bugID isFemale genotype phenotype id',
        populate: {
          path: 'scenario',
          select: 'shortCode',
          model: 'MendelScenario'
        }
      }).exec((err, mendelFridge) => {
        if (err) {
          //console.log('error occured while getting fridge');
        } else{
          pedeToBeInserted.owner = mendelFridge.owner;
          pedeToBeInserted.scenario = mendelFridge.scenario;

          MendelPede.create( pedeToBeInserted, (err, mpede) => {
          if (err)
            return res.status(400)
            .send({
              message: 'Unable to create new pede for scenario'
            });
          fridge = new MendelFridge(mendelFridge);
          fridge.pedeList.push(mpede);
          fridge.save((err, fridge) => {
            if (err)
              return res.status(400)
              .send({
                message: 'Unable to save fridge'
              });
              for (let i = 0; i< fridge.pedeList.length; i++){
                fridge.pedeList[i].genotype = cryptr.encrypt(JSON.stringify(fridge.pedeList[i]));
              }
              fridge.genoFacts = cryptr.encrypt(fridge.genoFacts);

              let i = getMendelFridgeInfo(fridge);

              if (scen.shortCode.toUpperCase().includes("QUIZ")){
                i['firstTraitForQuiz'] = JSON.parse(cryptr.decrypt(fridge.genoFacts))[0]['trait'];
              }
              res.json(i);
            });
          });
        }
      });
    }

/**
 * Get the current user's mendelfridge
 *
 * @apiType GET
 * @apiPath /api/mendelpede/:userId/:scenShortCode
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:MENDELSCENARIO} mendelscenario - current mendel scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On server/database error send description of error as `{message: error-message}`
 * @yields {307_Temporary_Redirect} If fridge does not exist; used by front-end to know to make call to create a new fridge
 * @yields {200_OK} User's fridge for this scenario cleaned by [getMendelFridgeInfo]{@link #getFridgeInfo}
 */
exports.getMendelFridge = function (req, res) {
  var user = req.curUser;
  var scen = req.scenario;

  MendelFridge.findOne({
      owner: user._id,
      scenario: scen._id
    })
    .populate('owner', 'userId')
    .populate('scenario', 'shortCode')
    .populate({
      path: 'pedeList',
      select: 'bugID isFemale genotype phenotype id',
      populate: {
        path: 'scenario',
        select: 'shortCode',
        model: 'MendelScenario'
      }
    })
    .populate('quiz','quizTakenDate score id isAnswerCorrect submittedAnswers')
    .exec((err, mendelFridge) => {
      if (err) {
        //console.log('error in get fridge: '+err);
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!mendelFridge) {
        //console.log('no fridge');
        return res.status(307)
          .send({
            message: 'No fridge for scenario/user'
          });
      } else {
        mendelFridge.genoFacts = cryptr.encrypt(mendelFridge.genoFacts);
        let i = getMendelFridgeInfo(mendelFridge);
        //console.log(scen);
        if (scen.shortCode.toUpperCase().includes("QUIZ")){

          i['firstTraitForQuiz'] = JSON.parse(cryptr.decrypt(mendelFridge.genoFacts))[0]['trait'];
          if(mendelFridge.quiz){
            i['quiz'] = {
              score: mendelFridge.quiz.score,
              quizTakenDate: mendelFridge.quiz.quizTakenDate,
              id: mendelFridge.quiz.id,
              isAnswerCorrect: mendelFridge.quiz.isAnswerCorrect,
              submittedAnswers: mendelFridge.quiz.submittedAnswers
            }
          }
        }
        res.json(i);
      }
    });
};

/**
 * Get Student's mendelfridge (Used by Admin page)
 *
 * @apiType GET
 * @apiPath /api/admin/:userId/mendel-students/:studentId/:scenShortCode
 *
 * @param {Object} req - Express request object
 * @property {external:USER} student - Student in context [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:MENDELSCENARIO} mendelscenario - current mendel scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {200_OK} Student's fridge for this scenario cleaned by [getMendelFridgeInfo]{@link #getFridgeInfo}
 */
exports.getStudentFridge = function(req, res){
  let student = req.student;
  let scen = req.scenario;
  MendelFridge.findOne({
      owner: student._id,
      scenario: scen._id
    })
    .populate('pedeList', 'bugID isFemale genotype id phenotype')
    .populate('owner', 'firstName lastName userId')
    .populate('scenario', 'shortCode label')
    .populate('quiz','quizTakenDate score id isAnswerCorrect submittedAnswers')
    .exec((err, fridge) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!fridge) {
        let out = {
          owner: {
            firstName: student.firstName,
            lastName: student.lastName,
            userId: student.userId
          },
          scenario: {
            scenCode: scen.shortCode,
            label: scen.label
          }
        };
        res.json(out);
      } else {
        let ret = {
          owner: {
            firstName: student.firstName,
            lastName: student.lastName,
            userId: student.userId
          },
          scenario: {
            scenCode: scen.shortCode,
            label: scen.label
          },
          pedes: fridge.pedeList.map((pede) => {
            return {
            bugID: pede.bugID,
            isFemale: pede.isFemale?'F':'M',
            genotype: pede.genotype,
            phenotype: pede.phenotype,
            id: pede.id
            }
          }
          ),
          accessGranted: fridge.accessGranted,
          genoFacts: fridge.genoFacts,
          quizScore: fridge.quizScore
        }
        if(fridge.quiz){
          ret['quiz'] = {
            score: fridge.quiz.score,
            quizTakenDate: fridge.quiz.quizTakenDate,
            id: fridge.quiz.id,
            isAnswerCorrect: fridge.quiz.isAnswerCorrect,
            submittedAnswers: fridge.quiz.submittedAnswers
          }
        }
        res.json(ret);
      }
    });
}

/**
 * Retreives a Mendelpede from a Mendelpede id and sets mendelpede in req object
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
exports.mendelpedeById = function(req, res, next, id){
  //console.log('*************************getPede method');
  MendelPede.findOne({
    '_id': id
  },(error, pede) => {
    if(error){
      //console.log('error occured');
      console.log(err)
      return next(error)
    }
    if(!pede){
      //console.log('No pede found');
      return res.status(400)
              .send({
                message: 'No pede found'
              });
    }
    req.mendelpede = pede;
    next();
  });
}

/**
 * Retreives a mendel fridge from scenario owner and sets mendelfridge in req object
 * @protected
 *
 * @apiPath /api/mendelpede/:userId/:scenShortCode/:mendelPedeId
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware to follow
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:MENDELSCENARIO} mendelscenario - current mendel scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @returns {Function} - next middleware
 * @yields {next(error)} On error, pass the error to next middleware
 * @yields {next('No fridge for scenario/user')} - If mendelpede doesn't exist, pass message to next middleware
 * @yields {next()} - if successful, set request `Mendelfridge` and go to next middleware
 */
exports.findFridgeByScenOwner = function (req, res, next) {
  var user = req.curUser;
  var scen = req.scenario;

  MendelFridge.findOne({
      owner: user._id,
      scenario: scen._id
    })
    .populate('owner', 'userId')
    .populate('scenario', 'shortCode')
    .populate('quiz','quizTakenDate score id isAnswerCorrect submittedAnswers')
    .populate({
      path: 'pedeList',
      select: 'bugID isFemale genotype phenotype id',
      populate: {
        path: 'scenario',
        select: 'shortCode',
        model: 'MendelScenario'
      }
    })
    .exec((err, mendelFridge) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!mendelFridge) {
        return res.status(307)
          .send({
            message: 'No fridge for scenario/user'
          });
      } else {
        req.mendelFridge = mendelFridge;
        next()
      }
    });
};

/**
 * Delete a Mendelpede from fridge
 * @protected
 * @apiPath /api/mendelpede/:userId/:scenShortCode/:mendelPedeId
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @property {external:MENDELFRIDGE} mendelFridge - Mendel fridge [userById]{@link mendelpede/fridge-controller.html#findFridgeByScenOwner} with scenOwner `userId`
 * @property {external:MENDELSCENARIO} mendelscenario - current mendel scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @property {external:MENDELPEDEPEDE} mendelpede - mendelpede to be deleted [mendelpedeById]{@link mendelpede/fridge-controller.html#mendelpedeById} with scenOwner `mendelpedeId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {200_OK} Mendel fridge for this scenario cleaned by [getMendelFridgeInfo]{@link #getFridgeInfo}
 */
exports.deletePede = function (req, res) {
  var fridge = req.mendelFridge;
  var mendelpede = req.mendelpede;
  var scen = req.scenario;
  // delete pede from fridge pede list
  fridge.pedeList.pull(mendelpede._id);
  fridge.save((error) => {
    if (error) {
      return res.status(500)
        .send({
          message: 'Unable to remove pede from fridge'
        });
    } else {
      mendelpede.remove((err) => {
        if (err) {
          console.log(err)
          return res.status(400)
            .send({
              message: getErrorMessage(err)
            });
        } else {
        fridge.genoFacts = cryptr.encrypt(fridge.genoFacts);
        let i = getMendelFridgeInfo(fridge);
        if (scen.shortCode.toUpperCase().includes("QUIZ")){
          // set first trait for a hint in quiz
          i['firstTraitForQuiz'] = JSON.parse(cryptr.decrypt(fridge.genoFacts))[0]['trait'];
        }
        //console.log(i)
        res.json(i);
        }
      });
    }
  });
};

/**
 * Delete quiz (which is a mendel fridge)
 * @protected
 * @apiPath /api/admin/:userId/delete-mendel-fridge/:studentId/:scenShortCode
 * @param {Object} req - Express request object
 * @property {external:MENDELFRIDGE} fridge - Mendel fridge [findFridgeByScenOwner]{@link mendelpede/fridge-controller.html#findFridgeByScenOwner} with scenOwner `userId`
 *
 * @returns {nothing}: returns nothing
 */
exports.deleteQuiz = function(req, res, next) {
  var fridge = req.mendelFridge;
  if(fridge.quiz){
    MendelQuiz.remove({
      '_id': fridge.quiz.id
    }, (err) => {
      if(err){
        next(err);
      } else{
        next();
      }
    });
  }
}

/**
 * Delete quiz score (remove quiz connection from mendelfridge)
 * @protected
 * @apiPath /api/admin/:userId/delete-quiz-score/:studentId/:scenShortCode
 * @param {Object} req - Express request object
 * @property {external:MENDELFRIDGE} fridge - Mendel fridge [findFridgeByScenOwner]{@link mendelpede/fridge-controller.html#findFridgeByScenOwner} with scenOwner `userId`
 * @yields {400} remove quiz error
 * @returns {Object}: json object
 */
exports.deleteQuizScore = function(req, res, next) {
  var fridge = req.mendelFridge;
  if(fridge.quiz){
    MendelQuiz.remove({
      '_id': fridge.quiz.id
    }, (err) => {
      if(err){
        console.log(err)
          return res.status(400)
            .send({
              message: getErrorMessage(err)
            });
      } else{
        let out = {
          success: 'true'
        }
        res.json(out);
      }
    });
  }
}

/**
 * Middleware which deletes a mendel fridge and all mendelpedes within the mendel fridge
 * Called after granting access because new fridge
 * needs to be created for the user/scenario
 * @protected
 *
 * @apiPath /api/admin/:userId/delete-mendel-fridge/:studentId/:scenShortCode
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:USER} student - student of interest from [userById]{@link user-controller.html#userById} with id `studentId`
 * @property {external:MENDELSCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 * @param {Function} next - next function to go to
 *
 * @returns {Function} go to next middleware
 * @yields {next(error)} If error, pass the error to the next middleware; can have error removing fridge and/or removing individual pedes
 * @yields {next()} If successful, delete the mendelfridge and all pedes in the fridge, then go to next middleware
 */
exports.deleteStudentMendelFridge = function (req, res, next) {
  let student = req.student;
  let scen = req.scenario;
  MendelFridge.remove({
    owner: student._id,
    scenario: scen._id
  }, (err) => {
    if (err) {
      next(err);
    } else {
      MendelPede.remove({
        owner: student._id,
        scenario: scen._id
      }, (err2) => {
        if (err2) {
          next(err2)
        } else {
          let out = {
            owner: {
              firstName: student.firstName,
              lastName: student.lastName,
              userId: student.userId
            },
            scenario: {
              scenCode: scen.shortCode,
              label: scen.label
            }
          };
          res.json(out);
          next()
        }
      });
    }
  });
}
