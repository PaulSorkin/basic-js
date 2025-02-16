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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let myArr = Array.from(n.toString());
  resArr = myArr.map(el => +el).sort((a, b) => b - a);
  let result = '';
  for (let i=0; i < myArr.length - 1; i++) {
    result = result + resArr[i];
  }
  return +result;
}

module.exports = {
  deleteDigit
};

