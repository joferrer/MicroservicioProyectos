const mongoose = require('mongoose');

const usr_proyectSchema = mongoose.Schema({

    idProyecto : {
        type: Number,
        require: true
    },
    idUsuario: {
        type: Number,
        require: true
    }

});
module.exports = mongoose.model('usuarios_proyectos', usr_proyectSchema);