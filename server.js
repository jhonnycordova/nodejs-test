const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const db = require('./db');
const socket = require('./socket');
const router = require('./network/routes');

const config = require('./config');

db(config.dbUrl);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
socket.connect(server);

router(app);



app.use('/app', express.static('public'));

server.listen(config.port, function(){
    console.log(`Escuchando en ${config.host}:${config.port}`);
});