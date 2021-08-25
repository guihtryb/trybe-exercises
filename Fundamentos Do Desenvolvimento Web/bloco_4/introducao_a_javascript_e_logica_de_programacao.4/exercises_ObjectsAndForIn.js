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

