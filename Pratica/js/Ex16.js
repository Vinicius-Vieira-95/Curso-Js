function Calculador(num1, operacao, num2)
{
    resultado = 0;
    switch(operacao){
        case '+':
            resultado = num1 + num2
            break
        case '-':
            resultado = num1 - num2
            break
        case '*':
            resultado = num1 * num2
            break
        case '/' :
            resultado = num1/num2
            break
        default:
            throw `Essa opereção ${operacao} não existe`
    }
    return resultado
}

console.log(Calculador(1, '+', 2))
console.log(Calculador(1, '-', 2))
console.log(Calculador(1, '*', 2))
console.log(Calculador(1, '/', 2))
console.log(Calculador(1, '++', 2))