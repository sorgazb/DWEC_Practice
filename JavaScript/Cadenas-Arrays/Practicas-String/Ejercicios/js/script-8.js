window.addEventListener("DOMContentLoaded",inicio)

const contenedor = document.querySelector(".col-lg-12")

function inicio(){
    let numero1 = 0
    let numero2 = 0
    let resultado
    do{
        numero1 = Math.floor(Math.random() * 100)
        numero2 = Math.floor(Math.random() * 100)
        resultado = numero1 + numero2
        const pResultado = document.createElement("p")
        pResultado.textContent = `La suma de ${numero1} + ${numero2} es ${resultado}`
        contenedor.appendChild(pResultado)
    }while(numero1 !== numero2)

}