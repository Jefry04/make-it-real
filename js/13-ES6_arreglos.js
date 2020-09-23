// ... los 3 puntos es un operador de dispersion
const numeros = [1,4,6,7];
const maximo = Math.max(...numeros); //los 3 puntos manda los valores separados cada uno
console.log(maximo);

const array = [5,7,9,11];
const impares = [1, 3, ...array, 13];
console.log(impares);

// en objetos tambien funciona los ...
const persona ={ nombre: "Jefferson", apellido:"Vasquez"};
const usuario = {...persona, email:"jefry04@gmail.com", username:"jefry04"}
console.log (usuario);


// concatenando  arreglos
const arr1 = ["Hello"];
const arr2 = ["world"];
const arr3 = arr1.concat(arr2);
console.log (arr3);

const arrnumeros = [1,2,4];
const letras = "abcdefg";
const resultado1 = arrnumeros.concat (letras);
const resultado2 =  [...arrnumeros, ...letras];
console.log (resultado1);
console.log (resultado2);

// .map, recorrer un arreglo
const numeros2 = [2,3,4,5,6,7];
const resultado = numeros2.map ( n => n*2);
console.log (resultado);
