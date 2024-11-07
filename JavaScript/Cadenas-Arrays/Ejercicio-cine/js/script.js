window.addEventListener('DOMContentLoaded',inicio)

const url = "peliculas.csv"

const tabla = document.querySelector("table")
const cabeceraTabla = document.querySelector("thead tr")
const cuerpoTabla = document.querySelector("tbody")

function inicio(){
    fetch(url)
    .then((response)=>response.text())
    .then((data)=>mostrarFichero(data))
}

function mostrarFichero(datos){
    const filasFichero = datos.split("\n")

    const cabecerasFichero = filasFichero[0].split(",")

    cabecerasFichero.forEach(element => {
        const cabecera = document.createElement("th")
        cabecera.textContent = element
        cabecera.style.color = "red"
        cabeceraTabla.appendChild(cabecera)
    });

    filasFichero.forEach((element,index) => {
        if(index > 0){
            const infoPeliculas = element.split(",")
            const fila = document.createElement("tr")
            cuerpoTabla.appendChild(fila)
            infoPeliculas.forEach(element => {
                const columna = document.createElement("td")
                if(Number(infoPeliculas[4]) < 2000){
                    columna.style.backgroundColor = "green"
                }else{
                    columna.style.backgroundColor = "pink"
                }
                columna.textContent = element
                fila.appendChild(columna)
            });
        }
    });
}