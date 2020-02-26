
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('walker_feedback_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('walker_feedback_table').insert([
        {
          id: 1, 
          feedback: 'A bit of an odd ball, but she walked my dog so Im happy',
          emoji: ':)' //unsure how to implement this?
        },
      ]);
    });
};
