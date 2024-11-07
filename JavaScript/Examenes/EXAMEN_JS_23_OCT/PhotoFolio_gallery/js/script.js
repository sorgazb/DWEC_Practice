window.onload = inicio

const url = "datos.json"

const elementoGallery = document.querySelector(".dropdown")

const elementoNature = elementoGallery.children[1].children[0]
const elementoPeople = elementoGallery.children[1].children[1]
const elementoArquit = elementoGallery.children[1].children[2]
const elementoAnimals = elementoGallery.children[1].children[3]
const elementoSport = elementoGallery.children[1].children[4]
const elementoTravel = elementoGallery.children[1].children[5]

const contenedoresImg = document.querySelectorAll(".gallery-item.h-100")
const imagenes = document.querySelectorAll(".img-fluid")

const breadcrumbs = document.querySelector(".breadcrumbs")

function inicio(){

    fetch(url)
    .then((response) => response.json())
    .then((data) => gestionCargarImgs(data))
    .finally(() => console.log("Terminado."))
    // .catch((error) => alert(error))

    
}


function gestionCargarImgs(datos){

    const elementoLi = document.createElement("li")
    breadcrumbs.firstElementChild.firstElementChild.appendChild(elementoLi)

    elementoPeople.addEventListener("click",()=>{
        elementoLi.textContent = "People"

        let posicionesElementosPeople = []

        datos.forEach((datos,index) => {
            if(datos.tipo == "gente"){
                posicionesElementosPeople.push(index)
            }
        })

        let indiceImgs = 0
        for (const imagen of imagenes) {
            if(indiceImgs ==  posicionesElementosPeople.length){
                indiceImgs = 0
            }
            if(indiceImgs!=posicionesElementosPeople.length){
                imagen.setAttribute("src",datos[posicionesElementosPeople[indiceImgs]].imagen)
                indiceImgs ++
            }
        }

        let indiceContenedores = 0
        for(const contenedor of contenedoresImg){
            if(indiceContenedores == posicionesElementosPeople.length){
                indiceContenedores = 0
            }if(indiceContenedores!=posicionesElementosPeople.length){
                if(contenedor.children.length==3){
                    contenedor.children[2].textContent=datos[posicionesElementosPeople[indiceContenedores]].texto
                    indiceContenedores ++
                }else{
                    let span = document.createElement("span")
                    span.textContent = datos[posicionesElementosPeople[indiceContenedores]].texto
                    contenedor.appendChild(span)
                    indiceContenedores ++
                }
            }
        }
    })

    elementoArquit.addEventListener("click",()=>{
        elementoLi.textContent = "Architecture"

        let posicionesElementosArqui = []

        datos.forEach((datos,index) => {
            if(datos.tipo == "arquitectura"){
                posicionesElementosArqui.push(index)
            }
        })

        let indiceImgs = 0
        for (const imagen of imagenes) {
            if(indiceImgs ==  posicionesElementosArqui.length){
                indiceImgs = 0
            }
            if(indiceImgs!=posicionesElementosArqui.length){
                imagen.setAttribute("src",datos[posicionesElementosArqui[indiceImgs]].imagen)
                indiceImgs ++
            }
        }

        let indiceContenedores = 0
        for(const contenedor of contenedoresImg){
            if(indiceContenedores == posicionesElementosArqui.length){
                indiceContenedores = 0
            }if(indiceContenedores!=posicionesElementosArqui.length){
                if(contenedor.children.length==3){
                    contenedor.children[2].textContent=datos[posicionesElementosArqui[indiceContenedores]].texto
                    indiceContenedores ++
                }else{
                    let span = document.createElement("span")
                    span.textContent = datos[posicionesElementosArqui[indiceContenedores]].texto
                    contenedor.appendChild(span)
                    indiceContenedores ++
                }
            }
        }
    })

    elementoAnimals.addEventListener("click",()=>{
        elementoLi.textContent = "Animals"

        let posicionesElementosAnimales = []

        datos.forEach((datos,index) => {
            if(datos.tipo == "animales"){
                posicionesElementosAnimales.push(index)
            }
        })

        let indiceImgs = 0
        for (const imagen of imagenes) {
            if(indiceImgs ==  posicionesElementosAnimales.length){
                indiceImgs = 0
            }
            if(indiceImgs!=posicionesElementosAnimales.length){
                imagen.setAttribute("src",datos[posicionesElementosAnimales[indiceImgs]].imagen)
                indiceImgs ++
            }
        }

        let indiceContenedores = 0
        for(const contenedor of contenedoresImg){
            if(indiceContenedores == posicionesElementosAnimales.length){
                indiceContenedores = 0
            }if(indiceContenedores!=posicionesElementosAnimales.length){
                if(contenedor.children.length==3){
                    contenedor.children[2].textContent=datos[posicionesElementosAnimales[indiceContenedores]].texto
                    indiceContenedores ++
                }else{
                    let span = document.createElement("span")
                    span.textContent = datos[posicionesElementosAnimales[indiceContenedores]].texto
                    contenedor.appendChild(span)
                    indiceContenedores ++
                }
            }
        }
    })

    elementoTravel.addEventListener("click",()=>{
        elementoLi.textContent = "Travel"
    })

    elementoSport.addEventListener("click",()=>{
        elementoLi.textContent = "Sports"

        let posicionesElementosDeportes= []

        datos.forEach((datos,index) => {
            if(datos.tipo == "deportes"){
                posicionesElementosDeportes.push(index)
            }
        })

        let indiceImgs = 0
        for (const imagen of imagenes) {
            if(indiceImgs ==  posicionesElementosDeportes.length){
                indiceImgs = 0
            }
            if(indiceImgs!=posicionesElementosDeportes.length){
                imagen.setAttribute("src",datos[posicionesElementosDeportes[indiceImgs]].imagen)
                indiceImgs ++
            }
        }

        let indiceContenedores = 0
        for(const contenedor of contenedoresImg){
            if(indiceContenedores == posicionesElementosDeportes.length){
                indiceContenedores = 0
            }if(indiceContenedores!=posicionesElementosDeportes.length){
                if(contenedor.children.length==3){
                    contenedor.children[2].textContent=datos[posicionesElementosDeportes[indiceContenedores]].texto
                    indiceContenedores ++
                }else{
                    let span = document.createElement("span")
                    span.textContent = datos[posicionesElementosDeportes[indiceContenedores]].texto
                    contenedor.appendChild(span)
                    indiceContenedores ++
                }
            }
        }
    })


    elementoNature.addEventListener("click",()=>{
        elementoLi.textContent = "Nature"

        let posicionesElementosNature = []

        datos.forEach((datos,index) => {
            if(datos.tipo == "naturaleza"){
                posicionesElementosNature.push(index)
            }
        })

        let indiceImgs = 0
        for (const imagen of imagenes) {
            if(indiceImgs ==  posicionesElementosNature.length){
                indiceImgs = 0
            }
            if(indiceImgs!=posicionesElementosNature.length){
                imagen.setAttribute("src",datos[posicionesElementosNature[indiceImgs]].imagen)
                indiceImgs ++
            }
        }


        let indiceContenedores = 0
        for(const contenedor of contenedoresImg){
            if(indiceContenedores == posicionesElementosNature.length){
                indiceContenedores = 0
            }if(indiceContenedores!=posicionesElementosNature.length){
                if(contenedor.children.length==3){
                    contenedor.children[2].textContent=datos[posicionesElementosNature[indiceContenedores]].texto
                    indiceContenedores ++
                }else{
                    let span = document.createElement("span")
                    span.textContent = datos[posicionesElementosNature[indiceContenedores]].texto
                    contenedor.appendChild(span)
                    indiceContenedores ++
                }
            }
        }
    })
}

