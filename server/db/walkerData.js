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

function getUserByName(username, db = connection) {
    return db('user_table')
        .select()
        .where('username', username)
        .first()
}

function addWalker(walker, db = connection) {
    console.log('line 22, walkerData, walker: ', walker)
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

function editWalker(id, walker, db = connection) {
    console.log('db function working')
    return db('walker_table')
    .where('id', id)
    .update({first_name: walker.first_name,
            last_name: walker.last_name,
            blurb:walker.blurb,
            photo:walker.photo,
            location:walker.location,
            email:walker.email
            })
    .then()
}
// function editWalker(walker, db = connection) {
//     console.log(walker.id)
//     return db('walker_table')
//     .where({id: walker.id})
//     .upodate(walker)
//     .then(() => db)
//     .then(getWalkers)
// }

