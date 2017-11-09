const mongoose = require('mongoose');
const Phage = mongoose.model('Phage');

const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.createPhage = function(req, res){
  var phageDetails = req.body;
  var newPhage = new Phage(phageDetails);
  newPhage.save((err, phage)=>{
    if(err)
      return res.status(400).send({message: getErrorMessage(err)});
    else
      res.json(phage)
  });
}

