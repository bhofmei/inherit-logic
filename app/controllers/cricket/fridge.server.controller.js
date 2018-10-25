/**
 * The Cricket Fridge-related controller functions
 * @module cricket/fridge.server.controller
 * @name Cricket Fridge Controller
 * @type Controller
 */

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Fridge = mongoose.model('CricketFridge');
const Phage = mongoose.model('CricketPhage');
const phageScen = require('../../genetics/cricket/phage.scenario');
const phageEnum = require('../../genetics/cricket/phage.enum');
const scenDefaults = require('../../../config/cricket/scenario.config');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;
/**
 * @external FRIDGE
 * @see {@link ../models/fridge-model.html}
 */
/**
 * @external PHAGE
 * @see {@link ../models/phage-model.html}
 */
/**
 * @external SCENARIO
 * @see {@link ../models/scenario-model.html}
 */
/**
 * @external USER
 * @see {@link ../models/user-model.html}
 */

const getStrainInfo = function(strain){
  return {
      comment: strain.comment,
      id: strain.id,
      parents: strain.parents,
      strainNum: strain.strainNum,
      phageType: strain.phageType,
      submitted: strain.submitted,
      numParents: strain.numParents
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
const getFridgeInfo = function (fridge) {
  let strains = fridge.strains.map((strain) => {
    return getStrainInfo(strain);
  });
  return {
    scenarioDetails: fridge.scenarioDetails ? cryptr.encrypt(fridge.scenarioDetails) : '',
    guesses: fridge.guesses,
    strains: strains,
    accessGranted: fridge.accessGranted,
    userId: fridge.owner.userId,
    scenCode: fridge.scenario.scenCode
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
exports.stockFridge = function (req, res) {
  var user = req.curUser;
  var scen = req.scenario;
  // determine if access granted -> default true bc of testing
  let accessGranted = user.get('accessGranted');
  let access;
  if (accessGranted) {
    // created user
    access = accessGranted[scen.scenCode];
  } else {
    // testing user -> grant access to use predefined see
    access = true;
  }
  // get stock phage and details
  if (!access) {
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
      if (err)
        return res.status(400)
        .send({
          message: 'Unable to create new phage for scenario'
        });
    });
    strainIdList.push(newPhage);
    //console.log('p', newPhage);
    if (strain.phageType === phageEnum.PHAGETYPE.UNKNOWN) {
      unknwnStrains.push(newPhage);
    }
  } // end for i
  let guessStr = '';
  // add deletion guess info if needed
  // initialize empty guesses
  let geneLength = scenDefaults.geneLength;
  let stepSize = scenDefaults.deletionGuessLength;
  let guesses = {};
  //console.log('unknowns', unknwnStrains);
  for (let i = 0; i < unknwnStrains.length; i++) {
    let guess = [];
    for (let j = 0; j < geneLength; j += stepSize) {
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
  Fridge.create(newFridge, (err, fridge) => {
    if (err)
      return res.status(500)
      .send({
        message: 'Unable to save new fridge'
      });
    else {
      let i = getFridgeInfo(fridge);
      res.json(i);
    }
  });
};

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
exports.getFridge = function (req, res) {
  var user = req.curUser;
  var scen = req.scenario;

  Fridge.findOne({
      owner: user._id,
      scenario: scen._id
    })
    .populate('owner', 'userId')
    .populate('scenario', 'scenCode')
    .populate({
      path: 'strains',
      select: 'strainNum comment phageType id submitted numParents',
      populate: {
        path: 'parents',
        select: 'strainNum',
        model: 'CricketPhage'
      }
    })
    .exec((err, fridge) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else if (!fridge) {
        return res.status(307)
          .send({
            message: 'No fridge for scenario/user'
          });
      } else { //
        let i = getFridgeInfo(fridge);
        res.json(i);
      }
    });
};

/**
 * Get a user's fridge and include lots of details only
 * admin/instrs should know
 *
 * @apiType GET
 * @apiPath /api/admin/:userId/students/:studentId/:scenarioId
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:USER} student - student of interest from [userById]{@link user-controller.html#userById} with id `studentId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On server/database error send description of error as `{message: error-message}`
 * @yields {200_OK} If fridge doesn't exist, return owner/scenario as if the fridge exists (information needed for front-end rendering)
 * @yields{200_OK} If fridge exists, return fridge
 */
exports.getStudentFridge = function (req, res) {
  let student = req.student;
  let scen = req.scenario;
  Fridge.findOne({
      owner: student._id,
      scenario: scen._id
    })
    .populate('strains', 'strainNum comment phageType id mutationList deletion parents submitted')
    .populate('owner', 'firstName lastName userId')
    .populate('scenario', 'scenCode label')
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
            scenCode: scen.scenCode,
            label: scen.label
          }
        };
        res.json(out);
      } else {
        res.json(fridge);
      }
    });
};

/**
 * Update the deletion guesses for the fridge
 * guesses come in as object and are stringified when saving
 *
 * @apiType POST
 * @apiPath /api/cricket/:userId/:scenarioId/deletions
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @property {external:FRIDGE} fridge - logged in users's fridge for this scenario from [findFridgeByScenOwner]{@link #findFidgeByScenOwner}
 * @property {Object} body - updated guesses to save
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {500_Internal_Server_Error} On server/database error send description of error as `{message: error-message}`
 * @yields {200_OK} returns stringified updated guesses to response
 */
