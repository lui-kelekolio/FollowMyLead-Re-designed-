const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function getDog (db = connection) {
    return db('dog_table')
}

module.exports = {getDog}