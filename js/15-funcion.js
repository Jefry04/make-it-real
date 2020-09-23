


 function counter (){
    var count = 0;
    return function(){
         return ++ count ;
    };
  }

  function creaFunc() {
     var nombre = "Mozilla";
     function muestraNombre() {
       console.log(nombre);
     }
     return muestraNombre;
   }
   
   var miFunc = creaFunc();
   miFunc(); 