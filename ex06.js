const ex1 = require('express')
const ex2 = require('express')

console.log(ex1 === ex2)

const s1 = ex1()
const s2 = ex1()

console.log(s1 === s2)