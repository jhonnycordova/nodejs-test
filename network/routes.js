const express = require('express');
const message = require('./../components/message/network');
const users = require('./../components/user/network');
const chats = require('./../components/chat/network');

const routes = function(server) {
    server.use('/messages', message);
    server.use('/users', users);
    server.use('/chats', chats);
}

module.exports = routes;