window.onload = inicio

const urlAPI = "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php"

function inicio(){

    fetch(urlAPI)
    .then((response) => response.json())
    .then((data) => gestionPrograma(data))
    .finally(() => console.log("Terminado."))
    .catch((error) => alert(error))
}

function gestionPrograma(datos){
    obtenerRepresentantes(datos)
    obtenerProvincias(datos)
    obtenerVotos(datos)
    ordenarElecciones(datos)
}

function obtenerRepresentantes(datos){

    const h4Representantes = document.createElement("h4")
    h4Representantes.textContent = "Muestra en pantalla cuantos representantes obtiene cada uno de los cuatro partidos."
    document.body.appendChild(h4Representantes)

    let index = 0;

    let representantes = 0 
    let votosPA = 0, votosPB = 0, votosPC = 0, votosPD = 0
    let representantesPA = 0, representantesPB = 0, representantesPC = 0, representantesPD = 0

    datos.forEach((dato,index) => {
        votosPA = Number(dato.votosPA)
        votosPB = Number(dato.votosPB)
        votosPC = Number(dato.votosPC)
        votosPD = Number(dato.votosPD)
        representantes = Number(dato.Representantes)

        if(votosPA > votosPB && votosPA > votosPC && votosPA > votosPD){
            representantesPA = representantesPA + representantes
        }else if(votosPB > votosPA && votosPB > votosPC && votosPB > votosPD){
            representantesPB = representantesPB + representantes
        }else if(votosPC > votosPA && votosPC > votosPB && votosPC > votosPD){
            representantesPC = representantesPC + representantes
        }else if(votosPD > votosPA && votosPD > votosPB && votosPD > votosPC){
            representantesPD = representantesPD + representantes
        }

    })

    const pRepresentantesPA = document.createElement("p")
    pRepresentantesPA.textContent = "Partido A: "+representantesPA+" Representantes"
    document.body.appendChild(pRepresentantesPA)

    const pRepresentantesPB = document.createElement("p")
    pRepresentantesPB.textContent = "Partido B: "+representantesPB+" Representantes"
    document.body.appendChild(pRepresentantesPB)

    const pRepresentantesPC = document.createElement("p")
    pRepresentantesPC.textContent = "Partido C: "+representantesPC+" Representantes"
    document.body.appendChild(pRepresentantesPC)

    const pRepresentantesPD = document.createElement("p")
    pRepresentantesPD.textContent = "Partido D: "+representantesPD+" Representantes"
    document.body.appendChild(pRepresentantesPD)
}

function obtenerProvincias(datos){

    const h4Provincias = document.createElement("h4")
    h4Provincias.textContent = "Saca un listado con las provincias que gana cada partido."
    document.body.appendChild(h4Provincias)

    let index = 0;

    let provincia 
    let votosPA = 0, votosPB = 0, votosPC = 0, votosPD = 0
    let provinciasA = "", provinciasB = "", provinciasC = "", provinciasD = ""

    datos.forEach((dato,index) => {
        votosPA = Number(dato.votosPA)
        votosPB = Number(dato.votosPB)
        votosPC = Number(dato.votosPC)
        votosPD = Number(dato.votosPD)
        provincia = dato.nombreProvincia

        if(votosPA > votosPB && votosPA > votosPC && votosPA > votosPD){
            provinciasA =provinciasA+provincia+" "
        }else if(votosPB > votosPA && votosPB > votosPC && votosPB > votosPD){
            provinciasB =provinciasB+provincia+" "
        }else if(votosPC > votosPA && votosPC > votosPB && votosPC > votosPD){
            provinciasC =provinciasC+provincia+" "
        }else if(votosPD > votosPA && votosPD > votosPB && votosPD > votosPC){
            provinciasD =provinciasD+provincia+" "
        }

    })

    const pProvinciasPA = document.createElement("p")
    pProvinciasPA.textContent = "Partido A: "+provinciasA
    document.body.appendChild(pProvinciasPA)

    const pProvinciasPB = document.createElement("p")
    pProvinciasPB.textContent = "Partido B: "+provinciasB
    document.body.appendChild(pProvinciasPB)

    const pProvinciasPC = document.createElement("p")
    pProvinciasPC.textContent = "Partido C: "+provinciasC
    document.body.appendChild(pProvinciasPC)

    const pProvinciasPD = document.createElement("p")
    pProvinciasPD.textContent = "Partido D: "+provinciasD
    document.body.appendChild(pProvinciasPD)
}

