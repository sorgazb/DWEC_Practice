import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Listado1 from "./componentes/Listado1";
import Listado2 from "./componentes/Listado2";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarsExample02">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/listado1">
                    Listado 1
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/listado2">
                    Listado 2
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/"/>
          <Route path="/listado1" element={<Listado1 />} />
          <Route path="/listado2" element={<Listado2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
