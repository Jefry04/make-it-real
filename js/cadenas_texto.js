 const datos  = "Jefferson,vasquez, 36, m";
const arreglo = datos.split(","); // separar cadenas y las vuelve un arreglo
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);

console.log (arreglo.length);// imprimo el tamanio del arreglo


const nombre = arreglo.join(" "); // unir el arreglo en cadena de texto
console.log (nombre);
console.log(nombre.toLowerCase()); // primera letra a minuscula

//substring (subcadena)
console.log ("Jefferson Vasquez".substr(1,3))// desde la posicion X, saca Y caracteres
const nombreCompleto = "Jefferson Vasquez";
const iniciales = nombreCompleto.split(" ");
console.log(`${iniciales[0].substr(0,1)}.${iniciales[1].substr(0,1)}.`); // Imprimo iniciales del nombre

//replace

console.log ("Hola Mundo!".replace("Mundo", "Jefry")); //remplazo mundo, por Jefry

//includes
console.log("Hola Mundo".includes("H")); // devuelve true/false si en el caracter esta una "H"

