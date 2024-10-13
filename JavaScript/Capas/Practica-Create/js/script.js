window.addEventListener("load",inicio)

function inicio(){
    // Identificamos el body de nuestro html
    const body = document.body

    // Creamos el contenedorPrincipal (div)
    const divPrincipal = document.createElement("div")
    divPrincipal.className = "contenedorPrincipal"
    divPrincipal.textContent = "Contenedor Principal"

    body.appendChild(divPrincipal) //Añadimos el contenedorPrincipal al body

    // Creamos el contenedorSecundario (div)
    const divSecundario = document.createElement("div")
    divSecundario.className = "contenedorSecundario"
    divSecundario.textContent = "Contenedor Secundario"

    divPrincipal.appendChild(divSecundario)

    const listaBotones = ["Botón 1","Botón 2","Botón 3","Botón 4","Botón 5","Botón 6","Botón 7","Botón 8"]

    listaBotones.forEach((item,indice)=>{ //Intem es cada elemento de la listaBotones
        const nuevoBoton = document.createElement("button")
        nuevoBoton.className = "botonX"
        nuevoBoton.textContent = item
        divSecundario.append(nuevoBoton)
        nuevoBoton.addEventListener("click",()=>{
            // Creamos una imagen
            const imagenX = document.createElement("img")
            if(indice % 2 == 0){
                genero = "men"
            }else{
                genero = "women"
            }
            numero = Math.trunc(Math.random()*34+1)
            imagenX.setAttribute("src","https://randomuser.me/api/portraits/"+genero+"/"+numero+".jpg")
            divSecundario.appendChild(imagenX)
        })
    })
}
