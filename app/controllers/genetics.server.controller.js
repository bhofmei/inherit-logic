const mongoose = require('mongoose');
const Phage = mongoose.model('Phage');
const plate = require('../utility/plate.experiment');

exports.createPlate = function (req, res) {
  // req must have 1-2 phage IDs with numPhage, lawn type, location, specials, capacity, scenarioData

  let reqB = req.body;
  var lawnType = reqB.lawnType;
  var location = reqB.location;
  var capacity = reqB.capacity;
  var scenData = JSON.parse(reqB.scenarioData);
  var phage1 = reqB.phage1;
  var phage2 = reqB.phage2;

  if (phage1 !== undefined && lawnType !== undefined) {
    let pId = phage1.id;
    Phage.findOne({'_id': pId}, 'strainNum mutationList deletion',{lean: true}, (err, ph1) => {
      if (err){
        res.status(400)
        .send({
          message: err.message
        });
      }
      else {
        typeof ph1;
        ph1.numPhage = phage1.numPhage;
        // check for phage2
        if (phage2 !== undefined) {
          // has two phage
          let pId2 = phage2.id;
          Phage.findById(pId2, (err2, ph2) => {
            if (err2){
              res.status(400)
              .send({
                message: err2.message
              });
            }
            else {
              ph2.numPhage = phage2.numPhage;
              var newPlate = plate.createPlate(ph1, ph2, lawnType, null, capacity, location, scenData);
              // has full, littlePlaque, bigPlaque
              if (newPlate)
                res.json(newPlate);
              else{
                res.status(300)
                .send({
                  message: 'double phage - could not create plate'
                });
              }
            }
          });
        } else {
          // has one phage
          var newPlate = plate.createPlate(ph1, null, lawnType, null, capacity, location, scenData);
          if (newPlate)
            res.json(newPlate);
          else{
            res.status(300)
            .send({
              message: 'single phage - could not create plate'
            });
          }
        } // end one vs two phage
      } // end if not error
    }); // end find by id
  } else {
    req.status(400).send({message: 'must specify at least 1 phage and a lawn type'});
  }// end if has property phage1
}; // end createPlate
