function isPrime(number) {
  if (number < 2) return false;

  for (let index = 2; index < number; index++) {
    if (number % index === 0) return false;
  }
  return true;
}
