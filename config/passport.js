const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(){
  const User = mongoose.model('User');

  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.deserializeUser( function(id, done){
    User.findOne({
      _id:id
    }, '-password -salt',
                function(err, user){
      done(err, user);
    });
  });
  /*require('./strategies/local.js')();
  require('./strategies/facebook.js')();
  require('./strategies/google.js')();*/
  passport.use(new LocalStrategy( function(username, password, done){
    User.findOne({
      email: username
    }, function(err, user){
      if(err)
        return done(err);
      if(!user){
        return done(null, false, {message: 'Unknown user'});
      }
      if(!user.authenticate(password)){
        return done(null, false, {message: 'Invalid password'});
      }
      return done(null, user);
    });
  }));
}
