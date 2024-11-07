window.onload = inicio

const url = "coches.json"


function inicio(){
    fetch(url)
    .then((response) => response.json())
    .then((datos) => obtenerDatos(datos))
    .finally(() => console.log("Terminado."))
    .catch((error) => console.log(error));
}

function obtenerDatos(datos){
    ejercicio1(datos)
    ejercicio2(datos)
    ejercicio3(datos)
    ejercicio4(datos)
    ejercicio5(datos)
}

function ejercicio1(datos){


    datos.forEach((dato,index) => {
        let color = dato.color
        let marca = dato.marca
        let modelo = dato.modelo
        let consumo = Number(dato.consumo)
        let precio = Number(dato.precio)

        if(color == "Green" && marca == "Volkswagen" && consumo < 7 && precio > 25000){
            alert(marca +" "+modelo)
        }
    })
}

function ejercicio2(datos){

    let coches = []

    let kmsTotales = 0
    let precioTotal = 0 
    let numCoches = 0

    datos.forEach((dato,index) => {
        let precio = Number(dato.precio)
        let kms = Number(dato.kms)
        kmsTotales += kms
        precioTotal +=precio
        numCoches ++
    })

    let kmMedio = kmsTotales/numCoches
    let precioMedio = precioTotal/numCoches

    datos.forEach((dato,index) => {
        let precio = Number(dato.precio)
        let kms = Number(dato.kms)
        let marca = dato.marca
        let modelo = dato.modelo

        if(precio > precioMedio && kms > kmMedio){
            let coche = marca+" "+modelo
            coches.push(coche)
        }

    })

    alert(coches)
}


function ejercicio3(datos){
    let masKm = 0
    let cocheMasKm

    datos.forEach((dato,index) => {
        let kms = Number(dato.kms)
        let marca = dato.marca
        let modelo = dato.modelo


        if(kms > masKm){
            cocheMasKm = marca+" "+modelo
            masKm = kms
        }
    })

    alert(cocheMasKm)
}

function ejercicio4(datos){
    let masBarato = 100000000000
    let cocheMasBarato

    datos.forEach((dato,index) => {
        let precio = Number(dato.precio)
        let marca = dato.marca
        let modelo = dato.modelo


        if(precio < masBarato){
            cocheMasBarato = marca+" "+modelo
            masBarato = precio
        }
    })

    alert(cocheMasBarato)
}


function ejercicio5(datos){
    let numRojos = 0
    let numAzules = 0
    let numVerder = 0
    let numNegros = 0
    let numBlancos = 0
    let numPlata = 0
    let numAmarillo = 0
    let numGris = 0
    datos.forEach((dato,index)=>{
        let color = dato.color

        if(color == "Red"){
            numRojos ++
        }else if(color == "Blue"){
            numAzules ++
        }else if(color == "Green"){
            numVerder ++
        }else if(color == "Black"){
            numNegros ++
        }else if(color == "White"){
            numBlancos ++
        }else if(color == "Silver"){
            numPlata ++
        }else if(color == "Yellow"){
            numAmarillo ++
        }else if(color == "Gray"){
            numGris ++
        }
    })

    let arrayColores = []
    arrayColores.push(numRojos)
    arrayColores.push(numAzules)
    arrayColores.push(numVerder)
    arrayColores.push(numNegros)
    arrayColores.push(numBlancos)
    arrayColores.push(numPlata)
    arrayColores.push(numAmarillo)
    arrayColores.push(numGris)

    arrayColores.sort(function(a,b){
        return b-a
    })

    if(arrayColores[0] == numRojos){
        alert("Red "+numRojos)
    }else if(arrayColores[0] == numAzules){
        alert("Blue "+numAzules)
    }else if(arrayColores[0] == numVerder){
        alert("Green "+numVerder)
    }else if(arrayColores[0] == numNegros){
        alert("Black "+numNegros)
    }else if(arrayColores[0] == numBlancos){
        alert("WHite "+numBlancos)
    }else if(arrayColores[0] == numPlata){
        alert("Silver "+numPlata)
    }else if(arrayColores[0] == numAmarillo){
        alert("Yellow "+numAmarillo)
    }else if(arrayColores[0] == numGris){
        alert("Gray "+numGris)
    }


}
