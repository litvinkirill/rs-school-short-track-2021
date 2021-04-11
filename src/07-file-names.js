/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  const a = '(1)';
  const result2 = [];
  const b = '(2)';
  for (let i = 0; i < names.length; i++) {
    if (result.includes(names[i])) {
      result.push(`${names[i] + a}`);
    } else {
      result.push(names[i]);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result2.includes(result[i])) {
      result2.push(`${names[i] + b}`);
    } else {
      result2.push(result[i]);
    }
  }
  return result2;
}

module.exports = renameFiles;
