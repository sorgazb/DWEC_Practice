const urlAPI = "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php"

const tabla = document.querySelector("tbody")

fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error));

function mostrarDatos(datos){
    datos.forEach(webc => {
        const tr = document.createElement("tr")
        tabla.appendChild(tr)
        
        const nombreCiudad = document.createElement("td")
        nombreCiudad.textContent = webc.ciudad_nombre
        tr.appendChild(nombreCiudad)

        const habitantesCiudad = document.createElement("td")
        habitantesCiudad.textContent = webc.ciudad_poblacion
        tr.appendChild(habitantesCiudad)

        const tdvideoCiudad = document.createElement("td")
        tdvideoCiudad.innerHTML = webc.video
        tr.appendChild(tdvideoCiudad)

        const tdImagenCiudad = document.createElement("td")
        const imagenCiudad = document.createElement("img")
        imagenCiudad.setAttribute("src",webc.imagen)
        imagenCiudad.setAttribute("width","250px")
        tdImagenCiudad.appendChild(imagenCiudad)
        tr.appendChild(tdImagenCiudad)

        const mapaCiudad = document.createElement("td")
        mapaCiudad.innerHTML = webc.mapa
        tr.appendChild(mapaCiudad)

        const idCiudad = document.createElement("td")
        idCiudad.textContent = webc.ciudad_ID
        tr.appendChild(idCiudad)

    })
}