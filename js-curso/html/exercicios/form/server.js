const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Parabéns')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send("<h1> Usuario Alterado<h1>")
})

app.listen(3003)