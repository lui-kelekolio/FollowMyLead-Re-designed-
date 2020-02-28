
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_table').insert([
        {id: 1, hash: 'thisismypassword', username: 'johnnyboy'},
        {id: 2, hash: 'thisismypassword', username: 'james01'},
        {id: 3, hash: 'thisismypassword', username: 'tabz'},
        {id: 4, hash: 'thisismypassword', username: 'hadalittlelamb'},
        {id: 5, hash: 'thisismypassword', username: 'mikeymike'},
        {id: 6, hash: 'thisismypassword', username: 'kelkel'},
      ]);
    });
};
