window.addEventListener("DOMContentLoaded",inicio)

const url = "texto3.txt"


function inicio(){
    fetch(url)
    .then((response)=>response.text())
    .then((data)=>mostrar(data))
    .finally(()=>console.log("Fin"))
    .catch(error=>console.error(error))
}

function mostrar(datos){
    let cadenasFichero = []
    let datosPueblo = []
    cadenasFichero =  datos.split("\n")
    cadenasFichero.forEach(element => {
        datosPueblo.push(element.split(';'))
    });
    gestionDatosPueblo(datosPueblo)
}

function gestionDatosPueblo(datosPueblo){
    mediaTemperaturaMax(datosPueblo)
    mediaPluviometria(datosPueblo)
    puebloTmpAlta(datosPueblo)
    puebloLluviaAlta(datosPueblo)
}

function mediaTemperaturaMax(datosPueblo){
    let tmpTotal = 0
    for (const dato of datosPueblo) {
        tmpTotal += Number(dato[1])
    }
    let media = tmpTotal/datosPueblo.length
    console.log(media)
}

function mediaPluviometria(datosPueblo){
    let tmpTotal = 0
    for (const dato of datosPueblo) {
        tmpTotal += Number(dato[3])
    }
    let media = tmpTotal/datosPueblo.length
    console.log(media)
}

function puebloTmpAlta(datosPueblo){
    puebloTmpAlta = datosPueblo[0][0]
    tmpAlta = Number(datosPueblo[0][1])
    for (const dato of datosPueblo) {
        let tmp = Number(dato[1]) 
        if(tmp > tmpAlta){
            puebloTmpAlta = dato[0]
            tmpAlta = tmp
        }
    }
    console.log(puebloTmpAlta)
}

function puebloLluviaAlta(datosPueblo){
    puebloLluviaAlta = datosPueblo[0][0]
    lluviaAlta = Number(datosPueblo[0][3])
    for (const dato of datosPueblo) {
        let lluvia = Number(dato[3]) 
        if(lluvia > lluviaAlta){
            puebloLluviaAlta = dato[0]
            lluviaAlta = lluvia
        }
    }
    console.log(puebloLluviaAlta)
}
