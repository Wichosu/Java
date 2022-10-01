//Trabajando con objetos 

const obj = {
  id: 4,
  nombre: "Juan",
  "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id);
console.log(obj["4-juegos"]);

const prop = "nombre";

console.log(obj[prop]);

const obj2 = obj;

console.log(obj2);

obj2.nombre = "Luis";
console.log(obj2);
console.log(obj);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

const obj3 = {...obj}

console.log(obj.nombre)
console.log(obj2.nombre)

obj3.nombre = "Gorka";

console.log(obj3.nombre)

//Ordenar listas de objetos

const listaPeliculas = [
  { titulo: "Lo que el viento se llevo", anyo: 1939 },
  { titulo: "Titanic", anyo: 1997 },
  { titulo: "Moana", anyo: 2016 },
  { titulo: "El efecto mariposa", anyo: 2004 },
  { titulo: "TED", anyo: 2012 }
];

console.log(listaPeliculas);
//.sort() -> Muta el valor del array original

listaPeliculas.sort((a, b) => a.titulo - b.titulo);

console.log(listaPeliculas)