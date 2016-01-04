
exports.up = function(knex, Promise) {
	knex.schema.dropTable()
	return Promise.all([
		knex.schema.createTable('users', function(table){
		  	table.increments('userId');
		  	table.string('username').unique().notNullable();
		  	table.string('password').notNullable();
		  	table.string('email').notNullable();
		  	table.string('firstName').nullable();
		  	table.string('lastName').nullable();
		  	table.timestamps();
		}),
			knex.schema.createTable('friends', function(table){
		  	table.integer('userId').notNullable().index().primary();
		  	table.integer('friendId').notNullable();
		  	table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
		})
	]);
};

exports.down = function(knex, Promise) {
  	return Promise.all([
  		knex.schema.dropTable('users'),
  		knex.schema.dropTable('friends')
  	]);
};