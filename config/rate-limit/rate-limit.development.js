const ExpressBrute = require('express-brute');

var store = new ExpressBrute.MemoryStore();

/* user limiter - 10 req in 2 min */
exports.authLimiter = new ExpressBrute(store, {
    freeRetries: 10,
    minWait: 1000*5, // 5 sec
    maxWait: 2*60*1000, // 2 min
    lifetime: 2*60, // 2 min
  refreshTimeoutOnRequest: false
});

/* user update limiter - 20 req in 5 mins */
exports.userUpdateLimiter = new ExpressBrute(store, {
  freeRetries: 20,
  minWait: 1000*60,
  maxWait: 5*60*1000,
  lifetime: 5*60,
  refreshTimeoutOnRequest: false
});

/* genetics limiter - 1000 req in 5 min */
exports.geneticsLimiter = new ExpressBrute(store, {
  freeRetries: 1000,
  minWait: 30*1000, // 30 sec
  maxWait: 7*60*100, // 7 min,
  lifetime: 5*60, // 5 min
  refreshTimeoutOnRequest: false
});
