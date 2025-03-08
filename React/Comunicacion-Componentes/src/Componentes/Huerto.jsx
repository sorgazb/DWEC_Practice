
/* eslint-disable no-unused-vars */
import React from 'react'
import Hortaliza from './Hortaliza'
import { useState } from 'react'
import Frutal from './Frutal'

function Huerto() {

    const [mensajeDeHortaliza, setMensajeDeHortaliza] = useState('')

    const obtenerMensajeDeHortaliza = (e) =>{
        setMensajeDeHortaliza(e)
    }

    const [mensajeHortaliza, setMensajeHortaliza] = useState('')
    
    const obtenerMensajeParaHortaliza = (e) => {
        setMensajeHortaliza(e.target.value)
    }

    const [semillerosHortaliza, setSemillerosHortaliza] = useState(0)

    const obtenerSemillerosHuerto = (e) => {
        setSemillerosHortaliza(e)
    }

    const [mensajeFrutal, setMensajeFrutal] = useState('')
    
    const obtenerMensajeParaFrutal = (e) => {
        setMensajeFrutal(e.target.value)
    }

    const [mensajeDeFrutal, setMensajeDeFrutal] = useState('')

    const obtenerMensajeDeFrutal = (e) =>{
        setMensajeDeFrutal(e)
    }

    const [plantonesFrutal, setPlantonesFrutal] = useState(0)

    const obtenerPlantonesHuerto = (e) => {
        setPlantonesFrutal(e)
    }

  return (
    <div className='contenedorHuerto'>
        <h2>Huerto</h2>
        
        <p>Mensaje de Huerto para Hortaliza</p>
        <input type="text" value={mensajeHortaliza} onChange={obtenerMensajeParaHortaliza} placeholder='Mensaje para Hortaliza'/>
        <p>Hortaliza dice a huerto: {mensajeDeHortaliza}</p>
        <p>Peticiones de Hortaliza (semilleros) a huerto {semillerosHortaliza}</p>

        <Hortaliza mensajeHuerto={mensajeHortaliza} obtenerMensajeDeHortaliza={obtenerMensajeDeHortaliza} obtenerSemillerosHuerto={obtenerSemillerosHuerto}></Hortaliza>
        
        <p>Mensaje de Huerto para Frutal</p>
        <input type="text" value={mensajeFrutal} onChange={obtenerMensajeParaFrutal} placeholder='Mensaje para Frutal'/>
        <p>Frutal dice a huerto: {mensajeDeFrutal}</p>
        <p>Peticiones de Frutal (plantones) a huerto {plantonesFrutal}</p>
        
        <Frutal mensajeHuerto={mensajeFrutal} obtenerMensajeDeFrutal={obtenerMensajeDeFrutal} obtenerPlantonesHuerto={obtenerPlantonesHuerto}></Frutal>

    </div>
  )
}

export default Huerto