const db = require('../util/database');

module.exports = class Caballo {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_descripcion, nueva_imagen, nuevo_duenio_id) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
        this.duenio_id = nuevo_duenio_id;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
        'INSERT INTO caballos(nombre, descripcion, imagen, duenio_id) VALUES (?,?,?,?)',
        [this.nombre, this.descripcion, this.imagen, this.duenio_id]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM caballos');
    }

    static fetch(criterio) {
        return db.execute(
            'SELECT * FROM caballos WHERE nombre LIKE ? OR descripcion LIKE ? OR duenio_id LIKE ?',
            ['%'+criterio+'%', '%'+criterio+'%', '%'+criterio+'%']);
    }

}