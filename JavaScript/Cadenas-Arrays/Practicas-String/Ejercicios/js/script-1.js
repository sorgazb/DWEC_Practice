window.addEventListener('DOMContentLoaded',inicio)

function inicio(){
    // propuesta1()
    propuesta2()
}

function propuesta1(){
    let miNombre = prompt("Teclea tu nombre: ")
    let nombreMayus = miNombre.toUpperCase()
    alert("Tu nombre en Mayúscula es : "+nombreMayus)
}

function propuesta2(){
    let nombre
    do {
        nombre = prompt("Introduce tu nombre en Mayúsculas:")
    } while (nombre !== nombre.toUpperCase());
    alert("Has introducido tu nombre en Mayúsculas")
}