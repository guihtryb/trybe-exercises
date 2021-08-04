// Classificar alunos como aprovados ou reprovados com forEach(() => );

const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student) => {
      if (student.grade >= 70) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  const evalutor = () => students.forEach((item, index) => {
      if (item.approved === 'Aprovado') {
        students[index]['evaluator'] = 'Next step!';          
      } else {
        students[index]['evaluator'] = 'Review!';
    }
  })

  evalutor();

  console.table(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]

// Achar o primeiro múltiplo de 5 con find(() =>)


const ids = [11, 20, 35, 47, 50, 62, 75, 81, 96, 100];
// let firstMultipleOf5;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 5 === 0) {
//     firstMultipleOf5 = numbers[index];
//     break;
//   }
// }

// console.log(firstMultipleOf5);
// // 50
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5  = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);

// Estrutura das HOFs

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('---------------------------------');
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// Tabuada do dois com forEach

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = numbers.forEach((element) => console.log(`${element} * 2: ${element * 2}`));

// Names teste

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

// forEach 

// Para fixar
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'ana_roberta@email.com',
    'fabiano@email.com',
    'marquito_sousa@email.com',
  ];
// Adicione seu código aqui
  
const showEmailList = (email) => {
    let name;
        if (email.includes('_')) {
          name = email.slice(0, email.indexOf('_'));
        } else {
          name = email.slice(0, email.indexOf('@'));
        }
        console.log(`Well done ${name.charAt(0).toUpperCase() + name.substr(1)}! O email ${email} esta cadastrado em nosso banco de dados!`);
};
  
emailListInData.forEach(showEmailList);

// find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

// Para fixar
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:


const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5());

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
 
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => names.find((name) => name.length === 5);

console.log(findNameWithFiveLetters());

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {  
  return musicas.find((musica) => musica.id);
}

console.log(findMusic('31031685'));

// .some e .every

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('M', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

// Exemplo

const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

// Para fixar
/*  1 -Escreva uma função que dado um array de nomes
 e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some;*/

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name);


console.log(hasName(names, 'José'));

/* 2 - Escreva uma função que dado um array de pessoas e uma idade mínima
retorne true se todas tiverem a idade maior ou igual a mínima e caso
contrário false , use every ; */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);


console.log(verifyAges(people, 10));

// .sort

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); 

// fixar
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
people.sort((a, b) => a.age - b.age)
console.log(people);

// Ordem alfabética
people.sort((a, b) => { 
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;;
});

console.log(people);
