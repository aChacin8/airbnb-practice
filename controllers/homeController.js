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

module.exports = {
  createHome // Exportar la función createHome para que pueda ser utilizada en otros archivos
}
