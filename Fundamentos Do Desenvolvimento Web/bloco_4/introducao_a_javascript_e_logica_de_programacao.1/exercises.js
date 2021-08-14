// 1. Arithmethic basic operations
const a = 20;
const b = 9;

console.log(`Addition of ${a} with ${b} is equal to: ${a + b}`);
console.log(`Subtraction of ${a} with ${b} is equal to: ${a - b}`);
console.log(`Multiplication of ${a} with ${b} is equal to: ${a * b}`);
console.log(`Division of ${a} with ${b} is equal to: ${a / b}`);
console.log(`Modulus of ${a} with ${b} is equal to: ${a % b}`);

// 2. Return biggest of two nums

const value1 = 95;
const value2 = 77;

if (value1 > value2 ) {
  console.log(`${value1} is bigger than ${value2}`);
} else if(value1 < value2) {
  console.log(`${value2} is bigger than ${value1}`);
} else {
  console.log(`${value1} is equal to ${value2}`);
}

// 3. Return the biggest of three nums

const value1 = 10;
const value2 = 20;
const value3 = 100;

if (value1 > value2 && value1 > value3 ) {
  console.log(`${value1} is bigger than ${value2} and bigger than ${value3}`);
} else if(value2 > value3) {
  console.log(`${value2} is bigger than ${value1} and bigger than ${value3}`);
} else if( value3 > value2) {
  console.log(`${value3} is bigger than ${value1} and bigger than ${value2}`);
} else {
  console.log(`${value1} = ${value2} = ${value3}`);
}

// 4. Return 'positive' if the value is positive, 'negative' if negative and 'zero' otherwise
const num = 1000;
if (num > 0) console.log('positive');
else if (num < 0) console.log('negative');
else console.log('zero');

// 5. Return true if the angles correspond to a triangle or false otherwise
const ab = -30;
const ac = 60;
const bc = 100;

if (ab < 0 || ac < 0 || bc < 0) {
  console.log('Values must be positive');
} else if (ab + ac + bc === 180) {
  console.log(true);
} else {
  console.log(false);
}

// 6. Receive the name of a chess piece and return it's movement
const piece = 'Knight'

if (piece.toLowerCase() === 'pawn' ) console.log('Two squares to front if is the first movement, or just one square to front otherwise. Attack in one square on the diagonal');
if (piece.toLowerCase() === 'king' ) console.log('One square to any direction');
if (piece.toLowerCase() === 'queen' ) console.log('Until the end of the table in the horizontals, verticals and diagonals');
if (piece.toLowerCase() === 'rook' ) console.log('Until the end of the table in the horizontals and verticals');
if (piece.toLowerCase() === 'bishop' ) console.log('Until the end in the diagonals');
if (piece.toLowerCase() === 'knight' ) console.log('Moves in "L", two squares to one direction and one in the other direction');
else console.log('Ivalid piece');

// 7. Convert grades given in percentage to 'A' , 'B' ... 'F'
const grade = 100;
if (grade > 100 || grade < 0) console.log('Grades must be among 0 and 100');
else if (grade >= 90) console.log('A');
else if (grade >= 80) console.log('B');
else if (grade >= 70) console.log('C');
else if (grade >= 60) console.log('D');
else if (grade >= 50) console.log('E');
else if (grade < 50) console.log('F');

// 8. Returns true if at least one value is even and false otherwise
const a = 104;
const b = 63;
const c = 27;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) console.log(true);
else console.log(false);

// 9. Returns true if at lesast one value is odd or false otherwise
const a = 10;
const b = 60;
const c = 2;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) console.log(true);
else console.log(false);

// 10. Calculates the profit sold thousand units of a product
const sellPrice = 105.5;
const buyPrice = 63;
let tax = 0.2;

if (sellPrice < 0 || buyPrice < 0 ) console.log("Values must be positive");
else {
  const buyTotalPrice = buyPrice * (tax + 1);
  const profit = sellPrice * 1000 - buyTotalPrice * 1000;
  console.log(`The profit is equal to: R$${profit.toFixed(2)}`);
}

// 11. Given a gross salary, calculates net salary

const grossSalary = 3000;

// let netSalary;
let incomeTax;
let aliquotINSS;

// let baseSalary;

// Reduzir logs e variáveis, achar Income e inss taxs then calculate base and net salary
if (grossSalary <=  1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  incomeTax = 0;
} else if(baseSalary <= 2826.65) {
  incomeTax = baseSalary * 0.075 - 142.8
} else if( baseSalary <= 3751.05) {
  incomeTax = baseSalary * 0.15 - 354.8;
} else if (baseSalary <= 4664.68) {
  incomeTax = baseSalary * 0.025 - 636.13;
} else {
  incomeTax = baseSalary * 0.275 - 869.36;
}
let netSalary = baseSalary - incomeTax;
console.log(`Your net salary is equal to: R$${netSalary}`);
