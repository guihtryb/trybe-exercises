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