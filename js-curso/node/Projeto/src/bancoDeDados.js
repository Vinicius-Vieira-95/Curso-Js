const sequence = {
    _id: 1,
    get id() {return this._id++}
}


const produtos = {}

function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequence.id
    }
    produto[produto.id] = produto
    return produto
}

function getProdutoId(id){
    return produtos[id] || {}
}

function getAllProduto(){
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProdutoId, getAllProduto}