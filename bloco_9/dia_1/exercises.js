//1. Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A, 1.
console.log(planetDistanceFromSun(venus)); // B, 2.
console.log(planetDistanceFromSun(jupiter)); // C, 3.

//2. Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars) + ' 1'); // A
setTimeout(() => console.log(planetDistanceFromSun(venus) + ' 3'), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter) + ' 2'), 2000); // C

// 3. A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet
// de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
    const mars = {
        name: "Mars",
        distanceFromSun: {
            value: 227900000,
            measurementUnit: "kilometers",
        },
    };
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
};
  
getPlanet(); // imprime Marte depois de 4 segundos

// 4. Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.
//  O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos 
// para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    const marsTemperature = getMarsTemperature();
    
setTimeout(() => console.log(`Mars temperature is: ${marsTemperature} degree Celsius`), messageDelay());
} // imprime "Mars temperature is: 20 degree Celsius", por exemplo

sendMarsTemperature(getMarsTemperature);

// Sou extremamente grato por ter aprendido a ultilizar bem a function setTimeout e ultilizar bem callbacks

// 5. Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity
// o que você deseja fazer,uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função
// sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
// Armazenar temperatura
const marsTemperature = getMarsTemperature();
// Imprimir mensagem DADA A CALLBACK
setTimeout(() => callback(marsTemperature), messageDelay());
} // imprime "Mars temperature is: 20 degree Celsius", por exemplo



sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

// 6. Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô
//  já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro
//  callback que contenha as ações a serem tomadas em caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (onSucess, onError) => {

const marsTemperature = getMarsTemperature();
setTimeout(() => {
  const sucessMessage = Math.random() >= 0.4;
  const errorReason = 'Robot is busy'; 
  if (sucessMessage) onSucess(marsTemperature);
  else onError(errorReason)
  }, messageDelay());
} 

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
