window.addEventListener('DOMContentLoaded',inicio)

const contenedor = document.querySelector(".col-lg-12")



function inicio(){
    const url = "texto2.txt"
    fetch(url)
    .then((response)=>response.text())
    .then((data)=>mostrar(data))
    .finally(()=>console.log("Fin"))
    .catch(error=>console.error(error))
}

function mostrar(datos){
    let cadenaLinea = []
    let cadenaPuntos = []
    cadenaLinea = datos.split("\n");
    cadenaLinea.forEach(element => {
        const espacio = document.createElement("p")
        contenedor.appendChild(espacio)
        cadenaPuntos = element.split(":")
        let nombre = cadenaPuntos[1]
        let notaMedia = (Number(cadenaPuntos[2])+Number(cadenaPuntos[3])+Number(cadenaPuntos[4]))/3
        notaMedia = notaMedia.toFixed(2)
        espacio.textContent = "Nombre "+nombre+" Nota media "+notaMedia
    });
}