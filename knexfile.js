const config = require('./src/config');

module.exports = {
  development: {
    client: 'pg',
    version: '11',
    connection: {
      host: config.get('PGHOST'),
      user: config.get('PGUSER'),
      password: config.get('PGPASSWORD'),
      database: config.get('PGDATABASE')
    },
    pool: {
      min: 2, max: 10
    },
    migrations: {
      directory: './src/db/migrations'
    }
  },
};
