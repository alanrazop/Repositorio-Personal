//1. Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
const numero = prompt("Ingresa un numero");
console.log(numero);
for (let i=1; i<=numero; i++){
    var cuadrado=i*i;
    var cubo=cuadrado*i;
    document.write("<table><tr><td>",i,", ",cuadrado,", ",cubo,"</td></tr></table>");
    
}

//2. Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.
let value1 = Math.floor(Math.random() * 10) + 1;
let value2 = Math.floor(Math.random() * 10) + 1;
const res = prompt("Cuanto es "+ value1 +" + "+ value2 +"");
console.log(res);

if (value1+value2 == res){
    const respuesta = alert("Es correcto");
    console.log(respuesta); 
}
else{
    const respuesta = alert("Es falso");
    console.log(respuesta);
}

//3 .Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo. 


function contador(arreglo){ 
    for (let i=0; i<arreglo.lenght; i++){
        if (i>0){
            count1+=1;
        }
        else if (i<0){
            count2+=1;  
        }
        else {
            count3+=1;
        }
    }
}
var count1=0, count2=0, count3=0;

const arr = [-2,-58,0,0,0,0,1,2,3,5,6,7,8];
contador(arr);
var fun=contador;
const mensaje = alert("Negativos: "+count2+" Ceros: "+count3+" Positivos: "+count1);
console.log(mensaje);







