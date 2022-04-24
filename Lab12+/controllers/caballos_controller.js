const path = require('path');
const Caballo = require('../models/caballo');
const User = require('../models/user');


exports.milagro = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'milagro.html'));
};

exports.listar = (request, response, next) => {
    console.log(request.body);
    console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);
    Caballo.fetchAll()
        .then(([caballos, fieldData])=>{
            response.render('lista', {
                caballos: caballos,
                ultimo_caballo: request.cookies.ultimo_caballo,
                usuario: request.session.usuario       
            });
        }).catch((error)=>{
            console.log(error);
        });
};

exports.get_nuevo = (request, response, next) => {
    console.log(request.body);
    User.fetchAll()
        .then(([duenios, fieldData])=>{
            response.render('nuevo', {
                nombre: 'Alan',
                usuario: request.session.usuario,
                duenios: duenios,
            });
        })
        .catch((error)=>{
            console.log(error);
        });
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const caballo = 
        new Caballo(
            request.body.nombre, request.body.descripcion, 
            '/'+request.file.filename, request.body.duenio_id);
    caballo.save()
        .then(()=>{
            response.setHeader('Set-Cookie', 'ultimo_caballo='+caballo.nombre );
            response.redirect('/caballos/');
        }).catch((error)=>{
            console.log(error);
        });
    
};

exports.get_buscar = (request, response, next) => {
    Caballo.fetch(request.params.criterio)
        .then(([rows, fieldData]) => {
            response.status(200).json(rows);
        }).catch(error => {
            console.log(error);
        });
}