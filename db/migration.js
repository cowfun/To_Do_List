const kx = require('./connection')

kx.schema.createTable('tasks', table => {

  table.increments('id')
  table.text('content')
  table.timestamps(false,true)

}).then(() => {
  process.exit()})
  .catch(() => process.exit())
