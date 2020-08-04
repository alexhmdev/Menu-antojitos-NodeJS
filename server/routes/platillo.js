const platillo = require('../models/platillo');
const Categoria = require('../models/categoria');
const _ = require('underscore');
const express = require('express');
const app = express();


app.get('/obtener/:idCategoria', (req, res) => {
    platillo.find({idCategoria: req.params.idCategoria}).populate('idCategoria').then(resp => {
        return res.status(200).json({
            ok: true,
            status: 200,
            msg: 'Obtenidos platillos con éxito',
            cnt: resp
        });
    }).catch(err => {
        return res.status(400).json({
        ok: false,
        status: 400,
        msg: 'Error al obtener los platillos intente de nuevo',
        err
        });
    });
});
app.get('/obtenerId/:id', (req, res) => {
    platillo.findOne({_id:req.params.id}).populate('idCategoria').then(resp => {
        return res.status(200).json({
            ok: true,
            status: 200,
            msg: 'Obtenidos platillos con éxito',
            cnt: resp
        });
    }).catch(err => {
        return res.status(400).json({
        ok: false,
        status: 400,
        msg: 'Error al obtener los platillos intente de nuevo',
        err
        });
    });
});

app.post('/registrar',(req,res) => {
    const platilloBody = new platillo(req.body);

    platilloBody.save().then(resp => {
        return res.status(200).json({
        ok: true,
        status: 200,
        msg: 'Platillo registrado con éxito',
        cnt: resp
        });
    }).catch(err => {
        return res.status(400).json({
            ok:false,
            status: 400,
            msg: 'Error al registrar el platillo',
            err
        });
    });
});

app.put('/actualizar/:idPlatillo',(req,res) => {
    let body = _.pick(req.body,
        ['strNombre','strDescripcion','strIngredientes','nmbPiezas','nmbPrecio','blnActivo']);

        platillo.findByIdAndUpdate(req.params.idPlatillo,body,{ runValidators: true, context: 'query' }).then(resp => {
            return res.status(200).json({
            ok: true,
            status: 200,
            msg: 'Platillo actualizado con éxito',
            cnt: resp
            });
        }).catch(err => {
            return res.status(400).json({
            ok: false,
            status: 400,
            msg: 'Error al actualizar el platillo',
            err
            });
        });
});

module.exports = app