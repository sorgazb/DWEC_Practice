const btn1 = document.getElementById("btn1")
btn1.addEventListener("click",operacionBtn1)

function operacionBtn1(){
    const div1=document.getElementById("c1")
    div1.style.backgroundColor="green"
}

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click",operacionBtn2)

function operacionBtn2(){
    const div2=document.getElementById("c2")
    div2.style.backgroundColor="#33ffdd"
    div2.textContent=Math.trunc(Math.random()*1000+1)
}

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click",operacionBtn3)

function operacionBtn3(){
    const div3=document.getElementById("c3")
    let numero1=prompt("Introduce el numero 1")
    let numero2=prompt("Introduce el numero 2")
    numero1=parseInt(numero1)
    numero2=parseInt(numero2)
    div3.textContent=numero1+numero2
 
}

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click",operacionBtn4)

function operacionBtn4(){
    const div4=document.getElementById("c4")

    let numeroAleatorio=Math.trunc(Math.random()*100+1)
    let numeroIntroducido = 0
    let cont = 0
    while(numeroIntroducido !== numeroAleatorio){
        numeroIntroducido=parseInt(prompt("Introduce el numero buscado."))
        if(numeroIntroducido < numeroAleatorio){
            alert("El numero es mas grande")
        }else if(numeroIntroducido > numeroAleatorio){
            alert("El numero es mas pequeño")
        }
        cont++
    }
    div4.textContent="Has acertado, numero de intentos "+cont
 
}

const btn5 = document.getElementById("btn5")
btn5.addEventListener("click",operacionBtn5)

function operacionBtn5(){

    const fecha = new Date()
    const div5=document.getElementById("c5")

    // div5.textContent=
    div5.innerHTML=fecha.getDay()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()+"<br>"+fecha.getHours()+":"+fecha.getMinutes()

}

const btn6 = document.getElementById("btn6")
btn6.addEventListener("click",operacionBtn6)

function operacionBtn6(){
    
    const div6=document.getElementById("c6")
    setInterval(() => {
        const fecha = new Date()
        div6.innerHTML=fecha.getDay()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()+"<br>"+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()
    }, 1000);
}

