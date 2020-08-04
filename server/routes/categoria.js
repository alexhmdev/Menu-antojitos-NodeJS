const categoria = require('../models/categoria');
const _ = require('underscore');
const express = require('express');
const app = express();


app.get('/obtener/:idCategoria', (req, res) => {
    categoria.findOne({_id: req.params.idCategoria}).then(resp => {
        return res.status(200).json({
            ok: true,
            status: 200,
            msg: 'Obtenidas categorias con éxito',
            cnt: resp
        });
    }).catch(err => {
        return res.status(400).json({
        ok: false,
        status: 400,
        msg: 'Error al obtener las categorias intente de nuevo',
        err
        });
    });
});
app.get('/obtener', (req, res) => {
    categoria.find({}).populate('Categoria').then(resp => {
        return res.status(200).json({
            ok: true,
            status: 200,
            msg: 'Obtenidos categorias con éxito',
            cnt: resp
        });
    }).catch(err => {
        return res.status(400).json({
        ok: false,
        status: 400,
        msg: 'Error al obtener los categorias intente de nuevo',
        err
        });
    });
});

app.post('/registrar',(req,res) => {
    const categoriaBody = new categoria(req.body);

    categoriaBody.save().then(resp => {
        return res.status(200).json({
        ok: true,
        status: 200,
        msg: 'categoria registrado con éxito',
        cnt: resp
        });
    }).catch(err => {
        return res.status(400).json({
            ok:false,
            status: 400,
            msg: 'Error al registrar la categoria',
            err
        });
    });
});

app.put('/actualizar/:idCategoria',(req,res) => {
    let body = _.pick(req.body,
        ['strNombre','strDescripcion','blnActivo']);

        categoria.findByIdAndUpdate(req.params.idCategoria,body,{ runValidators: true, context: 'query' }).then(resp => {
            return res.status(200).json({
            ok: true,
            status: 200,
            msg: 'categoría actualizada con éxito',
            cnt: resp
            });
        }).catch(err => {
            return res.status(400).json({
            ok: false,
            status: 400,
            msg: 'Error al actualizar la categoría',
            err
            });
        });
});

module.exports = app;