const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');
const multer = require('multer');

const upload = multer({
    dest: 'public/files/'
});

router.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((list) => {
            response.success(req, res, list, 200);
        }).catch(e => {
            console.error(e);
            response.error(req, res, 'Ocurrió un error devolviendo los datos', 500);
        });
});

router.post('/', upload.single('file'), (req, res) => {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
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

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        }).catch(e => {
            response.error(req, res, e, 400);
        });
});

module.exports = router;