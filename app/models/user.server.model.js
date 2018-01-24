const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const debug = require('debug')('user');

const rolesEnum = {
  values: ['admin', 'instr', 'student'],
  message: 'Value "{VALUE}" is not a valid role'
};

const UserSchema = new Schema({
  userId: {
    type: Number,
    index: true,
    min: 1
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    //index: true,
    required: 'Email is required',
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
  course: {
    type: Schema.ObjectId,
    ref: 'Course'
  },
  accessGranted: {},
  role: {
    type: String,
    enum: rolesEnum,
    default: 'student'
  },
  lastLogin: {
    type: Date,
    default: Date.now()
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

UserSchema.methods.authenticate = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch)=>{
    if(err)
      return callback(err);
    callback(null, isMatch);
  });
};

UserSchema.methods.changePassword = function(oldPassword, newPassword, callback){
  if(!oldPassword || !newPassword){
    debug('missing')
    return callback('Missing password');
  }
  this.authenticate(oldPassword, (err, isMatch)=>{
    if(err){
      debug('auth error', err);
        return callback(err);
    }
    else if(!isMatch){
      debug('no match');
        return callback('Incorrect password');
    }
    else{
      this.password = newPassword;
      this.save((err2)=>{
        if(err2){
          debug('save error', err2);
          return callback(err2);
        }
        callback(null, this);
      });
    }
  });
};

UserSchema.pre('save', function(next){
  const SALT_FACTOR=10;
  if(!this.isModified('password'))
    return next();
  if(this.password){
    bcrypt.genSalt(SALT_FACTOR, (err, salt)=>{
      if(err)
        return next(err);
      bcrypt.hash(this.password, salt, (err, hash)=>{
        if(err)
          return next(err);
        this.password = hash;
        next();
      });
    });
  }
});

UserSchema.virtual('name').get(function () {
  let outStr = this.firstName;
  if(this.firstName !== '' || this.lastName !== ''){
    outStr += ' '
  }
  outStr += this.lastName
  return outStr;
});

UserSchema.set('toJSON',{getters: true, virtuals: true});

UserSchema.plugin(AutoIncrement, {inc_field: 'userId'});

mongoose.model('User', UserSchema);
