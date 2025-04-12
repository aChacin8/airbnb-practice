const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController') // Importar el controlador de Home

router.post('/homes', homeController.createHome) // Definir la ruta para crear un nuevo hogar, llamando a la función createHome del controlador de Home
router.get('/homes', homeController.findAllhomes) // Definir la ruta para obtener todos los hogares, llamando a la función findAllhomes del controlador de Home
router.get('/homes/:idHome', homeController.findById) // Definir la ruta para obtener un hogar por su id, llamando a la función findById del controlador de Home
router.patch('/homes/:idHome', homeController.updateHome) // Definir la ruta para actualizar un hogar por su id, llamando a la función updateHome del controlador de Home
router.patch('/homes/:idHome/soft', homeController.softDelete) // Definir la ruta para desactivar un hogar por su id, llamando a la función softDelete del controlador de Home
router.delete('/homes/destroy/:idHome', homeController.destroy) // Definir la ruta para eliminar un hogar por su id, llamando a la función destroy del controlador de Home

module.exports = router // Exportar el router para que pueda ser utilizado en otros archivos
