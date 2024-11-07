window.addEventListener('DOMContentLoaded',inicio)

function inicio(){
    let nombreCompleto = prompt("Introduce tu nombre completo:")
    alert(nombreCompleto.slice(0,5))
    alert(nombreCompleto.slice(-5))
}