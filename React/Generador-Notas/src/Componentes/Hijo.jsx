/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";


function Hijo({nombre, calificacion}) {
  return (
    <div>
      <h3>Nombre: {nombre}</h3>
      <p>Calificacion: {calificacion}</p>
    </div>
  )
}

export default Hijo
