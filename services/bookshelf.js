var knex = require('knex')({
  client: 'postgresql',
  connection: {
      host: 'localhost',  // your host
      user: 'Zheryu', // your database user
      password: 'password', // your database password
      database: 'AtChat',
      charset: 'utf8'
  },
  pool: {
  	min: 1,
  	max: 4
  }
});

var bookshelf = module.exports = require('bookshelf')(knex);