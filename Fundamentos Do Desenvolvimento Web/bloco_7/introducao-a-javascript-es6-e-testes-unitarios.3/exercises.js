const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9, "four plus five is equal nine");
assert.strictEqual(sum(0, 0), 0, "zero plus zero is equal zero");
assert.throws(() => {sum(4, "5");},
  /parameters must be numbers/);
