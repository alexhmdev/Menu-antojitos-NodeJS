const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categoriaSchema = new mongoose.Schema({
    strNombre: {
        type: String,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true, 'Ingrese un nombre de categoría']
    },
    strDescripcion: {
        type: String,
        required: [true, 'Ingrese una descripción de la categoría']
    },
    blnActivo: {
        type: Boolean,
        default: true
    }
});

categoriaSchema.plugin(uniqueValidator, {
    message: 'Error, {VALUE} Ya esta registrado intente con uno diferente'
});

module.exports = mongoose.model('Categoria',categoriaSchema);