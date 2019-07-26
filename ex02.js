const express = require('express')
const server = express()

server.get('/', function (req, res, next) {
  console.log('Inicio ...')
  next()
  console.log('Fim ...')
})

server.get('/', function (req,res) {
  console.log('Resposta ...')
  res.send('<h1>Ola Express!</h1>')
})

const porta = 1234
server.listen(porta, function () {
  console.log(`Servidor rodando na porta ${porta}`)
})