const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = "";
  let sep =  options.separator !== undefined ? options.separator : "+";
  let sepAdd  = options.additionSeparator !== undefined ? options.additionSeparator : "|";
  if(typeof str !== "string") str = String(str);
  if(typeof options.addition !== "string" && options.addition !== undefined) options.addition = String(options.addition);
  function addAdition(){
    if(options.addition !== undefined) {
      if(options.additionRepeatTimes !== undefined) {
        for(let j = 0; j < options.additionRepeatTimes; j += 1){
          res += options.addition;
          if(j + 1 < options.additionRepeatTimes) res += sepAdd;
        }
      } else {
        res += options.addition;
      }
    }
  }
  if(options.repeatTimes !== undefined) {
    for(let i = 0; i < options.repeatTimes; i += 1){
      res += str
      addAdition();
      if( i + 1 < options.repeatTimes) res += sep;
    }
  } else {
    res = str;
    addAdition()
  }
  return res;
}

module.exports = {
  repeater
};
