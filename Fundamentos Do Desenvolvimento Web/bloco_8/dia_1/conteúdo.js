// HOF nos permitem compactar ações e não somente repassar valores;

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(6, (number) => {
    if (number % 2 === 0 && number !== 0) {
      console.log(number, 'is even');
    }
  });

//   Reutilização do código para mais uma implementação
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  const isEven = (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  };
  
  const isOdd = (number) => {
    if ((number % 2) > 0) {
      console.log(number, 'is odd');
    }
  };
  
  repeat(3, isEven); // Testa quais números serão pares;
  repeat(3, isOdd); // Testa quais números serão ímpares;

//   Exemplo de HOF's

const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
const sub = (a, b) => a - b;

const calculator = (opertation) => opertation(10, 2);

console.log(calculator(sum));
console.log(calculator(mult));
console.log(calculator(div));
console.log(calculator(sub));

// Exercício de fixação

const wakeUp = () => `Acordando!!`;
const breakfast = () => `Bora tomar café!!`; 
const restTime = () => `Partiu dormir!!`;

const doingThings = (message) => console.log(message());

doingThings(breakfast);

// Exercícios

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
// função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar um email.
// Formato do email:  nome_da_pessoa@trybe.com 

const person = (nomeCompleto) => {
   const email = `${nomeCompleto.split(' ').join('_').toLowerCase()}@trybe.com`;
   return { nomeCompleto, email,};
}
const newEmployees = () => {
    const employees = {
      id1: person('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: person('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: person('Criss Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.table(newEmployees());