// Criar ataque da rainha num jogo de Xadrez

// Posição da rainha
// Linha
let queenRowPosition =  6;
// Coluna
let queenColumnPosition = 2;

// Posição do oponete
let opponentRowPosition = 7;
let opponentColumnPosition = -3;

// O ataque é bem sucedido ?
let canAttack = false;

// Calculo para saber se o ataque foi bem sucedido ou não
// Se a rainha está na mesma linha que a peça oponente OU a rainha está na mesma coluna que a peça oponente, significa que o ataque é bem sucedido.

if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
    canAttack = true;
    console.log('Ataque bem sucedido na linha: ' + opponentRowPosition + ' ,coluna: ' + opponentColumnPosition);
} else {
    canAttack = false;
}

// Se a peça oponente estiver em alguma das diagonais da rainha
for (let contador = 1; contador < 8; contador += 1) {
    // As posições têm precisam ser maiores que 0 e menores que 9
    if (queenColumnPosition < 0 || queenColumnPosition > 8) {
        console.log('Posição inválida');
        break;    
    } else if(queenRowPosition < 0 || queenRowPosition > 8) {
        console.log('Posição inválida');
        break;
    } else if(opponentColumnPosition < 0 || opponentColumnPosition > 8) {
        console.log('Posição inválida');
        break;
    } else if(opponentRowPosition < 0 || opponentRowPosition > 8) {
        console.log('Posição inválida');
        break;
    }
    if (opponentRowPosition === (queenRowPosition - contador) && opponentColumnPosition === (queenColumnPosition - contador)) {
        canAttack = true;
        console.log('Ataque bem sucedido pela diagonal esquerda inferior');
        break;
    } else if (opponentRowPosition === (queenRowPosition + contador) && opponentColumnPosition === (queenColumnPosition - contador)) {
        canAttack = true;
        console.log('Ataque bem sucedido pela diagonal esquerda superior');
        break;
    } else if (opponentRowPosition === (queenRowPosition - contador) && opponentColumnPosition === (queenColumnPosition + contador)) {
        canAttack = true;
        console.log('Ataque bem sucedido pela diagonal direita inferior');
        break;
    } else if (opponentRowPosition === (queenRowPosition + contador) && opponentColumnPosition === (queenColumnPosition + contador)) {
        canAttack = true;
        console.log('Ataque bem sucedido pela diagonal direita superior');
        break;
    } 
}
if (canAttack === false){
    console.log('Não é possível realizar o ataque');
}