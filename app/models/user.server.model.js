const mongoose = require('mongoose');
const crypto = require('crypto');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: Number,
    index: true,
    min: 1
  },
  name: String,
  email: {
    type: String,
    //index: true,
    required: true,
    match: /.+\@.+\..+/
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
  },
  course: {
    type: Schema.ObjectId,
    ref: 'Course'
  },
  admin: {
    type: Boolean,
    default: false
  }
});

/*UserSchema.statics.fineOneByUsername = function(mail, callback){
  this.findOne({email: mail}, callback);
};*/

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

UserSchema.plugin(AutoIncrement, {inc_field: 'userId'});

mongoose.model('User', UserSchema);
