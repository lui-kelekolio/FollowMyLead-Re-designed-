const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getOwners(db = connection) {
    return db('owner_table').select()
}


function getOwner(id, db = connection) {
    return db('owner_table')
        .where('id', id)
        .first()
}


//Add auth shit
function addOwner(first_name, last_name, photo, location, email, db=connection){
    return db('owner_table')
        .insert({
            first_name: first_name,
            last_name: last_name,
            photo: photo,
            location: location,
            email: email
        })
        .then(id => {
            return id[0]
        })
}

function updateOwner(id, owner, db = connection) {
    return db('owner_table')
        .where('id', id)
        .update(owner)
}


module.exports = {
    getOwners,
    getOwner,
    addOwner,
    updateOwner
}