const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function getDog (db = connection) {
    return db('dog_table')
    .select('photo')
    .select('name')
}

module.exports = {getDog}