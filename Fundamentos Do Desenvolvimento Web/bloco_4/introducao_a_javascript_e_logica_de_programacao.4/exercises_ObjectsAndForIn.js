let info1 = {
  character: 'Margarida',
  origin: 'Pato Donald',
  note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// Exercise 1 - Log a welcome message for the character above

// Acess console passing the 'log' method.
// concatenate string 'Bem-vinda, ' with the value of the key 'character'

console.log('Bem-vinda, ' + info1.personagem);

// Exercise 2 - Add a new property to the object with the key name 'recurrent' and the value 'Yes'.

info1['recurrent'] = 'Yes';

console.log(info1);

// Exercise 3 - Do a for/in that shows all the keys of the 'info' object

for (let key in info1) {
  console.log(key);
}

// Exercise 4 - Do a for/in that shows all the values of the 'info' object keys

for (let key in info1) {
  console.log(info1[key]);
}

// Exercise 5 - Create a new object with the same keys of 'info' but with different values. Then log 'object1.value and object2.value' for each key

let info2 = {
  character: 'Tio Patinhas',
  origin: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  note: 'O último MacPatinhas',
  recurrent: 'Yes',
};

// if the values in 'recurrent' are equals, log 'Both recurring'
for (let key in info1 ) {
  if (info1[key] === info2[key]) console.log('Both recurring');
  else console.log(info1[key] + ' and ' + info2[key]);
}
