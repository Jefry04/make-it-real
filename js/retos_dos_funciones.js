function compose(fun1, fun2 ){
 return fun2(fun1()) ;
}
var greet = function() {return "Bienvenidos"; };
var yell = function(str) { return str.toUpperCase() ; };
//console.log(compose(greet, yell));

function order (numeros, reverse){
    let ordenar;
   
    if (reverse === true){
        ordenar = numeros.sort(function (a,b){
           return b-a;
         })
   }else {
        ordenar = numeros.sort(function (a,b){
           return a-b;
         })
   }
  return ordenar;
}

// con operador ternario

function order(arr, reverse) {
    return arr.sort(function(a, b) {
      return reverse ? b - a : a - b // si reverse es true, retorna b-a y si es false returna a-b
    });
  }
console.log(order ([1,5,3,2,8,4], false));

/* con funcion flecha
numeros.sort ((a,b)=>a-b);
console.log(numeros);*/