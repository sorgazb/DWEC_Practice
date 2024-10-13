const coloresHex = ["#FF0000","#00FF00","#0000FF","#FFA500","#FFC0CB","#FFFF00"]
const colores = ["Rojo", "Verde", "Azul", "Naranja", "Rosa", "Amarillo"]

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
            const color = generarColor()
            columna.style.background = coloresHex [color]
            columna.textContent = Math.floor(Math.random()*100)
            tabla.appendChild(columna)
            columna.addEventListener("click",()=>{
                console.log("safdsdf")
                alert("Color de la celda: "+colores[color]);
            })
        }
    }
})

function limpiarCaja() {
    while(divTabla.firstChild){
        divTabla.removeChild(divTabla.firstChild)
    }
}

function generarColor() {
    let color = Math.floor(Math.random() * coloresHex.length )
    return color
}
