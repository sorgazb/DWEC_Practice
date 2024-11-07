window.addEventListener('DOMContentLoaded',inicio)

const url = "empleados.csv"

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
        cabecera.style.color = "blue"
        cabeceraTabla.appendChild(cabecera)
    });

    filasFichero.forEach((element,index) => {
        if(index > 0){
            const infoEmpleados = element.split(",")
            const fila = document.createElement("tr")
            cuerpoTabla.appendChild(fila)
            infoEmpleados.forEach((element,index) => {
                const columna = document.createElement("td")
                if(Number(infoEmpleados[1]) < 30){
                    columna.style.backgroundColor = "green"
                }else{
                    columna.style.backgroundColor = "yellow"
                }
                if(index == 3){
                    if(Number(infoEmpleados[3]) > 100000){
                        columna.style.color = "red"
                        columna.style.fontSize = "25px"
                    }
                }
                columna.textContent = element
                fila.appendChild(columna)
            });
        }
    });
}