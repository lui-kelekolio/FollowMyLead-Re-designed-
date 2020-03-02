const connection = require('./connection');

function getFeedback(id, db = connection) {
  return db('dog_feedback_table')
    .where('id', id)
    .first();
}

// function getDog(id, db = connection) {
//     return db('dog_table')
//         .where('id', id)
//         .first()
// }

module.exports = {
  getFeedback,
};
