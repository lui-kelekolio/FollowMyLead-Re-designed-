
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_table').insert([
        {id: 1, hash: '', username: ''},
      ]);
    });
};
