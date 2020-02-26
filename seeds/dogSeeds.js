
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dog_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('dog_table').insert([
        {
          id: 1, 
          owner_id: 1, 
          feedback_id: 1, 
          name: 'Wilson', 
          breed: 'Labradore', 
          sex: 'Does it matter?', 
          age: '1,000,000', 
          size: 'Medium', 
          activity_requirements: '30min walk',
          good_with_other_dogs: true,
          special_requirements: "Don't let Wilson near food...",
          photo: 'placeHolder',
          vet_name: 'Ngaio Vetenerian',
          vet_contact: 02222222222,
        },
      ]);
    });
};
