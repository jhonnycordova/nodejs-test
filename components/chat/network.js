const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/:userId', (req, res) => {
    controller.listChats(req.params.userId)
        .then((users) => {
            response.success(req, res, users, 200);
        }).catch(e => {
            console.error(e);
            response.error(req, res, 'Ocurrió un error devolviendo los datos', 500);
        });
});

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 201);
        }).catch(e => {
            response.error(req, res, e, 400);
        });
});

module.exports = router;