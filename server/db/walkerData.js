const connection = require('./connection')
const { generateHash } = require('authenticare/server')

module.exports = {
    // createUser,
    // userExists,
    addWalker,
    getUserByName,
    getWalkers,
    getWalker,
    editWalker
}

// function createUser(user, db = connection) {
//     console.log(user + "You are here")
//     return userExists(user.username, db)
//         .then(exists => {
//             if (exists) {
//                 return Promise.reject(new Error('User exists'))
//             }
//         })
//         .then(() => generateHash(user.password))
//         .then(passwordHash => {
//             return db('user_table').insert({ username: user.username, hash: passwordHash })
//         })            //user_table
// }

// function userExists(username, db = connection) {
//     return db('user_table')
//         .count('id as n')
//         .where('username', username)
//         .then(count => {
//             return count[0].n > 0
//         })
// }

function getUserByName(username, db = connection) {
    return db('user_table')
        .select()
        .where('username', username)
        .first()
}

function addWalker(walker, db = connection) {
    console.log('walker: ', walker)
    return db('walker_table')
        .insert(walker).debug()
}

function getWalkers(db = connection) {
    return db('walker_table')
}

function getWalker(id, db = connection) {
    return db('walker_table')
    .select()
    .where({ id: id })
    .first()
}

//Josh's code: writing a function to edit Walker profile details

function editWalker(id, first_name, last_name, blurb, photo, location, email, db = connection) {
    return db('walker_table')
    .where('id', id)
    .insert({first_name: first_name,
            last_name: last_name,
            blurb:blurb,
            photo:photo,
            location:location,
            email:email
            })
    .then()
}
//         .select()
//         .where('id', id )
//         .first()
// }
