const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    res.header({"algo-custom":"valor custm"});
    console.log(req.headers);
    response.success(req, res, 'Listado INDEX');
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        }).catch(e => {
            response.error(req, res, e, 400);
        });
});

module.exports = router;