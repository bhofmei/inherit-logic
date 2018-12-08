/**
 * The Mendelpede Fridge-related controller functions
 * @module mendelpede/fridge.server.controller
 * @name mendelpede Fridge Controller
 * @type Controller
 */

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const MendelPede = mongoose.model('MendelPede');
const MendelFridge = mongoose.model('MendelFridge');
const mendScen = require('../../genetics/mendelpede/mendel.scenario');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;
/**
 * @external FRIDGE
 * @see {@link ../models/fridge-model.html}
 */
/**
 * @external SCENARIO
 * @see {@link ../models/scenario-model.html}
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
 * @param {external:FRIDGE} fridge - fridge object from DB
 *
 * @returns {Object} - cleaned up fridge object with properties
 * `scenarioDetails`, `guesses`, `accessGranted`, `userId`, `scenCode`, and `strains`
 * - Each strain of `strains` has `comment`, `id`, `parents`, `strainNum`, `phageType`, `submitted`, and `numParents`
 */
const getMendelFridgeInfo = function (mendelFridge) {
  var count = 0;
  let pedeList = mendelFridge.pedeList.map((pede) => {
    var pede = getPedeInfo(pede)
    pede.bugID = count
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
    quizScore: mendelFridge.quizScore
  }
}

/**
 * Create a new fridge stocked with the scenario phage
 *
 * @apiType GET
 * @apiPath /api/cricket/:userId/:scenarioId/new-fridge
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {400_Bad_Request} Error creating phage for this fridge, sends error as `{message: 'Unable to create new phage for scenario'}`
 * @yields {500_Internal_Server_Error} Error saving the new fridge, sends error as `{message: 'Unable to save new fridge'}`
 * @yields {200_OK} Newly created fridge cleaned by [getFridgeInfo]{@link #getFridgeInfo}
 */
exports.stockMendelFridge = function (req, res) {
  //console.log('Create fridge method called.....')
  var user = req.curUser;
  var scen = req.scenario;
  // determine if access granted -> default true bc of testing
  //let accessGranted = user.get('accessGranted');
  let access = true;
  /*if (accessGranted) {
    // created user
    access = accessGranted[scen.scenShortCode];
  } else {
    // testing user -> grant access to use predefined see
    access = true;
  }
  // get stock phage and details
  if (!access) {
    mendScen.seedEngine(scen.ordOfScen);
  }*/
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
    quizScore: 'Quiz not submitted yet'
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
 * Get the current user's fridge
 * Only include info needed to be known for lab room, plexer room, and model room of scenario
 *
 * @apiType GET
 * @apiPath /api/cricket/:userId/:scenarioId
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On server/database error send description of error as `{message: error-message}`
 * @yields{307_Temporary_Redirect} If fridge does not exist; used by front-end to know to make call to create a new fridge
 * @yields {200_OK} User's fridge for this scenario cleaned by [getFridgeInfo]{@link #getFridgeInfo}
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
        }
        res.json(i);
      }
    });
};

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
            //genotype: pede.genotype,
            phenotype: pede.phenotype,
            id: pede.id
            }
          }
          ),
          accessGranted: fridge.accessGranted,
          genoFacts: fridge.genoFacts,
          quizScore: fridge.quizScore
        }
        //console.log(ret);
        res.json(ret);
      }
    });
}

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

exports.findFridgeByScenOwner = function (req, res, next) {
  /*
  var user = req.curUser;
  var scen = req.scenario;
  MendelFridge.findOne({
    owner: user._id,
    scenario: scen._id
  }, (err, fridge) => {
    if (err) {
      console.log(err)
      next(err)
    } else if (!fridge) {
      return next('Failed to find fridge')
    } else {
      req.mendelFridge = fridge;
      next()
    }
  });*/
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
        //mendelFridge.genoFacts = cryptr.encrypt(mendelFridge.genoFacts);
        //let i = getMendelFridgeInfo(mendelFridge);
        //console.log(scen);
        req.mendelFridge = mendelFridge;
        next()
      }
    });
};

exports.deletePede = function (req, res) {
  var fridge = req.mendelFridge;
  var mendelpede = req.mendelpede;
  var scen = req.scenario;
  // delete strain from fridge list
  fridge.pedeList.pull(mendelpede._id);
  fridge.save((error) => {
    if (error) {
      console.log(err)
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
        //console.log(scen);
        if (scen.shortCode.toUpperCase().includes("QUIZ")){

          i['firstTraitForQuiz'] = JSON.parse(cryptr.decrypt(fridge.genoFacts))[0]['trait'];
        }
        //console.log(i)
        res.json(i);
        }
      });
    }
  });
};
