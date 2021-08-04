// Promises

// Promises - Construtor
const promise = new Promise((resolve, reject) => {

});

// Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10.
//  Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso.
//  Nosso programa ficaria assim:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    // Se não tivesse o return, o código continuaria.
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});

// Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch().
//  Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));

// Preciso tratar o erro, para isso ultilizo o .catch();
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));


// Fetch API

// Erros Comuns

// Console.log numa variável que depende do fetch, que é assíncrono
const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
    const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    // Meu teste passando console.log para o .then();
    .then((msg) => console.log(msg))
    .catch((err) => err);
}

sendJokeToFriend("Anna");

// refatorar a função verifiedFetch para usar async :

// adicionar async antes da função
// transformar o que é resolve em return e o que é reject em throw
const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

// Refatorar função implementando await

// 'Esperar o fetch ser verificado'

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => (r.value));
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");
