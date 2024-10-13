let coloresHex = ['red','green','blue','orange']
let coloresNombres = ["Rojo","Verde","Azul","Naranja"]

const body = document.body

const btnMover = document.querySelector("#mover")

const contenedorPrincipal =document.createElement("div")
contenedorPrincipal.className="container"
body.appendChild(contenedorPrincipal)

const fieldsetTodos = document.createElement("fieldset")
fieldsetTodos.className = "gallery"
const legendTodos = document.createElement("legend")
legendTodos.textContent = "Todos"
fieldsetTodos.appendChild(legendTodos)
contenedorPrincipal.appendChild(fieldsetTodos)

const fieldsetAzul = document.createElement("fieldset")
fieldsetAzul.className = "gallery"
const legendAzul = document.createElement("legend")
legendAzul.textContent = "Azul"
fieldsetAzul.appendChild(legendAzul)
contenedorPrincipal.appendChild(fieldsetAzul)

const fieldsetVerde = document.createElement("fieldset")
fieldsetVerde.className = "gallery"
const legendVerde = document.createElement("legend")
legendVerde.textContent = "Verde"
fieldsetVerde.appendChild(legendVerde)
contenedorPrincipal.appendChild(fieldsetVerde)

const fieldsetRojo = document.createElement("fieldset")
fieldsetRojo.className = "gallery"
const legendRojo = document.createElement("legend")
legendRojo.textContent = "Rojo"
fieldsetRojo.appendChild(legendRojo)
contenedorPrincipal.appendChild(fieldsetRojo)

const fieldsetNaranja = document.createElement("fieldset")
fieldsetNaranja.className = "gallery"
const legendNaranja = document.createElement("legend")
legendNaranja.textContent = "Naranja"
fieldsetNaranja.appendChild(legendNaranja)
contenedorPrincipal.appendChild(fieldsetNaranja)

rellenarFielSetTodos()

btnMover.addEventListener("click", rellenarFieldSetColores)


function rellenarFielSetTodos(){
    for (let index = 0; index < 20; index++) {
        let posArray = generarColor()
        let cajaColor = document.createElement("div")
        cajaColor.style.backgroundColor=coloresHex[posArray]
        cajaColor.textContent = coloresNombres[posArray]
        with(cajaColor.style){
            paddingBottom='25px'
            fontWeight='bold'
            width='70px'
            heigth='50px'
        }
        fieldsetTodos.appendChild(cajaColor)
    }

}


function generarColor(){
    colorRandom = Math.floor(Math.random()*coloresHex.length)
    return colorRandom
}


function rellenarFieldSetColores(){
    const cajas = fieldsetTodos.querySelectorAll("div")
    console.log(cajas.length)
    for (const cajaColor of cajas) {
        if(cajaColor.textContent == "Azul"){
            fieldsetAzul.appendChild(cajaColor)
        }else if (cajaColor.textContent == "Verde") {
            fieldsetVerde.appendChild(cajaColor)
        } else if (cajaColor.textContent == "Rojo"){
            fieldsetRojo.appendChild(cajaColor)
        } else if (cajaColor.textContent == "Naranja"){
            fieldsetNaranja.appendChild(cajaColor)
        }
    }
}
