import engin from '../index.js';
import getRandomInt from '../utils.js';

const operations = ['+', '-', '*'];

const getAnswer = (left, op, right) => {
  let result = 0;
  switch (op) {
    case '+':
      result = left + right;
      break;
    case '-':
      result = left - right;
      break;
    case '*':
      result = left * right;
      break;
    default:
      console.log('unkown operation');
  }
  return result;
};
const getData = () => {
  const left = getRandomInt(99) + 1;
  const op = operations[getRandomInt(3)];
  const right = getRandomInt(99) + 1;
  const question = `${left} ${op} ${right}`;
  const answer = getAnswer(left, op, right);
  return [question, `${answer}`];
};
const calc = () => {
  const rules = 'What is the result of the expression?';
  engin(rules, getData);
};
export default calc;
