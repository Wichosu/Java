//.sort() -> Modifica array
const array = [2, 5, 9, 15, 1, 2, 0, 4];

console.log(array);

array.sort((a, b) => {
  if (a < b) {
    return +1;
  }
  else if (a > b) {
    return -1;
  }
  else {
    return 0;
  }
})

console.log(array);

//Segundo forma de ordenar

const array2 = [2, 5, 9, 15, 1, 2, 0, 4];

array2.sort((a, b) => a - b);

console.log(array2)

const listaObjetos = [
  { nombre: "luis", edad: 21},
  { nombre: "Miguel", edad: 25},
  { nombre: "Alicia", edad: 12}
];

listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos);