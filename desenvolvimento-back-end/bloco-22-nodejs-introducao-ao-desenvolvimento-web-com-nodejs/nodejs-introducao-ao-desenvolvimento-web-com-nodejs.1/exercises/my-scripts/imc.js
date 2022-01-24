const readline = require('readline-sync');

const weight = readline.questionFloat("Qual o seu peso em kilos? ");
const height = readline.questionFloat("Qual a sua altura em metros? ");

const calculateImc = (weight, height) => {
  const imcValue = (weight / Math.pow(height, 2)).toFixed(1);
  let message = ``;

  if (imcValue < 18.5) {
    message = `Seu IMC é de ${imcValue} kg por metro quadrado que corresponde à condição de Abaixo do peso (magreza)`;
    return console.log(message);
  } else if (imcValue <= 24.9) {
    message = `Seu IMC é de ${imcValue} kg por metro quadrado que corresponde à condição de Peso normal`;
    return console.log(message);
  } else if (imcValue <= 29.9) {
    message = `Seu IMC é de ${imcValue} kg por metro quadrado que corresponde à condição de Acima do peso (sobrepeso)`;
    return console.log(message);
  } else if (imcValue <= 34.9) {
    message = `Seu IMC é de ${imcValue} kg por metro quadrado que corresponde à condição de Obesidade grau I`;
    return console.log(message);
  } else if (imcValue <= 39.9) {
    message = `Seu IMC é de ${imcValue} kg por metro quadrado que corresponde à condição de Obesidade grau II`;
    return console.log(message);
  } else {
    message = `Seu IMC é de ${imcValue} kg por metro quadrado que corresponde à condição de Obesidade grau III e IV`;
    return console.log(message);
  }
};

calculateImc(weight, height);
