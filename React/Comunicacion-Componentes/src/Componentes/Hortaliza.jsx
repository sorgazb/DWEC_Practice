/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

function Hortaliza({mensajeHuerto, obtenerMensajeDeHortaliza, obtenerSemillerosHuerto}) {
    
    const obtenerMensajeParaHuerto = (e) => {
        obtenerMensajeDeHortaliza(e.target.value)
    }

    const mandarSemillerosHuerto = (e) =>{
        obtenerSemillerosHuerto(Number(Math.floor(Math.random() * 100)))
    }

  return (
    <div className='contenedorHortaliza'>
        <h2>Hortaliza</h2>
        <p>Mensaje de Hortaliza para Huerto</p>
        <input type="text" onChange={obtenerMensajeParaHuerto} placeholder='Mensaje para Huerto'/>
        <button onClick={mandarSemillerosHuerto}>Mandar Semilleros</button>
        <p>Huerto dice:{mensajeHuerto}</p>
    </div>
  )
}

export default Hortaliza