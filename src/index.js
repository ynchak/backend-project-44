import readlineSync from 'readline-sync';
import greeting from './cli.js';

const countSteps = 3;

const engine = (rules, getData) => {
  const player = greeting();
  console.log(rules);
  for (let i = 0; i < countSteps; i += 1) {
    const [question, answer] = getData();
    console.log('Question: ', question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answer !== playerAnswer) {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`
      );
      console.log(`Let's try again, ${player}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${player}!`);
};

export default engine;
