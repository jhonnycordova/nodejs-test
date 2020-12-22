const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/', (req, res) => {
    res.header({"algo-custom":"valor custm"});
    console.log(req.headers);
    response.success(req, res, 'Listado INDEX');
});

router.post('/', (req, res) => {
    response.success(req, res, 'PostCreado', 201);
});

module.exports = router;