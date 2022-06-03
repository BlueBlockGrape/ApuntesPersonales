////Diferencias entre var, let y const////



////Devolver el tipo de dato que se esta reprentando////

/**
 * Ejemplos
 */

let n = 15;
let n1 = 14.556;
let c = "cadena";
let b = true;

console.log(typeof(n));
console.log(typeof(n1));
console.log(typeof(c));
console.log(typeof(b));

////Cadenas de texto Strings////

/**
 * Algunas formas de declarar strings
 */


let nombre = "Aaron";
let apellido = 'Castillo';
let saludo = new String("HolaMundo");
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ab dolore quidem quaerat id, deleniti veritatis, magni fugit illo obcaecati laborum atque assumenda dolorum non quisquam voluptatibus ipsum praesentium aut?"

/**
 * imprimir esas variable
 */

console.log(nombre,apellido,saludo); //AaronCastilloHolaMundo


/**
 * Funciones con cadenas de texto
 */

console.log(nombre.length); //para obtener el tamaño de la cadena de texto
console.log(nombre.toUpperCase()); //Convertir cadena de texto a mayúsculas
console.log(apellido.toLowerCase()); //Convertir cadena de texto a minúsculas
console.log(lorem.includes("amet")); //devuelve true si contiene la cadena mencionada
console.log(lorem.trim());//para quitar los espacios al inicio y al final de la cadena de texto
console.log(lorem.split(" "));//crea una arreglo separando la cadena de texto por lo que este dentro de los parentesis

////Template string////

/**
 * Se utiliza para interpolar variables con texto
 * se utiliza `` y dentro de ellos se pueden poner variables, funciones y demás cosas (ciclos, condicionales, funciones)
 */

/**
 * Ejemplo
 */

let nombre1 = "Aaron";
let apellido1 = "Castillo";
let edad1 = 24;
let saludo2 = `Hola mi nombre es ${nombre1} ${apellido1} y tengo ${edad1} años.`;



////Variables numericas////

/**
 * Se pueden representar como texto o numero, js lo puede identificar si se pueden hacer operaciones exepto en la suma 
 */

let num1 = 7.19;
let num2 = "6.5";

/**
 * Funciones con numeros
 */

console.log(c.toFixed(1)); //Redondear (7.2)

/**
 * Convertir a entero o float
 */

console.log(paseInt(c)); //7
console.log(paseInt(d)); //6
console.log(paseFloat(c)); //7.2
console.log(paseFloat(d)); //6.5








