function calculateAverage(numbers) {
  return (
    numbers.reduce((accumulator, current) => accumulator + current, 0) /
    numbers.length
  );
}
