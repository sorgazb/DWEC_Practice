import { useState } from "react";

function Pie() {

  const [numeroAleatorio, setNumeroAleatorio] = useState(0)

  const generarNumeroAleatorio = () => {
    setNumeroAleatorio(Math.floor(Math.random() * 100))
  }

  return (
    <div className="app">
      <h2 className="titulo">Pie de Pagina</h2>
      <div className="titulo">Numero Aleatorio {numeroAleatorio}</div>
      <button className="estilo_decremento" onClick={generarNumeroAleatorio}>Generar Numero Aleatorio</button>
    </div>
  )
}

export default Pie