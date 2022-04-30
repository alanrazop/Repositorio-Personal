const soldados = [
    {nombre: "José"},
    {nombre:  "Pedro"}, 
    {nombre: "Miguel"}
];

module.exports = class Imperio {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        soldados.push(this);
        console.log(soldados);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return soldados;
    }

}