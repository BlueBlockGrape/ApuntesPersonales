//// Manejo de Errores ////

/**
 * Se utiliza para poder manejar errores inesperados que puedan surgir en el código, por ejemplo para conexiones
 */

//Estructura básica
try{

}catch(error){

}

//Ejemplo de un código que genera error

try{ //Aquí va el código que puede arrojar una excepción o error
   console.log("Entra en el try");
   noExiste; //variable que no existe
   console.log("Segundo mensaje del try"); //no se mostrará
}catch(error){ //para capturar el error obtenido, puede haber varios tipos
   console.log("catch captura el error");
   console.log(error);
}finally{ //Bloque de código que se ejecutará independientemente del resultado
   console.log("se ejecuta sin importar el resultado");
}

/**
 * Ejemplos para lanzar errores, sirve apra generar errores personalizados
 */

//throw new Error("El caractér introducido no es un número");