exports.saveDeletions = function (req, res) {
  let newGuesses = req.body;
  let fridge = req.fridge;
  let s = JSON.stringify(req.body);

  fridge.guesses = s;
  fridge.save((err) => {
    if (err)
      return res.status(500)
        .send({
          message: 'Could not save new guesses'
        });
    else
      res.json(s);
  });
};

/**
 * Middleware which deletes a fridge and all phage within the fridge
 * Called after granting access because new fridge
 * needs to be created for the user/scenario
 * @protected
 *
 * @apiPath /api/admin/:userId/students/:studentId/:scenarioId
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:USER} student - student of interest from [userById]{@link user-controller.html#userById} with id `studentId`
 * @property {external:SCNEARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param {Object} res - Express response object
 * @param {Function} next - next function to go to
 *
 * @returns {Function} go to next middleware
 * @yields{next(error)} If error, pass the error to the next middleware; can have error removing fridge and/or removing individual strains
 * @yields {next()} If successful, delete the fridge and all phage in the fridge, then go to next middleware
 */
exports.deleteStudentFridge = function (req, res, next) {
  let student = req.student;
  let scen = req.scenario;
  Fridge.remove({
    owner: student._id,
    scenario: scen._id
  }, (err) => {
    if (err) {
      next(err);
    } else {
      Phage.remove({
        owner: student._id,
        scenarioOrigin: scen._id
      }, (err2) => {
        if (err2) {
          next(err2)
        } else {
          next()
        }
      });
    }
  });
}

/**
 * Create new phage with phage type "user", save that to DB, and add to the current fridge
 *
 * @apiType POST
 * @apiPath /api/cricket/:userId/:scenarioId/fridge-phage
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @property {external:FRIDGE} fridge - logged in users's fridge for this scenario from [findFridgeByScenOwner]{@link #findFidgeByScenOwner}
 * @property {Object} body - information about new strain; has properties `deletion`, `mutationList`, `parents`, and `strainNum`
 * @param {Object} res - Express response object
 *
 * @return {Object} json object to response
 * @yields {400_Bade_Request} On error creating new phage, sends description of error as `{message: error-message}`
 * @yields {500_Internal_Server_Error} On error adding phage to fridge, sends description of error as `{message: error-message}`
 *@yields {200_OK} Information about the newly added strain, including info about phage parents (fetch from DB)
 */
exports.addPhageToFridge = function (req, res) {
  let fridge = req.fridge;
  let strain = req.body;
  let user = req.curUser;
  let scen = req.scenario;
  // create the phage
  strain.mutationList = JSON.parse(cryptr.decrypt(strain.mutationList));
  strain.deletion = JSON.parse(cryptr.decrypt(strain.deletion));
  strain.owner = user;
  strain.scenarioOrigin = scen;
  strain.phageType = phageEnum.PHAGETYPE.USER;
  // get parents
  strain.parents = (strain.parents === undefined ? [] : strain.parents);
  strain.parents = strain.parents.map((parent) => {
    return ObjectId(parent)
  })
  strain.numParents = strain.parents.length;

  Phage.create(strain, (err, newPhage) => {
    if (err) {
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      Fridge.findByIdAndUpdate(
        fridge._id, {
          $push: {
            strains: newPhage._id
          }
        },
        (err2, updated) => {
          if (err2) {
            return res.status(500)
              .send({
                message: getErrorMessage(err2)
              })
          } else {
            newPhage.populate({
              path: 'parents',
              select: 'strainNum'
            }, (err3, newPhage2) => {
              if (!err && newPhage2) {
                res.json(getStrainInfo(newPhage2))
              } else {
                res.json(getStrainInfo(newPhage));
              }
            }); // end populate
          }
        }); // end Fridge update
    }
  }); // end Phage create
};

/**
 * Update the comment or submitted state of a phage
 *
 * @apiType POST
 * @apiPath /api/cricket/:userId/:scenarioId/:phageId
 *
 * @param {Object} req - Express request object
 * @property {external:PHAGE} strain - phage strain from [phageById]{@link #phageById} with id `phageId`
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @property {Object} body - updated strain info; has `comment`, `strainNum`, and `submitted`
 * @param {Object} res - Express response object
 *
 * @return {Object} json object to response
 * @yields {400_Bad_Request} On error, sends description of error as `{message: error-message}`
 * @yields {200_OK} return updated phage with information about phage parents (from DB)
 */
exports.updatePhage = function (req, res) {
  // Get the strain from the 'request' object
  var strain = req.strain;

  // Update
  strain.comment = req.body.comment;
  strain.strainNum = req.body.strainNum;
  strain.submitted = req.body.submitted;

  // Try saving the updated article
  strain.save((err) => {
    if (err) {
      // If an error occurs send the error message
      return res.status(400)
        .send({
          message: getErrorMessage(err)
        });
    } else {
      // Send a JSON representation of the strain and populate parents
      strain.populate({
        path: 'parents',
        select: 'strainNum'
      }, (err3, newPhage2) => {
        if (!err && newPhage2) {
          res.json(newPhage2)
        } else {
          res.json(strain);
        }
      }); // end populate
    }
  });
};

