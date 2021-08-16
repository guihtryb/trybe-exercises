let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercise 1 - Go through all the array above and log each one of his values
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Exercise 2 - sum all the values of the array an log the final result
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
console.log(sum);

// Exercise 3 - calculate and log the arithimetic average of the array 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index]
}

let average = sum / numbers.length;

console.log(average);

/* Exercise 4 - with the same code above,
case the result be higher than 20, log "Value higher than 20", else log "Value lower or equal 20"*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let average = 0;

for (let index = 0; index < numbers.length; index += 1) {
  average += numbers[index]
}

  average = average / numbers.length;

if (average > 20) {
  console.log(`Value higher than 20`);
} else {
  console.log(`Value lower or equal 20`);
}

// Exercise 5 - Discover the higher value of the array using for 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNum = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  
  if (higherNum < numbers[index]) {
    higherNum = numbers[index];
  }
}

console.log(higherNum);

// Exercise 6 - Discover how many odd numbers exist in the array and log the result. Case there isn't any odd number, log 'No odd values founded'
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantyOfOddNums = 0;

for (let index = 0; index < numbers.length; index += 1) {
  let number = numbers[index];
  
  if (number % 2 !== 0) {
    quantyOfOddNums += 1;
  }
}

if (quantyOfOddNums === 0) {
  console.log('No odd values founded!');
} else {
  console.log(`quantyOfOddNums: ${quantyOfOddNums}`);
}

// Exercise 7 - Find the lower value of the array and log it
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerNum = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (lowerNum > numbers[index]) {
    lowerNum = numbers[index]
  }
}

console.log(lowerNum);

// Exercise 8 - Using for, create an array ranging from 1 to 25 and log the final result 
let newArray = [];
let arrayLength = 25;

for (let index = 0; index <= arrayLength; index += 1) {
  const newNum = index;
  newArray.push(newNum);
}

console.log(newArray);

// Exercise 9 - Using the array created above, log the result of each value divided by 2 
for (let index = 0; index < newArray.length; index++) {
  const num = newArray[index];
  if (num !== 0) {
  console.log(`${num}/2: ${num / 2}`);
  }
}
