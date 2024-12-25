const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let current = "";
  let count = 0;
  for (let i = 0; i <= str.length; i += 1 ) {
    if (current === "") {
      count += 1;
      current = str[i];
    }else if (current === str[i]) {
      count += 1;
      current = str[i];
    } else if (current !== str[i]) {
      if (count === 1) {
        res += str[i - 1];
        current = str[i];
        count = 1;
      } else {
        res += count + str[i - 1];
        current = str[i];
        count = 1;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
