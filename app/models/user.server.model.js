const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function(password){
        return password.length >= 6;
      }, 'Password should be longer'
    ]
  },
  salt: {
    type: String
  }
});

UserSchema.statics.fineOneByEmail = function(username, callback){
  this.findOne({email: new RegExp(username, 'i')}, callback);
};

UserSchema.methods.authenticate = function(password){
  return this.password === this.hashPassword(password);
};

UserSchema.pre('save', function(next){
  if(this.password){
    this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    this.password = this.hashPassword(this.password);
  }
  next();
});

UserSchema.methods.hashPassword = function(password){
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.set('toJSON',{getters: true, virtuals: true});

mongoose.model('User', UserSchema);
