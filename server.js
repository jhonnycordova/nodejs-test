const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/', (req, res) => {
    res.header({"algo-custom":"valor custm"});
    console.log(req.headers);
    response.success(req, res, 'Listado INDEX');
});

router.post('/message', (req, res) => {
    response.success(req, res, 'PostCreado', 201);
});

app.use('/app', express.static('public'));

app.listen(3010);
console.log('Escuchando en el puerto 3010');