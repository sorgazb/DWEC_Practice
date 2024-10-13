//SOLUCION CON ARRAY DE IMAGENES.

const body = document.body

// Creamos el boton para cargar las imagenes y lo añadimos al body
const botonCargar = document.createElement("button")
botonCargar.textContent = "Cargar imagen"
body.appendChild(botonCargar)

//Numero de imagenes que vamos a cargar
const numeroImagenes = 20

// Array en el que alamcenaremos los elementos imagen que vamos a cargar
const listadoImagenes = []

for (let index = 0; index < numeroImagenes; index++) {
    const imagenX = document.createElement("img")
    listadoImagenes.push(imagenX)
}

let genero = "women"

botonCargar.addEventListener("click",()=>{
    for (let index = 0; index < listadoImagenes.length; index++) {
        if(index % 2 == 0){
            genero = "women"
        }else{
            genero = "men"
        }
        let numero = Math.trunc(Math.random()*34+1)
        listadoImagenes[index].setAttribute("src","https://randomuser.me/api/portraits/"+genero+"/"+numero+".jpg")
        body.append(listadoImagenes[index]) 
    }
})