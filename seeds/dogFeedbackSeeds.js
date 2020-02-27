
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dog_feedback_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('dog_feedback_table').insert([
        {
          id: 1, 
          feedback: 'Fun dog and great nature!',
          emoji: ':)' //unsure how to implement this?
        },
      ]);
    });
};
