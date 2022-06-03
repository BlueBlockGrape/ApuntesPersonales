//// Objetos ////


/**
 * Es una colección de llaves y valores, puede guardar todo tipo de datos, también se pueden hacer diccionarios con esto
 */

//Ejemplo

const aaron = {
   nombre: "Aaron",
   apellido: "Castillo",
   edad: 23,
   pasatiempos: ["Videojuegos", "leer", "Ejercicio"],
   soltero: true,
   contacto: {
      email: "correo@correo.com",
      twitter: "@Mitwitter",
      telefono: "1234567890"
   },
   saludar: function(){
      console.log('Hola');
   },
   decirMiNombre: function(){
      console.log(`Hola, me llamo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`);
   }
}

//Para mandar llamar partes del objeto

/**
 * Se puede utilizar la notación de los corchetes o del punto para obtener propiedades
 */

console.log(aaron);
console.log(aaron["nombre"]);
console.log(aaron["apellido"]);
console.log(aaron.nombre);
console.log(aaron.pasatiempos);
console.log(aaron.pasatioempos[1]);
console.log(aaron.contacto.email);

//mandar llamar las funciones que se encuentran dentro del objeto
aaron.saludar();
aaron.decirMiNombre();

//listar las llaves del objeto
console.log(Object.keys(aaron));
//listar los valores
console.log(Object.values(aaron));
//Buscar si el objeto tiene una propiedad especifica, devuelve un bool
console.log(aaron.hasOwnProperty("nombre")); //True



