/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const num = n.toString().split('');
  let summ = 0;
  if (num.length === 1) {
    return n;
  }
  for (let i = 0; i < num.length; i++) {
    summ = Number(summ) + Number(num[i]);
  }
  const num2 = summ.toString().split('');
  let summ2 = 0;
  if (num2.length === 1) {
    return summ;
  }
  for (let i = 0; i < num2.length; i++) {
    summ2 = Number(summ2) + Number(num2[i]);
  }
  return summ2;
}

module.exports = getSumOfDigits;
