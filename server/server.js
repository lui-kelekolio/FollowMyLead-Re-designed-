const path = require('path')
const express = require('express')
const server = express()

const walkerRoute = require('./routes/walkerRoute')
const dogRoute = require('./routes/dogRoute')
const authRoute = require('./routes/authRoute')
const ownerRoute = require('./routes/ownerRoute')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/dogs', dogRoute)
server.use('/api/walker', walkerRoute)
server.use('/api/owner', ownerRoute)
server.use('/api/', authRoute)

module.exports = server
