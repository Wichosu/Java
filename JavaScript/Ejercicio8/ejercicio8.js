//- Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
  return true;
}

console.log(siempreTrue());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const promesa = new Promise((resolve, reject) => {
  setTimeout(5000);
  console.log("Hola soy una promesa");
  resolve();
})

promesa();