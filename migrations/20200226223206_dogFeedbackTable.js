
exports.up = function(knex) {
  return knex.schema.createTable('dog_feedback_table', table =>{
    table.increments('id').primary()
    table.string('feedback')
    table.string('emoji')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dog_feedback_table')
};
