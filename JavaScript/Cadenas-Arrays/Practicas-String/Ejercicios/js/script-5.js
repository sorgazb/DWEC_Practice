window.addEventListener('DOMContentLoaded',inicio)

const cadena='red green blue yellow blue pink'

const contenedor = document.querySelector(".col-lg-12")
const espacio = document.createElement("span")
espacio.style.border="3px solid yellow"
contenedor.appendChild(espacio)


const espacio2 = document.createElement("span")
espacio2.style.border="3px solid blue"
contenedor.appendChild(espacio2)


const espacio3 = document.createElement("span")
espacio3.style.border="3px solid red"
contenedor.appendChild(espacio3)

function inicio(){
    espacio.textContent = cadena

    const cadena2 = cadena.replace("red","rojo").replace("green","verde")
    espacio2.textContent = cadena2

    const cadena3 = cadena.replaceAll(" ",";")
    espacio3.textContent = cadena3
}