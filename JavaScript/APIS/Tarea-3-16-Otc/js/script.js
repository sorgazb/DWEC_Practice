const urlAPI = "getWebcam.php.json"

const btnMostrar = document.querySelector("#mostrar")

const contenedorImagenes = document.querySelector(".container")

fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error));



function mostrarDatos(datos) {
    btnMostrar.addEventListener('click', () => {
        limpiarCaja()
        let numeroImagen = obtenerImagenRandom()
        const video = document.createElement("video")
        video.setAttribute('src',datos[numeroImagen].url)
        video.setAttribute("autoplay","")
        video.setAttribute("loop","")
        video.style.width = "100%"
        contenedorImagenes.appendChild(video)
    setInterval(() => {
        limpiarCaja()
        let numeroImagen = obtenerImagenRandom()
        const video = document.createElement("video")
        video.setAttribute('src',datos[numeroImagen].url)
        video.setAttribute("autoplay","")
        video.setAttribute("loop","")
        video.style.width = "100%"
        contenedorImagenes.appendChild(video)
    }, 10000);
    })
}

function obtenerImagenRandom(){
    return Math.floor(Math.random()*6)
}

function limpiarCaja(){
    while(contenedorImagenes.firstChild){
        contenedorImagenes.removeChild(contenedorImagenes.firstChild)
    }
}
