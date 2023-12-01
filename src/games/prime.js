import engine from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const getData = () => {
  const question = getRandomInt(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const prime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  engine(rules, getData);
};
export default prime;
