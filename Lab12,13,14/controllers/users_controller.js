const User = require('../models/user');
cosnt bcrypt = require('bcryptjs');

exports.get_login =  (request, response, next) => {
    const usuario = request.session.usuario ? request.session.usuario : '';
    console.log(request.session.usuario);
    response.render('login', {
        usuario: usuario 
    });
};

exports.get_signup =  (request, response, next) => {
    response.render('signup', {
        usuario: request.session.usuario ? request.session.usuario : '',
    });
};

exports.post_signup =  (request, response, next) => {
    const {username, password, nombre} = request.body;
    const newUser = new User(username, password, nombre);
    newUser.save()
        .then(() => {
            console.log("USUARIO REGISTRADO PERRO.");
            response.redirect('/users/signup');
        }).catch(err => {
            console.error(err);
        })
};

exports.login =  (request, response, next) => {
    User.findOne(request.body.nombre)
    .then(([rows, fieldData]) => {
        console.log(rows)
        if (rows.lenght < 1){
            return response.redirect('/users/login');
        }
    cosnt user = new User (rows[0].username, rows[0].password)
    })
    .catch(err) => {
        console.error(err)
    };
    bcrypt.compare(request.body.password, user.password)
        .then(doMatch => {
            if (doMatch) {
                request.session.isLoggedIn = true;
                request.session.user = user;
                request.session.usuario = request.body.nombre;
                return request.session.save(err => {
                    response.redirect('/caballos/');
                });
            }
            response.redirect('/login');
        }).catch(err => {
            response.redirect('/login');
        });
    if (User.login(request.body.nombre, request.body.passwd)) {
        
        response.redirect('/caballos/');
    } else {
        response.redirect('/users/login');
    }
};

exports.logout =  (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};