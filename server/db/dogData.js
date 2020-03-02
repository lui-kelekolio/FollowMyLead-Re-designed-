const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function getDogs(db = connection) {
    return db('dog_table').select()
}

function getDogsWithOwners(db = connection) {
    return db('dog_table').select()
        .then(dogs => {
            return Promise.all(dogs.map(dog => {
                return db('owner_table')
                    .where('owner_table.id', dog.owner_id)
                    .first()
                    .then(owner => {
                        dog.owner = {}
                        // console.log(owner.location)
                        dog.owner.location = owner.location
                        return dog
                    })
            }))
        })
}


function getDog(id, db = connection) {
    return db('dog_table')
        .where('id', id)
        .first()
}



function addDog(dog, db = connection) {
    console.log(dog)
    return db('dog_table')
        .insert(dog)
        .debug()
}

module.exports = {
    getDogs,
    getDog,
    getDogsWithOwners,
    addDog,
}