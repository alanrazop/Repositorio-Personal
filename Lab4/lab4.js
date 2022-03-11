//1. Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
const numero = prompt("Ingresa un numero");
console.log(numero);
for (let i = 1; i <= numero; i++){
    var cuadrado = i*i;
    var cubo = cuadrado*i;
    document.write("<table><tr><td>",i,", ",cuadrado,", ",cubo,"</td></tr></table>");
    
}

//2. Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
let value1 = Math.floor(Math.random() * 10) + 1;
let value2 = Math.floor(Math.random() * 10) + 1;
const res = prompt("Cuanto es "+ value1 +" + "+ value2 +"");
console.log(res);

if (value1 + value2 == res){
    const respuesta = alert("Es correcto");
    console.log(respuesta); 
}
else{
    const respuesta = alert("Es falso");
    console.log(respuesta);
}

//3 .Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo. 
function contador(arreglo){ 
    let positivo = 0; 
    let negativo = 0; 
    let ceros = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 0) {
            positivo += 1;
        }
        else if (arreglo[i] < 0) {
            negativo += 1;  
        }
        else {
            ceros += 1;
        }
    }
    alert("Negativos: " + negativo + " Ceros: " + ceros + " Positivos: " + positivo);
}

const arr = [-2,-58,0,0,0,0,1,2,3,5,6,7,8];
contador(arr);


//4. Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
function promedios (numArray){
    var average = [];
    for (let i = 0; i < numArray.length; i++) {
        average.push(numArray[i].reduce(function (x, y) { return x + y; }, 0) / numArray[i].length);
    }
    return average;
}

var items = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
let answer = promedios(items);
document.write("El promedio de cada renglon es: "+ answer);

//5. Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso.
function inverso (n){
    n = n + "";
	return n.split("").reverse().join("");
}
let num = 2022;
document.write(" El numero inverso es: "+ inverso(num));

//6. Ejercicio propio



