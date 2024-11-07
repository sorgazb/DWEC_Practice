// URL del fichero JSON
const urlAPI = "http://camacho.atwebpages.com/webcam/getWebcam.php"

// Contenedor donde se muestran los datos
const ubicacion = document.querySelector("#fila")

// Realizamos la solicitud
fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => mostrar(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error));

// 
function mostrar (datos){
    datos.forEach(webc => {
        const columna = document.createElement("div")
        columna.className = "col-lg-4"
        ubicacion.appendChild(columna)

        const tarjeta = document.createElement("div")
        tarjeta.className = "card"
        columna.appendChild(tarjeta)

        const videoWEB = document.createElement("video")
        videoWEB.setAttribute("src",webc.url)
        videoWEB.setAttribute("autoplay","")
        videoWEB.setAttribute("loop","")
        tarjeta.appendChild(videoWEB)

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"
        tarjeta.appendChild(cardBody)

        const titulo = document.createElement("h4")
        titulo.className = "card-title"
        titulo.textContent = webc.lugar
        
        const subtitulo = document.createElement("p")
        subtitulo.className = "card-text"
        subtitulo.textContent = webc.tiempo

        cardBody.appendChild(titulo)
        cardBody.appendChild(subtitulo)

    })
}