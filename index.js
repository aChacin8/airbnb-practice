const express = require('express')
const homeRoutes = require('./routes/homeRoutes')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', homeRoutes) // Definir la ruta base para las rutas de la API

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  console.log(`http://localhost:${port}`)
})
