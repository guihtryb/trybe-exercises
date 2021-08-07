// 1. Arithmethic basic operations
const a = 20;
const b = 9;

console.log(`Addition of ${a} with ${b} is equal to: ${a + b}`);
console.log(`Subtraction of ${a} with ${b} is equal to: ${a - b}`);
console.log(`Multiplication of ${a} with ${b} is equal to: ${a * b}`);
console.log(`Division of ${a} with ${b} is equal to: ${a / b}`);
console.log(`Modulus of ${a} with ${b} is equal to: ${a % b}`);

// 2. Return biggest of two nums

const value1 = 93;
const value2 = 77;

if (value1 > value2 ) {
  console.log(`${value1} is bigger than ${value2}`);
} else if(value1 < value2) {
  console.log(`${value2} is bigger than ${value1}`);
} else {
  console.log(`${value1} is equal to ${value2}`);
}