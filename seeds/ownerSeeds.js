
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('owner_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('owner_table').insert([
        {
          id: 1, 
          feedback_id: 1, 
          first_name: 'John', 
          last_name: 'Smith', 
          photo: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
          location: 'Ngaio', 
          email: 'JohnSmith@gmail.com', 
          user_id: 1
        },
        {
          id: 2, 
          feedback_id: 2, 
          first_name: 'James', 
          last_name: 'Jenkins', 
          photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
          location: 'Aro Valley', 
          email: 'jamesjenkins@gmail.com', 
          user_id: 2,
        },
      ]);
    });
};
