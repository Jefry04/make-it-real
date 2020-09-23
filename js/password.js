let saludo = process.argv;
const datos = saludo.splice (2,saludo.length-2); // recojo los parametros desde la posicion 2
const palabra = datos.join ("");
const minuscula = palabra.toLowerCase();
const abc = "abcdefghijklmnopqrstuvwxyz"
const array =[];

function comparar(){
    for (i=0; i<minuscula.length; i++) {
   
        if (minuscula[i]=== "a"){
          array.push("z") ;

          }else{
          for (x=0; x<abc.length; x++) {
         
                  if (minuscula[i]=== abc[x])
                   {
                    array.push (abc[x-1])
                   }
              } 
    }         
 }
 return array;
}
console.log (comparar());
console.log(array);
           
//console.log(minuscula);


/*
Entrada:
Hola mundo
Salida:
["g","n","k","z","l","t","m","c","n"]
*/


/*solucion profe

const parametros = process.argv;
const datos = parametros.splice(2,parametros.length-2);
const palabra = datos.join("");
const palabra_minuscula = palabra.toLowerCase();
const array = [];

for(let i = 0; i < palabra_minuscula.length; i++){
    array.push(buscarLetra(palabra_minuscula[i]));
}

console.log(array);


function buscarLetra(letra){
    if(letra==="a")
        return "z";
    const abecedario = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i < abecedario.length; i++){
        if(letra===abecedario[i])
        return abecedario[i-1];
    }
}
*/
