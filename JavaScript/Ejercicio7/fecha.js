const hoy = new Date();

console.log(hoy);

const nacimiento = new Date(2001, 8, 13);

console.log(nacimiento.toLocaleDateString());

let yaNaci = hoy.getTime() > nacimiento.getTime();

console.log(yaNaci);

const diaNacimiento = nacimiento.getDate();

console.log(diaNacimiento);

const mesNacimiento = nacimiento.getMonth() + 1;

console.log(mesNacimiento);

const anyoNacimiento = nacimiento.getFullYear();

console.log(anyoNacimiento);