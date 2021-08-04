// .filter()

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyOdd = (number) => number % 2 > 0;

const isOdd = numbers.filter(verifyOdd);

console.log(isOdd); // [ 19, 21, 3, 45, 15 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isOdd2 = numbers.filter((number) => number % 2 > 0);

console.log(isOdd2); // [ 19, 21, 3, 45, 15 ]

// Filtrar pessoas que não podem dirigir
const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
  
  const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
  );
  
//   console.log(verifyAgeDrive(objPeople));
  // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
  );

// Send them a message
const youCantDrive = (arrayOfPeople) => {
    let cantDrive = verifyAgeDrive(arrayOfPeople);
    cantDrive.forEach((person) => console.log(`Hey Mr ${person.name}, you can't drive yet!`));  
};

youCantDrive(objPeople);

// Usando o filter para remover um item indesejado

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Manuela' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Manuela', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Jorge', 'Ricardo', 'Wilson' ]

// .map()

const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]


// Usando filter e map

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
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name}: ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  
console.log(reportStatus('Natalia', estudantes));
