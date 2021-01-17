const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    // res.header({"algo-custom":"valor custm"});
    controller.getMessages()
        .then((list) => {
            response.success(req, res, list, 200);
        }).catch(e => {
            console.error(e);
            response.error(req, res, 'Ocurrió un error devolviendo los datos', 500);
        });
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        }).catch(e => {
            response.error(req, res, e, 400);
        });
});

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 201);
        }).catch(e => {
            response.error(req, res, e, 400);
        });
});

module.exports = router;