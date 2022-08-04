function escreverPorExtenso(numero){
    let valor = '';
    switch (numero) {
        case 0:
            valor = 'zero'
            break;
        case 1:
            valor = 'um'
            break;
        case 2:
            valor = 'dois'
            break;
        case 3:
            valor = 'três'
            break;
        case 4:
            valor = 'quatro'
            break;
        case 5:
            valor = 'cinco'
            break;
        case 6:
            valor = 'seis'
            break;
        case 7:
            valor = 'sete'
            break;
        case 8:
            valor = 'oito'
            break;
        case 9:
            valor = 'nove'
            break;
        case 10:
            valor = 'dez'
            break;
        default:
            return 'Fora do intervalo'
    }
    return valor;
}

console.log(escreverPorExtenso(0))
console.log(escreverPorExtenso(1))
console.log(escreverPorExtenso(2))
console.log(escreverPorExtenso(3))
console.log(escreverPorExtenso(4))
console.log(escreverPorExtenso(5))
console.log(escreverPorExtenso(6))
console.log(escreverPorExtenso(7))
console.log(escreverPorExtenso(8))
console.log(escreverPorExtenso(9))
console.log(escreverPorExtenso(10))