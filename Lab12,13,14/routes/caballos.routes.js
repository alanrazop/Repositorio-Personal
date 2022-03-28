const express = require('express');
const router = express.Router();
const isAuth = require('../controllers/is-auth.js');

const caballosController = require('../controllers/caballos_controller');

router.get('/milagro', caballosController.milagro);

router.get('/', caballosController.listar);

router.get('/nuevo', caballosController.get_nuevo);

router.post('/nuevo', caballosController.post_nuevo);

router.get('/nuevo', isAuth, caballosController.get_nuevo);

router.get('/:caballo_id', caballosController.filtrar);

module.exports = router;