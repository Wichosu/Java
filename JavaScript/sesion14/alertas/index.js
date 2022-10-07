const boton = document.querySelector('#btn')

boton.addEventListener('click', () => {
  //alert('se ha hecho click')
  //confirm('Esta de acuerdo?') && console.log('OK')
  /*confirm('Estas de acuerdo?')
    ? console.log('OK')
    : console.log('No!!')*/

  const respuesta = confirm('seguro?')
  if(respuesta) {
    console.log('estas de acuerdo')
  } else {
    console.log('no estas de acuerdo')
  }
})

const botonInfo = document.querySelector('#info')
botonInfo.addEventListener('click', () => {
  const nombre = prompt('Cual es tu nombre?')
  if(nombre) {
    console.log(`Tu nombre es ${nombre}`)
  } else {
    console.log('No has introducido nada')
  }
})

const lista = [{
  nombre: 'Gorka',
  edad: 34
}, {
  nombre: 'Julen',
  edad: 21
}, {
  nombre: 'Luis',
  edad: 24
}]

//console.log(lista)
console.table(lista)