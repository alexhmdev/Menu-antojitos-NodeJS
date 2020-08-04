const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Categoria = require('../models/categoria');
const platilloSchema = new mongoose.Schema({
    idCategoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        required: [true, 'Ingrese un id de categoria']
    },
    strNombre: {
        type: String,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true, 'ingrese un nombre del platillo']
    },
    strDescripcion: {
        type: String,
        required: [true, 'Ingrese una descripcion del platillo']
    },
    strIngredientes: {
        type: String,
        required: [true, 'Ingrese los ingredientes del platillo']
    },
    nmbPiezas: {
        type: Number,
        required: [true, 'Ingrese platillos disponibles']
    },
    nmbPrecio: {
        type: Number,
        required: [true, 'Ingrese el precio del platillo']
    },
    blnActivo: {
        type: Boolean,
        default: true
    }
});

platilloSchema.plugin(uniqueValidator, {
    message: '{PATH} Debe ser único y diferente'
});

module.exports = mongoose.model('Platillo', platilloSchema);