function romanNumberDecoder(romanNumber) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanNumberArray = romanNumber.split("");
  return romanNumberArray
    .map((roman) => romanNumerals[roman])
    .reduce(
      (acc, value, index, array) =>
        array[index + 1] > value ? acc - value : acc + value,
      0
    );
}
