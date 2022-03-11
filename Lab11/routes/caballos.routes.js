const { response } = require('express');
const express = require('express');
const { request } = require('http');

const router = express.Router();
const path = require('path');

const caballos = ["Spirit", "Tiro al Blanco", "Maxie"];

router.get('/milagro', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'milagro.html'));
});

router.get('/', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de caballos chidos</h1><main><h2>Aquí se habla de caballos</h2><p>Estos son nuestros caballos:</p><ol>';
    for (let i in caballos) {
        respuesta += '<li>' + caballos[i] + '</li>';
    }
    respuesta += '</ol><a href="/caballos/nuevo">Agregar un nuevo caballo</a></main></body></html>';
    response.send(respuesta);
});

router.get('/nuevo', (request, response, next) => {
    console.log(request.body);
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head><body><h1>Bienvenido a este sitio de caballos</h1><main><h2>Aquí se habla se de nuevos caballos</h2><p>Ingresa los datos del nuevo caballo:</p><form action="/caballos/nuevo" method="POST"><label for="nombre">Nombre del nuevo caballo: </label><input type="text" name="nombre" required><input type="submit" value="Enviar"></form><br><br><a href="/caballos/">Regresar a la lista de caballos</a></br></body></html>';
    response.send(respuesta);
});

router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    caballos.push(request.body.nombre);
    console.log(caballos);
    response.redirect('/caballos/');
});

module.exports = router;