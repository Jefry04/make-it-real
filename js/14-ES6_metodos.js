
// metodo MAP

// .map, recorrer un arreglo
const numeros3 = [2,3,4,5,6,7];
const resultado = numeros3.map ( n => n*2); //map, recibe una funcion(en este caso, funcion flecha) ydentro de la funcion a cada numero del arreglo lo multiplicamos *2
console.log (resultado);

// igual que el anterior, PERO, en la funcion flecha metemos 
//varias instrucciones(se puede hacer una funcion normalmente)
const numeros4 = [2,3,4,5,6,7];
const resultado4 = numeros3.map ( n => {
    const x = n*2;
    const prueba = x*10;
    return prueba;
}); 
//console.log (resultado4);


// .map, tambien recorre objetos
const usuarios = [
    {name: "Jefferson", apellido:"vasquez"},
    {name:"Michelle", apellido:"Vasquez"}
    ];
const nombres = usuarios.map (x => x.name); // recorre el arreglo/objeto y el parametro del nombre se lo asigna a la variable nombres
//console.log(nombres);

// Metodo Filter 
const usuarios5 = [
    {name: "Jefferson", apellido:"vasquez", edad: 37},
    {name: "Jefry", apellido:"ramos", edad: 9},
    {name:"Michelle", apellido:"Vasquez", edad:35}
    ];
const nombresConJ = usuarios5.filter (empiecen => empiecen.name.startsWith("J")); // recorre el objeto, y filtra los nombre que empiezan conJ y los asigna a la CONST
//console.log(nombresConJ);

const usuarios6 = [
    {name: "Jefferson", apellido:"vasquez", edad: 37},
    {name: "Jefry", apellido:"ramos", edad: 9},
    {name:"Michelle", apellido:"Vasquez", edad:35}
    ];
const mayores30 = usuarios6.filter (mayor => mayor.edad > 30); // recorre el objeto, y filtra los nombre que empiezan conJ y los asigna a la CONST
//console.log(mayores30);



// metodo Find
const usuarios2 = [
    {name: "Jefferson", apellido:"vasquez"},
    {name:"Michelle", apellido:"Vasquez"}
    ];
  //  console.log (usuarios2.find(usuario => usuario.name ==="Michelle")); //Encuentra el name que tenga michelle y lo devuelve
    
// metodo reduce
const numeros2= [1,2,3,4,5];
const resultado3 = numeros2.reduce ((acumulador, elemento) => acumulador + elemento);// reduce recibe 2 elementos, 1 acumulador y el segundo es cada elemento q se va a evaluar
console.log (resultado3);








