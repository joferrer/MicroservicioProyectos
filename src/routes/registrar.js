const {Router}= require('express');
const router = Router();
const proyectoSchema = require('../models/proyecto');
const usr_proyectSchema = require('../models/usuario_proyecto');

//Crear un proyecto.
router.post('/crear',(req,res)=>{
    console.log('Crear')
    const proyecto =proyectoSchema(req.body);

    proyecto
        .save()
        .then((data)=>{res.json(data)})
        .catch(err =>{res.json({message: err})});

        
})


module.exports = router;