/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const NumerosRandom = () => {

    const generarNumerosRandom = () => {
        return Math.floor(Math.random() * 100)
    }

    const [numerosRandom, setNumerosRandom] =  useState(Array.from({length : 10}, generarNumerosRandom))

  const aniadirNumeroRandom = () => {
      setNumerosRandom([...numerosRandom, generarNumerosRandom()]);
      console.log(numerosRandom);
  }

  const eliminarNumero = (index) => {
    const vectorCopia = [...numerosRandom]
    setNumerosRandom(vectorCopia.splice(index,1))
    setNumerosRandom(vectorCopia)
  }

  const editarNumero=(index)=>{
    const nuevoNumero = prompt("Teclea el nuevo número:", numerosRandom[index]);
    for (let i = 0; i < numerosRandom.length; i++) {
      if (i === index) {
        numerosRandom[i] = nuevoNumero;
      }
    }
    setNumerosRandom([...numerosRandom]);
  }

  const numerosOrdenadosASC = () =>{
    setNumerosRandom( [...numerosRandom].sort((a,b) => a - b)); // Orden ascendente
  } 

  const numerosOrdenadosDESC = () =>{
    setNumerosRandom( [...numerosRandom].sort((b,a) => a - b)); // Orden descendente
  } 



  return (
    <>
    <div className="conainer">
        <div className="row">
                <button className='btn btn-success m-5' onClick={aniadirNumeroRandom}>Numero Random</button>
                <button className='btn btn-primary m-5' onClick={numerosOrdenadosASC}>Ordenar ASC</button>
                <button className='btn btn-primary m-5' onClick={numerosOrdenadosDESC}>Ordenar DESC</button>
        </div>
        <div className="row">
            <div className="col-lg-12">
            <table className='table table-bordered table-striped'>
                <thead>
                  <tr>
                    <th>Codigo</th>
                    <th>Numero</th>
                    <th>Eliminar</th>
                    <th>Modificar</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    numerosRandom.map((numero,index)=>(
                    <tr key={index}>
                        <td>
                          {index+1}
                        </td>
                        <td>
                            {numerosRandom[index]}
                        </td>
                        <td>
                          <button className='btn btn-info'  onClick={() => editarNumero(index)}>Editar</button>
                        </td>
                        <td>
                          <button className='btn btn-danger'  onClick={() => eliminarNumero(index)}>Eliminar</button>
                        </td>
                    </tr>)
                    )
                  }
                </tbody>
              </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default NumerosRandom