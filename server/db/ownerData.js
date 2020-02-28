const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getOwners(db =connection) {
    return db('owner_table').select()
}


function getOwner(id, db = connection) {
    return db('owner_table')
    .where('id', id)
    .first()
}


//Add auth shit
function addOwner(owner, db=connection){
    return db('owner_table')
    .insert(owner).debug()

}


module.exports = {
    getOwners,
    getOwner,
    addOwner
}