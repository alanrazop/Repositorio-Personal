const path = require('path');
const Imperio = require('../models/imperio');
const User = require('../models/user');


exports.listar = (request, response, next) => {
    console.log(request.body);
    console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies);
    Imperio.fetchAll()
        .then(([soldados, fieldData])=>{
            response.render('lista_imperial', {
                soldados: Imperio.fetchAll(),
                ultimo_soldado: request.cookies.ultimo_soldado,
                usuario: request.session.usuario
             });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_nuevo = (request, response, next) => {
    console.log(request.body);
    User.fetchAll()
    .then(([duenios, fieldData]) => {
        response.render('nuevo_soldado', { 
            nombre: 'Emperador Alan',
            usuario: request.session.usuario, 
            duenios: duenios, 
        });
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    const soldado = new Imperio(request.body.nombre);
    soldado.save();
    response.setHeader('Set-Cookie', 'ultimo_soldado='+soldado.nombre);
    response.redirect('/imperio/');
};