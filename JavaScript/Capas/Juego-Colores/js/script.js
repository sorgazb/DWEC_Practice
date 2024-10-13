window.onload = () => {
  // Definimos los arrays que contendrán los colores que usaremos para el juego
  const coloresHex = ["#FF0000","#00FF00","#0000FF","#FFA500","#FFC0CB","#FFFF00"]
  const colores = ["Rojo", "Verde", "Azul", "Naranja", "Rosa", "Amarillo"]

  // Identificamos los componentes que tiene nuestra web  
  const btnJugar = document.getElementById("btnJugar")
  const btnParar = document.getElementById("btnParar")
  const contenedorJuego = document.getElementById("contenedorJuego")
  const cronometro = document.getElementById("cronometro")
  const contadorPuntos = document.getElementById("contadorPuntos")

  // Definimos las distintas variables que usaremos a lo largo de la partida  
  let tiempoJuego
  let puntos
  let colorRandom
  let nomColorRandom

  // Funcionalidad del botón de jugar
  btnJugar.onclick = function () {
    while (!contenedorJuego.firstChild) {
      // Creamos el contenedor que irá cambiando de color   
      let cuadradoColor = document.createElement("div")
      contenedorJuego.appendChild(cuadradoColor)
      tiempoJuego = 30
      puntos = 0
      // Intervalo que irá cambiando la caja de color cada 1.5 seg
      let intervaloJuego = setInterval(() => {
        colorRandom = generarColor()
        nomColorRandom = generarColorHex()
        cuadradoColor.textContent = nomColorRandom
        cuadradoColor.style.backgroundColor = colorRandom
        contadorPuntos.textContent = "Puntos: " + puntos
        if (tiempoJuego < 0) {
          clearInterval(intervaloJuego)
          contenedorJuego.removeChild(contenedorJuego.firstChild)
          alert("SE ACABÓ EL TIEMPO HAS LOGRADO " + puntos + " PUNTOS.")
        }
      }, 1500)
      // Intervalo que irá controlando el cronometro de la partida
      let intervaloTiempo = setInterval(() => {
        cronometro.textContent = "Tiempo: " + tiempoJuego + "/30"
        tiempoJuego--
        if (tiempoJuego < 0) {
          clearInterval(intervaloTiempo)
        }
      }, 1000)
      cuadradoColor.onclick = function () {
        if (colores.indexOf(nomColorRandom) == coloresHex.indexOf(colorRandom)) {
          puntos++
        } else {
          puntos--
        }
      }
    }
  }

  // Funcionalidad del botón de parar
  btnParar.onclick = function () {
    tiempoJuego = 0
    alert("HAS PARADO EL JUEGO")
  }

  // Funcion que genera una posición aleatoria de nuestro array de colores hexadecimales
  function generarColorHex() {
    let coloresHex = colores[Math.trunc(Math.random() * colores.length)]
    return coloresHex
  }

  // Funcion que genera una posición aleatoria de nuestro array de colores
  function generarColor() {
    let color = coloresHex[Math.trunc(Math.random() * coloresHex.length + 1)]
    return color
  }
}
