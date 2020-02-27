const path = require('path')
const express = require('express')

const server = express()

const walkerRoute = require('./routes/walkerRoute')
const authRoute = require('./routes/authRoute')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/walker', walkerRoute)
// server.use('/api/Owner', ownerRoute)
server.use('/api/v1', authRoute)
module.exports = server
