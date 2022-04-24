function muestra_imagen() {
    document.getElementById("imagen_portero").innerHTML = '<img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/30446.png" alt="Imagen de portero de hockey">';
}

let input_jugador = document.getElementById("jugador");

input_jugador.onkeyup = () => {
    let div_respuesta = document.getElementById("respuesta");

    div_respuesta.innerHTML = "Tu jugador favorito es " + input_jugador.value;
}

let boton_foto = document.getElementById("muestra_foto_coach");

function mostrar_foto_coach() {
    let div_foto_coach = document.getElementById("foto_coach");
    div_foto_coach.innerHTML = '<img src="https://m.media-amazon.com/images/M/MV5BZDIyNzE2ZWUtODUxOC00M2UzLWI1MDUtMGNhOWRkM2FkYzJlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg" alt="Foto de Herb Brooks">';
    boton_foto.onclick = limpiar_foto;
}

function limpiar_foto() {
    let div_foto_coach = document.getElementById("foto_coach");
    div_foto_coach.innerHTML = '';
    boton_foto.onclick = mostrar_foto_coach;
}

boton_foto.onclick = mostrar_foto_coach;