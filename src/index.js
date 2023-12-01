import readlineSync from 'readline-sync';
import { greeting, greetingPlayer, printTheRulesOfGame } from './cli.js';

const countSteps = 3;

const engin = (rules, getData) => {
  greeting();
  const player = readlineSync.question('May I have your name? ');
  greetingPlayer(player);
  printTheRulesOfGame(rules);
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

export default engin;
