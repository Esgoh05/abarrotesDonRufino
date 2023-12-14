const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

// Mandar a llamar la configuración de knexfile
module.exports = knex(knexfile[env])
