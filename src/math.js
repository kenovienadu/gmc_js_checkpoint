/** MATHEMATICAL FUNCTIONS */
const findFactorial = (value = 10) => {
  const lowerValue = value - 1;
  if (!lowerValue) {
    return value;
  }

  return value * findFactorial(lowerValue)
}

const checkPrimeNumber = (value = 24) => {
  let isPrime = true;
  let divider = 2;

  while (isPrime && (divider < value)) {
    const remainder = value % divider;
    isPrime = remainder !== 0;
    divider++;
  }

  return isPrime;
}

const fibonacci = (n = 10) => {
  const sequence = [0, 1];

  while(sequence.length <= n) {
    const lastIndex = sequence.length - 1;
    const sumOfLastTwoValues = sequence[lastIndex] + sequence[lastIndex - 1];
    sequence.push(sumOfLastTwoValues);
  }

  return sequence;
}