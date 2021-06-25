// First Class Functions

// Atribuir funções a variáveis
const sum = (a, b) => a + b;

// Passar funções como argumentos para outras funções
const sayHello = () => {
    console.log('hello trybers');
  }
  
setTimeout(sayHello, 1000);

// Retornar uma função de outra função

const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }

// Higher Order Functions 
// Funções que usam outras funções em suas operações

const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);

// First-Class Functions é o nome do conceito que define a forma que a linguagem (no nosso caso JavaScript)
// trata suas funções, permitindo que sejam suportadas em operações que são usadas em outros tipos (atribuição,
// retorno, parâmetro), e HOF é uma função que atende ao critério de receber como parâmetro e/ou retornar outra função.

// Estruturando uma HOF

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, (number) => {
    if (number % 2 === 0 && number !== 0) {
      console.log(number, 'is even');
    }
  });
  
//  Refatorar para testar quais são os números ímpares e pares


const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };

const isEven = (number) => {
    if (number % 2 === 0) {
        console.log(number, 'is even');
    }
}  

const isOdd = (number) => {
    if ((number % 2) > 0) {
        console.log(number, 'is odd');
    }
}
repeat(5, isEven); 
repeat(5, isOdd); 

