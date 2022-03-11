//variables, constastes, consolas
const personaje = "Mario";
console.log(personaje);
console.warn(personaje);
console.info(personaje);
console.error(personaje);

for (let i=1; i<=10; i++){
    console.log(i);
}
//console.log(i);

//alert, prompt, confirm
alert("¡Esto es una alerta!");

const nombre = prompt("¿Cómo te llamas?");
console.log(nombre);

const respuesta = confirm("¿Estas seguro?");
console.log(respuesta);

//funciones tradicionales
function saltar (){
    console.log("Mario salta");
}

saltar();

//funciones modernas
const correr = (personaje) => console.log(personaje + "corre");

correr(personaje);

//arreglos
const personajes =["Luigi"];
personajes.push(personaje);
personajes[2] = "Yoshi";
personajes[10] = "Peach";
personajes.length =20;



console.log(personajes);