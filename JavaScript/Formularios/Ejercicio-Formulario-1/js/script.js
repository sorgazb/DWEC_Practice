let accion = document.getElementById("validar")

accion.onsubmit = inicio 

function inicio(){
    let avanzar = true

    // Primer cuadro de texto: entre 3 y 5 dígitos
    let expediente = document.getElementById("idExpediente")
    let smExpediente = document.getElementById("smExpediente")
    let contExpediente = expediente.value
    if(contExpediente.length > 5 || contExpediente.length < 3){
        avanzar = false
        smExpediente.textContent = "* tiene que tener entre 3 y 5 caracteres numéricos"
    }else if(isNaN(contExpediente)){
        avanzar = false
        smExpediente.textContent = "** tiene que ser un valor numérico"
    }else{
        smExpediente.textContent = ""
    }

    // Segundo cuadro de texto: Nombre de al menos 3 letras y solo letras
    let nombre = document.getElementById("idNombre").value
    let smNombre = document.getElementById("smNombre")
    if(nombre.length < 3){
        avanzar = false
        smNombre.textContent = "* tiene que tener más de 3 caracteres"
    }else if(validarCadenasTexto(nombre) == false){
        avanzar = false
        smNombre.textContent = "** tiene valores numéricos"
    }else{
        smNombre.textContent = ""
    }

    // Tercer cuadro de texto: Apellido de al menos 3 letras y solo letras
    let apellidos = document.getElementById("idApellidos").value
    let smApellidos = document.getElementById("smApellidos")
    if(apellidos.length < 3){
        avanzar = false
        smApellidos.textContent = "* tiene que tener más de 3 caracteres"
    }else if(validarCadenasTexto(apellidos) == false){
        avanzar = false
        smApellidos.textContent = "** tiene valores numéricos"
    }else{
        smApellidos.textContent = ""
    }

    // Cuadros de texto de las asignaturas: Solo numeros comprendidos entre el 1 y el 10
    let SGE = document.getElementById("idSGE")
    let smSGE = document.getElementById("smSGE")
    let contSGE = SGE.value
    if(contSGE > 10 || contSGE < 1){
        avanzar = false
        smSGE.textContent = "* tiene que tener entre comprendido entre 1 y 10"
    }else if(isNaN(contSGE)){
        avanzar = false
        smSGE.textContent = "** tiene que ser un valor numérico"
    }else{
        smSGE.textContent = ""
    }

    let DI = document.getElementById("idDI")
    let smDI = document.getElementById("smDI")
    let contDI = DI.value
    if(contDI > 10 || contDI < 1){
        avanzar = false
        smDI.textContent = "* tiene que tener entre comprendido entre 1 y 10"
    }else if(isNaN(contDI)){
        avanzar = false
        smDI.textContent = "** tiene que ser un valor numérico"
    }else{
        smDI.textContent = ""
    }

    let AD = document.getElementById("idAD")
    let smAD = document.getElementById("smAD")
    let contAD = AD.value
    if(contAD > 10 || contAD < 1){
        avanzar = false
        smAD.textContent = "* tiene que tener entre comprendido entre 1 y 10"
    }else if(isNaN(contAD)){
        avanzar = false
        smAD.textContent = "** tiene que ser un valor numérico"
    }else{
        smAD.textContent = ""
    }

    let PSP = document.getElementById("idPSP")
    let smPSP = document.getElementById("smPSP")
    let contPSP = PSP.value
    if(contPSP > 10 || contPSP < 1){
        avanzar = false
        smPSP.textContent = "* tiene que tener entre comprendido entre 1 y 10"
    }else if(isNaN(contPSP)){
        avanzar = false
        smPSP.textContent = "** tiene que ser un valor numérico"
    }else{
        smPSP.textContent = ""
    }

    let PMM = document.getElementById("idPMM")
    let smPMM = document.getElementById("smPMM")
    let contPMM = PMM.value
    if(contPMM > 10 || contPMM < 1){
        avanzar = false
        smPMM.textContent = "* tiene que tener entre comprendido entre 1 y 10"
    }else if(isNaN(contPMM)){
        avanzar = false
        smPMM.textContent = "** tiene que ser un valor numérico"
    }else{
        smPMM.textContent = ""
    }

    return avanzar
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