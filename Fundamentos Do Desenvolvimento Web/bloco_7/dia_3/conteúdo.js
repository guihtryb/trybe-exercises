// Ultizando o módulo Assert

const assert = require('assert');

function division(x, y) {
  return x/y;
}

const expected = division(12, 3);

assert.strictEqual(expected, 4, 'Nove dividido por três é igual a três');

// Exemplos de métodos para o assert

const assert = require('assert');
// Refatorar function add
const add = (a, b) => a + b;

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

// Testar objetos e arrays

// método assert.deepStrictEqual

const assert = require('assert');
const { cpuUsage } = require('process');

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

assert.deepStrictEqual(array1, array2, "Arrays são diferentes");

// Fazer teste sem antes criar um expected

const assert = require('assert');

const division = (a, b) => {
   if (b === 0) throw new Error("Divisor não pode ser 0");
   
    return a / b;
}

assert.strictEqual(division(20, 0), 0);

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

// Test Driven Development

// 1 - Teste falha; 2 - Fazer teste funcionar; 3 - Refarar o código

// 1 -
const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');

// 2 -
const assert = require('assert');
function myFunction();
assert.strictEqual(typeof myFunction, 'function');

// 3 -
const assert = require('assert');
const myFunction = (param1, param2) => param1 + param2*param1;
assert.strictEqual(typeof myFunction, 'function');

// Exercícios
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameter must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.throws(() => {
    sum(4, '5');
});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);