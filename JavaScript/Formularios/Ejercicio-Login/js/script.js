window.onload = ()=>{

    //  Identificamos el formulario
    let validar = document.getElementById("validar")

    //  Variable que no permite avanzar en la validacion del formulario
    let avanzar = true

    validar.onsubmit = ()=>{
        avanzar = true

        // Identificamos el campo de usuario
        let usuario = document.getElementById("idUsuario").value
        let smUsuario = document.getElementById("smUsuario")

        // Hacemos la validacion del campo de usuario
        if(usuario.length < 3){
            avanzar = false
            smUsuario.textContent = "* Error el nombre de usuario tiene menos de 3 caracteres."
        }else if(validarCadenasTexto(usuario) == false){
            avanzar = false
            smUsuario.textContent = "** Error el nombre de usuario contiene caractereres numericos."
        }else{
            smUsuario.textContent = ""
        }

        // Identificamos el campo de Contraseña
        let contrasenia = document.getElementById("idContrasenia1").value
        let smContrasenia = document.getElementById("smContrasenia1")

        // Hacemos la validacion del campo de contraseña
        if(validarContrasenia(contrasenia) == false){
            avanzar = false
            smContrasenia.textContent = "* Error la contraseña no cumple con el formato."
        }else{
            smContrasenia.textContent = ""
        }

        // Identificamos el campo de Contraseña 2
        let contrasenia2 = document.getElementById("idContrasenia2").value
        let smContrasenia2 = document.getElementById("smContrasenia2")
        
        // Hacemos la validacion del campo de contraseña
        if(validarContrasenia(contrasenia2) == false){
            avanzar = false
            smContrasenia2.textContent = "* Error la contraseña no cumple con el formato."
        }else if(contrasenia != contrasenia2){
            avanzar = false
            smContrasenia2.textContent = "** Error las contraseñas no coinciden."
        }else{
            smContrasenia2.textContent = ""
        }

        // Identificamos el campo de Mail
        let mail = document.getElementById("idMail").value
        let smMail = document.getElementById("smMail")
        
        // Hacemos la validacion del campo de contraseña
        if(validarmail(mail) == false){
            avanzar = false
            smMail.textContent = "* Error el mail no cumple el formato."
        }else{
            smMail.textContent = ""
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

    /*
        Funcion que nos permite determinar si una contraseña cumple con
        el formato de tener 1 Mayus, 1Minus, 1 Numero y $
    */
    function validarContrasenia(contrasenia){
        let valida = true
        const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$]).+$/;
        if(patron.test(contrasenia)){
            valida = true
        }else{
            valida = false
        }
        return valida
    }

    /*
        Funcion que nos permite determinar si un mail contiene @ y .
    */
    function validarmail(mail){
        let valida = true
        const patron = /^(?=.*[@])(?=.*[.]).+$/;
        if(patron.test(mail)){
            valida = true
        }else{
            valida = false
        }
        return valida
    }
}