const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".section")
const papelera = document.querySelector(".papelera")

parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", event => {
    // console.log("Inicio de arrastre")
    // console.log("Estoy arrastrando el parrafo")
    // console.log(parrafo.innerText)
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id", parrafo.id)
    event.dataTransfer.setData("section-id", parrafo.parentNode.id)
    // const fantasma = document.querySelector(".fantasma")
    // event.dataTransfer.setDragImage(fantasma, 0, 0)
  })

  parrafo.addEventListener("dragend", () => {
    //console.log("He terminado de arrastrar")
    parrafo.classList.remove("dragging")
  })
})

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", event => {
    event.preventDefault()
    //console.log("dragover")
  })

  seccion.addEventListener("drop", event => {
    // console.log("drop")
    const id_parrafo = event.dataTransfer.getData("id")
    //console.log("Parrafo id: ", id_parrafo)
    const parrafo = document.getElementById(id_parrafo)
    seccion.appendChild(parrafo)
  })
})

console.log(papelera)

papelera.addEventListener("dragover", event => event.preventDefault())

papelera.addEventListener("drop", event => {
  const id_parrafo = event.dataTransfer.getData("id")
  const id_seccion = event.dataTransfer.getData("section-id")
  const parrafo = document.getElementById(id_parrafo)
  const seccion = document.getElementById(id_seccion)
  seccion.removeChild(parrafo)
})