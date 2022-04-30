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

function muestra_imagen(){
    document.getElementById("imagen_portero").innerHTML ='<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFnxdJtq7F6aA/profile-displayphoto-shrink_200_200/0/1628951512135?e=1654128000&v=beta&t=Mebzl28KQW9zD24S48OJUz8Rv0cRl_H9FjtWPe3Q1sM" alt="imagen de Alan">';
}

let input_jugador = document.getElementById("jugador");

input_jugador.onkeyup = () => {
    let div_respuesta = document.getElementById("respuesta");

    div_respuesta.innerHTML = "Tu jugador favorito es " + input_jugador.value;
}   

let boton_foto = document.getElementById("muestra_foto");

function muestra_foto_alan () {
    let div_foto_alan = document.getElementById("foto_alan");
    div_foto_alan.innerHTML = '<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFnxdJtq7F6aA/profile-displayphoto-shrink_200_200/0/1628951512135?e=1654128000&v=beta&t=Mebzl28KQW9zD24S48OJUz8Rv0cRl_H9FjtWPe3Q1sM" alt="imagen de Alan">';
    boton_foto.onclick=limpiar_foto;
}

function limpiar_foto() {
    let div_foto_alan = document.getElementById("foto_alan");
    div_foto_alan.innerHTML = '';
    boton_foto.onclick = muestra_foto_alan;
}

boton_foto.onclick = muestra_foto_alan;
