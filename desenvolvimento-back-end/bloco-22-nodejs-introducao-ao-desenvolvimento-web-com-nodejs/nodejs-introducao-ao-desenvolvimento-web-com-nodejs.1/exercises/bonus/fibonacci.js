const readline = require('readline-sync');

const getFibonnaci = () => {
  const fibonnaciLimit = readline.questionInt("Quantos elementos da sequencia Fibonnaci você deseja? ");

  const fibonnaci = [0, 1];

  if(!(fibonnaciLimit > 0)) {
    console.log("Digite um valor maior que 0");
    getFibonnaci();
  }
  
  for (let index = 1; fibonnaci.length <= fibonnaciLimit; index += 1) {
    let newNumber = fibonnaci[index] + fibonnaci[index - 1];
    fibonnaci.push(newNumber);
  }

  fibonnaci.shift();
  let fibonnaciValue = fibonnaci.join(' ');
  return console.log(fibonnaciValue);
};

getFibonnaci();

module.exports = { getFibonnaci };
