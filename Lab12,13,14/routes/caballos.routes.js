const express = require('express');
const router = express.Router();
const isAuth = require('../controllers/is-auth.js');

const caballosController = require('../controllers/caballos_controller');

router.get('/milagro', isAuth, caballosController.milagro);

router.get('/buscar/:criterio', isAuth, caballosController.get_buscar);

router.get('/', isAuth, caballosController.listar);

router.get('/nuevo', isAuth, caballosController.get_nuevo);

router.post('/nuevo', caballosController.post_nuevo);

module.exports = router;