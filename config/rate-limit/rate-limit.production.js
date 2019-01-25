const ExpressBrute = require('express-brute');
const MemcachedStore = require('express-brute-memcached');

var store = new MemcachedStore('127.0.0.1');

/* production limits - do not send headers */

/* user limiter - 10 req in 2 min */
exports.authLimiter = new ExpressBrute(store, {
  freeRetries: 10,
  minWait: 1000*5, // 5 sec
  maxWait: 2*60*1000, // 2 min
  lifetime: 2*60, // 2 min
  refreshTimeoutOnRequest: true,
  attachResetToRequest: false
});

/* user update limiter - 20 req in 5 mins */
exports.userUpdateLimiter = new ExpressBrute(store, {
  freeRetries: 20,
  minWait: 1000*60, // 60 sec
  maxWait: 5*60*1000, // 5 min
  lifetime: 5*60, // 5 min
  refreshTimeoutOnRequest: false,
  attachResetToRequest: false
});

/* genetics limiter - 100 req in 1 min */
exports.geneticsLimiter = new ExpressBrute(store, {
  freeRetries: 100,
  minWait: 1000, // 1 sec
  maxWait: 3*60*100, // 1 min,
  lifetime: 1*60, // 1 min
  refreshTimeoutOnRequest: false,
  attachResetToRequest: false
});
