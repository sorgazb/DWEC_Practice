window.addEventListener('DOMContentLoaded',inicio)

const url = "coches.json"

const contenedor = document.querySelector(".col-lg-12")

const botonKms = document.getElementById("ordenarKms")
const botonMarca = document.getElementById("ordenarMarca")
const botonConsumo = document.getElementById("ordenarConsumo")

let ordenKms = 1
let ordenMarcas = 1
let ordenConsumo = 1

const listaCoches = document.createElement("ol")

const arrayCoches = []
function inicio(){

    fetch(url)
    .then((response)=>response.json())
    .then((datos)=>mostrarFichero(datos))
}

function mostrarFichero(datos,criterio){
    contenedor.appendChild(listaCoches)
    datos.forEach((coche) => {
        arrayCoches.push(coche)
    });

    botonKms.onclick=ordenarPorKms
    botonMarca.onclick=ordenarPorMarca
    botonConsumo.onclick=ordenarConsumo
}

function ordenarConsumo(){

    limpiarCaja(listaCoches)

    let consumo
    if(ordenConsumo % 2 == 0){
        consumo = arrayCoches.slice().sort((a,b)=>a.consumo-b.consumo).reverse()
        ordenConsumo ++
    }else{
        consumo = arrayCoches.slice().sort((a,b)=>a.consumo-b.consumo)
        ordenConsumo ++
    }

    for (const coche of consumo) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}

function ordenarPorKms(){

    limpiarCaja(listaCoches)
    let porKms
    if(ordenKms % 2 == 0){
        porKms = arrayCoches.slice().sort((a,b)=>a.kms-b.kms).reverse()
        ordenKms ++
    }else{
        porKms = arrayCoches.slice().sort((a,b)=>a.kms-b.kms)
        ordenKms ++
    }

    for (const coche of porKms) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}

function ordenarPorMarca(){

    limpiarCaja(listaCoches)
    let porMarca

    if(ordenMarcas % 2 == 0){
        porMarca = arrayCoches.slice().sort((a,b)=>a.marca.localeCompare(b.marca)).reverse()
        ordenMarcas ++
    }else{
        porMarca = arrayCoches.slice().sort((a,b)=>a.marca.localeCompare(b.marca))
        ordenMarcas ++
    }

    for (const coche of porMarca) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}


function limpiarCaja(elemento){
    while (elemento.hasChildNodes()) {
        elemento.removeChild(elemento.firstChild);
      }
}