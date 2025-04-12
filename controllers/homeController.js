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
      res.status(400).json({ message: 'Error al crear el hogar', error }) // Devolver un error si ocurre algo mal
    })
}

const findById = (req, res) => {
  ModelHome
    .findById(req.params.idHome).then(home => {
      res.status(200).json(home) // Devolver el nuevo hogar creado como respuesta en formato JSON
    }).catch(error => {
      res.status(400).json({ message: 'Error al crear el hogar', error }) // Devolver un error si ocurre algo mal
    })
}

module.exports = {
  createHome,
  findAllhomes,
  findById
}
