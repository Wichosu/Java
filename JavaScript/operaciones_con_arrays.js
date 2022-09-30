const listaObjetos = [
  { nombre: "luis", edad: 21},
  { nombre: "Miguel", edad: 25},
  { nombre: "Alicia", edad: 12}
];

const listaDoble = listaObjetos.map(o => o.edad*2);

console.log(listaDoble)

const listaMayorEdad = listaObjetos.filter(o => o.edad >= 18);

console.log(listaMayorEdad);

