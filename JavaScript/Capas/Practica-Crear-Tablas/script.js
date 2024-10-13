const body = document.body

const btnCargarTabla = document.querySelector("#btnTablas")

const divTabla = document.createElement("div")
body.appendChild(divTabla)

btnCargarTabla.addEventListener("click",()=>{
    limpiarCaja()
    let numFilas = prompt("Introduce el numero de filas:")
    let numColumnas = prompt("Introduce el numero de columnas:")

    const tabla = document.createElement("table")
    tabla.style.border = "1px solid black"
    divTabla.appendChild(tabla)
    for (let index = 0; index < numFilas; index++) {
        let fila = document.createElement("tr")
        tabla.appendChild(fila)
        for (let index = 0; index < numColumnas; index++) {
            let columna = document.createElement("td")
            columna.style.border = "1px solid black"
            columna.textContent = Math.floor(Math.random()*100)
            tabla.appendChild(columna)
        }
    }
})

function limpiarCaja() {
    while(divTabla.firstChild){
        divTabla.removeChild(divTabla.firstChild)
    }
}