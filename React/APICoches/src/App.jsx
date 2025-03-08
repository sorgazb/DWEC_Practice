import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Listado1 from './componentes/Listado1'
import Listado2 from './componentes/Listado2'
import Listado3 from './componentes/Listado3'
import Listado4 from './componentes/Listado4'
import Listado5 from './componentes/Listado5'

function App() {

  const [datos,setDatos] = useState([])

  useEffect(()=>{
    fetch("coches.json").
    then(response=>response.json()).
    then(data=>setDatos(data))
  },[])

  console.log(datos)

  return (
    <>
        <Router>
        <div className="container">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarsExample02">
              <ul className="navbar-nav mr-auto">
              <li className='nav-item' >
                <Link className='nav-link' to="/">Listado 1</Link>
              </li>
              <li className='nav-item' >
                <Link className='nav-link' to="/listado2">Listado 2</Link>
              </li>
              <li className='nav-item' >
                <Link className='nav-link' to="/listado3">Listado 3</Link>
              </li>
              <li className='nav-item' >
                <Link className='nav-link' to="/listado4">Listado 4</Link>
              </li>
              <li className='nav-item' >
                <Link className='nav-link' to="/listado5">Listado 5</Link>
              </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Listado1 coches={datos}/>}/>
          <Route path='/listado2' element={<Listado2 coches={datos}/>}/>
          <Route path='/listado3' element={<Listado3 coches={datos}/>}/>
          <Route path='/listado4' element={<Listado4 coches={datos}/>}/>
          <Route path='/listado5' element={<Listado5 coches={datos}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
