
exports.up = function(knex) {
  return knex.schema.createTable('owner_table', table => {
    table.increments('id').primary();
    table.integer('feedback_id');
    table.string('first_name');
    table.string('last_name');
    table.string('photo');
    table.string('location');
    table.string('email');
    table.string('hash');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('owner_table')
};
