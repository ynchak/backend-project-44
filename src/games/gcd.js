import engine from '../index.js';
import getRandomInt from '../utils.js';

const getGcd = (a, b) => {
  let firstNumber = Math.abs(a);
  let secondNumber = Math.abs(b);
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) firstNumber -= secondNumber;
    else secondNumber -= firstNumber;
  }
  return firstNumber;
};

const getData = () => {
  const firstNumber = getRandomInt(100);
  const secondNumber = getRandomInt(100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${getGcd(firstNumber, secondNumber)}`;
  return [question, answer];
};
const gcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  engine(rules, getData);
};

export default gcd;
