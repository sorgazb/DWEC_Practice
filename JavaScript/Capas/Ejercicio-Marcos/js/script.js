window.onload = inicio

// Seleccionamos todos los hijos del div de imagenes
const listaImagenes = document.querySelectorAll("#images img")

// Seleccionamos todos los hijos del div de bordes
const listaBordes = document.querySelectorAll("#bordes div")

// Seleccionamos todos los hijos del div de fondos
const listaFondos = document.querySelectorAll("#fondos div")

// Seleccionamos los botones de Zoom
const btnsZoom = document.querySelectorAll("#zoom img")

// Seleccionamos el marco en el cual que introduciremos las imagenes con el fondo y borde establecido
const contenedorDestinoImagenes = document.querySelector("#picture img")
const contenedorDestino = document.querySelector("#picture")

function inicio() {
    listaImagenes.forEach(cargarImagenes)
    listaFondos.forEach(cargarFondos)
    listaBordes.forEach(cargarBordes)
    btnsZoom[0].onclick = zoomMas
    btnsZoom[1].onclick = zoomMenos
}

// Funcionalidades:

// Función que nos permite cargar la imagen seleccionada en el Contenedor de destino.
function cargarImagenes(item, index) {
    item.onclick = mostrar
}

function mostrar(img) {
    contenedorDestinoImagenes.setAttribute("src", img.target.src)
}

// Funcion que nos permite cargar el fondo del Contenedor Destino.
function cargarFondos(item, index) {
    item.onclick = mostrarFondo
}

function mostrarFondo(fondo) {
    let nombreColor = fondo.target.id
    switch (nombreColor) {
        case "negro":
            contenedorDestino.style.backgroundColor = "black"
            break;
        case "rojo":
            contenedorDestino.style.backgroundColor = "red"
            break;
        case "azul":
            contenedorDestino.style.backgroundColor = "blue"
            break;
        case "amarillo":
            contenedorDestino.style.backgroundColor = "yellow"
            break;
        case "verde":
            contenedorDestino.style.backgroundColor = "green"
            break;
        case "rosa":
            contenedorDestino.style.backgroundColor = "pink"
            break;
        default:
            break;
    }
}

function cargarBordes(item, index){
    item.onclick = mostrarBorde
}

function mostrarBorde(borde) {
    let nombreColor = borde.target.id
    switch (nombreColor) {
        case "negroBorde":
            contenedorDestino.style.borderColor ="black"
            break;
        case "rojoBorde":
            contenedorDestino.style.borderColor ="red"
            break;
        case "azulBorde":
            contenedorDestino.style.borderColor ="blue"
            break;
        case "amarilloBorde":
            contenedorDestino.style.borderColor = "yellow"
            break;
        case "verdeBorde":
            contenedorDestino.style.borderColor = "green"
            break;
        case "rosaBorde":
            contenedorDestino.style.borderColor = "pink"
            break;
        default:
            break;
    }
}

function zoomMas(){
    contenedorDestinoImagenes.style.transform = "scale(2)"
}

function zoomMenos(){
    contenedorDestinoImagenes.style.transform = "scale(1)"
}