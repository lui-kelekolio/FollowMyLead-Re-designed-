const connection = require('./connection')

function getFeedback(db = connection) {
    return db('dog_feedback_table').select()
}

module.exports = {
    getFeedback,
}