const mongoose = require('mongoose')

const tareaSchema = new mongoose.Schema({
    nombre: {type: String, require: true},
    descripcion: {type: String, require: true},
    completed: {type: Boolean, require: true},
})

module.exports = mongoose.model('Tarea', tareaSchema);
