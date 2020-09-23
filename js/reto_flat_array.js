function flatten (arreglo){
    let array = [];
        for (let i = 0; i < arreglo.length; i++) { // recorro el primer arreglo
              var innerArrayLength = arreglo[i].length; 
            for (let j = 0; j < innerArrayLength; j++) { // recorro el arreglo dentro del arreglo
             array.push(arreglo[i][j]);      
          
             }
        }return array;
    }
    
// metodo reduce
function flatten(arr) {
    return arr.reduce(function(memo, a) {
      return memo.concat(a);
    }, []);
  }
  /*
  método Array.reduce para crear el nuevo arreglo. Cada arreglo
   interno a lo concatenamos al resultado memo con la función Array.concat.
  */

  // metodo flatten
 function flatten (arr) {
    var resultado = arr.flat();
    return resultado;
    }
  console.log (flatten ([[1,2,3], [4,5],[6]]));