 const fs  =require ("fs");  //requiriendo libreria de terceros
 const personas = require ("./files/personas2")  // llamando un archivo JS 
 const bmi = require ("./modules/bmi");
 /*
const datos= require ("./files/personas.json") //llamando un archivo JSON

const operacion = require ("./modules/operaciones"); // todos las funciones se asignan a la const operaciones 
const {multiplicacion} = require ("./modules/operaciones"); // llamo directamente a la funcion multiplicacion del archivo

//console.log (`El BMI de Jefry es ${bmi(86, 1.8)}`);
//datos.map (persona => console.log (`El BMI de ${persona.name} es: ${bmi(persona.weigth, persona.height)}`))
personas.map (people => console.log (`El calculo del BMI de ${people.name} es: ${bmi(people.weigth, people.height)}`))
console.log(operacion.suma(2,3))
console.log(multiplicacion(2,4))*/

const archivos = fs.createWriteStream ("./files/bmi.txt");  // creo un archivo llamado bmi.txt y lo guardo en la carpeta files 
archivos.once("open",(f) =>{    
    personas.map (people => archivos.write (`\nEl calculo del BMI de ${people.name} es: ${bmi(people.weigth, people.height)}`))
});

fs.readFile("./files/oscar.csv","utf8", (err,datos) =>{
  let sumaEdad = 0;
  let promedio;
  let cantidad;
    if (err)
      return console.log (err);
    const lineas = datos.split ("\n");
    lineas.map (linea =>{
            const columnas = linea.split(", ");
           const edad= Number.parseFloat (columnas [2]);
           sumaEdad = edad + sumaEdad;
           cantidad = columnas [0];
           //console.log (columnas[2]);            
    });promedio = sumaEdad/cantidad;
    console.log (`El promedio de edad de las actrices es ${promedio}`);
});