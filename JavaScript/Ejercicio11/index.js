const persona = {
  nombre: "Luis",
  edad: 21,
  isDeveloper: true,
  saludo: function() {
    console.log('Hola')
  }
}

//console.log(persona)
persona.saludo()

const otraPersona = {
  nombre: "Jair",
  edad: 22,
  isDeveloper: true,
  saludo: function() {
    console.log('Hola')
  }
}

otraPersona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
    saludo: function() {
      console.log('Hello')
    }
  }
}

const nueva_persona = creaPersona("Juan", 23, true);

nueva_persona.saludo()