function obtenerVotos(datos){

    const h4Votos = document.createElement("h4")
    h4Votos.textContent = "Saca un listado con los votos totales de cada partido."
    document.body.appendChild(h4Votos)

    let index = 0;
    let votosPA = 0, votosPB = 0, votosPC = 0, votosPD = 0

    datos.forEach((dato,index) => {

        votosPA+= Number(dato.votosPA)
        votosPB+= Number(dato.votosPB)
        votosPC+= Number(dato.votosPC)
        votosPD+= Number(dato.votosPD)
   
    })

    const pVotosPA = document.createElement("p")
    pVotosPA.textContent = "Partido A: "+votosPA+" votos"
    document.body.appendChild(pVotosPA)

    const pVotosPB = document.createElement("p")
    pVotosPB.textContent = "Partido B: "+votosPB+" votos"
    document.body.appendChild(pVotosPB)

    const pVotosPC = document.createElement("p")
    pVotosPC.textContent = "Partido C: "+votosPC+" votos"
    document.body.appendChild(pVotosPC)

    const pVotosPD = document.createElement("p")
    pVotosPD.textContent = "Partido D: "+votosPD+" votos"
    document.body.appendChild(pVotosPD)
}

function ordenarElecciones(datos){

    const h4Resultado = document.createElement("h4")
    h4Resultado.textContent = "Muestra en un listado cual es el orden de ganadores."
    document.body.appendChild(h4Resultado)

    let index = 0;

    let representantes = 0 
    let votosPA = 0, votosPB = 0, votosPC = 0, votosPD = 0
    let representantesPA = 0, representantesPB = 0, representantesPC = 0, representantesPD = 0

    datos.forEach((dato,index) => {
        votosPA = Number(dato.votosPA)
        votosPB = Number(dato.votosPB)
        votosPC = Number(dato.votosPC)
        votosPD = Number(dato.votosPD)
        representantes = Number(dato.Representantes)

        if(votosPA > votosPB && votosPA > votosPC && votosPA > votosPD){
            representantesPA = representantesPA + representantes
        }else if(votosPB > votosPA && votosPB > votosPC && votosPB > votosPD){
            representantesPB = representantesPB + representantes
        }else if(votosPC > votosPA && votosPC > votosPB && votosPC > votosPD){
            representantesPC = representantesPC + representantes
        }else if(votosPD > votosPA && votosPD > votosPB && votosPD > votosPC){
            representantesPD = representantesPD + representantes
        }

    })

    let resultados = [representantesPA,representantesPB,representantesPC,representantesPD]
    resultados.sort(function(a,b){
        return b-a
    })

    for (const resultado of resultados) {
        if(resultado == representantesPA){
            const pRepresentantes = document.createElement("p")
            pRepresentantes.textContent = "Partido A : "+resultado+" Representantes"
            document.body.appendChild(pRepresentantes)
        }else if(resultado == representantesPB){
            const pRepresentantes = document.createElement("p")
            pRepresentantes.textContent = "Partido B : "+resultado+" Representantes"
            document.body.appendChild(pRepresentantes)
        }else if(resultado == representantesPC){
            const pRepresentantes = document.createElement("p")
            pRepresentantes.textContent = "Partido C : "+resultado+" Representantes"
            document.body.appendChild(pRepresentantes)
        }else if(resultado == representantesPD){
            const pRepresentantes = document.createElement("p")
            pRepresentantes.textContent = "Partido D : "+resultado+" Representantes"
            document.body.appendChild(pRepresentantes)
        }
    }
}