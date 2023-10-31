function calculateMatrixSum(matrix) {
  return matrix
    .flat()
    .reduce((accumulator, current) => accumulator + current, 0);
}
