window.onload = inicio

// Array de Nombres Elementos Barra de Navegacion:
const listaPanaderias=["Jesus","Almagro","Julia","Andalusi","JoseAntonio","el trigal"]

// Array de Enlaces de Elementos Barra de Navegacion:
const listaEnlaces=["panaderiajesus.com","panalmagro.es",
"panaderiasjulia.es","panaderialaandalusi.com","panaderiajoseantonio.com",
"eltrigal.com"
]

// URL:
const urlPanaderos = 'getPanaderos.json'

// Identificamos los elementos del html:

// Identificamos los elementos de la Barra de Navegacion:
const elementosBarraNav = document.querySelector('.navbar-nav.mx-auto.p-4.p-lg-0').children

// Identificamos los elementos Estadisticos:
const elementosEstadisticas = document.querySelectorAll('.fact-item.bg-light.rounded.text-center.h-100.p-5')

// Identificamos los elementos de Panaderos:
const elementosPanaderos = document.querySelectorAll('.team-item.text-center.rounded.overflow-hidden')

// Funcion Inicio:
function inicio(){

    fetch(urlPanaderos)
    .then((response) => response.json())
    .then((data) => cambiarPanaderos(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error))

    cambiarDatosBarraNavegacion()

    generarEstadisticasAleatorias()
}

function cambiarDatosBarraNavegacion(){
    let index = 0
    for (const elemento of elementosBarraNav) {
        if(index != 4){
            elemento.setAttribute("href","http://"+listaEnlaces[index])
            elemento.textContent = listaPanaderias[index]
        }else{ // Como en la version por defecto el 5 elemento es un desplegable lo cambiamos
            limpiarCaja(elemento);
            const elementoA = document.createElement('a')
            elementoA.className = 'nav-item nav-link'
            elementoA.setAttribute("href","http://"+listaEnlaces[index])
            elementoA.textContent = listaPanaderias[index]
            elementosBarraNav[index].appendChild(elementoA)
        }
        index ++
    }
}

function limpiarCaja(elemento) {
    while (elemento.hasChildNodes()) {
        elemento.removeChild(elemento.firstChild);
    }
}

function generarEstadisticasAleatorias(){
    for (const estadistica of elementosEstadisticas) {
        if(estadistica == elementosEstadisticas[0]){
            estadistica.children[1].textContent = "Años de Experiencia"
            estadistica.children[2].textContent = Number(generarNumRandom(20))
        }else if(estadistica == elementosEstadisticas[1]){
            estadistica.children[1].textContent = "Profesionales formados"
            estadistica.children[2].textContent = Number(generarNumRandom(200))
        }else if(estadistica == elementosEstadisticas[2]){
            estadistica.children[1].textContent = "Proyectos realizados"
            estadistica.children[2].textContent = Number(generarNumRandom(2000))
        }else if(estadistica == elementosEstadisticas[3]){
            estadistica.children[1].textContent = "Pedidos completados"
            estadistica.children[2].textContent = Number(generarNumRandom(2000))
        }
    }
}

function generarNumRandom(num){
    return (Math.floor(Math.random()*num))
}

function cambiarPanaderos(datos){
    let index = 0;

    datos.forEach((dato,index) => {
        elementosPanaderos[index].children[0].setAttribute("src",dato.imagen)
        elementosPanaderos[index].children[1].children[0].children[0].textContent = dato.nombre
        elementosPanaderos[index].children[1].children[0].children[1].textContent = dato.funcion
    })
}