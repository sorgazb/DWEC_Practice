import { useState } from 'react'

import './App.css'
import Ejercicio2 from './Componentes/Ejercicio2'

function App() {

  const [vector1, setVector1] = useState([])
  const [vector2, setVector2] = useState([])

  const generarVectorRandom1 = () =>{
    const vectorAux = []
    while(vectorAux.length < 6){
      let numRandom = Number(Math.floor(Math.random()*50))
      if(!vectorAux.includes(numRandom)){
        vectorAux.push(numRandom)
      }
    }
    setVector1(vectorAux)
  }

  const generarVectorRandom2 = () =>{
    const vectorAux = []
    while(vectorAux.length < 6){
      let numRandom = Number(Math.floor(Math.random()*50))
      if(!vectorAux.includes(numRandom)){
        vectorAux.push(numRandom)
      }
    }
    setVector2(vectorAux)
  }

  return (
    <>
      <h1>Comparador de Vectores</h1>
      <button onClick={generarVectorRandom1}>Generar Vector 1</button>
      <button onClick={generarVectorRandom2}>Generar Vector 1</button>
      <Ejercicio2 vector1={vector1} vector2={vector2}/>
    </>
  )
}

export default App
