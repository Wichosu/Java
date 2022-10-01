const yo = {
  nombre: "Luis Eduardo",
  apellido: "Calderon Miranda",
  edad: 21,
  altura: 1.75,
  eresDesarrollador: true
}

console.log(yo);

let edad = yo.edad;

console.log(edad);

const amigo1 = {...yo};
const amigo2 = {...yo};

amigo1.nombre = "Jair";
amigo1.edad = 23;
amigo1.eresDesarrollador = true;
amigo2.nombre = "Andre";
amigo2.edad = 22;
amigo2.eresDesarrollador = false;

let lista = [yo, amigo1, amigo2];

console.log(lista);

let listaOrdenada = lista;

listaOrdenada.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);