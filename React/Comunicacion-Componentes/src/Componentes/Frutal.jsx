/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Frutal({mensajeHuerto, obtenerMensajeDeFrutal, obtenerPlantonesHuerto}) {

  const obtenerMensajeParaHuerto = (e) => {
    obtenerMensajeDeFrutal(e.target.value)
}

const mandarPlantonesHuerto = (e) =>{
  obtenerPlantonesHuerto(Number(Math.floor(Math.random() * 1000)))
}
  return (
    <div className='contenedorFrutal'>
    <h2>Frutal</h2>
    <p>Mensaje de Frutal para Huerto</p>
    <input type="text" onChange={obtenerMensajeParaHuerto} placeholder='Mensaje para Huerto'/>
    <button onClick={mandarPlantonesHuerto}>Mandar Plantones</button>
    <p>Huerto dice:{mensajeHuerto}</p>
</div>
  )
}

export default Frutal