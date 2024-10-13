window.addEventListener("load", inicio);

const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
"melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
"platanos", "pomelos", "prunus", "sandias" ];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];

const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
"imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
"imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
"imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];

const tabla = document.getElementById("cesta")

function inicio(){

    const body = document.body

    const total = document.getElementById("total")
    total.textContent = 0

    const gallery = document.getElementById("galeria")

    for (let index = 0; index < imagenes.length; index++) {
        let img = document.createElement("img")
        img.setAttribute("src",imagenes[index])
        let nombre = document.createElement("p")
        nombre.textContent = nombres[index]

        let precio = document.createElement("span")
        
        precio.textContent = "Precio: "+precios[index]+" €"

        let divFruta = document.createElement("div")
        divFruta.appendChild(img)
        divFruta.appendChild(nombre)
        divFruta.appendChild(precio)

        gallery.appendChild(divFruta)
    }

    frutas = gallery.querySelectorAll("div")

    for (const fruta of frutas) {

        fruta.onclick =()=>{

            let nombreImg = fruta.querySelector("p").textContent
            let pos = 0
            for (let index = 0; index < nombres.length; index++) {
                if(nombreImg == nombres[index]){
                    pos = index
                }
                
            }
            let nombre = nombres[pos]
            let preioUnidad = precios[pos]

            let cantidad = prompt("Introduce el peso en kg: "+nombre)

            let filaTabla = document.createElement("tr")
            let columnaNombre = document.createElement("td")
            let columnaPeso = document.createElement("td")
            let columnaPrecio = document.createElement("td")

            let btnEliminar = document.createElement("button")
            btnEliminar.textContent = "Eliminar"

            columnaNombre.textContent= nombre
            columnaPeso.textContent=cantidad
            columnaPrecio.textContent= preioUnidad * cantidad
            
            filaTabla.appendChild(columnaNombre)
            filaTabla.appendChild(columnaPeso)
            filaTabla.appendChild(columnaPrecio)
            filaTabla.appendChild(btnEliminar)
            tabla.appendChild(filaTabla)
            let sumaPrecios = parseInt(total.textContent)+parseInt(columnaPrecio.textContent)
            total.textContent =sumaPrecios

            btnEliminar.addEventListener("click",()=>{
                let resta = parseInt(total.textContent)-parseInt(columnaPrecio.textContent)
                total.textContent =resta
            })
        }
    }


    

    let btnEliminar = document.createElement("button")
}




