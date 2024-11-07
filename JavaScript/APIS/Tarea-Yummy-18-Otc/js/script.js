window.onload = inicio

const urlAPIPlatos = "getPlatos.php.json"

const urlAPICocineros = "getCocinero.php.json"

const listaPanaderias=["Jesus","Almagro","Julia","Andalusi","JoseAntonio","el trigal"]

const listaEnlaces=["panaderiajesus.com","panalmagro.es",
"panaderiasjulia.es","panaderialaandalusi.com","panaderiajoseantonio.com",
"eltrigal.com"
]

const infoCocineros = document.querySelectorAll(".member-info")

const platos = document.querySelectorAll(".col-lg-4.menu-item")

const barraNavegacion = document.querySelector("#navbar ul")

const contenedoresEstaditicas = document.querySelectorAll(".purecounter")

function inicio(){

    cambiarDatosBarraNavegacion()

    generarEstadisticasAleatorias()

    fetch(urlAPIPlatos)
    .then((response) => response.json())
    .then((data) => cambiarPlatos(data))
    // .finally(() => console.log("Terminado."))
    // .catch((error) => alert(error))

    fetch(urlAPICocineros)
    .then((response) => response.json())
    .then((data) => cambiarCocineros(data))
    // .finally(() => console.log("Terminado."))
    // .catch((error) => alert(error))
}

function cambiarPlatos(datos){
    let index = 0;

    datos.forEach((dato,index) => {
        platos[index].children[0].firstElementChild.setAttribute("src",dato.imagen)
        platos[index].children[1].textContent=dato.nombre
        platos[index].children[2].textContent=dato.ingredientes
        platos[index].children[3].textContent=dato.precio
    })
}

function cambiarCocineros(datos){
    let index = 0
    datos.forEach((dato,index) => {
        infoCocineros[index].children[0].textContent = dato.nombre
        infoCocineros[index].children[1].textContent = dato.funcion
        infoCocineros[index].children[2].textContent = dato.descripcion
    })
}

function cambiarDatosBarraNavegacion(){
    const elementosLi = barraNavegacion.children
    let index = 0
    for (const li of elementosLi) {
        li.firstElementChild.setAttribute("href","http://"+listaEnlaces[index])
        li.firstElementChild.textContent = listaPanaderias[index]
        index ++
    }

}

function generarEstadisticasAleatorias(){
    for (const estadistica of contenedoresEstaditicas) {
        if(estadistica == contenedoresEstaditicas[0]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(20))
        }else if(estadistica == contenedoresEstaditicas[1]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(200))
        }else if(estadistica == contenedoresEstaditicas[2]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(2000))
        }else if(estadistica == contenedoresEstaditicas[3]){
            estadistica.setAttribute("data-purecounter-end",generarNumRandom(2000))
        }
    }
}

function generarNumRandom(num){
    return (Math.floor(Math.random()*num))
}