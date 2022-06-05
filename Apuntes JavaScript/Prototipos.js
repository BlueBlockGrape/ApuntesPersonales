//// Prototipos ////

/**
 * Son como las clases, son objetos que tienen atributos y métodos.
 */

//Funcion constructura

function Animal (nombre, genero){
   //Atributos
   this.nombre = nombre,
   this.genero = genero,
   //Métodos
   this.sonar = function(){
      console.log("Hago sonidos porque estoy vivo")
   }
}

const snoopy = new Animal("Snoopy", "Macho"),
   lolaBunny = new Animal("LolaBunny", "Hembra");

   console.log(snoopy);
   console.log(lolaBunny);

/**
 * Nota: Esto gasta mucha ememoria porque los métodos se duplican en cada objeto creado, lo recomendable es poner solo los atributos y dejar fuera los métodos
 */

