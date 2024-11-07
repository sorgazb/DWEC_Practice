window.onload = inicio

const urlAPI = "getTodoPersonal.json"

const indicadoresCarrusel = document.querySelector(".carousel-indicators")

const imagenesCarrusel = document.querySelector(".carousel-inner")

function inicio(){
    limpiarCaja(indicadoresCarrusel)
    limpiarCaja(imagenesCarrusel)

    fetch(urlAPI)
    .then((response) => response.json())
    .then((datos) => rellenarCarrusel(datos))
    .finally(() => console.log("Terminado."))
    .catch((error) => console.log(error));
}

function rellenarCarrusel(datos){
    generarIndicadoresCarrusel(datos)
    generarContenidoCarrusel(datos)
}

function generarContenidoCarrusel(datos){
    datos.forEach((dato,index) => {
        let contenedorContenido = document.createElement("div")
        if(index == 0){
            contenedorContenido.className = "carousel-item active"
        }else{
            contenedorContenido.className = "carousel-item"
        }

        imagenesCarrusel.appendChild(contenedorContenido)
        
        let imagenCarrusel = document.createElement("img")
        imagenCarrusel.setAttribute("src",dato.imagen)
        imagenCarrusel.style="width=100%;height:100vh;"
        imagenCarrusel.className = "mx-auto d-block"
        contenedorContenido.appendChild(imagenCarrusel)
        
        let informacionImg = document.createElement("div")
        informacionImg.className = "carousel-caption d-none d-md-block"
        contenedorContenido.appendChild(informacionImg)
        
        let nombre = document.createElement("h3")
        nombre.textContent = dato.nombre
        informacionImg.appendChild(nombre)
        
        let descripcion = document.createElement("p")
        descripcion.textContent = dato.cargo
        informacionImg.appendChild(descripcion)
    })
}

function generarIndicadoresCarrusel(datos){
    datos.forEach((dato,index) => {
        let indicador = document.createElement("li")
        indicador.setAttribute("data-target","#carouselId")
        indicador.setAttribute("data-slide-to",index)
        if(index==0){
            indicador.className="active"
        }
        indicadoresCarrusel.appendChild(indicador)
    })
}

function limpiarCaja(elemento){
    while (elemento.hasChildNodes()) {
        elemento.removeChild(elemento.firstChild);
      }
}
