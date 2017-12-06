const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeletionsSchemea = new Schema({
  strains: [{
    type: Schema.ObjectId,
    ref: 'Phage'
  }],
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    index: true
  },
  scenario: {
    type: Schema.ObjectId,
    ref: 'Scenario'
  },
  guesses: Schema.Types.Mixed,
  geneLength: Number,
  stepSize: Number
});

DeletionsSchemea.set('toJSON',{getters: true});

mongoose.model('Deletions', DeletionsSchema);
