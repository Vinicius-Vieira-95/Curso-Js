
//Factory éuma funçãoque retorna objeto;

function criarProduto1(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}


function criarProduto2(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
    }
}
console.log(typeof criarProduto1('Notebook', 2199.49))
console.log(criarProduto1('Notebook', 2199.49))
console.log(criarProduto1('iPad', 1199.49))


console.log(criarProduto2('Celular', 1550.49))
console.log(criarProduto2('iPad', 1199.49, 0.5))
