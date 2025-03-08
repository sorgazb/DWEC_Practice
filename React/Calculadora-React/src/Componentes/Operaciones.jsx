/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Operaciones({numero1, numero2}) {
  return (
    <div className='contenedorHijo'>
        <h2>Resultados</h2>
        <p>La suma es: {numero1} + {numero2} = {numero1+numero2}</p>
        <p>La resta es: {numero1} - {numero2} = {numero1-numero2}</p>
        <p>El producto es: {numero1} * {numero2} = {numero1*numero2}</p>
        <p>La division es: {numero1} ÷ {numero2} = {numero1/numero2}</p>
    </div>
  )
}

export default Operaciones