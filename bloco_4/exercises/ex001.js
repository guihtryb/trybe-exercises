// exercício 1.1 - soma
let a = 24;
let b = 7;

let sum = a + b;
console.log(sum);
// exercício 1.2 - subtração
let a = 24;
let b = 7;

let sub = a-b;
console.log(sub);
// exercício 1.3 - Multiplicação
let a = 24;
let b = 7;

let vs = a*b;
console.log(vs);
// exercício 1.4 - Divisão
let a = 24;
let b = 7;

let div = a/b;
console.log(div);
//exercício 1.5 - Módulo
let a = 24;
let b = 6;

let mod = a%b;
console.log(mod);

// exercício 2 - Retorna o maior dos dois números
let a = 24;
let b = 7;

if(a > b) {
    console.log('O maior número é: ' + a);
}
else if (b > a) {
    console.log('O maior número é: ' + b);
}

// exercício 3 - Retorna o maior dos três números

let a = 30;
let b = 20;
let c = 10;

if(a > b && a > c) {
    console.log('O maior dos três números é: ' + a);
}

if(b > a && b > c) {
    console.log('O maior dos três números é: ' + b);
}

if(c > a && c > b) {
    console.log('O maior dos três números é: '+ c);
}

// exercício 4 - Identifica se o valor é positivo ou negativo

let valor = 0;

if(valor > 0){
    console.log('positive');
}

else if(valor < 0){
    console.log('negative');
}else {
    console.log('zero');
}

// exercício 5 - identificar se ângulos pertecem a um triângulo

let ang1 = 60;
let ang2 = 30;
let ang3 = 90;

if(ang1 + ang2 + ang3 === 180) {
    console.log('true');
} else if(ang1 + ang2 + ang3 > 180 || ang1 + ang2 + ang3 < 180 ) {
    console.log('false');
} else {
    console.log('inválido');
}

// exercício 6 - Diz o movimento das peças de xadrez
let peça = 'PEÃO';

switch(peça.toLowerCase()) {
    case 'cavalo':
        console.log('2 casas para vertical ou horizontal + 1 na direção oposta');
        break;
    case 'peão':
        console.log('1 casa na vertical, ou 2 casas na vertical para início do jogo');
        break;
    case 'bispo':
        console.log('diagonais');
        break;
    case 'torre':
        console.log(' Horizontal e vertical');
        break;
  
    case 'dama':
        console.log(' Horizontal, Vertical e diagonais');
        break;
    case 'rei':
        console.log('1 casa horizontal ou vertical');
        break;
    }

// exercício 7 - Converte nota de porcentagem para A,B,C,D,E ou F

let nota = 100;

if(nota >= 90) {
    nota = 'A';
    console.log(' nota final: ' + nota);
}

if(nota >= 80) {
    nota = 'B';
    console.log(' nota final: ' + nota);
}

if(nota >= 70 && nota < 100) {
    nota = 'C';
    console.log(' nota final: ' + nota);
} else if(nota >= 60 && nota < 100) {
    nota = 'D';
    console.log(' nota final: ' + nota);
} else if(nota >= 50 && nota < 100) {
    nota = 'E';
    console.log(' nota final: ' + nota);
} else if(nota < 50 && nota > 0) {
    nota = 'F';
    console.log(' nota final: ' + nota);
} else{
    console.log('inválido')

}

// exercício 8 - identifica se possui ou não valor par

let a = 2;
let b = 6;
let c = 8;

if(a%2 === 0 || b%2 === 0 || c%2 === 0) {
    console.log('true');
} else {
    console.log('false');
}

// exercício 9 - Informa se possui ou não valor ímpar
let a = 2;
let b = 8;
let c = 7;

if(a%2 != 0 || b%2 != 0 || c%2 != 0) {
    console.log('true');
} else {
    console.log('false');
}

// exercício 10 - Calcula a quantidade de lucro por mil vendas

let preçoDeCusto = 500;
let valorDeVenda = 2500;
let lucro;
let vendas = 1000;
let impostoSobreOCusto = preçoDeCusto * 0.20;
let preçoDeCustoTotal;

if(vendas === 1000 && valorDeVenda > 0 && preçoDeCusto > 0){
    preçoDeCustoTotal = preçoDeCusto + impostoSobreOCusto;
    lucro = (valorDeVenda - preçoDeCustoTotal)*1000; 
    console.log(lucro);
} else {
    console.log('Valor inválido');
}

// exercício 11 - Recebe um salário bruto e calcula o líquido a ser recebido

let salarioBruto = 100000;
let aliquotaASerDescontada;
let impostoDeRenda;
let salarioBase;
let salarioLiquido;

if(salarioBruto <= 1556.64 && salarioBruto > 0) {
    aliquotaASerDescontada = salarioBruto * 0.08;
    salarioBase = salarioBruto - aliquotaASerDescontada;
    console.log(salarioBase);
} else if(salarioBruto > 1556.64 && salarioBruto <= 2594.92) {
    aliquotaASerDescontada = salarioBruto * 0.09;
    salarioBase = salarioBruto - aliquotaASerDescontada;
    console.log(salarioBase); 
} else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaASerDescontada = salarioBruto * 0.11;
    salarioBase = salarioBruto - aliquotaASerDescontada;
    console.log(salarioBase);
} else if(salarioBruto > 5189.82) {
    aliquotaASerDescontada = 570.88;
    salarioBase = salarioBruto - aliquotaASerDescontada;
    console.log(salarioBase);
}

if(salarioBase <= 1903.98){
    console.log('Isento de imposto de renda');
} else if(salarioBase > 1903.99 && salarioBase <= 2826.65) {
    impostoDeRenda = salarioBase*0.075% - 142.80;
    salarioLiquido = salarioBase - impostoDeRenda;
    console.log(salarioLiquido);
} else if(salarioBase > 2826.65 && salarioBase <= 3751.05) {
    impostoDeRenda = salarioBase*0.15% - 354.80;
    salarioLiquido = salarioBase - impostoDeRenda;
    console.log(salarioLiquido);
} else if(salarioBase > 3751.05 && salarioBase <= 4664.68) {
    impostoDeRenda = salarioBase*0.225% - 636.13;
    salarioLiquido = salarioBase - impostoDeRenda;
    console.log(salarioLiquido);
} else if(salarioBase > 4664.68) {
    impostoDeRenda = salarioBase*0.275% - 869.36;
    salarioLiquido = salarioBase - impostoDeRenda;
    console.log(salarioLiquido);
}


