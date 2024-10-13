const body = document.body

const btnAregar = document.querySelector("#boton-agregar")

const divContainer = document.querySelector(".container")

const divGallery = document.querySelector(".gallery")

const divImg = document.createElement("div")
divImg.className = "gallery"
divContainer.appendChild(divImg)

let contBotones=1

btnAregar.addEventListener("click",()=>{
    let btn = document.createElement("button")
    btn.textContent="Botón "+contBotones
    with(btn.style){
        backgroundColor="green"
    }
    divGallery.appendChild(btn)
    contBotones ++

    btn.addEventListener("click",()=>{
        limpiarCaja()
        let num = Math.floor(Math.random()*10)
        btn.textContent=num
        for (let i = 0; i < num; i++) {
            let img = document.createElement("img")
            img.setAttribute("src","img/"+Math.floor(Math.random()*10)+".JPG")
            divImg.appendChild(img)
        }
    })
})


function limpiarCaja(){
    while(divImg.firstChild){
        divImg.removeChild(divImg.firstChild)
    }
}
