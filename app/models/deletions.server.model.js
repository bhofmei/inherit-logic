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
  guesses: Schema.Types.Mixed
});

DeletionsSchemea.set('toJSON',{getters: true});

mongoose.model('Deletions', DeletionsSchema);
