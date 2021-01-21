const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://jhonnycordova:.Jho2021@cluster0.eu6jb.mongodb.net/backend_node_test_db?retryWrites=true&w=majority');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

router(app);



app.use('/app', express.static('public'));

app.listen(3010);
console.log('Escuchando en el puerto 3010');