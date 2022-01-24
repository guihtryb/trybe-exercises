const readline = require('readline-sync');


const playAgain = () => {
  const userAnswer = readline.question("Deseja jogar novamente? (S/N)");
  if ((userAnswer).toLowerCase() === 's') {
    return playGame()
  } else {
    return console.log("Até mais!");
  }
};

const playGame = () => {
  const userAnswer = readline.questionInt("Em qual número estou pensando de 0 a 10? ");
  const rightAnswer = Math.round(Math.random() * 10);
  const feedback = rightAnswer === userAnswer ? `Parabéns, número correto! Era o ${rightAnswer}!` : `Opa, não foi dessa vez. O número era ${rightAnswer}`;
  console.log(feedback);
  playAgain();
};

playGame();