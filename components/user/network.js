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

module.exports = router;