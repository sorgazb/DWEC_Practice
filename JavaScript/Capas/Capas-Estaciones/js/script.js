window.onload =()=>{

    let listasEstaciones = document.querySelectorAll("ul")
    
    for (const estacion of listasEstaciones) {
        if(estacion.previousElementSibling.textContent == "Otoño"){
            gestionOtonio(estacion)
        }else if(estacion.previousElementSibling.textContent == "Verano"){
            gestionVerano(estacion)
        }else if(estacion.previousElementSibling.textContent == "Primavera"){
            gestionPrimavera(estacion)
        }
    }
}

function gestionOtonio(estacion){
    estacion.previousElementSibling.style.backgroundColor="red"
    let frutosEstacion = estacion.children
    for (const fruto of frutosEstacion) {
        fruto.style.backgroundColor="orange "
    }
}

function gestionVerano(estacion){
    estacion.previousElementSibling.style.backgroundColor="green"
    let frutosEstacion = estacion.children
    for (const fruto of frutosEstacion) {
        fruto.style.backgroundColor="yellow"
        if(fruto == frutosEstacion[2]){
            fruto.style.backgroundColor="blue"
            fruto.previousElementSibling.style.backgroundColor = "pink"
            fruto.nextElementSibling.style.backgroundColor = "purple"
        }
    }
}

function gestionPrimavera(estacion){
    estacion.previousElementSibling.style.backgroundColor="#ff2299"
    let frutosEstacion = estacion.children
    let encontrado = false
    for (const fruto of frutosEstacion) {
        if(encontrado == false){
            fruto.style.backgroundColor = "purple"
        }else{
            fruto.style.backgroundColor = "aqua"
        }
        if(fruto == frutosEstacion[4]){
            encontrado = true
            fruto.style.backgroundColor="lightgreen"
        }

    }
}
