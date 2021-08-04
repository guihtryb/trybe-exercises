// Spread Operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'maça', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Creme de Leite', 'Leite em pó'];

const fruitSalad = (fruit, additional) =>  [...fruit.map((element, index) => `${index + 1}. ${element}`), ...additional.map((element, index) => `${index + fruit.length + 1}. ${element}`)];


console.log(fruitSalad(specialFruit, additionalItens));

// Parâmetros rest

// Permite passar infinitos parametros 
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 20)); // 108

// Object Desctruring

// Permite pegar propriedades específicas de um objeto ou array

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
    };

const { price, seller } = product;
console.log(price); // 1899.05
console.log(seller); // Casas de Minas

// Permite reatribuir um nome à propriedade

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// Passar os valores de um objeto como parâmetros para uma função,

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };
  
const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
  };
  
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


// Array Destructuring

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Exercício - Array Destructuring

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [salute, consoleSalute] = saudacoes;

consoleSalute(salute);

// Organizar dados

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';


// console.log(comida); // gato
// console.log(animal); // agua
// console.log(bebida); // arroz
// console.log(comida, animal, bebida); // gato água arroz

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

// 'Filtrar' array
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// Default destructuring

// Caso a propriedade não exista
const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian


// Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .

  const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

  const person = {
    firstName: 'João',
    lastName: 'Jr II',
  };
  
  const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
  };

  console.log(getNationality(otherPerson)); // Ivan is Russian
  console.log(getNationality(person));//

// Property Shorthand

// Evita repetições como:

const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//  Função acima com shorthand

const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// Aplicar shorthand
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
console.log(getPosition(-19.8157, -43.9542));

// Default parameters

const greeting = (user = 'Fulano') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome Fulano!

// Para fixar
// Para praticar, escreva uma função multiply que multiplique dois números
// passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => number * value;
  
console.log(multiply(8)); //8



          
const products = [
    {
      name: 'laptop',
      price: 1000,
      id: 3,
    },
    {
      name: 'desktop',
      price: 1500,
      id: 2
    },
    {
      name: 'phone',
      price: 500,
      id: 1
    }
  ];
  
  console.log(products.sort((a, b) => b.price - a.price));
  
          