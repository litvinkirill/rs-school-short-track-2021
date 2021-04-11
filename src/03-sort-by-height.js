/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.slice();
  const arr1 = [];
  let i = -1;
  // eslint-disable-next-line no-cond-assign
  while ((i = arr.indexOf(-1, i + 1)) > -1) {
    arr1.push(i);
  }
  const resarr = arr1.slice();
  while (resarr.length) {
    result.splice(resarr.pop(), 1);
  }
  result.sort((a, b) => a - b);
  while (arr1.length) {
    result.splice(arr1.shift(), 0, -1);
  }
  return result;
}

module.exports = sortByHeight;
