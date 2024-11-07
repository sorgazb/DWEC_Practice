window.addEventListener('DOMContentLoaded',inicio)

const url = "coches.json"

const contenedor = document.querySelector(".col-lg-12")
const botonKms = document.getElementById("ordenarKms")
const botonMarca = document.getElementById("ordenarMarca")
const botonConsumo = document.getElementById("ordenarConsumo")

const botonKmsReverse = document.getElementById("ordenarKmsReverse")
const botonMarcaReverse = document.getElementById("ordenarMarcaReverse")
const botonConsumoReverse = document.getElementById("ordenarConsumoReverse")

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
    botonKmsReverse.onclick=ordenarPorKmsReverse
    botonMarcaReverse.onclick=ordenarPorMarcaReverse
    botonConsumoReverse.onclick=ordenarConsumoReverse
}

function ordenarConsumo(){

    limpiarCaja(listaCoches)

    let consumo = arrayCoches.slice().sort((a,b)=>a.consumo-b.consumo)

    for (const coche of consumo) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}

function ordenarPorKms(){

    limpiarCaja(listaCoches)

    let porKms = arrayCoches.slice().sort((a,b)=>a.kms-b.kms)

    for (const coche of porKms) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}

function ordenarPorMarca(){

    limpiarCaja(listaCoches)

    let porMarca = arrayCoches.slice().sort((a,b)=>a.marca.localeCompare(b.marca))

    for (const coche of porMarca) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}

function ordenarConsumoReverse(){

    limpiarCaja(listaCoches)

    let consumo = arrayCoches.slice().sort((a,b)=>a.consumo-b.consumo).reverse()

    for (const coche of consumo) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}

function ordenarPorKmsReverse(){

    limpiarCaja(listaCoches)

    let porKms = arrayCoches.slice().sort((a,b)=>a.kms-b.kms).reverse()

    for (const coche of porKms) {
        const elemento = document.createElement("li")
        elemento.textContent = "[-Marca: "+coche.marca+" -Modelo:"+coche.modelo+" -Color:"+
        coche.color+" -Consumo:"+coche.consumo+" -Precio:"+coche.precio+" -Kms:"+coche.kms+" -Motor:"+coche.tipoMotor+"]"
        listaCoches.appendChild(elemento)
    }
}

function ordenarPorMarcaReverse(){

    limpiarCaja(listaCoches)

    let porMarca = arrayCoches.slice().sort((a,b)=>a.marca.localeCompare(b.marca)).reverse()

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