
exports.up = function(knex) {
  return knex.schema.createTable('dog_table', table => {
    table.increments('id').primary()
    table.integer('owner_id')
    table.integer('feedback_id')
    table.string('name')
    table.string('breed')
    table.string('sex')
    table.string('age')
    table.string('size')
    table.string('activity_requirements')
    table.string('good_with_other_dogs')
    table.string('special_requirements')
    table.string('photo')
    table.string('vet_name')
    table.string('vet_contact')
    table.string('bio')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dog_table')
};
