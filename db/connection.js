const kx = require('knex')({
  client: 'pg',
  connection: {
    database: 'list_dev'
  }
});

module.exports = kx;
