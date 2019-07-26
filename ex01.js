const express = require('express')
const server = express()

server.get('/', function (req, res) {
  res.send('<h1>Index!</h1>')
})

server.all('/teste', function (req, res) {
  res.send('<h1>Teste</h1>')
})

server.get(/api/, function (req, res) {
  res.send('<h1>API</h1>')
})

server.post('/salvar', function () {
  res.send('<h1>Usando o metódo post</h1>')
})

const porta = 3333
server.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))