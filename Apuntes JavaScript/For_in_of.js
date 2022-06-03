//// FOR IN ////

/**
 * Para recorrer o iterar las llaves de un objeto
 * Solo devuelve las llaves
 */

const aaron = {
   nombre: "Aaron",
   apellido: "Castillo",
   edad: 24
}

for(const propiedad in aaron){
   console.log(propiedad);
}

// Para imprimir los valores a través de la propiedad

for(const propiedad in aaron) {
   console.log(`key: ${propiedad}, Value: ${aaron[propiedad]}`);
}


//// FOR OF ////

/**
 * Recorre todos los elementos de cualquier objeto iterable
 * devuelve el valor, no el indice
 */

const numeros =[10,20,30,40,50,60,70,80,90,100];

for(const elementos of nueros){
   console.log(elemento);
}

//Incluso podemos recorrer una cadena de texto porque es un arreglo de caracteres

let cadena = "Hola Mundo";

for(const caracter of cadena){
   console.log(caracter);
}



