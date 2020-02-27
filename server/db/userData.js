const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
    createUser
}

function createUser(user, db = connection) {
    console.log(user + "You are here")
    return userExists(user.username, db)
        .then(exists => {
            if (exists) {
                return Promise.reject(new Error('User exists'))
            }
        })
        .then(() => generateHash(user.password))
        .then(passwordHash => {
            return db('user_table').insert({ username: user.username, hash: passwordHash })
        })            //user_table
}

function userExists(username, db = connection) {
    console.log(username + " here111")
    return db('user_table')
        .count('id as n')
        .where('username', username)
        .then(count => {
            return count[0].n > 0
        })
}

