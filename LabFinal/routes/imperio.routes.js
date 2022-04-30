const express = require('express');
const router = express.Router();
const imperioController = require('../controller/imperio_controller');

router.get('/rutados', (request, response, next) => {
    response.send('Respuesta de la ruta "/imperio/rutados"'); 
});

//Devuelve un archivo HTML
router.get('/hello', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

//desplegar EJS
router.get('/nuevo', imperioController.get_nuevo);

router.get('/nuevo', imperioController.post_nuevo);

router.get('/', imperioController.listar);


module.exports = router;