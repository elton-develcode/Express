const server = require('express')()
const router = require('./ex05_config')

server.use('/api/',router)

server.listen(1234,()=> console.log('Executando ...'))