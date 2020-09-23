/*ES6 (ecma script V6) 


const miFuncion = () =>{  // crea funcion flecha o funcion sin nombre
 // excepto el acceso al objeto this
}*/

const BMI = (weight, height) => {
    return weight / (height*height)
};

console.log (BMI(86, 1.86));

const BMIV2 = ([weight, height] = [1, 1]) => weight / (height*height); // el  [1, 1] es un valor por defecto para el arreglo
console.log (BMIV2([86, 1.86]));


const cuadrado = (numero) => {  
    return numero*numero;
}
console.log (cuadrado(3));

const cuadradov2 = numero => {  // funcion flecha si es solo 1 parametro de entrada NO necesita parentesis 
    return numero*numero;
}
console.log (cuadradov2(3));

const cuadradov3 = (numero) =>  numero*numero;// si es una sola expresion NO necesita corchete
console.log (cuadradov3(3));


