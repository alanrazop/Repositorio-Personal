const path = require('path');
const Soldado = require('../models/imperio');
const User = require('../models/user');


exports.milagro = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'milagro.html'));
};

exports.listar = (request, response, next) => {
    console.log(request.body);
    console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);
    Soldado.fetchAll()
        .then(([soldados, fieldData])=>{
            response.render('lista_imperial', {
                soldados: soldados,
                ultimo_soldado: request.cookies.ultimo_soldado,
                usuario: request.session.usuario       
            });
        }).catch((error)=>{
            console.log(error);
        });
};

exports.get_nuevo = (request, response, next) => {
    console.log(request.body);
    User.fetchAll()
        .then(([nombre, fieldData])=>{
            response.render('nuevo_soldado', {
                nombre: 'Alan',
                usuario: request.session.usuario,
            });
        })
        .catch((error)=>{
            console.log(error);
        });
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    console.log(request.file);
    const soldado = 
        new Soldado(
            request.body.nombre, request.body.descripcion, 
            '/'+request.file.filename);
    soldado.save()
        .then(()=>{
            response.setHeader('Set-Cookie', 'ultimo_soldado='+soldado.nombre );
            response.redirect('/imperio/');
        }).catch((error)=>{
            console.log(error);
        });
    
};

exports.get_buscar = (request, response, next) => {
    Imperio.fetch(request.params.criterio)
        .then(([rows, fieldData]) => {
            response.status(200).json(rows);
        }).catch(error => {
            console.log(error);
        });
}