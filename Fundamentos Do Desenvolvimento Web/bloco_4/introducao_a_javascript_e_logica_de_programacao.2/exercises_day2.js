let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercise 1 - Go through all the array above and log each one of his values
for (let index = 0; index < numbers.length; index+=1) {
  console.log(numbers[index]);
}

// Exercise 2 - sum all the values of the array an log the final result
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
console.log(sum);

// Exercise 3 - calculate and log the arithimetic average of the array 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index]
}
let average = sum / numbers.length;
console.log(average);

/* Exercise 4 - with the same code above,
case the result be higher than 20, log "Value higher than 20", else log "Value lower or equal 20"*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index]
}

let average = sum / numbers.length;

if (average > 20) {
  console.log(`Value higher than 20`);
} else {
  console.log(`Value lower or equal 20`);
}

