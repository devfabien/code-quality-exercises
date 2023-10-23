function calculateFactorial(number) {
  if (number === 0 || number === 1) return 1;

  let factorial = 1;
  for (let index = 2; index <= number; index++) {
    factorial *= index;
  }

  return factorial;
}
