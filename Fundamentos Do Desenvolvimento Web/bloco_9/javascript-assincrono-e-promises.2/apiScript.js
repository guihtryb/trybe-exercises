// apiScript.js
// 1.
// Armazenar url em uma constante
const API_URL = 'https://icanhazdadjoke.com/';

// Função para chamar a fetch
const fetchJoke = async () => {
  // Adicionar lógica aqui!

  // Recuperar item
  const jokeContainer = document.querySelector('#jokeContainer');

  // Criar um objeto com os atributos method e headers;
  const object = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  // Função fetch recebe um link (guardado na constante) e um objeto
    fetch(API_URL, object)
    // transformo responso em objeto
    .then((r) => r.json())
    // adiciono valor específico da propriedade retorada pelo fetch no item desejado
    .then((r) => jokeContainer.innerHTML = r.joke)

};

// Ao carregar a página executa a função
window.onload = () => fetchJoke();

// 2.
const fetchPromise = () => {
const promise = new Promise((resolve, reject) => {
  const nums = Array.from ( 
    { length: 10},
    () =>  Math.floor(Math.random() * 47) + 1
    );
  console.log('Array nums: ' + nums);
  const sum = nums.map((number) => number * number).reduce(((acc, curr) => acc + curr), 0);
  console.log('Soma de todos (cada um elavado a dois): ' + sum);
  (sum < 8000) ? resolve(sum) : reject(sum);  
});
  // .then((sum) => console.log(`Promise resolvida! Soma = ${sum} ;)`))
  promise
  // .then((sum) => [2, 3, 5, 10].map((number => sum / number)))
  // .then((newArray) => console.log(`Promise resolvida, novo Array = ${newArray}`))
  // .then((newArray) => newArray.reduce((acc, curr) => acc + curr),0)
  .then((result => console.log(`Promise resolvida! Soma do novo array = ${result}`)))
  .catch((result) =>
   console.log(`${result}?! É mais de oito mil! Essa promise deve ser quebrada!`)
   );
};
fetchPromise();
