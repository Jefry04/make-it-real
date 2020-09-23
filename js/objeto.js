// lo que va a la izquierda es una llave, a la derecha el valor
const persona = {
    "nombre":"Jefferson",
    "apellido": "Vasquez",
    edad : 36,
    "instructor" : false,
    direcciones: ["avenida", "20 de julio"],
    telefono: {
        indicativo : 57,
        numero: 3156704955

    }

} 
persona.nacionalidad = "colombiano"; // le agrego una propiedad
delete persona.apellido; // quito la propiedad de apellido
for (let i in persona){ //recorriendo el objeto
    console.log (persona[i]);
    
}
// los atributos pueden ir con o sin comillas
 // se pueden tener objetos dentro de objetos
//console.log (persona.telefono);

// se pueden crear arreglos de Objetos

const personas = [
    {
        nombre : "Jefferson",
        apellido : "vasquez"
    },
    {
        nombre : "Michelle",
        "apellido" : "Vasquez"
    }
]
// console.log (personas[0]);