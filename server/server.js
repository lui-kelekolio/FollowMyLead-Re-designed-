const path = require('path')
const express = require('express')

const server = express()

const walkerRoute = require('./routes/walkerRoute')
const ownerRoute = require('./routes/ownerRoute')



server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/walker', walkerRoute)
server.use('/api/owner/:id', ownerRoute)





module.exports = server
