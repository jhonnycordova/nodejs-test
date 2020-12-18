const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/', (req, res) => {
    console.log(req.query)
    res.send('Hola desde GET!');
});

router.post('/', (req, res) => {
    console.log(req.body.text);
    res.send('Hola desde POST!');
});

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

app.listen(3010);
console.log('Escuchando en el puerto 3010');