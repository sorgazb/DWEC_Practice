import { useState } from 'react'
import './Componentes/estilos.css'
import Operaciones from './Componentes/Operaciones'

function App() {

  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)

  const obtenerNumero1 = (e) => {
    setNumero1(Number(e.target.value))
  }

  const obtenerNumero2 = (e) => {
    setNumero2(Number(e.target.value))
  }

  return (
    <>
      <h1>Calculadora REACT</h1>
      <div className='contenedorApp'>
        <div className='contendorPadre'>
          <input type="number" value={numero1} onChange={obtenerNumero1} placeholder='Introduce el valor de Numero-1'/>
          <input type="number" value={numero2} onChange={obtenerNumero2} placeholder='Introduce el valor de Numero-1'/>
        </div>
        <Operaciones numero1={numero1} numero2={numero2} />
      </div>
    </>
  )
}

export default App
