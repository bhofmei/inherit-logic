// Load the module dependencies
const mongoose = require('mongoose');
const Fridge = mongoose.model('Fridge');

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

exports.createFridge = function (req, res) {

  const fridge = new Fridge({
    scenario: req.scenario,
    owner: null
  });
  fridge.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(fridge);
    }
  });
};

exports.getFridge = function (req, res) {
  var user = req.user;
  var scen = req.scenario;

  Fridge.findOne({
      owner: user.id,
      scenario: scen.id
    }).populate('owner')
    .populate('scenario')
    .exec((err, fridge) => {
      if (err) {
        return res.status(400).send({
          message: getErrorMessage(err)
        });
      } else if (!fridge) {
        // create a fridge
        const newFridge = new Fridge({
          scenario: scen,
          owner: user
        });
        newFridge.save((err, f) => {
          if (err) {
            return res.status(400).send({
              message: getErrorMessage(err)
            });
          } else {
            res.json(f);
          }
        });
      } else {
        res.json(fridge);
      }
    });
};

// authorization
exports.hasFridgeAuthorization = function (req, res, next) {
  // current user must be owner of fridge
  if (req.fridge.owner.id !== req.user.id) {
    return res.status(403).send({
      message: 'User is not authorized'
    });
  }
  // call next middleware
  next();
}
