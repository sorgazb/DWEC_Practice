import React, { useState, useEffect } from "react";

const Listado1 = () => {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    fetch("http://localhost/serviciosProvincias/listadoProvincias.php")
      .then((respuesta) => respuesta.json())
      .then((x) => setProvincias(x));
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
                  <th>Votos Partido A</th>
                  <th>Votos Partido B</th>
                  <th>Votos Partido C</th>
                  <th>Votos Partido D</th>
                  <th>Representas</th>
                </tr>
              </thead>
              <tbody>
                {provincias.map((provincia) => (
                  <tr key={provincia.id}>
                    <td>{provincia.nombreProvincia}</td>
                    <td>{provincia.votosPA}</td>
                    <td>{provincia.votosPB}</td>
                    <td>{provincia.votosPC}</td>
                    <td>{provincia.votosPD}</td>
                    <td>{provincia.Representantes}</td>
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

export default Listado1;
