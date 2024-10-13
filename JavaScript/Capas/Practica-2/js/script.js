window.onload = inicio

function inicio(){

    const boton1 = document.getElementById("btn1")
    const boton2 = document.getElementById("btn2")
    const boton3 = document.getElementById("btn3")
    const boton4 = document.getElementById("btn4")

    boton1.addEventListener("click",funcionBtn1)
    boton2.addEventListener("click",funcionBtn2)
    boton3.addEventListener("click",funcionBtn3)
    boton4.addEventListener("click",funcionBtn4)

   
}

function funcionBtn1(){
    reiniciarColores()
    const lista = document.body.querySelector("ul").children
    for(let elemento of lista){
        elemento.textContent=Math.trunc(Math.random() * 1000 + 1)
    }
}

function funcionBtn2(){
    reiniciarColores()
    const lista = document.body.querySelector("ul").children
    
    for(let elemento of lista){
        let numero = Math.trunc(Math.random() * 1000 + 1)
        if(numero > 500){
            elemento.style.color="blue";
        }else{
            elemento.style.color="green";
        }
        elemento.textContent=numero
    }
}

function funcionBtn3(){
    reiniciarColores()
    const lista = document.body.querySelector("ul").children
    for(let elemento of lista){
        let numero = Math.trunc(Math.random() * 1000 + 1)
        elemento.style.color=generarColor()
        elemento.textContent=numero
        
    }
}

function funcionBtn4(){
    reiniciarColores()
    vaciarLista()
    const lista = document.body.querySelector("ul").children
    let numero1 = Math.trunc(Math.random() * 10 + 1)
    let numero2 = Math.trunc(Math.random() * 10 + 1)
    lista[0].textContent=numero1
    lista[1].textContent=numero2
    if(numero1 === numero2){
        alert("Los dos numeros son iguales.")
    }
}

function reiniciarColores(){
    const lista = document.body.querySelector("ul").children
    for(let elemento of lista){
        elemento.style.color=null
    }
}

function vaciarLista(){
    const lista = document.body.querySelector("ul").children
    for(let elemento of lista){
        elemento.textContent=null
    }
}

function generarColor(){    
    const r = Math.trunc(Math.random()*255 + 1)
    const g = Math.trunc(Math.random()*255 + 1)
    const b = Math.trunc(Math.random()*255 + 1)
    const color = "RGB("+r+","+g+","+b+")"
    return color
}


