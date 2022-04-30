const express = require('express');
const bodyParser = require('body-parser');
const rutas_imperio = require('./routes/imperio.routes');
const rutas_usuarios = require('./routes/auth.routes');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();

const csrfProtection = csrf();  

//Varianle de configración de express (ejs)
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'lknaeañco3pom4ñi3jrcñlawjomxñi3iq3mc4rsejf0438cnf83h4cknh43ui', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());



app.use(csrfProtection);
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});



//Accede a una carpeta de archivos estáticos (css)


//Accede al directorio de rutas (express)
app.use('/users', rutas_usuarios);
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