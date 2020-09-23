function fizzBuzz(numero){
 let multiploTres = numero % 3;
 let multiploCinco  = numero % 5;

   if (multiploCinco === 0 && multiploTres === 0 ){
        return "fizzbuzz";
   }else if (multiploTres === 0){
       return "fizz";
   }else if (multiploCinco === 0){
       return "buzz";
   }
   return numero;
}

console.log (fizzBuzz(16));