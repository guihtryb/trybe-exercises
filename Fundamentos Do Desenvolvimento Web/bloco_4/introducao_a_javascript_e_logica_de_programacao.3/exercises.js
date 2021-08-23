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
