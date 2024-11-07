const urlAPI = "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php"

const ubicacion = document.querySelector("#cajaX")

fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error));

function mostrarDatos(datos) {
    datos.forEach(webc => {
        const columna = document.createElement("div")
        columna.className = "col-lg-4"
        ubicacion.appendChild(columna)

        const tarjeta = document.createElement("div")
        tarjeta.className = "card"
        columna.appendChild(tarjeta)

        const imagenWEB = document.createElement("img")
        imagenWEB.setAttribute("src", webc.imagen)
        tarjeta.appendChild(imagenWEB)

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"
        tarjeta.appendChild(cardBody)

        const titulo = document.createElement("h4")
        titulo.className = "card-title"
        titulo.textContent = webc.texto

        const subtitulo = document.createElement("p")
        subtitulo.className = "card-text"
        subtitulo.textContent = webc.subtexto

        cardBody.appendChild(titulo)
        cardBody.appendChild(subtitulo)

    })
}