const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({extended: true}))

// app.get('/produtos', (req, res, next) => {
//     res.send({nome : "Notebook", preco : 123.12 })
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getAllProduto())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getAllProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

