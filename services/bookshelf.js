var knex = require('knex')({
  client: 'pg',
  connection: {
      host: 'localhost',  // your host
      user: 'Zheryu', // your database user
      password: 'password', // your database password
      database: 'AtChat',
      charset: 'utf8'
  }
});

//module.exports = require('bookshelf')(require('../config').knexDbConfig);
var bookshelf = module.exports = require('bookshelf')(knex);