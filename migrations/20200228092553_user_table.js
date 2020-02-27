
exports.up = function (knex) {
    return knex.schema.createTable('user_table', table => {
        table.increments('id').primary()
        table.string('hash')
        table.string('username')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_table')
};
