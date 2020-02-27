const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function createWalker({ email, password }, db = connection) {
    return generateHash(password)
        .then(hash => db('walker_table').insert({ email, hash }))
}

module.exports = { createWalker }
