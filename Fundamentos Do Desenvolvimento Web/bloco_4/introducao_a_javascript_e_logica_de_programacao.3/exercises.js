// Exercise 1 - Given a "n" value, log one square made of asterisks with side of size n
const n = 8;
let row = '';
const columns = n;

for (let index = 0; index < n; index += 1) {
  row += "*";
}

for (let index = 0; index < columns; index += 1) {
  console.log(`Row ${index + 1}: ${row}`);  
}

// Exercise 2 - Log a triangle of asterisks with base size n

const n = 5;
let row = '';

for (let index = 0; index < n; index += 1) {
  console.log(row += '*');
}

// Exercise 3 - Log a triangle of astersks but now inverted

const n = 5;
let row = '';
let constructor = n - 1;
let asterisk = '*'

for (let rowIndex = 0; rowIndex < n; rowIndex += 1) {
  for (let columns = 0; columns < n; columns += 1) {
    if (columns < constructor) {
      row += ' ';
    }
    else {
      row += asterisk;
    }
  }
  constructor -= 1;
  console.log(row);
  row = ''
}

// Exercise 4 - Log a pyramid with base n
const n = 6;
let row = '';
let divisor = (n + 1) / 2;

let constructorLeft = divisor;
let constructorRight = divisor;

let asterisk = '*';

for (let rowIndex = 0; rowIndex <= divisor; rowIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if ( columnIndex > constructorLeft && columnIndex < constructorRight ) {
      row += asterisk;
    } else {
      row += ' ';
    }
  }
  console.log(row);
  row = '';
  constructorLeft -= 1;
  constructorRight += 1;
};

// Exercise 5 bônus - Log a pyramid with base n that is void inside

// Create n rows e n columns
// if column position is equal === constructor or if rowIndex is equal divisor*, add asterisk
// Log each line
// Turn row to the initial value
// ConstructorLeft minus 1
// ConstructorRight plus 1 

const n = 7;
let row = '';
let divisor = (n + 1) / 2;

let constructorLeft = divisor;
let constructorRight = divisor;

let asterisk = '*';

for (let rowIndex = 1; rowIndex <= divisor; rowIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex !== constructorLeft && columnIndex !== constructorRight && rowIndex !== divisor ) {
      row += ' ';
    } else {
      row += asterisk;
    }
  }
  console.log(row);
  row = '';
  constructorLeft -= 1;
  constructorRight += 1;
}

// Exercise 6 bônus - Do a program that answers if a defined number is prime or no. 

// A prime number is divided only for one and for himself
// Armazenar um número em uma variavel
// Definir uma boolean 'isPrime' que será setada para false caso o número não seja primo 
// fazer um laço for com index de 2 a 9
// laço deve ocorrer apenas se o numero for diferente de 0
// Se o index for DIFERENTE do numero e a divisao entre o numero e o index tiver resto igual a 0, significa que o numero numero não é primo, caso o contrário, é primo.
// Se não for primo, isPrime = false.
// Se for primo, isPrime = true.
// logar  resultado de isPrime

const numberToVerifie = 16;
let isPrime = true;

for (let index = 2; index < 9; index += 1) {
  if (index !== numberToVerifie  && numberToVerifie % index === 0) {
    isPrime = false;
  } 
}

if(isPrime) console.log(`${numberToVerifie} is prime`);
else console.log(`${numberToVerifie} is not prime`);

// Ou

// Constante com valor a ser verificado
// Variável com o numero de divisores = 2
// Criar um laço de 2 a 9
// Se o numero é divisivel pelo valor do index, e o index é diferente do numero n de divisores += 1
// Se valor de divisores > 2, logar número é primo
// Caso contrário, logar número não é primo

const numberToCheck = 48;
let numOfDivisors = 2;

for (let index = 2; index < 9; index += 1) {
  if (numberToCheck !== index && numberToCheck % index === 0) numOfDivisors += 1;
}

if (numOfDivisors > 2) console.log('Number is not prime');
else console.log('Number is prime');
