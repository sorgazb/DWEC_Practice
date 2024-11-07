window.addEventListener('DOMContentLoaded',inicio)

const url = "alumnos.csv"

const tabla = document.querySelector("table")
const cabeceraTabla = document.querySelector("thead tr")
const cuerpoTabla = document.querySelector("tbody")

function inicio(){
    fetch(url)
    .then((response) => response.text())
    .then((data) => mostrarFichero(data))
}

function mostrarFichero(data){
    const filasFichero = data.split("\n")
    const cabecerasFichero = filasFichero[0].split(",")

    cabecerasFichero.forEach(element => {
        const cabecera = document.createElement("th")
        cabecera.textContent = element
        cabecera.style.color = "blue"
        cabeceraTabla.appendChild(cabecera)
    });

    filasFichero.forEach((element,index) => {
        if(index > 0){
            const infoAlumnos = element.split(",")
            const fila = document.createElement("tr")
            cuerpoTabla.appendChild(fila)
            let notas = []
            notas.push(Number(infoAlumnos[2]))
            notas.push(Number(infoAlumnos[3]))
            notas.push(Number(infoAlumnos[4]))
            notas.push(Number(infoAlumnos[5]))
            notas.push(Number(infoAlumnos[6]))
            pintarTabla(notas,fila)
            infoAlumnos.forEach((element) => {
                const columna = document.createElement("td")
                columna.textContent = element
                fila.appendChild(columna)
            });
        }
    });

}

function numeroAprobados(notas){
    let numeroAprobados = 0
    for (const nota of notas) {
        if(nota >= 5){
            numeroAprobados ++
        }
    }
    return numeroAprobados
}

function pintarTabla (notas,fila){
    let aprobados = numeroAprobados(notas)
    switch (aprobados) {
        case 0:
            fila.style.backgroundColor = "red"
            break;
        case 1:
            fila.style.backgroundColor = "orange"
            break;
        case 2:
            fila.style.backgroundColor = "pink"
            break;
        case 3:
            fila.style.backgroundColor = "yellow"
            break;
        case 4:
            fila.style.backgroundColor = "blue"
            break;
        case 5:
            fila.style.backgroundColor = "green"
            break;
    }
}