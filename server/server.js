const path = require('path')
const express = require('express')

const server = express()

const walkerRoute = require('./routes/walkerRoute')
const dogRoute = require('./routes/dogRoute')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/walker', walkerRoute)
// Lui and Izzy code
server.use('/api/dogs', dogRoute)
module.exports = server
