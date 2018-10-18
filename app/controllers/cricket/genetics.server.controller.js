/**
 * The controller which performs genetic crosses/manipulations in
 * the lab and plexer rooms
 * @module cricket/genetics.server.controller
 * @name Cricket Genetics Controller
 * @type Controller
*/
const mongoose = require('mongoose');
const clone = require('clone');
const Phage = mongoose.model('CricketPhage');
const plate = require('../../genetics/cricket/plate.experiment');
const plexer = require('../../genetics/cricket/plexer.experiment');
const cryptr = require('../../../config/client.cryptr');
const getErrorMessage = require('../helpers.server.controller').getErrorMessage;

/**
 * Creates a plate for the lab room
 *
 * @apiType POST
 * @apiPath /api/cricket/plate
 *
 * @param {Object} req - Express request object
 * @property {Object} body - info needed to create the plate; has properties `phage1` (numPhage and id), (optional) `phage2`, `lawnType`, `location`, `capacity`, and `scenarioData`
 * @param {Object} res - Express response object
 *
 * @returns {Object} - json object to response
 * @yields {400_Bad_Request} Number of phage is not set for one of the phage, send error as `{message: 'numPhage not set'}`
 * @yields {404_Not_found} Phage 1 is not found in DB, send error as `{message: Error finding the specified phage(1|2)'}`
 * @yields {500_Internal_Server_Error} On error, sends error message as `{message: error-message}`
 * @yields {200_OK} successfully generated plate; has properties `full`, `smallPlaque`, `largePlaque`, `genotypes`, and `parents`
 */
exports.createPlate = function (req, res) {
  // req must have 1-2 phage IDs with numPhage, lawn type, location, specials, capacity, scenarioData

  let reqB = req.body;
  var lawnType = reqB.lawnType;
  var location = reqB.location;
  var capacity = reqB.capacity;
  var scenData = JSON.parse(cryptr.decrypt(reqB.scenarioData));
  var phage1 = reqB.phage1;
  var phage2 = reqB.phage2;

  if (phage1 !== null && lawnType !== undefined) {
    let pId = phage1.id;
    Phage.findOne({
      '_id': pId
    }, 'strainNum mutationList deletion', {
      lean: true
    }, (err, ph1) => {
      if (err) {
        return res.status(500)
          .send({
            message: getErrorMessage(err)
          });
      } else if (phage1.hasOwnProperty('numPhage') === false) {
        return res.status(400)
          .send({
            message: 'numPhage not set'
          });
      } else if (ph1 === null) {
        return res.status(404)
          .send({
            message: 'Error finding the specified phage1'
          });
      } else {
        ph1.numPhage = phage1.numPhage;
        // check for phage2
        if (phage2 !== null && phage2 !== undefined) {
          // has two phage
          let pId2 = phage2.id;
          Phage.findOne({
            '_id': pId2
          }, 'strainNum mutationList deletion', {
            lean: true
          }, (err2, ph2) => {
            if (err2) {
              return res.status(500)
                .send({
                  message: getErrorMessage(err2)
                });
            } else if (phage2.hasOwnProperty('numPhage') === false) {
              return res.status(400)
                .send({
                  message: 'numPhage not set'
                });
            } else if (ph2 === null) {
              return res.status(404)
                .send({
                  message: 'Error finding the specified phage2'
                });
            } else {
              ph2.numPhage = phage2.numPhage;
              var newPlate = plate.createPlate(ph1, ph2, lawnType, null, capacity, location, scenData);
              // has full, smallPlaque, largePlaque, genotypes
              if (newPlate){
            // encode genotypes
            newPlate.genotypes = newPlate.genotypes.map((genoElt)=>{
              return {
                shifts: cryptr.encrypt(JSON.stringify(genoElt.shifts)),
                deletion: cryptr.encrypt(JSON.stringify(genoElt.deletion))
              }
            });
            res.json(newPlate);
          }
              else {
                return res.status(500)
                  .send({
                    message: 'Could not create plate for double phage input'
                  });
              }
            }
          });
        } else {
          // has one phage
          var newPlate = plate.createPlate(ph1, null, lawnType, null, capacity, location, scenData);
          // has full, smallPlaque, largePlaque, genotypes
          if (newPlate){
            // encode genotypes
            newPlate.genotypes = newPlate.genotypes.map((genoElt)=>{
              return {
                shifts: cryptr.encrypt(JSON.stringify(genoElt.shifts)),
                deletion: cryptr.encrypt(JSON.stringify(genoElt.deletion))
              }
            });
            res.json(newPlate);
          }
          else {
            return res.status(500)
              .send({
                message: 'Could not create plate for single phage input'
              });
          }
        } // end one vs two phage
      } // end if not error
    }); // end find by id
  } else {
    return res.status(400)
      .send({
        message: 'must specify at least 1 phage and a lawn type'
      });
  } // end if has property phage1
}; // end createPlate

/**
 * Generates the NxM plates for the plexer
 *
 * @apiType POST
 * @apiPath /api/cricket/plexer
 *
 * @param {Object} req - Express request object;
 * @property {Object} body - info needed to generate plexer;
 * has `rowPhage` (list with each having id and numPhage),
 * `colPhage`(list with each having id and numPhage),
 * `scenarioData`, `lawnType`, `location`, `capacity`
 * @param {Object} res - Express response object
 *
 * @returns {Object} - json object to response
 * @yields {500_Internal_Service_Error} On error finding phage in DB, send error as `{message: error-message}`
 * @yields {200_OK} successfully generated plexer result as 2D array where each cell has `full`, `smallPlaque`, and `largePlaque`
 */
exports.handlePlexer = function (req, res) {
  let reqB = req.body;
  var lawnType = reqB.lawnType;
  var location = reqB.location;
  var capacity = reqB.capacity;
  var scenData = JSON.parse(cryptr.decrypt(reqB.scenarioData));
  var rowPhageId = reqB.rowPhage.map((phage) => {
    return phage.id
  });
  var colPhageId = reqB.colPhage.map((phage) => {
    return phage.id;
  });
  var colPhage, rowPhage;
  // search for the col phage
  Phage.find({
      '_id': {
        $in: colPhageId
      }
    }, null, {
      lean: true
    },
    (err, array) => {
      if (err) {
        return res.status(500)
          .send({
            message: 'Error finding a column phage - ' + getErrorMessage(err)
          });
      } else {
        // duplicate colPhage as necessary
        let objects = {};
        array.forEach(o => objects[o._id] = o);
        colPhage = colPhageId.map((id, i) => {
          let o = objects[id];
          o.numPhage = reqB.colPhage[i].numPhage;
          return o;
        });
        // look for row phage
        Phage.find({
            '_id': {
              $in: rowPhageId
            }
          }, null, {
            lean: true
          },
          (err2, array2) => {
            if (err2) {
              return res.status(500)
                .send({
                  message: 'Error finding row phage - ' + getErrorMessage(err2)
                });
            } else {
              // duplicate rowPhage as necessary
              let objects2 = {};
              array2.forEach(o => {
                objects2[o._id] = o;
              });
              rowPhage = rowPhageId.map((id, i) => {
                let o = objects2[id];
                o.numPhage = reqB.rowPhage[i].numPhage;
                return o;
              });
              // we are safe to perform
              //console.log('controller', rowPhage, '\n-', colPhage);
              let plexerResults = plexer.createPlexerPlate(rowPhage, colPhage, lawnType, null, capacity, location, scenData);
              res.json(plexerResults);
            }
          }); // end find row phage
      }
    }); // end find col phage
};
