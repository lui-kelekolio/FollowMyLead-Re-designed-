
exports.up = function(knex) {
  return knex.schema.createTable('walker_table', table => {
    table.increments('id').primary()
    table.integer('feedback_id')
    table.string('first_name')
    table.string('last_name')
    table.string('blurb')
    table.string('location')
    table.string('email')
    table.string('photo')
    table.integer('user_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('walker_table')
};
