function sumOfArray(array, index = 0) {
  return index === array.length
    ? 0
    : array[index] + sumOfArray(array, index + 1);
}
