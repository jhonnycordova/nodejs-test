const express = require('express');

var app = express();

app.use('/', (req, res) => {
    res.send('Hola');
});

app.listen(3010);
console.log('Escuchando en el puerto 3010');