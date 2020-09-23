//hoisting o elevacion, como JS maneja las variables
function prueba () {
    
    let x=5;
    const z=4; // NO se puede cambiar el valor de las variables

    if (2==2){
        var y=8;
  
    }
    console.log(x);
    console.log(y);
    console.log(z);
}

// objetos de primera clase
let f= prueba; // asigno la funcion a la variable f
f(); // ejecuto la funcion
