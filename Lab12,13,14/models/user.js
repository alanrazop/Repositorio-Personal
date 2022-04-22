const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_usuario, nuevo_passwd, nuevo_nombre) {
        this.username = nuevo_usuario;
        this.password = nuevo_passwd;
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then( (password_cifrado) => {
                return db.execute(
                    'INSERT INTO usuarios (username, password, nombre) VALUES (?,?,?)', 
                    [this.username, password_cifrado, this.nombre]);
            }).catch((err) => {
                console.log(err);
            }); 
    }

    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    static findOne(username) {
        return db.execute(
            'SELECT * FROM usuarios WHERE username=?', [username]);
    }

}