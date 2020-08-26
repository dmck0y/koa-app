exports.up = async function(knex) {
  return await knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();

      table.string('firstName');
      table.string('lastName');
    })
};

exports.down = async function(knex) {
  return await knex.schema
    .dropTableIfExists('users'); 
};
