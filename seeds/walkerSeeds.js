
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
          email: 'marywells@gmail.com', 
          photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          user_id: 4,
        },
        {
          id: 2, 
          feedback_id: 2, 
          first_name: 'Michael', 
          last_name: 'Paul', 
          blurb: 'Dog lover', 
          location: 'Ngaio', 
          email: 'mikeymike@gmail.com', 
          photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          user_id: 5,
        },
        {
          id: 3, 
          feedback_id: 3, 
          first_name: 'Kelly', 
          last_name: 'Donald', 
          blurb: 'Dog lover', 
          location: 'Aro Valley', 
          email: 'donald@gmail.com', 
          photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          user_id: 6,
        },
        {
          id: 4, 
          feedback_id: 5, 
          first_name: 'Phoebe', 
          last_name: 'Wagner', 
          blurb: 'Dog lover, any shape or size, age or breed', 
          location: 'Island Bay', 
          email: 'phoebewagner20@gmail.com', 
          photo: 'https://images.pexels.com/photos/3351676/pexels-photo-3351676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          user_id: 5,
        },
      ]);
    });
};
