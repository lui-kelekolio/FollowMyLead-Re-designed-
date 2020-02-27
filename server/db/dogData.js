const { generateHash } = require('authenticare/server')

const connection = require('./connection')

function getDogs (db = connection) {
    return db('dog_table')
    .select('photo')
    .select('name')
}

function getDog (db = connection) {
    return db('dog_table')
    .select('photo')
    .select('name')
    .select('feedback_id')
    .select('breed')
    .select('sex')
    .select('size')
    .select('activity_requirements')
    .select('good_with_other_dogs')
    .select('special_requirements')
    .select('vet_name')
    .select('vet_contact')

}

module.exports = {
    getDogs,
    getDog 
    }