window.addEventListener('DOMContentLoaded',inicio)

function inicio(){
    let nombreCompleto = prompt("Introduce tu nombre completo en minúsculas:")
    let cadenaNueva = ""
    for (let index = 0; index < nombreCompleto.length; index++) {
        if(nombreCompleto.charAt(index) != " "){
            if(index == 0){
                cadenaNueva += nombreCompleto.charAt(index).toUpperCase()
            }else if(nombreCompleto.charAt(index-1) != " "){
                cadenaNueva += nombreCompleto.charAt(index)
            }else{
                cadenaNueva += nombreCompleto.charAt(index).toUpperCase()
            }
        }
    }
    alert(cadenaNueva)
}