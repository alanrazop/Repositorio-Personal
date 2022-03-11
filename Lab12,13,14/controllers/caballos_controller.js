const path = require('path');
const Caballo = require('../models/caballo');

exports.milagro = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'milagro.html'));
};

exports.listar = (request, response, next) => {
    console.log(request.body);
    //console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);

    Caballo.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('lista', {
                caballos: rows,
                ultimo_caballo: request.cookies.ultimo_caballo ? request.cookies.ultimo_caballo: '',
                usuario: request.session.usuario ? request.session.usuario: '', 
            }); 
        })
        .catch(err => {
            console.log(err);
        });
}

exports.get_nuevo = (request, response, next) => {
    console.log(request.body);
    response.render('nuevo', {
        nombre: 'Lalo',
        usuario: request.session.usuario  
    });
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    const caballo = new Caballo(request.body.nombre, request.body.descripcion, request.body.imagen);
    caballo.save()
        .then(() => {
            response.setHeader('Set-Cookie', 'ultimo_caballo='+caballo.nombre );
            response.redirect('/caballos/');
        })
    .catch(err => console.log(err));
};