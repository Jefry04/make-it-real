/* function factorial (numero){
    var resultado =1;
    for (i=1; i<=numero; i++)
    {   
        resultado = resultado*(i);
        resultado = resultado;
    }return resultado;
}
console.log(factorial (3)); */

function sumame (array){
 let suma = 0;
    for (i=0; i<array.length; i++)
    {
        suma = array[i]+ suma;
        suma = suma;
    }
return suma;
}
console.log(sumame([2,3,5,10]));

// solucion Make it real
function sumame(arr) {
    return arr.reduce(function(memo, i) {
      return memo + i;
    }, 0);
  }