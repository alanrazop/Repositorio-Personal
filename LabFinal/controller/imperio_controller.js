const path = require('path');
const Imperio = require('../models/imperio');


exports.listar = (request, response, next) => {
    console.log(request.body);
    response.render('lista_imperial', {soldados: Imperio.fetchAll() });
};
exports.get_nuevo = (request, response, next) => {
    console.log(request.body);
    response.render('nuevo_soldado', { 
        nombre: 'Emperador Alan'
    });
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    const soldado = new Imperio(request.body.nombre);
    soldado.save();
    response.redirect('/imperio/');
};