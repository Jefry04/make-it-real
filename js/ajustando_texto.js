function adjustText (txt, numero){

   if (txt.length >=numero){
    var palabra = txt.substr (0,numero);
    return palabra;
   } else {
      var palabra= txt.padEnd(numero, " ");
      return palabra; 
   }

    
}

console.log (adjustText ("hola", 10));