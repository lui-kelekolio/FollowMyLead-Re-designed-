
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('owner_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('owner_table').insert([
        {
          id: 1, 
          feedback_id: 1, 
          first_name: 'Steve', 
          last_name: 'Smith', 
          photo: 'placeHolder', 
          location: 'Ngaio', 
          email: 'testemail2@testemail.nz', 
          hash: '', 
        },
      ]);
    });
};
