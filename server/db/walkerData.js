const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
    createUser,
    userExists,
    addWalker,
    getUserByName,
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
            return db('walker_table').insert({ username: user.username, hash: passwordHash })
        })
}

function userExists(username, db = connection) {
    console.log(username + " here111")
    return db('walker_table')
        .count('id as n')
        .where('username', username)
        .then(count => {
            return count[0].n > 0
        })
}

async function addWalker(walker) {
    return db('walker_table')
        .insert(walker)
        .then(() => db)
        .then(getUsereByName(username))

}

function getUserByName(username, db = connection) {
    console.log(username + " here2122")
    return db('walker_table')
        .select()
        .where('username', username)
        .first()
}