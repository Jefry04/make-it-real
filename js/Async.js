const tasks = [
    {id: 1, name:"desayunar", user: "jefry04"}, 
    {id: 1, name:"banarse", user: "jefry04"}, 
    {id: 1, name:"trabajarr", user: "jefry04"}, 
    {id: 1, name:"cenarr", user: "jefry04"}, 
]
//var  getTasks = (arr) => {
//    setTimeout(()=> {console.log(arr);}, 3000); // retrasp 3s el console
//}


// Promesa
/*var getTasks = (arr) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => { resolve(arr) }, 3000); 
    }); 
};

getTasks(tasks)
.then((tasksArray)=>{
    console.log(tasksArray); 
});*/

// incluyendo un reject (error) cuando el array esta vacio
var getTasks = (arr) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => { 
            arr.length > 0 ? 
                resolve(arr) 
            : 
                reject("no hay datos"); 
        }, 3000); 
    }); 
};

getTasks([]) // mando array vacio
.then((tasksArray)=>{
    console.log(tasksArray); 
})
.catch((err)=>{
    console.log(err); 
});
console.log("Se ejecutó la línea después del llamado de la función getTasks");

