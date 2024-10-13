const btn1 = document.getElementById("btn1")
btn1.addEventListener("click",operacionBtn1)

function operacionBtn1(){
    const div1=document.getElementById("c1")

    let numeroAleatorio=Math.trunc(Math.random()*100+1)
    let numeroIntroducido = 0
    let cont = 0
    while(numeroIntroducido !== numeroAleatorio){
        numeroIntroducido=parseInt(prompt("Introduce el numero buscado."))
        if(numeroIntroducido < numeroAleatorio){
            alert("El numero secreto es mas grande")
        }else if(numeroIntroducido > numeroAleatorio){
            alert("El numero secreto es mas pequeño")
        }
        cont++
    }
    div1.innerHTML="Has acertado !!!"+"<br>"+"El Numero Secreto era el "+numeroAleatorio+"<br>"+"**numero de intentos "+cont+"**"
}
