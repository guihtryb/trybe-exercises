const readline = require("readline-sync");

const distance = readline.questionFloat("Qual distância percorrida? (em m) ");
const time = readline.questionFloat("Qual o tempo gasto? (em segundos) ");

const calculateAvgSpeed = (distance, time) => {
  const avgSpeedValue = (distance / time).toFixed(2);
  return console.log(`${avgSpeedValue} m/s`);
};

calculateAvgSpeed(distance, time);