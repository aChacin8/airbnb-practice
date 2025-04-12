const environment = process.env.NODE_ENV || 'development' // 'development' es el entorno por defecto, si no se especifica ninguna variable de entorno para la ejecución
const knex = require('knex')
const knexFile = require('./knexfile.js')

// Mandar a llamar la configuracion de knexfile.js adecuada
module.exports = knex(knexFile[environment]) // knexfile[development] o knexfile[staging] o knexfile[production], son las variables de entorno en el que se ejecutará el servidor
