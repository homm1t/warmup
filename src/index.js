module.exports = function warmup(temperature) {
  if(isNaN(temperature)) {
    return null;
  } 
  return temperature * 9/5 + 32;
};
