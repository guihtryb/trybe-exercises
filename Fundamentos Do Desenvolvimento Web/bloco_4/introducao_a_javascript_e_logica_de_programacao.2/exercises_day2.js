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
