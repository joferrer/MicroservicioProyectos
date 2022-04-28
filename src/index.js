require('dotenv').config(); //Manejador de variables de entorno. --> .env
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const registrarRoutes = require('./routes/registrar');
const usr_proyRoutes = require('./routes/asociarUsuario');


//********** Variables de entorno */
const port = process.env.PORT || 3200; //Puerto de despliegue. 
const uri = process.env.MONGODB_URI; //URI para conexión con MongoDb


//Necesario para poder leer los cuerpos json de las peticiones.
app.use(express.json());



/**  MIDDLEWARE o ROUTES o ENDPOINTS  */
app.use('/api',registrarRoutes);
app.use('/api',usr_proyRoutes);

/** Inicio del servidor */
app.listen(port,()=>{
    console.log(`Server listen in port ${port}`);
})


/**
 * Conexión con la base de datos.
 */
const conectar = ()=>{
    mongoose.connect(uri)
    .then(()=>{
      console.log('Conected with mongodb atlas')
    })
    .catch(err=>{console.error('Paila: '+ err)})
  }

conectar();//Conectar con DB