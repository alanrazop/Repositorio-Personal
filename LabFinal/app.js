const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rutas_imperio = require('./routes/imperio.routes');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

//Varianle de configración de express (ejs)
app.set('view engine', 'ejs');
app.set('views', 'views');

//Accede a una carpeta de archivos estáticos (css)
app.use(express.static(path.join(__dirname, 'public')));

//Accede al directorio de rutas (express)
app.use('/imperio', rutas_imperio);

//Ruta nueva
app.use('/desconocido', (request, response, next) => {
    response.send('Has entrado a una ruta desconocida :0'); 
});

//Ruta nueva
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
    console.error('Otro middleware!');
    response.send('404 La página que buscas no existe'); //Manda la respuesta
});

app.listen(3000);