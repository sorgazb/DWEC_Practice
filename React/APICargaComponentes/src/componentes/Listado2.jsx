import React, { useState, useEffect } from "react";

const Listado2 = () => {
  const [alturas, setAlturas] = useState([]);

  useEffect(() => {
    fetch("http://localhost/serviciosAlturas/listadoAlturas.php")
      .then((respuesta) => respuesta.json())
      .then((x) => setAlturas(x));
  }, []);

  return (
    <div className="">
      <h1 className="text-center">LISTADO DE PROVINCIAS</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nombre Provincia</th>
                  <th>Pico Mas Alto</th>
                  <th>Altura Maxima</th>
                  <th>Zona Mas Baja</th>
                  <th>Altura Minima</th>
                </tr>
              </thead>
              <tbody>
                {alturas.map((altura) => (
                  <tr key={altura.id}>
                    <td>{altura.Provincia}</td>
                    <td>{altura.SituacionAltMax}</td>
                    <td>{altura.AlturaMaxima}</td>
                    <td>{altura.SituacionAltMin}</td>
                    <td>{altura.AlturaMinima}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado2;
