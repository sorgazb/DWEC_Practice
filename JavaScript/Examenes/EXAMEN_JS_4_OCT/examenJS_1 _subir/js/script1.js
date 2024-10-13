window.onload = ()=>{

    const body = document.body
    // Indetificamos el formulario
    const validar = body.firstElementChild

    
    let avanzar = true

    validar.onsubmit = ()=>{
        avanzar = true

        let validacion1 = document.getElementById("v1").value
        let smValidacion1 = document.getElementById("smv1")

        if(validacion1.length == 10){
            if(!isNaN(validacion1.charAt(0)) && !isNaN(validacion1.charAt(validacion1.length()-1))){
                smValidacion1.textContent =""
            }else{
                avanzar = false
                smValidacion1.textContent = "** Error el primer caracter o el ultimno no son numeros"
            }
        }else{
            smValidacion1.textContent = "* Error la cadena no es de 10 caracteres"
            avanzar = false
        }


        let validacion2 = document.getElementById("v2").value
        let smValidacion2 = document.getElementById("smv2")


        if(validacion2.length == 12){
            for (let index = 0; index < validacion2.length; index++) {
                if(index <= 6){
                    if(isNaN(validacion2.charAt(index))){
                        smValidacion2.textContent = ""
                    }else{
                        avanzar = false
                        smValidacion2.textContent = "** Los 6 primeros caracteres contienen numeros"
                    }
                }else{
                    console.log(index)
                    if(!isNaN(validacion2.charAt(index))){
                        smValidacion2.textContent = ""
                    }else{
                        avanzar = false
                        smValidacion2.textContent = "*** Los 6 ultimos caracteres contienen letras"
                    }
                }
            }
        }else{
            smValidacion2.textContent = "* Error la cadena no es de 12 caracteres"
            avanzar = false
        }

        let validacion3 = document.getElementById("v3").value
        let smValidacion3 = document.getElementById("smv3")

        if(validacion3.length == 20){
            for (let index = 0; index < validacion3.length; index++) {
                if(validacion3.charAt(4) != "-" || validacion3.charAt(9) != "-" || validacion3.charAt(14) != "-" || validacion3.charAt(19) != "-" ){
                    smValidacion3.textContent = "** Error no cumple con el formato"
                    avanzar = false
                }else{
                    smValidacion3.textContent = ""
                }
            }
        }else{
            avanzar = false
            smValidacion3.textContent = "* Error la cadena no es de 20 caracteres"
        }

        let validacion4 = document.getElementById("v4").value
        let smValidacion4 = document.getElementById("smv4")

        let mayus = 0
        const patron = /[A-Z]/
        if(validacion4.length == 8){
            for (let index = 0; index < validacion4.length; index++) {
                 if(patron.test(validacion4.charAt(index))){
                    mayus ++
                    console.log(mayus)
               }
            }
            if(mayus >= 2){
                smValidacion4.textContent = ""
            }else{
                avanzar = false
                smValidacion4.textContent = "** Error hay menos de 2 Mayusculas"
            }
        }else{
            avanzar = false
            smValidacion4.textContent = "* Error la cadena no es de 8 caracteres"
        }
        return avanzar
    }
    


}