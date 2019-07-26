const express = require('express')
const server = express()

server.use('/api', function (req, res, next) {
  console.log('Inicio ...')
  next()
  console.log('Fim ...')
})

server.use('/api', function (req,res) {
  console.log('Resposta ...')
  res.send('<h1>API!</h1>')
})

const porta = 1234
server.listen(porta, function () {
  console.log(`Servidor rodando na porta ${porta}`)
})