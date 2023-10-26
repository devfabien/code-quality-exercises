function fibonacciSequence(number) {
  const sequence = [0, 1];
  for (let index = 0; index <= number-2; index++) {
    sequence.push(sequence[index + 1] + sequence[index]);
  }
  return sequence;
}
