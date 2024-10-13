//SOLUCION CON DIV.

const body = document.body

// Creamos el boton para cargar las imagenes y lo añadimos al body
const botonCargar = document.createElement("button")
botonCargar.textContent = "Cargar imagen"
body.appendChild(botonCargar)

// Creamos el div en el que cargaremos las imagenes
const divImagenes = document.createElement("div")
body.appendChild(divImagenes)

//Numero de imagenes que vamos a cargar
const numeroImagenes = 20

let genero = "women"

// Creamos una variable booleana que nos indica si ya hemos cargado las imagenes
let imagenesCargadas = false

botonCargar.addEventListener("click",()=>{
    //En caso de que hayamos cargado las imagenes vaciamos el contenido del div
    if(imagenesCargadas == true){
        divImagenes.innerHTML = ''
        imagenesCargadas = false
    }

    if(imagenesCargadas == false){
        for (let index = 0; index < numeroImagenes; index++) {
            const imagenX = document.createElement("img")
            if(index % 2 == 0){
                genero = "women"
            }else{
                genero = "men"
            }
            let numero = Math.trunc(Math.random()*34+1)
            imagenX.setAttribute("src","https://randomuser.me/api/portraits/"+genero+"/"+numero+".jpg")
            divImagenes.append(imagenX) 
        }
        imagenesCargadas = true
    }
})