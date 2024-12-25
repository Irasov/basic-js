const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  arr = [];
  mas = String(n).split("");
  for(let i = 0; i < mas.length; i += 1) {
    mas.splice(i, 1);
    arr.push(Number(mas.join("")));
    mas = String(n).split("");
  }
  return arr.reduce((acc = 0, el) => acc < el ? el : acc);
}

module.exports = {
  deleteDigit
};
