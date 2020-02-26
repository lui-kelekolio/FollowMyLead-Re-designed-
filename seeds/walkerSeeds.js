
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('walker_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('walker_table').insert([
        {
          id: 1, 
          feedback_id: 1, 
          first_name: 'Mary', 
          last_name: 'Wells', 
          blurb: 'Loves long walks on the beach', 
          location: 'Ngaio', 
          email: 'testemail@testemail.nz', 
          hash: '', 
          photo: 'placeHolder',
        },
      ]);
    });
};
