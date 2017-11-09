const rand = require('random-js');
const config = require('../../config/config');

module.exports = function(){
  if(config.phageSeed === null){
    return new rand.engines.mt19937().autoSeed();
  } else {
    return new rand.engines.mt19937().seed(config.phageSeed);
  }
}
