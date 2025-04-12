const ModelHome = require('../models/Home') // Importar el modelo de Home

const createHome = (req, res) => {
  ModelHome
    .create(req.body) // Llamar a la función create del modelo de Home, pasando el cuerpo de la petición como argumento
    .then(home => {
      res.status(201).json(home) // Devolver el nuevo hogar creado como respuesta en formato JSON
    })
    .catch(error => {
      res.status(400).json({ message: 'Error al crear el hogar', error }) // Devolver un error si ocurre algo mal
    })
}

const findAllhomes = (req, res) => {
  ModelHome
    .findAll().then(homes => {
      res.status(200).json(homes) // Devolver el nuevo hogar creado como respuesta en formato JSON
    }).catch(error => {
      res.status(400).json({ message: 'Error al encontrar el hogar', error }) // Devolver un error si ocurre algo mal
    })
}

const findById = (req, res) => {
  ModelHome
    .findById(req.params.idHome).then(home => {
      res.status(200).json(home) // Devolver el nuevo hogar creado como respuesta en formato JSON
    }).catch(error => {
      res.status(400).json({ message: 'Error al encontrar el hogar por ID', error }) // Devolver un error si ocurre algo mal
    })
}

const updateHome = (req, res) => {
  ModelHome
    .update(req.params.idHome, req.body).then(home => {
      res.status(200).json(home) // Devolver el nuevo hogar creado como respuesta en formato JSON
    }).catch(error => {
      res.status(400).json({ message: 'Error al actualizar el hogar', error }) // Devolver un error si ocurre algo mal
    })
}

const softDelete = (req, res) => {
  ModelHome
    .softDelete(req.params.idHome).then(home => {
      res.status(204).json(home)
    }).catch(error => {
      res.status(400).json({ message: 'Error al volver inactivo el hogar', error }) // Devolver un error si ocurre algo mal
    })
}

const destroy = (req, res) => {
  ModelHome
    .destroy(req.params.idHome).then(home => {
      res.status(204).json(home)
    }).catch(error => {
      res.status(400).json({ message: 'Error al borrar el hogar', error }) // Devolver un error si ocurre algo mal
    })
}

module.exports = {
  createHome,
  findAllhomes,
  findById,
  updateHome,
  softDelete,
  destroy
}
