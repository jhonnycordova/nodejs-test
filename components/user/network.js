const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then((data) => {
            response.success(req, res, data, 201);
        }).catch(e => {
            response.error(req, res, e, 400);
        });
});

router.get('/', (req, res) => {
    controller.getUsers()
        .then((list) => {
            response.success(req, res, list, 200);
        }).catch(e => {
            response.error(req, res, 'Ocurrió un error devolviendo los datos', 500);
        });
});

module.exports = router;