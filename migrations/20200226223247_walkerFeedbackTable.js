
exports.up = function(knex) {
  return knex.schema.createTable('walker_feedback_table', table =>{
    table.increments('id').primary()
    table.string('feedback')
    table.string('emoji')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('walker_feedback_table')
};

