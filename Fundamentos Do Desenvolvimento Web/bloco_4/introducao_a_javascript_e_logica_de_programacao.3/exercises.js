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



