const express = require('express');

const router = express.Router();

router.get('/rutados', (request, response, next) => {
    response.send('Respuesta de la ruta "/imperio/rutados"'); 
});

//Devuelve un archivo HTML
router.get('/hello', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});


module.exports = router;