/**
 * Delete a phage strain and remove it from the fridge
 *
 * @apiType DELETE
 * @apiPath /api/cricket/:userId/:scenarioId/:phageId
 *
 * @param {Object} req - Express request object
 * @property {external:PHAGE} strain - phage strain from [phageById]{@link #phageById} with id `phageId`
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @property {external:FRIDGE} fridge - logged in users's fridge for this scenario from [findFridgeByScenOwner]{@link #findFidgeByScenOwner}
 * @param {Object} res - Express response object
 *
 * @returns {Object} json object to response
 * @yields {400_Bad_Request} On error deleting phage, sends description of error as `{message: error-message}`
 * @yields {500_Internal_Server_Error} On error removing phage from fridge, sends error as `{message: "Unable to remove strain from fridge"}`
 * @yields {200_OK} return the newly deleted phage strain
 */
exports.deletePhage = function (req, res) {
  var fridge = req.fridge;
  var strain = req.strain;
  // delete strain from fridge list
  fridge.strains.pull(strain._id);
  fridge.save((error) => {
    if (error) {
      return res.status(500)
        .send({
          message: 'Unable to remove strain from fridge'
        });
    } else {
      strain.remove((err) => {
        if (err) {
          return res.status(400)
            .send({
              message: getErrorMessage(err)
            });
        } else {
          res.json(strain);
        }
      });
    }
  });
};

/**
 * Middleware which identifies a phage strain based on the
 * id
 * @protected
 *
 * @apiPath :phageId
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 * @param {string} id - mongoDB id of phage strain to look for
 *
 * @returns {Function} go to the next middleware
 * @yields {next(error)} If error, pass error to next middleware
 * @yields {next('Phage not found')} If phage doesn't exist, pass message to next middleware
 * @yields {next()} If successful, set request `strain` and go to next middleware
 */
exports.phageById = function (req, res, next, id) {
  Phage.findOne({
    '_id': id
  }, (err, phage) => {
    // if error
    if (err) return next(err);
    // if user not found
    else if (!phage) return next('Phage not found');
    // if user found -> next middleware
    req.strain = phage;
    next();
  });
};

/**
 * Middleware to find a fridge by the current user and current scenario
 * user and scenario were set in previous middleware
 * @protected
 *
 * @param {Object} req - Express request object
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @param{Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Function} go to next middleware
 * @yields {next(error)} If error, pass error to next middleware
 * @yields {next('Failed to find fridge')} If fridge doesn't exist, pass message to next middleware
 * @yields {next()} If successful, set request `fridge` and go to next middleware
 */
exports.findFridgeByScenOwner = function (req, res, next) {
  var user = req.curUser;
  var scen = req.scenario;
  Fridge.findOne({
    owner: user._id,
    scenario: scen._id
  }, (err, fridge) => {
    if (err) {
      next(err)
    } else if (!fridge) {
      return next('Failed to find fridge')
    } else {
      req.fridge = fridge;
      next()
    }
  });
};

/**
 * Middleware to check if current user is fridge owner
 * @protected
 *
 * @param {Object} req - Express request object;
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:SCENARIO} scenario - current scenario from [scenarioByCode](@link scenario-controller.html#scenarioByCode) with scenCode `scenarioId`
 * @property {external:FRIDGE} fridge - logged in users's fridge for this scenario from [findFridgeByScenOwner]{@link #findFidgeByScenOwner}
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Object | Function} If not authorized, return json object with error to response otherwise go to next middleware
 * @yields {403_Forbidden} If current user isn't owner, send error as `{message: 'User is not authorized'}`
 * @yields {next()} If authorized, go to next middleware
 */
exports.hasFridgeAuthorization = function (req, res, next) {
  // current user must be owner of fridge
  if (req.fridge.owner._id !== req.curUser._id) {
    return res.status(403)
      .send({
        message: 'User is not authorized'
      });
  }
  // call next middleware
  next();
};

/**
 * Middleware to determine if current user has authorization to
 * update a phage strain
 * @protected
 *
 * @param {Object} req - Express request object;
 * @property {external:USER} curUser - logged in user from [userById]{@link user-controller.html#userById} with id `userId`
 * @property {external:PHAGE} strain - phage strain from [phageById]{@link #phageById} with id `phageId`
 * @param {Object} res - Express responses object
 * @param {Function} next - next middleware function
 *
 * @returns {Object | Function} If not authorized, return json object with error to response otherwise go to next middleware
 * @yields {403_Forbidden} If current user isn't owner, send error as `{message: 'User is not authorized'}`
 * @yields {next()} If authorized, go to next middleware
 */
exports.hasPhageAuthorization = function (req, res, next) {
  let ownerId = req.strain.owner.toString();
  if (ownerId !== req.curUser.id) {
    return res.status(403)
      .send({
        message: 'User is not authorized'
      });
  }
  next();
}
