import engine from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (number) => !(number % 2);

const getData = () => {
  const question = getRandomInt(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const even = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  engine(rules, getData);
};
export default even;
