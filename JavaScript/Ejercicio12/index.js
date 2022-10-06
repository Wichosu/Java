const persona = {
  nombre: "Gorka",
  edad: 34
}

function obtenDobleEdad(edad) {
  return 2 * edad;
}

const doubleEdad = obtenDobleEdad(persona.edad);

let arrayNums = [];

function obtenArray(edad) {
  for(let i = 0; i < 10; i++) {
    const numero = persona.edad + i;
    console.log(numero);
    arrayNums = [...arrayNums, numero];
  }
}

const array = obtenArray(persona.edad);

console.log(array);