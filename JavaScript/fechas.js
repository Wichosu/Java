//Trabajando con fechas
const fecha = new Date();

console.log(fecha)

//Atencion - Los meses inicializan en cero
const fecha2 = new Date(1987, 10, 20, 1, 23, 55, 44);

console.log(fecha2);

const fecha3 = new Date(-2000000000000);
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:15:50");
console.log(fecha4);

console.log(fecha < fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 23, 55, 44);

console.log(fecha2 === fecha5);

console.log(fecha2.getTime() === fecha5.getTime());

//Obtener el dia
console.log(fecha2.getDate());

//Obtener el mes
console.log(fecha2.getMonth() + 1);

//Obtener el anyo
console.log(fecha2.getFullYear());

//
console.log(fecha2)

//.toLocaleDateString
// 
console.log(fecha2.toLocaleDateString("en-GB"))