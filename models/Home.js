const knex = require('../config') // Importar la conexión a la base de datos

const create = (bodyHome) => {
  return knex
    .insert(bodyHome) // bodyHome es el objeto que contiene los datos del nuevo hogar a crear
    .into('homes') // homes es el nombre de la tabla en la base de datos
    // returning('*') es para que devuelva el nuevo hogar creado,
    .returning('*') // El "*" indica que se devuelvan todos los campos de la tabla. Tambien puede ser un array de strings con los nombres de los campos que se quieren devolver.
}

const findAll = () => {
    return knex
        .select('*') // Selecciona todos los campos de la tabla
        .from('homes') // homes es el nombre de la tabla en la base de datos
        .where ('active', true) // Filtra los resultados para que solo devuelva los hogares activos
}

module.exports = {
  create,
  findAll
}
