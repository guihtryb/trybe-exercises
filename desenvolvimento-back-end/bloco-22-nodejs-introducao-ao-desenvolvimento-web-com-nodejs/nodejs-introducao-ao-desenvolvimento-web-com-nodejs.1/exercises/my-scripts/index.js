const readline = require('readline-sync');

const requireScript = (script) => {
  return require(script);
};

const chooseScript = () => {
  const scripts = [
    {
      name: 'Calcular IMC',
      script: './imc.js'
    },
    {
      name: 'Calcular Velocidade média',
      script: './velocidade.js',
    },
    {
      name: 'Jogo de advinha',
      script: './sorteio.js',
    },
  ];
  
  scripts.forEach((script, index) => console.log(`${index + 1} - ${script.name} \n`));

  const userAnswer = readline.questionInt("Qual script você deseja executar ? (1 a 3) \n");

  if (!scripts[userAnswer - 1]) {
    console.log("\n Digite um número válido \n");
    return chooseScript();
  }
  requireScript(scripts[userAnswer - 1].script);
};

chooseScript();
