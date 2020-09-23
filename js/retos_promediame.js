function promediame(numero){
    let suma = 0 ;
    let promedio ;
    if (numero.length === 0)
    {
        return 0;
    }else {    
      for (i=0; i<numero.length; i++)
       {
        suma = numero[i]+ suma;
        suma = suma;
       }
    }
 promedio = suma /numero.length;
return promedio;
}

console.log (promediame ([1,2,3,4]))