const express = require('express');
const router = express.Router();
const isAuth = require('../controller/is-auth.js');
const imperioController = require('../controller/imperio_controller');

router.get('/rutados', (request, response, next) => {
    response.send('Respuesta de la ruta "/imperio/rutados"'); 
});

//Devuelve un archivo HTML
router.get('/hello', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

//desplegar EJS

router.get('/buscar/:criterio', isAuth, imperioController.get_buscar);

router.get('/', isAuth, imperioController.listar);

router.get('/nuevo',isAuth, imperioController.get_nuevo);

router.post('/nuevo', imperioController.post_nuevo);




module.exports = router;