window.addEventListener("DOMContentLoaded",inicio)

const urlElecciones = "eleccionesUSA.csv"

const tablaVotos = document.querySelector(".table")
const resultadosContenedor = document.querySelector(".col-lg-10")

function inicio(){
    fetch(urlElecciones)
    .then((response)=>response.text())
    .then((data)=>gestionVotos(data))
    .finally(()=>console.log("Fin"))
    .catch(error=>console.error(error))
}

function gestionVotos(datos){
    let representantesBidden = 0
    let representantesTrump = 0
    lineasFichero = []
    votosEstado = []
    lineasFichero = datos.split("\n")
    lineasFichero.forEach(element => {
        let fila = document.createElement("tr")
        tablaVotos.appendChild(fila)
        if(element == lineasFichero[0]){
            votosEstado = element.split(";")
            for (const elemento of votosEstado) {
                let columa = document.createElement("th")
                columa.textContent = elemento
                fila.appendChild(columa)
            }
            let ganador = document.createElement("th")
            ganador.textContent = "Ganador"
            fila.appendChild(ganador)
        }else{
            votosEstado = element.split(";")
            for (const elemento of votosEstado) {
                let columa = document.createElement("td")
                columa.textContent = elemento
                fila.appendChild(columa)
            }
            const datosVotacion = fila.querySelectorAll("td")
            let ganadorEstado = document.createElement("td")
            if(Number(datosVotacion[2].textContent) > Number(datosVotacion[3].textContent)){
                datosVotacion[2].style.backgroundColor='blue'
                ganadorEstado.textContent = "Bidden"
                fila.appendChild(ganadorEstado)
                representantesBidden += Number(datosVotacion[1].textContent)

            }else{
                datosVotacion[3].style.backgroundColor='red'
                ganadorEstado.textContent = "Trump"
                fila.appendChild(ganadorEstado)
                representantesTrump += Number(datosVotacion[1].textContent)
            }
        }
    });
    let resultados = document.createElement("p")
    resultados.textContent = `-Representantes Bidden:${representantesBidden} -Representantes Trump:${representantesTrump}`
    resultadosContenedor.appendChild(resultados)
}
