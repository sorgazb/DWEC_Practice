const body = document.body;
const cajaGallery = document.querySelector(".gallery");

const divMuestra = document.querySelector(".claseMuestra");

const btnJugar = document.getElementById("btnJugar");
const cronometro = document.getElementById("cronometro");
const contadorPuntos = document.getElementById("contadorPuntos");

btnJugar.addEventListener("click", jugarJuego);



function jugarJuego() {
  let puntos = 0;
  limpiarCajas();
  while (!cajaGallery.firstChild && !divMuestra.firstChild) {
    let tiempoJuego = 30;
    const imagenMuestra = document.createElement("img");
    divMuestra.appendChild(imagenMuestra);
    let idImgMuestra = Math.floor(Math.random() * 15);
    imagenMuestra.setAttribute("src", "img/" + idImgMuestra + ".JPG");
    let intervaloMuestra = setInterval(() => {
      idImgMuestra = Math.floor(Math.random() * 15);
      imagenMuestra.setAttribute("src", "img/" + idImgMuestra + ".JPG");
      if (tiempoJuego < 0) {
        clearInterval(intervaloMuestra);
      }
    }, 10000);
    for (let i = 0; i < 15; i++) {
      let item = document.createElement("img");
      item.className = "gallery img";
      cajaGallery.appendChild(item);
      let idImagen;

      let intervaloJuego = setInterval(() => {
        idImagen = Math.floor(Math.random() * 15);
        item.setAttribute("src", "img/" + idImagen + ".JPG");
        if (tiempoJuego < 0) {
          clearInterval(intervaloJuego);
        }
      }, 2000);

      item.addEventListener("click", () => {
        if (idImagen == idImgMuestra) {
          puntos++;
        } else {
          puntos--;
        }
        idImagen = Math.floor(Math.random() * 15);
        item.setAttribute("src", "img/" + idImagen + ".JPG");
        contadorPuntos.textContent = "Puntos : " + puntos;
      });
    }
    let intervaloTiempo = setInterval(() => {
      cronometro.textContent = "Tiempo: " + tiempoJuego + "/30";
      tiempoJuego--;
      console.log(tiempoJuego);
      if (tiempoJuego < 0) {
        clearInterval(intervaloTiempo);
        alert("SE ACABÓ EL TIEMPO HAS LOGRADO " + puntos + " PUNTOS.");
        limpiarCajas();
      }
    }, 1000);
  }
}

function limpiarCajas() {
  while (divMuestra.firstChild) {
    divMuestra.removeChild(divMuestra.firstChild);
  }
  while (cajaGallery.firstChild) {
    cajaGallery.removeChild(cajaGallery.firstChild);
  }
  contadorPuntos.textContent = "Puntos : " + 0;
}
