const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function getWalker (db = connection) {
    return db('walker_table')
}

module.exports = {getWalker}
