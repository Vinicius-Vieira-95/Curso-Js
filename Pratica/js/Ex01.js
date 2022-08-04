// ...num é um array que pode ter varios parametros
function soma(...num){
    let soma = 0
    for(let i = 0; i < num.length; i++){
        soma += num[i]
    }
    return soma
}

console.log(soma(1, 2, 3, 4, 5 ,6, 7, 8 ,9))
console.log(soma(1))


// total = 2, total = 6, total = 24, total = 94, total = 120
// i = 1, 2, 3, 4
const Fatorial = (valor) => {
    let total = 1
    for(let i = 1; i < valor ; i++){
        total = (i * total) + total
    }
    return total
}

console.log(Fatorial(5))