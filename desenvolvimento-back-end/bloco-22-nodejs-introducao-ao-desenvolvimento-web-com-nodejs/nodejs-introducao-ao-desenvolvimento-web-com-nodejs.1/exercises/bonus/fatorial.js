const readline = require('readline-sync');

const getFactorial = () => {
  let userInput = readline.questionInt("Digite um número para obter seu fatorial: ");
  let factorial = 1;

  if (!(userInput > 0)) {
    console.log("Digite um valor maior que 0. \n");
    getFactorial();
  }

  for (let index = userInput; index > 1; index -= 1) {
    factorial *= index;
  }
  console.log(factorial);;

  const runAgain = readline.question("Deseja obter outro fatorial? (S/N) ");

  return runAgain.toLowerCase() === 's' ? getFactorial() : console.log("Até mais!");
};

module.exports = { getFactorial };
