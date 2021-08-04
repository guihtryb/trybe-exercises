// .Reduce

const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// Achar o maior valor de um array, primeiro for e depois reduce
// for
const numbers = [32, 15, 3, 2, -5, 56, 10];
const getBiggerValue = (array) => {
let maiorValor = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > maiorValor) {
      maiorValor = array[index];
    }
  }
  return console.log(maiorValor);
}

getBiggerValue(numbers);//56


const numbers = [32, 15, 3, 2, -5, 506, 10];

const getBigger = (bigger, number) => (bigger > number)? bigger : number;

// atribuir resultado do reduce a uma variável 
const bigger = numbers.reduce(getBigger);
console.log(bigger);

// faça uma função que some todos os números pares do array:
// Tente criar uma usando reduce e filter , e outra apenas usando reduce .
// Usando filter e reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumArrayNumbers = (valorCorrente, number) => valorCorrente + number;

const getSumOfEvenNumbers = (array) => array.filter(getEven).reduce(sumArrayNumbers);
const sumOfEvens = getSumOfEvenNumbers(numbers);

console.log(sumOfEvens);


// Usando apenas reduce 
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvens = (result, number) => (number % 2 === 0)?result + number : result;

const sumNumbers = (arr) => arr.reduce(sumEvens);

console.log(sumNumbers(numbers));

/* Agora crie uma função usando os dados dos estudantes que usamos no conteúdo
do dia anterior, para mostrar na tela um relatório que diz em qual matéria
o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !*/

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

console.log(estudantes.materias.name);
// // Função que usarei no reduce
// const getBestSubject = (result, subject) => {
//   if (result.nota > subject.nota) return result;
//     return subject;
// }

// // Função que retornará relatório

// const showBestSubject = (students) => students.map((student) => ({
//   name: student.nome,
//   materia: student.materias.reduce(getBestSubject),
// }));

// console.log(showBestSubject(estudantes));


const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: `${student.materias.reduce(getBestClass).name} -> Nota: ${student.materias.reduce(getBestClass).nota}`}));
  
  console.log(reportBetter(estudantes));
  
// Somar números com reduce  
const pearlJam = [
  {
    name: 'Pearl Jam',
    singer: 'Eddie Vedder',
    bassist: 'Jeff Ament'
  },
];
