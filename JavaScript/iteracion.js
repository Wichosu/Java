//Iterar los valores de una lista
const array = ['hola', 2, 5, 90, false, undefined];

for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Forma ES6 Mas eficiente
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];

arrayNums.forEach(valor => {
  suma += valor;
  console.log(suma);
});

const listaObjetos = [
  { nombre: "luis", edad: 21},
  { nombre: "Miguel", edad: 25},
  { nombre: "Alicia", edad: 12}
];

const objeto = listaObjetos.find(o => o.nombre === 'luis');

console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === 'luis');

console.log(edad)