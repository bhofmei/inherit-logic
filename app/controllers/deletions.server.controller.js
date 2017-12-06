const mongoose = require('mongoose');
const clone = require('clone');
const Phage = mongoose.model('Phage');
const Deletions = mongoose.model('Deletions');

const getErrorMessage = function (err) {
  if (err.errors) {
    for (const errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

exports.getDeletions = function(req, res){
  var user = req.user;
  var scenario = req.scenario;

  Deletions.findOne(
    {user: user._id,
    scenario: scenario._id},
    'guesses',
    (err, guesses)=>{
      if(err){
        res.status(400).send({message: getErrorMessage(err)})
      } else {
        res.json(guesses);
      }
    });
};

exports.saveDeletions = function(req, res){
  var user = req.user;
  var scenario = req.scenario;
  const updates = req.body;

  Deletions.findOneAndUpdate(
    {user: user._id, scenario: scenario._id},
  {guesses: updates},
    {new: true},
  (err, newGuesses)=>{
    if(err)
      res.status(400).send('Unable to save deletion guesses');
    else
      res.json(newGuesses.guesses);
  });
};

