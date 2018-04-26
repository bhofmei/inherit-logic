// Load the module dependencies
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
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

/**
 * Helper method to return fridge details in consistent
 * format
 * Gets phage strains: comment, id, parents, strainNum, phageType, submitted, and numParents
 * Gets fridge: scenarioDetails, guesses, accessGranted, userId, and scenCode
 *
 * @param {Object} fridge - fridge object from DB
 *
 * @returns {Object} - cleaned up fridge object
 */
const getFridgeInfo = function (fridge) {
  let strains = fridge.strains.map((strain) => {
    return {
      comment: strain.comment,
      id: strain.id,
      parents: strain.parents,
      strainNum: strain.strainNum,
      phageType: strain.phageType,
      submitted: strain.submitted,
      numParents: strain.numParents
    }
  });
  return {
    scenarioDetails: fridge.scenarioDetails,
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
 * @param {Object} req - Express request object;
 * includes "curUser" from userById and "scenario" from scenarioByCode
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * If error, returns 500 and error message to response
 * If sucessful, returns trimmed fridge info to response
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
        return res.status(500)
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
 * Only include info needed to be known as a student
 *
 * @param {Object} req - Express request object;
 * includes "curUser" from userById and "scenario" from scenarioByCode
 * @param {Object} res - Express response object
 *
 * @returns {Object | undefined}
 * If error, returns 400 and error message to response
 * If fridge doesn't exist, returns 307 and message to response
 * If successful, returns trimmed fridge info to response
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
        model: 'Phage'
      }
    })
    .exec((err, fridge) => {
      if (err) {
        return res.status(400)
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
 * @param {Object} req - Express request object;
 * includes "student" from userById and "scenario" from scenarioByCode
 * @param {Object} res - Express response object
 *
 * @returns {Object | undefined}
 * If error, returns 500 and error message to response
 * If fridge doesn't exist, return owner/scenario info as if the fridge exists to response (needed for front-end rendering)
 * If successful, returns fridge to response
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
 * @param {Object} req - Express request object;
 * includes "fridge" from fridgeByOwnerScen and "body" with updated guesses
 * @param {Object} res - Express response object
 *
 * @returns {Object}
 * a) If error, returns 500 and message to response
 * b) If sucessful, returns stringified guesses to response
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

/*
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
*/

/**
 * Middleware which deletes a fridge and all phage within the fridge
 * Called after granting access because new fridge
 * needs to be created for the user/scenario
 *
 * @param {Object} req - Express request object;
 * includes "student" from userById and "scenario" from scenarioByCode
 * @param {Object} res - Express response object
 * @param {Function} next - next function to go to
 *
 * @returns {Function}
 * a) If error, pass error to next function
 * b) If successful, move to next function
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
      // TODO: remove the phage in the fridge
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
      next();
    }
  });
}

/**
 * Create new phage, save that to DB, and add to the current fridge
 *
 * @param {Object} req - Express request object;
 * includes "fridge" from "fridgeByScenOwner", "curUser" from
 * userById, "scenario" from scenarioByCode, and
 * "body" with new strain information
 * @param {Object} res - Express response object
 *
 * @return {Object | undefined}
 * a) If error creating phage, return 400 and error message to response
 b) If error adding to fridge, return 500 and error message to response
 c) If successful, return new phage strain info (including parents info) to response
 */
exports.addPhageToFridge = function (req, res) {
  let fridge = req.fridge;
  let strain = req.body;
  let user = req.curUser;
  let scen = req.scenario;
  // create the phage
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
                res.json(newPhage2)
              } else {
                res.json(newPhage);
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
 * @param {Object} req - Express request object;
 * includes "strain" from strainById and "body" with updated strain details
 * @param {Object} res - Express response object
 *
 * @return {Object | undefined}
 * a) If error, return 400 and error message to response
 * b) If successful, get strain parents details and return to response
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
 * @param {Object} req - Express request object;
 * includes "fridge" from findFridgeByScenOwner and "strain" from strainById
 * @param {Object} res - Express response object
 *
 * @returns {Object | undefined}
 * a) If error updating fridge, return 500 and message to response
 * b) If error deleting phage, return 400 and error message to response
 * c) If successful, return deleted strain to response
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
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 * @param {string} id - mongoDB id of phage strain to look for
 *
 * @returns {Function}
 * a) If error, pass error to next middleware
 * b) If strain doesn't exist, pass message to next middleware
 * c) If successful, set request strain and move to next middleware
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
 *
 * @param {Object} req - Express request object;
 * includes "curUser" from userById and "scenario" from scenarioByCode
 * @param{Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Function}
 * a) If fridge exists, set request "fridge" and go to next middleware
 * b) If fridge doesn't exist, send error message to next middleware
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
 *
 * @param {Object} req - Express request object;
 * includes "curUser" from userById and "fridge" from findFridgeByScenOwner
 * @param {Object} res - Express response object
 * @param {Function} next - next middleware function
 *
 * @returns {Object | Function}
 * a) If not authorized, return 403 and error message to response
 * b) If authorized, move to next middleware
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
 *
 * @param {Object} req - Express request object;
 * Contains "strain" and "curUser"
 * @param {Object} res - Express responses object
 * @param {Function} next - next middleware function
 *
 * @returns {Function}
 * a) If error, return 403 and error message to next middleware
 * b) If successful, move to next middleware
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
