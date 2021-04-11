/*
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length === 1) {
    return 0;
  }
  const array1 = matrix[0];
  const array2 = matrix[1];
  const array3 = matrix[2];
  for (let i = 0; i <= array1.length; i++) {
    if (array1[i] === 0) {
      const index = i;
      array1.splice(index, 1);
      array2.splice(index, 1);
      array3.splice(index, 1);
    }
  }
  for (let j = 0; j <= array2.length; j++) {
    if (array2[j] === 0) {
      const index = j;
      array2.splice(index, 1);
      array3.splice(index, 1);
    }
  }
  for (let j = 0; j <= array2.length; j++) {
    if (array2[j] === 0) {
      const index = j;
      array2.splice(index, 1);
      array3.splice(index, 1);
    }
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const summ = array1.reduce(reducer);
  const summ2 = array2.reduce(reducer);
  const summ3 = array3.reduce(reducer);
  return summ + summ2 + summ3;
}

module.exports = getMatrixElementsSum;
