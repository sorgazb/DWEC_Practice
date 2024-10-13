const personajes = ["Toni", "Chang", "Flanders", "Homer", "Marge", "Malos Pelos", "Kent", "Lisa", "Krusty", "Moe", "Martin"]

let temporizador = setInterval( cargarImagenes,3000);

const body = document.body
const cajaGallery = document.querySelector(".gallery")


const divImagenMuestra = document.querySelector(".classMuestra")

const imagenMuestra = document.createElement("img")
let numRandom = Math.floor(Math.random()*10)
imagenMuestra.setAttribute("src","img/"+numRandom+".JPG")
divImagenMuestra.appendChild(imagenMuestra)

const puntos = document.querySelector("#puntos")
let points = 0


function cargarImagenes(){
    limpiarCaja()

    for (let i = 0; i < 10; i++) {
        let item = document.createElement("img")
        // let rotulo = document.createElement("span")
        let x = Math.floor(Math.random()*10)
        item.setAttribute("src","img/"+x+".JPG")
        item.className="gallery img"
        // rotulo.innerText=personajes[x]
        cajaGallery.appendChild(item)
        // cajaGallery.appendChild(rotulo)
        item.addEventListener("click",()=>{
            if(x == numRandom){
                points ++
            }else{
                points --
            }
            x = Math.floor(Math.random()*10)
            item.setAttribute("src","img/"+x+".JPG")
            puntos.textContent="Puntos :"+points
        })
    }
}

function limpiarCaja(){
    while(cajaGallery.firstChild){
        cajaGallery.removeChild(cajaGallery.firstChild)
    }
}