window.addEventListener("load", inicio);

// URL de los datos a trabajar
const urlAPI = "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php";

// Como existen dos contenedores con la clase ".row gx-4 gx-lg-5" del Contenedor Padre de los Cards
// los recuperamos con un querySelectorAll
const contenedoresRow = document.querySelectorAll(".row.gx-4.gx-lg-5");

// Y recuperamos el Contenedor de los Cards
const contenedorCards = obtenerContenedorCards()


function inicio() {
  limpiarCaja();

  fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error))

  
  function mostrarDatos(datos) {
      datos.forEach((dato) => {
        //Creamos las columnas y Cards
        
        const columna = document.createElement("div")
        columna.className = "col-md-4 mb-5"
        contenedorCards.appendChild(columna);

        const tarjeta = document.createElement("div");
        tarjeta.className = "card";
        columna.appendChild(tarjeta);

        const imagenWEB = document.createElement("img");
        imagenWEB.setAttribute("src", dato.imagen);
        tarjeta.appendChild(imagenWEB);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        tarjeta.appendChild(cardBody);

        const titulo = document.createElement("h2");
        titulo.className = "card-title";
        titulo.textContent = dato.nombre;
        cardBody.appendChild(titulo);

        const subtitulo = document.createElement("p");
        subtitulo.className = "card-text";
        subtitulo.textContent = dato.cargo;
        cardBody.appendChild(subtitulo);
      });
  }
}

// Como el contenedor de los Cards contiene 3 elementos recuperamos ese del array
function obtenerContenedorCards(){
  for (const contenedor of contenedoresRow) {
    if(contenedor.children.length == 3){
      return contenedor
    }
  }
}

// Funcion para limpiar el contenedor del HTML
function limpiarCaja() {
    while (contenedorCards.hasChildNodes()) {
      contenedorCards.removeChild(contenedorCards.firstChild);
    }
}