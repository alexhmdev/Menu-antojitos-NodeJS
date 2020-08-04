const express = require('express');
const app = express();

app.use('/platillo',require('./platillo'));
app.use('/categoria',require('./categoria'));


module.exports = app;