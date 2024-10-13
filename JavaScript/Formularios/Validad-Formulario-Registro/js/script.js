let formulario = document.getElementById("validar")

let avanzar = true

formulario.onsubmit = inicio

function inicio(){ 
    avanzar = true

    let nombre = document.getElementById("idNombre").value
    let smNombre = document.getElementById("smNombre")

    if(nombre.length < 3){
        avanzar = false
        smNombre.textContent = "* tiene que tener mas de 3 caracteres"
    }else if(validarCadenasTexto(nombre) == false){
        avanzar = false
        smNombre.textContent = "** tiene valores numéricos"
    }else{
        smNombre.textContent = ""
    }

    let contrasenia1 = document.getElementById("idContrasenia1").value
    let smContrasenia1 = document.getElementById("smContrasenia1")

}

/*
    Funcion que nos permite determinar si una cadena de texto contiene
    algun caracter numerico en cualquiera de las posiciones de la cadena.
*/
function validarCadenasTexto(cadena){
    let valida = true
    for (let index = 0; index < cadena.length; index++) {
        if(!isNaN(cadena.charAt(index))){
            valida = false
        }
    }
    return valida
}