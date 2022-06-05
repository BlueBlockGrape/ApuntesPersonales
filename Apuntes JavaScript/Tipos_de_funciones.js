//// Existen Funciones Declaradas y Expresadas ////

//// Funciones Declaradas ////

/**
 * Estas funciones pueden ser llamadas antes de que sean declaradas, no hay problema ya que lee todo el script antes de ir ejecutandolo por lo que estas funciones las reconoce
 */


/**
 * Ejemplos de funciones Declaradas Simples
 */

function estoEsUnaFuncion(){
   console.log("Uno");
   console.log("Dos");
   console.log("Tres");
}

/** Para mandar llamar una función **/
estoEsUnaFuncion();

/**
 * Ejemplo de función que devuelve un valor
 */

function unaFuncionQueDevuelveValor(){
   return "La función devuelve un texto";
}

/** Para este ejemplo obtenemos el valor que recibimos en una variable y después la imprimimos **/

let var1 = unaFuncionQueDevuelveValor();
console.log(var1);

/**
 * Ejemplo de función que recibe parametros
 */

function saludar(nombre, edad){
   console.log(`Hola mi nombre es ${nombre}, y tengo ${edad} años.`);
}

/** Ejemplo de mandar llamar funcion con parametros **/

saludar('Aaron', 23);

/** si no mandamos parametros tomara como dato undefined lo cual no es conveniente o correcto para ello realizamos lo siguiente **/

function saludar1(nombre = "Sin nombre", edad = 0){
   console.log(`Hola mi nombre es ${nombre}, y tengo ${edad} años.`);
}

/** Se puede mandar llamar  la función sin poner parametros y se tomarán los valores por defecto**/
saludar1();


//// Funciones expresadas (Anonimas) ////

/**
 * Estas funciones se asignan a una variable y se manda llamar la variable para ejecutarla, se necesita primero declarla antes de mandarla llamar por que en este tipo de funciones si importa y si lo mandas llamar marca error de que no existe la variable.
 * Se puede realizar lo mismo que las funciones declaradas solo que estas se asignan a una variable.
 */


/**
 * Ejemplo de una funcion expresada
 */

const funcionExpresada = function() {
   console.log("Esto es una funcion expresada, es decir, una funcion que se le ha asignada como valor a una variable, si invocamos esta funcion antes de su definicion js marcara un error");
}


//// Arrow Functions ////

/**
 * Se utilizan para funciones expresadas, también se puede utilizar en foreach
 */

// Existen variasformas de declararlas, si no hay parametros se deben poner los parentesis
const saludar = () =>console.log(`Hola`);
saludar();

//Si solo recibe un parametro puede o no utilizar los parentesis

const saludar1 = (nombre) => console.log(`Hola ${nombre}`);
saludar1('Aaron');

const saludar2 = nombre => console.log(`Hola ${nombre}`);
saludar2();

//ejemplo de una función "normal" y una arrow function

const sumar = function (a,b){
   return a+b;
}

const sumar1 = (a,b) => a + b; //en este caso no se ocupa return porque es solo una línea
console.log(sumar(9,9));

const funcionDeVariasLineas = () => {
   console.log("uno");
   console.log("dos");
   console.log("tres");
}
funcionDeVariasLineas();


//Ejemplo con foreach

const numeros = [1,2,3,4,5];

numeros.forEach((el,index) => console.log(`${el} esta en la posicion ${index}`));

/**
 * Nota, intentar no uitlizar las arrow function en objetos
 * literales porque se saltan el contexto al usar la palbra this.
 */
