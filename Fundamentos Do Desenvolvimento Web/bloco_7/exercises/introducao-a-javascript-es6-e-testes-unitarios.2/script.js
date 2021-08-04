const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);
customer1['firstJob'] = 'Sambatech';
console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

/* Criar função que receba três parâmetros, sendo eles: um objeto, 
o nome de uma chave e o seu valor.  O retorno dessa função deve
ser o objeto já com a nova chave adicionada nele. */
const developer = {
  firstName: 'Guilherme',
  middleName: 'Heráclito',
  lastName: 'Viana',
};


function objectNewKey (object, newKey, newKeyValue) {  
  const key = newKey;
  const value = newKeyValue
  object[key] = value;

  return object;
}
objectNewKey(developer, 'favoriteTech', 'Python');

console.log(developer);

// Obect.keys

/* Tente criar uma função que exiba as habilidades do objeto student.
 Cada habilidade deve ser exibida no formato "Nome da habilidade,
 Nível: valor da chave referente à habilidade".*/
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
console.log(Object.keys(student1));
const listSkills = (student) => Object.keys(student);
console.log(listSkills(student1));
// Maneira 1

function skillsLevel(student) {
  for (key in student){
    let skill = key;
    let level = student[key];
    let skillsLevelList = `${skill}, Nível: ${level}`; 
    console.log(skillsLevelList);
  }
}
console.log('Estudante 1: ')
skillsLevel(student1);

console.log('Estudante 2: ')
skillsLevel(student2);
// Maneira 2

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

// Object.values

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Com Object.values
console.log(listSkillsValuesWithValues(student));

// Object.entries

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  // console.log(pairKeyValue[index]);
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};