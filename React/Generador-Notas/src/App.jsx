/* eslint-disable no-unused-vars */
import React from "react";
import './App.css'
import Hijo from './Componentes/Hijo'

function App() {

  const alumno1 = "Lola";
  const calificacion1 = Math.round(Math.random()*10);

  const alumno2 = "Luis";
  const calificacion2 = Math.round(Math.random()*10);

  return (
    <>
      <h2>Ejemplos de Props (parametros) en React</h2>
      <Hijo nombre={alumno1} calificacion={calificacion1} />
      <Hijo nombre={alumno2} calificacion={calificacion2} />
    </>
  )
}

export default App
