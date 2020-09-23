"use strict";
const parametros = process.argv; // para recibir argumentos cuando ejecuto; los argumentos los ingresa como un arreglo
const precio = parametros [2]; // tomo el la posicion 2 del arreglo ingresado por el usuario
const cantidad = parametros [3];
const  totalVenta = precio * cantidad;
const  minimo = 877803;
const descuento = totalVenta * 0.2;


if (totalVenta >= minimo ) {
    const valorFinalVenta = totalVenta - descuento;
    console.log("Total a pagar: " + valorFinalVenta);
  } else {
    console.log("Total a pagar: " + totalVenta);
  }


