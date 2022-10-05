class Persona {
  nombre;
  edad;
  isDeveloper;

  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }

  saludo() {
    console.log('Hola')
  }

}

const nueva_persona = new Persona('Luis', 21, true);

console.log(nueva_persona);