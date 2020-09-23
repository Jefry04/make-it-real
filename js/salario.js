
let hora1 = process.argv;
let datos = hora1.splice (2,hora1.length-2);
let horasOrdinarias = datos[0];
let horasTrabajadas = datos [1];
let valorHora = datos[2];
var horasExtras = horasTrabajadas - horasOrdinarias;
let totalOrdinario = horasOrdinarias * valorHora ;
let valorHoraExtra = (valorHora*1.5);
let totalHoraExtra = horasExtras*valorHoraExtra;
let totalDevengado = totalOrdinario + totalHoraExtra;

if (horasExtras <= 0)
{
   horasExtras = 0;
    console.log (`El salario total es $${totalOrdinario} y trabajo ${horasExtras} Horas extras`);   
}else {

     console.log (`El salario ordinario es $${totalOrdinario}
      Trabajo ${horasExtras} horas extras. 
      El valor de las horas extras es $${totalHoraExtra}.
      El sueldo incluido horas extras es $${totalDevengado}`);   
}




