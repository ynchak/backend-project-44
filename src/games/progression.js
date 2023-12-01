import engine from '../index.js';
import getRandomInt from '../utils.js';

const getProgression = (length, startValue, addedNumber) => {
  const result = [startValue];
  let prevValue = startValue;
  for (let i = 0; i < length; i += 1) {
    prevValue += addedNumber;
    result.push(prevValue);
  }
  return result;
};

const getData = () => {
  const lengthProgresion = getRandomInt(10) + getRandomInt(6);
  const startValue = getRandomInt(100);
  const addedNumber = getRandomInt(10);
  const question = getProgression(lengthProgresion, startValue, addedNumber);
  const questionIndex = getRandomInt(lengthProgresion);
  const answer = question[questionIndex];
  question[questionIndex] = '..';
  return [question.join(' '), `${answer}`];
};

const progression = () => {
  const rules = 'What number is missing in the progression?';
  engine(rules, getData);
};
export default progression;
