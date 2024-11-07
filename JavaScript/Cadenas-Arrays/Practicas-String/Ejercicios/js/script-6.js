window.addEventListener('DOMContentLoaded', inicio)

const contenedor = document.querySelector(".col-lg-12")
const espacio = document.createElement("span")
contenedor.appendChild(espacio)

function inicio(){
    const url = "texto.txt"
    fetch(url)
    .then((response)=>response.text())
    .then((data)=>mostrar(data))
    .finally(()=>console.log("Fin"))
    .catch(error=>console.error(error))
}

function mostrar(datos){
    let nombres = []
    nombres=datos.split("\n")
    espacio.textContent = nombres
}