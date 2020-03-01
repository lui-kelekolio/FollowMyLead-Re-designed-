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

function addDog(dog, db=connection){
    console.log(dog)
    return db('dog_table')
        .insert(dog)
        .debug()
}

module.exports = {
    getDogs,
    getDog,
    addDog
}