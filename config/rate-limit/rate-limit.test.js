const ExpressBrute = require('express-brute');

var store = new ExpressBrute.MemoryStore();

/* none of the limits should be hit when in the test environment */

/* user limiter - 10000 req in 2 min */
exports.authLimiter = new ExpressBrute(store, {
    freeRetries: 10000,
    minWait: 1000*5, // 5 sec
    maxWait: 2*60*1000, // 2 min
    lifetime: 2*60, // 2 min
  refreshTimeoutOnRequest: false
});

/* user update limiter - 20000 req in 5 mins */
exports.userUpdateLimiter = new ExpressBrute(store, {
  freeRetries: 20000,
  minWait: 1000*60, // 60 sec
  maxWait: 5*60*1000, // 5 min
  lifetime: 5*60, // 5 min
  refreshTimeoutOnRequest: false
});

/* genetics limiter - 10000000 req in 1 min */
exports.geneticsLimiter = new ExpressBrute(store, {
  freeRetries: 10000000,
  minWait: 1000, // 1 sec
  maxWait: 3*60*100, // 3 min,
  lifetime: 1*60, // 5 min
  refreshTimeoutOnRequest: false
});
