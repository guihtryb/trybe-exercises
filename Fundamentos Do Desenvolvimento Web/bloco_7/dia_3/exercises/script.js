// Exercício 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    // throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
const expected = sum(4, 5);

assert.deepStrictEqual(expected, 9, "4 + 5 = 9");
assert.deepStrictEqual(sum(4, "5"), 9);
assert.deepStrictEqual(sum(0, 0), 0);
assert.throws(() => {
    sum(4, '5')
}, /^Error: parameters must be numbers$/);

// Exercício 2

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3], 2), [1, 3]);
