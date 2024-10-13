const body = document.body

const btnAvanzar = document.querySelector("#jugar")

const contenedorPrincipal = document.createElement("div")
contenedorPrincipal.className = "gallery"
body.appendChild(contenedorPrincipal)

for (let index = 0; index < 40; index++) {
    let cajaColor = document.createElement("div")
    cajaColor.className = "fondo"
    contenedorPrincipal.appendChild(cajaColor)
}

btnAvanzar.addEventListener("click",cambiarColor)

function cambiarColor(){
    const cajas = contenedorPrincipal.querySelectorAll("div")
    let indice=0
    setInterval(() => {
        if(indice == cajas.length){
            indice=0;
        }
        if(cajas[indice].style.background=="green"){
            cajas[indice].style.background="red"
        }else{
            cajas[indice].style.background="green"
        }
        indice++
    }, 15);
}