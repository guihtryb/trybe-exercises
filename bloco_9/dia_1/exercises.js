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
    setTimeout(() => {
        const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    return console.log("Returned planet: ", mars);
    }, 4000)
  };
  
getPlanet(); // imprime Marte depois de 4 segundos
