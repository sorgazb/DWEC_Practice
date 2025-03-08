import React from 'react'

const Listado5 = ({coches}) => {
  console.log(coches)
  return (
    <div className="">
    <h1 className="text-center">LISTADO DE COCHES</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Color</th>
                <th>Consumo</th>
                <th>Precio</th>
                <th>Kms</th>
                <th>Tipo de Motor</th>

              </tr>
            </thead>
            <tbody>
              {coches.filter(coche=>coche.color == "Green" && coche.marca=="Volkswagen").map((coche) => (
                <tr key={coche.id}>
                  <td>{coche.marca}</td>
                  <td>{coche.modelo}</td>
                  <td>{coche.color}</td>
                  <td>{coche.consumo}</td>
                  <td>{coche.precio}</td>
                  <td>{coche.kms}</td>
                  <td>{coche.tipoMotor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>  
  )
}

export default Listado5