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

// function getUserDetails(id, db = connection) {
//     return db('walker_table')
//         .where('user_id', id)
//         .first()
//         .then(walker => {
//             return db('owner_table')
//                 .where('user_id', id)
//                 .first()
//                 .then(owner => {
//                     return db('user_table')
//                         .where('id', id)
//                         .first()
//                         .then(user => {
//                             user.walker = walker
//                             user.owner = owner
//                             return user
//                         })
//                 })
//         })
// }

function getDogOwner(db = connection) {
    return db('dog_table')
        .then(dog => {
            return db('owner_table')
                .where({ id: dog.owner_id })
                .first()
                .then(owner => {
                    dog.owner = owner
                    return owner
                })
        })

}

module.exports = {
    getDogs,
    getDog,
    getDogOwner
}