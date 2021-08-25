let info = {
  character: 'Margarida',
  origin: 'Pato Donald',
  note: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// Exercise 1 - Log a welcome message for the character above

// Acess console passing the 'log' method.
// concatenate string 'Bem-vinda, ' with the value of the key 'character'

console.log('Bem-vinda, ' + info.personagem);

// Exercise 2 - Add a new property to the object with the key name 'recurrent' and the value 'Yes'.

info['recurrent'] = 'Yes';

console.log(info);

// Exercise 3 - Do a for/in that shows all the keys of the 'info' object

for (let key in info) {
  console.log(key);
}

// Exercise 4 - Do a for/in that shows all the values of the 'info' object keys

for (let key in info) {
  console.log(info[key]);
}
