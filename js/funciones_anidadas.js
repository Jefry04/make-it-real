"use strict"; //para tener codigo mas limpio
function sumaCuadrados(numero1, numero2){
    function calcularCuadrado (numero){
        return numero*numero;
    }
    return calcularCuadrado (numero1) + calcularCuadrado(numero2);
}

let resultado = sumaCuadrados(2, 3);
console.log (resultado);