const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FridgeSchema = new Schema({
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  scenario: {
    type: Schema.ObjectId,
    ref: 'Scenario'
  },
  nShelves: {
    type: Number,
    default: 4
  },
  nSpots: {
    type: Number,
    default: 16
  },
  strains: [{
    type: Schema.ObjectId,
    ref: 'Phage'
  }],
  scenarioDetails: String
});

FridgeSchema.statics.initStrains = function(){
  var tempList = [];
  for(let i = 0; i < (this.nShelves*this.nSpots); i++){
    tempList.push(null);
  }
  this.strains = tempList;
}

FridgeSchema.methods.addStrain = function(nShelf, nSpot, strainId){
  var p = nShelf*this.nSpots + nSpot;
  this.strains[p] = strainId;
  return strainId;
}

FridgeSchema.methods.removeStrain = function(nShelf, nSpot){
  var p = nShelf*this.nSpots + nSpot;
  this.strains[p] = null;
}

FridgeSchema.set('toJSON',{getters: true});

mongoose.model('Fridge', FridgeSchema);
