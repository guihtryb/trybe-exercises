let aprovação = 'lista';

switch (aprovação) {
    case "aprovada":
        console.log('Você foi aprovado(a)!');
        break;
    case 'lista':
        console.log('Você está na lista de espera.');
        break;
    case 'reprovada':
        console.log('Você foi reprovado');
        break;
    default:
        console.log('não se aplica');
}