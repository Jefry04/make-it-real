/*let array = [];
function filter (arreglo, func) {
    
    for (let y =0; y< arreglo.length; y++)
    {
    let i = func(arreglo[y])
    }
    return array;
}
var even = function  (i){
   if (i % 2 === 0){
     return array.push (i) ;
   } 
   }
   var none = function  (i){
      return array.push (5) ;  
    }

console.log (filter ([1,2,3,4], even))*/


// SOLUCION PARA QUE PASE EN MAKE IT REAL



  
/* SOLUCION CON METODO ARRAY.FILTER
EL ARRAY.FILTER filtra lo que cumpla  (en este caso la funcion even, lo que sea true ) y
lo que cumpla lo remplaza en el arreglo. a diferencia del .map, que remplaza
los valores del arreglo, por lo que este (en este caso la funcion even, devolveria true y false)

function filter2(arr, func) {
    return arr.filter(func);
  }
   var even = function (i){
      return i%2 === 0
      }
      console.log(filter2([1,4,3,8], even))

*/
