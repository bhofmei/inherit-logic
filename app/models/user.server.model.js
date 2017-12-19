const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

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
  }
});

UserSchema.methods.authenticate = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch)=>{
    if(err)
      return callback(err);
    callback(null, isMatch);
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

UserSchema.methods.hashPassword = function(password){
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.set('toJSON',{getters: true, virtuals: true});

UserSchema.plugin(AutoIncrement, {inc_field: 'userId'});

mongoose.model('User', UserSchema);
