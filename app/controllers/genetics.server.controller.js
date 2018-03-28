const mongoose = require('mongoose');
const clone = require('clone');
const Phage = mongoose.model('Phage');
const plate = require('../genetics/plate.experiment');
const plexer = require('../genetics/plexer.experiment');

exports.createPlate = function (req, res) {
  // req must have 1-2 phage IDs with numPhage, lawn type, location, specials, capacity, scenarioData

  let reqB = req.body;
  var lawnType = reqB.lawnType;
  var location = reqB.location;
  var capacity = reqB.capacity;
  var scenData = JSON.parse(reqB.scenarioData);
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
        res.status(400)
          .send({
            message: err.message
          });
      } else if (phage1.hasOwnProperty('numPhage') === false) {
        return res.status(400)
          .send({
            message: 'numPhage not set'
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
              return res.status(400)
                .send({
                  message: err2.message
                });
            } else if (phage2.hasOwnProperty('numPhage') === false) {
              res.status(400)
                .send({
                  message: 'numPhage not set'
                });
            } else {
              ph2.numPhage = phage2.numPhage;
              var newPlate = plate.createPlate(ph1, ph2, lawnType, null, capacity, location, scenData);
              // has full, smallPlaque, largePlaque, genotypes
              if (newPlate)
                res.json(newPlate);
              else {
                return res.status(400)
                  .send({
                    message: 'double phage - could not create plate'
                  });
              }
            }
          });
        } else {
          // has one phage
          var newPlate = plate.createPlate(ph1, null, lawnType, null, capacity, location, scenData);
          // has full, smallPlaque, largePlaque, genotypes
          if (newPlate)
            res.json(newPlate);
          else {
            return res.status(400)
              .send({
                message: 'single phage - could not create plate'
              });
          }
        } // end one vs two phage
      } // end if not error
    }); // end find by id
  } else {
    return req.status(400)
      .send({
        message: 'must specify at least 1 phage and a lawn type'
      });
  } // end if has property phage1
}; // end createPlate

exports.handlePlexer = function (req, res) {
  let reqB = req.body;
  var lawnType = reqB.lawnType;
  var location = reqB.location;
  var capacity = reqB.capacity;
  var scenData = JSON.parse(reqB.scenarioData);
  var rowPhageId = reqB.rowPhage.map((phage) => {
    return phage.id
  });
  var colPhageId = reqB.colPhage.map((phage) => {
    return phage.id;
  });
  var colPhage, rowPhage;
  //console.log(rowPhageId, colPhageId);
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
        res.status(400)
          .send({
            message: 'Error finding a column phage'
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
              res.status(400)
                .send({
                  message: 'Error finding row phage'
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
