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
  const result = str.replace(/([a-z])\1*/g, (string) => (string.length > 1 ? string.length + string[0] : string[0]));
  return result;
}

module.exports = encodeLine;
