//fs: filesystem
const fs = require('fs');

fs.writeFileSync('hola.txt','Hola desde node');

const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];
/*
for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
} */

//Funciones del laboratorio 8
function promedio (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum / array.length;
}

function escribe (string){
    fs.writeFileSync('ejercicio.txt',string);
}

function esPalindromo(palabra) {
	var palabra = palabra.toLowerCase();
 
	// eliminamos los espacios en blanco
	palabra = palabra.replace(/ /g, "");
 
	for (var i = 0; i < palabra.length; i++){
		if(palabra[i] != palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 

// CASOS DE PRUEBA
let frase = "Hola mi nombre es Alan Razo y este es un nuevo archivo de texto. Version 2"
console.log(promedio(arreglo));
console.log(escribe(frase));
if(esPalindromo('Se van sus naves')){
	console.log("Esto es un palíndromo");
}
else {
	console.log("Esto no es un palíndromo")
}



const http = require('http');
/*
const server = http.createServer((request, response) => {
    console.log(request);
    response.setHeader('Content-Type', 'text/html');
    response.write('/Users/alanrazop/Documents/Repositorio-Personal/index.html');
    response.end();
});
server.listen(3000);*/

const { title } = require('process');

const caballos = ['Spirit', 'Tiro al blanco', 'Maxie'];

const server = http.createServer( (request,response) => {


    if (request.url === '/'){
        response.setHeader('Content-Type','text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>')
        response.write('<body>');
        response.write('<h1>Bienvenidos a este sitio de caballos</h1>');
        response.write('<main>');
        response.write('<p>Aquí se habla de caballos</p>');
        response.write('<ol>');
        for (let i in caballos){
            response.write('<li>'+ caballos[i] + '</li>');
        }
        response.write('</ol>');
        response.write('<a href="nuevo">Agregar un nuevo caballo</a>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    }
    else if (request.url === '/nuevo' && request.method === 'GET'){
        response.setHeader('Content-Type','text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>')
        response.write('<body>');
        response.write('<h1>Bienvenidos a este sitio de caballos</h1>');
        response.write('<main>');
        response.write('<h2>Aqui se habla de nuevos caballos</h2>');
        response.write('<p>Ingresa los datos del nuevo caballo</p>');
        response.write('<a href="nuevo">Agregar un nuevo caballo</a>');
        response.write('<form action="nuevo" method="POST">');
        response.write('<label for="nombre">Nombre del nuevo caballo</label>');
        response.write('<input type="text" name="nombre" required>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="nuevo">Regrear a la lista de caballos</a>');
        response.write('</main>');
        response.write('</body>');
        response.end();
    }
    else if (request.url === '/nuevo' && request.method === 'POST'){
        const datos =[];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            caballos.push(nuevo_dato);
            response.setHeader('Content-Type','text/html');
            response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>')
            response.write('<body>');
            response.write('<h1>Bienvenidos a este sitio de caballos</h1>');
            response.write('<main>');
            response.write('<p>Aquí se habla de caballos</p>');
            response.write('<h3>'+ nuevo_dato +' fue agregado a la lista</h3>');
            response.write('<ol>');
            for (let i in caballos){
                response.write('<li>'+ caballos[i] + '</li>');
            }
            response.write('</ol>');
            response.write('<a href="nuevo">Agregar un nuevo caballo</a>');
            response.write('</main>');
            response.write('</body>');
            return response.end();
        });
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type','text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Caballos</title><meta charset="utf-8"></meta></head>')
        response.write('<body>');
        response.write('<h1>La página '+ request.url + 'no se encontró.</h1>');
        response.write('</body>');
        response.end();

    }
});

server.listen(3000);