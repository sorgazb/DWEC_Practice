//SOLUCION CON DIV 2.

const body = document.body;

body.className = 'container'

// Creamos el boton para cargar las imagenes y lo añadimos al body
const botonCargar = document.createElement("button");
botonCargar.textContent = "Cargar imagen";
body.appendChild(botonCargar);

// Creamos el div en el que cargaremos las imagenes
const divImagenes = document.createElement("div");
body.appendChild(divImagenes);

divImagenes.className = 'gallery'

let genero = "women";

// Creamos una variable booleana que nos indica si ya hemos cargado las imagenes
let imagenesCargadas = false;

botonCargar.addEventListener("click", () => {
  let numeroImagenes = parseInt(
    prompt("Introduce el numero de imagenes (5-50)")
  );

  if (numeroImagenes < 5 || numeroImagenes > 50) {
    alert("ERROR. Ha introducido un numero de imagenes no valido.");
    while (divImagenes.firstChild) {
        divImagenes.removeChild(divImagenes.firstChild);
    }
  } else {
    //En caso de que hayamos cargado las imagenes vaciamos el contenido del div
    while (divImagenes.firstChild) {
      divImagenes.removeChild(divImagenes.firstChild);
    }
    for (let index = 0; index < numeroImagenes; index++) {
      const imagenX = document.createElement("img");
      if (index % 2 == 0) {
        genero = "women";
      } else {
        genero = "men";
      }
      let numero = Math.trunc(Math.random() * 34 + 1);
      imagenX.setAttribute(
        "src",
        "https://randomuser.me/api/portraits/" + genero + "/" + numero + ".jpg"
      );
      divImagenes.append(imagenX);
      imagenX.className = 'gallery img'
    }
  }
});
