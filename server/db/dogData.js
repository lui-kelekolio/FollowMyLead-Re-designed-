const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function getDogs(db = connection) {
    return db('dog_table').select()
}

function getDog(id, db = connection) {
    return db('dog_table')
        .where('id', id)
        .first()
}

module.exports = {
    getDogs,
    getDog
}