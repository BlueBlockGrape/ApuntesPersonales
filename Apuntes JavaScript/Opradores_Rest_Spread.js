//// Parámetro REST ////

/**
 * Parámetro REST son trs puntos (...) indicando
 * que se puden recibir más parámetros en una función
 */

//Ejemplo de una función que suma todos los numeros que reciba

function sumar(a,b,...c){
   let resultado = a+b;
   c.forEach(function(n) {
      resultado += n
   });
   return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5,6));

//// Operad Spread ////

/**
 * Spread Operator son los tres puntos (...) para poder concatenar elementos de  varios arreglos.
 */

const arr1 = [1,2,3,4,5],
   arr2 = [6,7,8,9,0];

console.log(arr1,arr2);
//const arr3 = [arr1,arr2] //forma incorrecta

// Forma correcta
const arr3 = [...arr1, ...arr2];

console.log(arr3);

