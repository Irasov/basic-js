const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  for(let i = 0; i < domains.length; i += 1) {
    let arr = domains[i].split(".").reverse();
    let domen = "";
      for(let j = 0; j < arr.length; j += 1) {
      domen += `.${arr[j]}`;
      if (res[domen]) {
        res[domen] += 1;
      } else {
        res[domen] = 1; 
      }
    };
  };
  return res;
}

module.exports = {
  getDNSStats
};
