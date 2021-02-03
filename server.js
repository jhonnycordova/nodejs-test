const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const db = require('./db');
const socket = require('./socket');
const router = require('./network/routes');

db('mongodb+srv://jhonnycordova:.Jho2021@cluster0.eu6jb.mongodb.net/backend_node_test_db?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
socket.connect(server);

router(app);



app.use('/app', express.static('public'));

server.listen(3010, function(){
    console.log('Escuchando en el puerto 3010');
});