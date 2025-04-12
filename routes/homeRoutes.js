const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController') // Importar el controlador de Home

router.post('/homes', homeController.createHome) // Definir la ruta para crear un nuevo hogar, llamando a la función createHome del controlador de Home
router.get('/homes', homeController.findAllhomes) // Definir la ruta para obtener todos los hogares, llamando a la función findAllhomes del controlador de Home

module.exports = router // Exportar el router para que pueda ser utilizado en otros archivos
