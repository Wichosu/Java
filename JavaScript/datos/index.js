/*localStorage.setItem('nombre', 'Luis')

console.log(localStorage.getItem('nombre'))

localStorage.setItem('persona', JSON.stringify({ nombre: 'Luis', edad: 21}))

console.log(JSON.parse(localStorage.getItem('persona')))

localStorage.removeItem('nombre')

sessionStorage.setItem('nombre-sesion', 'Luis')

/* Cookie *//*

document.cookie = 'nombrecookie = luiscookie'

document.cookie = "otracookie = nuevacookie;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)*/

//Ejercicio15
var nombre = 'Luis'
var apellido = 'Miranda'
var yo = {
  nombre: nombre,
  apellido: apellido
}

sessionStorage.setItem('yo', JSON.stringify(yo))
localStorage.setItem('yo', JSON.stringify(yo))
document.cookie = `yo=${JSON.stringify(yo)};expires=` + new Date(2022, 9, 7, 21, 45).toUTCString()