const rand = require('random-js');
const config = require('../../config/config');

/*module.exports = function(){
  if(config.phageSeed === null){
    return new rand(rand.engines.mt19937().autoSeed());
  } else {
    return new rand(rand.engines.mt19937().seed(config.phageSeed));
  }
}*/

exports.getEngine = function(){
  if(config.phageSeed === null){
    return rand.engines.mt19937().autoSeed();
  } else {
    return rand.engines.mt19937().seed(config.phageSeed);
  }
}

exports.randInt = function(min, max, engine){
  return rand.integer(min, max)(engine);
}

exports.randBool = function(engine){
  return rand.bool()(engine);
}

exports.randBoolFrac = function(num, den, engine){
  return rand.bool(num, den)(engine);
}

exports.randDie = function(nSides, engine){
  return rand.die(nSides)(engine);
}

exports.randDice = function(nSides, nDie, engine){
  return rand.dice(nSides, nDie)(engine);
}

exports.randPick = function(inAr, engine){
  return rand.pick(engine, inAr);
}

exports.randShuffle = function(inAr, engine){
  return rand.shuffle(engine, inAr);
}

exports.randReal = function(min, max, engine){
  return rand.real(min, max, false)(engine);
}

exports.getCount = function(engine){
  return engine.getUseCount();
}

exports.reset = function(engine){
  // reset counter when testing
  if(config.phageSeed !== null){
    engine.seed(config.phageSeed);
  } else {
    engine.autoSeed();
  }
}
