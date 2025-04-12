KnexJS
Esta es una query builder, es decir no ejecuto directamente la query en SQL, sino que se hace uso de "knex"


MVC Architecture (Model, Visual, Controller)

Model
El modelo es quien interactua con la base de datos. 
No se encarga de validar datos, ni resolver promesas, ni de la logica de negocios, solo de la interaccion con la BD

Controllers
Tienen la logica de negocios de la aplicacion.
Reciben las peticiones HTTP para procesarlas y dar la respuesta adecuada.
Se encargan de validar los datos que tienen en la peticion, manejar errores y respuestas. 