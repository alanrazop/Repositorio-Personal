const express = require('express');
const router = express.Router();

const caballosController = require('../controllers/caballos_controller');

router.get('/milagro', caballosController.milagro);

router.get('/', caballosController.listar);

router.get('/nuevo', caballosController.get_nuevo);

router.post('/nuevo', caballosController.post_nuevo);

module.exports = router;