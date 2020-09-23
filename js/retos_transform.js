function filter(arr,func){
    let array=[];
    for( let i=0;i<arr.length; i++){

    array.push(func(arr[i]))
    
   }
    return array
    
    }
   function duplicate (x){
    return x*2
    }
    var increase = function(y){
    return y+10
    }
    console.log(filter ([1,4,3],increase))



 //usando arreglo.map
function transforma (arreglos, duplicate){
    return arreglos.map(duplicate);
}

var duplicate = function  (i){
   return i*5;
}
console.log (transforma ([3,2,3], duplicate))


/*

// OTRA FORMA USANDO .map tambien

function transforma (arreglos){

return  arreglos.map(function (num){
      return  num*2;
    })

}

console.log (transforma ([1,2,5]))*/

