const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rutas_imperio = require('./routes/imperio.routes');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/imperio', rutas_imperio);

app.use('/desconocido', (request, response, next) => {
    response.send('Has entrado a una ruta desconocida :0'); 
});

app.use('/adios', (request, response, next) => {
    console.log(request.body);
    response.send('¡Nos vemos! Esto es una despediada :('); 
});

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Bienvenidos al portal de Alan!'); //Manda la respuesta
});

app.listen(3000);