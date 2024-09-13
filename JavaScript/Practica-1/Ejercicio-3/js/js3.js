window.onload = iniciar

function iniciar () {
    const lista = document.getElementById("semana")
    lista.style.color = "blue"
    lista.style.fontSize = '30px'

    const ultDia = lista.lastElementChild
    ultDia.style.backgroundColor = "red"
    const diaPrevio = ultDia.previousElementSibling
    diaPrevio.style.backgroundColor = "green"


    //Como la etique a cambiar tiene id accedemos directamente a ella
    const edad = document.getElementById("edad")
    edad.style.color = "red"
}