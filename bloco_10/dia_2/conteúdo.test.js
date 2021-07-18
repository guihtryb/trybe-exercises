// Testando callbacks

// test("Não deveria passar!", () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!')
//     }, 500);
//   });

// O Jest não espera o test acabar, gerando um resultado falso-positivo
// Devo então ultilizar o done

// test("Não deveria passar!", (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// +1 exemplo:

// const SumNumbers = (a, b, callback) => {
//   setTimeout(() => { 
//     const result = a + b;
//     callback(result);
//   }, 200)
// }

// test('Testando a função SumNumbers, soma 10 com 20', (done) => {
//   // Chamar função
//   SumNumbers(10, 20, (result) => {
//     expect(result).toBe(30);
//     done();
//   })
// });

// Promises

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals =  (type) => (
  findAnimalsByType(type).then(list => list)
);

getListAnimals('Dog');

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    // Declaro o número de testes/expectations
    expect.assertions(2);
    // retorno a promise -> "se der certo" .then(resultado) => { compara isso, faça esse teste...})
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

describe('Quando o tipo do animal não existe', () => {
  test('Retorne a lista de animais', () => {
    // Declaro o número de testes/expectations
    expect.assertions(1);
    // retorno a promise -> "se der errado" .catch(erro) => { compara isso, faça esse teste...})
    return getListAnimals('Lion').catch(error => {
      expect(error).toEqual({error: 'Não possui esse tipo de animal.'})
    });
  });
});
