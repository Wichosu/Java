//- Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
  return true;
}

console.log(siempreTrue());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const promesa = new Promise((resolve) => {
  setTimeout(() => console.log("Soy una promesa"), 5000);
  resolve();
})

promesa;

//- Una función generadora de índices pares automáticos
function* generaPares() {
  let indice = 0;
  while(true) {
    indice += 2;
    yield indice;
  }
}

const generarPar = generaPares();

console.log(generarPar.next().value);
console.log(generarPar.next().value);
console.log(generarPar.next().value);
console.log(generarPar.next().value);
console.log(generarPar.next().value);