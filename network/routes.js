const express = require('express');
const message = require('./../components/message/network');

const routes = function(server) {
    server.use('/messages', message);
}

module.exports = routes;