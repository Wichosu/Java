//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compras = ['Maiz palomero', 'Nutella', 'Pan', 'Galletas', 'Mermelada'];
//Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push('Aceite de Girasol');
console.log(compras);
//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop();
console.log(compras);
//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
  { titulo: 'Another Round', director: 'Thomas Vinterberg', fecha: new Date(2020, 8, 24)},
  { titulo: 'Spiderman 3', director: 'Sam Raimi', fecha: new Date(2007, 4, 4)},
  { titulo: 'Star Wars: Episode III - Revenge of the Sith', director: 'George Lucas', fecha: new Date(2005, 4, 19)}
];
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasAntiguas = peliculas.filter(o => o.fecha < new Date(2010, 0, 0));
console.log(peliculasAntiguas);
//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map( o  => o.director);
console.log(directores);
//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map(o => o.titulo);
console.log(titulos);
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaConcat = Array().concat(directores, titulos);
console.log(listaConcat);
//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPropagacion = {directores, titulos};
console.log(listaPropagacion);