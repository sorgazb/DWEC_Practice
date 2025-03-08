import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [paisajes, setPaisajes] = useState([]);

  useEffect(() => {
    fetch(" http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php")
      .then((respuesta) => respuesta.json())
      .then((x) => setPaisajes(x));
  }, []);

  return (
    <>
    <div className="container mt-4">
      <h2 className="text-center mb-4">Galería de Imágenes</h2>
      <div className="row">
        {
          paisajes.map((paisaje) => (
            <div className="col-4 mb-4">
              <div className="card shadow-sm">
                <img src={paisaje.imagen} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">{paisaje.texto}</h5>
                  <a href={paisaje.url} className="btn btn-primary" target="_blank">{paisaje.subtexto}</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  );
}

export default App;
