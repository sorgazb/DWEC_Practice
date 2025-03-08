import React from 'react'

const Listado4 = ({coches}) => {


  let cocheMasCaro= coches[0]
  
  coches.forEach(coche => {
    if(coche.precio > cocheMasCaro.precio){
      cocheMasCaro = coche
    }
  });

  return (
    <div className="">
    <h1 className="text-center">LISTADO DE COCHES</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p>Coche mas caro: {cocheMasCaro.marca}-{cocheMasCaro.modelo}-{cocheMasCaro.color}-{cocheMasCaro.kms}-{cocheMasCaro.tipoMotor}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Listado4