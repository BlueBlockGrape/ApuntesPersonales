//// Arreglos (Arrays) ////

/**
 * Puede tener diferentes tipos de datos dentro, no solo uno, icluso más arreglos u objetos
 * Se puede crear un arreglo vacio para ello solo utilizamos [] es la forma de declarar un arreglo.
 * Se puede llenar en el momento y tambien hay muchos metodos para irlo llenando u obtener información de él.
 */

const a =[];
const b = [1, true, "Hola", ["A","B","C"]];
console.log(a);
console.log(b);
console.log(b.length); //para mostrar el numero de elementos
console.log(b[2]); //"Hola"
console.log([3][2]); //"C" //obtiene la C del arreglo dentro del otro arreglo


/**
 * Algunas funciones con los arreglos
 */

//Llenar elementos con array of
const c = Array.of("X","Y","Z",9,8,7);
//Arreglo de 100 posiciones inicializado en false
const d = Array(100).Fill(false);
console.log(d);

/**
 * Para agregar o eliminar elementos al final
 */

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro"); //añade elemento al final
console.log(colores);

colores.pop(); //elimina el último elemento
console.log(colores);


/**
 * Para ejecutar una funcion por cada elemento podemos hacerlo de la siguiente manera.
 */

colores.forEach(function(el,index){
   console.log(`<li id="${index}">${el}</li>`);
});