// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'AtChat',
      user:     'Zheryu',
      password: 'password'
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'AtChat',
      user:     'Zheryu',
      password: 'password'
    },
    pool: {
      min: 1,
      max: 1
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'AtChat',
      user:     'Zheryu',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
