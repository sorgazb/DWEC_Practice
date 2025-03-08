import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Lista1 from './Componentes/Lista1'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Lista2 from './Componentes/Lista2'
import Lista3 from './Componentes/Lista3';
import Lista4 from './Componentes/Lista4';

function App() {

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/lista1">Lista 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lista2">Lista 2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lista3">Lista 3</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lista4">Lista 4</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/lista1" element={<Lista1/>} />
          <Route path="/lista2" element={<Lista2/>} />
          <Route path="/lista3" element={<Lista3/>} />
          <Route path="/lista4" element={<Lista4/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
