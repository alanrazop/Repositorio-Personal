const express = require('express');

const router = express.Router();

router.get('/rutados', (request, response, next) => {
    response.send('Respuesta de la ruta "/imperio/rutados"'); 
});

module.exports = router;