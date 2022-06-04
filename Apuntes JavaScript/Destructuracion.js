//// Destructuración ////

/**
 * Sirve para obtner variables a través de los valores que se tienen en un arreglo u objeto
 */

const numeros = [1,2,3];

//Ejemplo sin destructuración

let uno = numeros[0],
      dos = numeros[1],
      tres = numeros[3];

//Con destructuración

const [one,two,three] = numeros;
console.log(one,two,three);


//Ejemplo con objeto

let persona = {
   nombre: "Aaron",
   apellido: "Castillo",
   edad: 24
}

/**
 * La variable a destructurar se tiene que llamar igual que en el objeto para que se pocese correctamente
 */

let {nombre, apellido, edad} = persona;
console.log(`nombre: ${nombre}, apellido: ${apellido}, edad: ${edad}.`);

