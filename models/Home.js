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
    .where('active', true) // Filtra los resultados para que solo devuelva los hogares activos
}

const findById = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

const update = (houseId, bodyHome) => {
  return knex
    .update(bodyHome) // bodyHome es el objeto que contiene los datos del nuevo hogar a crear
    .from('homes')
    .where('house_id', houseId) // Filtra los resultados para que solo devuelva el hogar con el id indicado
    .where('active', true) // Filtra los resultados para que solo devuelva los hogares activos
    .returning('*') //
}

// SofDelete No elimina el registro de la BD solo lo cambia a inactivo
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where('house_id', houseId) // Filtra los resultados para que solo devuelva el hogar con el id indicado
}

// HardDelete Elimina el registro de la BD
const destroy = (houseId) => {
  return knex
    .delete()
    .from('homes')
    .where('house_id', houseId) // Importante que tenga el where para no eliminar toda la tabla, solo el registro que queremos eliminar
}
module.exports = {
  create,
  findAll,
  findById,
  update,
  softDelete,
  destroy
}
