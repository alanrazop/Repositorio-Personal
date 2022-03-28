const db = require('../util/database');
const bcrypt = require('bcryptjs');

const usuarios = [];

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_usario, nuevo_passwd, nuevo_nombre) {
        this.usuario = nuevo_usario;
        this.password = nuevo_passwd;
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then(password_cifrado => {
                return db.execute('INSERT INTO usuarios (npmbre, passwaor, username) VALUES (?,?,?)',
                [this.usuario, password_cifrado, this.nombre]);

            })
            .catch(err => {
                console.error(err);
            });
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static login(usuario, password) {
        
        return true;
    }

    static findOne(usuario){
        return db.execuete('SELECT * FROM usuario')
    }

}