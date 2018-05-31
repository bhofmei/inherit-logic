const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const debug = require('debug')('user');

/**
 * Database schema for user
 * @module user.server.model
 * @name User Model
 * @type Model
 */

/**
 * List of valid roles for users and error message
 * @enum {string}
 */
const rolesEnum = {
  /** acceptable values **/
  values: ['admin', 'instr', 'student'],
  /** error message on unacceptable value */
  message: 'Value "{VALUE}" is not a valid role'
};


const UserSchema = new Schema({
  /**
   * @member {number} userId - auto-incremented user ID
   * @index
   */
  userId: {
    type: Number,
    index: true,
    min: 1
  },
  /**
   * @member {string} firstName - user's first name
   * @default
   */
  firstName: String,
  /**
   * @member {string} lastName - user's last name
   * @default
   */
  lastName: String,
  /**
   * @member {string} email - user's email address
   * @required
   */
  email: {
    type: String,
    required: 'Email is required',
    match: /.+\@.+\..+/
  },
  /**
   * @member {string} password - user's password; actual password is not stored in DB
   * @validate
   */
  password: {
    type: String,
    validate: [
      function(password){
        return password.length >= 6;
      }, 'Password should be longer'
    ]
  },
  /**
   * @member {external:COURSE} course - course the user is part of
   */
  course: {
    type: Schema.ObjectId,
    ref: 'Course'
  },
  /**
   * @member {Object<boolean>} accessGranted - for each scenario (as key), has access been granted
   * @example
   * {"scen1": false, "scen2": true, "scen3": true}
   */
  accessGranted: {},
  /**
   * @member {string} role - user's role which is used to determine website access; one of [rolesEnum]{@link #rolesEnum}
   * @default student
   */
  role: {
    type: String,
    enum: rolesEnum,
    default: 'student'
  },
  /**
   * @member {Date} lastLogin - date and time of the last time the user logged in
   * @default time of account creation
   */
  lastLogin: {
    type: Date,
    default: Date.now()
  },
  /**
   * @member {string} resetPasswordToken - token generated for user when they request a password reset; necessary to be able to set the new password
   */
  resetPasswordToken: String,
  /**
   * @member {Date} resetPasswordExpires - date and time that the password-reset token expires; token is no longer valid after this time
   */
  resetPasswordExpires: Date
});

/**
 * Determines if the entered password is correct
 * @function
 * @name authenticate
 * @memberof module:User Model
 *
 * @param {string} candidatePassword - user input password to compare to database
 * @param {function} callback - Callback function to pass result to
 *
 * @returns {function} Pass error message and if password is a match to the callback function
 */
UserSchema.methods.authenticate = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, (err, isMatch)=>{
    if(err)
      return callback(err);
    callback(null, isMatch);
  });
};

/**
 * Update a user password, assuming the `oldPassword` is correct
 * @function
 * @memberof module:User Model
 * @name changePassword
 *
 * @param {string} oldPassword - user input for current password
 * @param {string} newPassword - the new password user wants to change to
 * @param {function} callback - Callback function to pass result to
 *
 * @returns {function} Pass error message or `null` to callback function
 */
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

/**
 * @external COURSE
 * @see {@link course-model.html}
 */
mongoose.model('User', UserSchema);
