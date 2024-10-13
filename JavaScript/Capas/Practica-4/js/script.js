const btn1 = document.getElementById("btn1")
btn1.addEventListener("click",operacionBtn1)

function operacionBtn1(){
    setInterval(() => {
        const cajas=document.querySelector(".etiquetaR").children
        for(let caja of cajas){
            caja.textContent=Math.trunc(Math.random()*1000+1)
        }
    }, 1000);

}

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click",operacionBtn2)

function operacionBtn2(){
    setInterval(() => {
        const cajas=document.querySelector(".etiquetaR").children
        for(let caja of cajas){
            caja.style.backgroundColor=generarColor()
            
        }
    }, 1000);

}

function generarColor(){    
    const r = Math.trunc(Math.random()*255 + 1)
    const g = Math.trunc(Math.random()*255 + 1)
    const b = Math.trunc(Math.random()*255 + 1)
    const color = "RGB("+r+","+g+","+b+")"
    return color
}

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click",operacionBtn3)

function operacionBtn3(){
    let cont=1
    const cajas=document.querySelector(".etiquetaR").children
    for(let caja of cajas){
        caja.textContent=prompt("Introduce un numero para la caja "+cont)
        cont ++
    }
}

