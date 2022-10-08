const boton = document.getElementById('boton')

boton.addEventListener('click', () => alert('click en el botón'))

$(() => {
  $('#boton-jquery').click(() => {
    alert('Hola estoy utilizando Jquery')
  })
});