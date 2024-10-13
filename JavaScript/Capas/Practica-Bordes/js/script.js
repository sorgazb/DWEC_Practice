//Recuperamos el body para poder añadir los elementos que vamos a crear
const body = document.body

// Creamos el div principal al cual aplicaremos la clase de container
const divContenedor = document.createElement("div")
divContenedor.className="container"
body.appendChild(divContenedor)

// Creamos el fieldset en el que insertaremos las imagenes random
let legenda = document.createElement("legend")
legenda.textContent = "Practica imágenes"
const fieldset = document.createElement("fieldset")
fieldset.className="gallery"
fieldset.appendChild(legenda)
divContenedor.appendChild(fieldset)

// Con este bucle iremos creando las 40 imagenes random y las meteremos dentro del fieldset
for (let index = 0; index < 40; index++) {
    let imagen = document.createElement("img")
    let numero = generarNumeroRandom()
    imagen.setAttribute("src","https://randomuser.me/api/portraits/men/"+numero+".jpg")
    fieldset.appendChild(imagen)
}

//Recuperamos todas las imagenes del fieldset
const imagenes = fieldset.querySelectorAll("img")

//Aplicamos la funcionalidad de click sobre las imagenes, la cual consiste en poner o quitar a las 
//imagenes un borde de color azul
for(let img of imagenes){
    img.addEventListener("click",()=>{
        if(img.className == "ponerBorde"){
            img.className = "quitarBorde"
        }else{
            img.className = "ponerBorde"
        }
    })
}

//Funcion que genera el numero random de la imagen
function generarNumeroRandom(){
    let numero
    numero=Math.floor(Math.random()*30)
    return numero
}