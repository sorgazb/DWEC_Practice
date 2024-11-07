window.addEventListener('DOMContentLoaded',inicio)

const cuerpo = document.body
const contenedor = document.querySelector(".col-lg-12")
const espacio = document.createElement("span")
espacio.style.border="3px solid red"
contenedor.appendChild(espacio)

function inicio(){
    const titulo = "                Desarrollo de aplicaciones web    "
    const titulo2 = "               Desarrollo de aplicaciones web          "

    const resultado = titulo.trim().concat(titulo2.trim())
    espacio.textContent = resultado
}