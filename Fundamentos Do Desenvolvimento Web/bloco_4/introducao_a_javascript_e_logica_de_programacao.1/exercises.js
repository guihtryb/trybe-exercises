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
