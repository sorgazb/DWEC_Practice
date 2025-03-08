import React ,{useState, useEffect} from 'react'

const ListadoProvincias = () => {
  const [provincias, setProvincias] = useState([])
  const [alturas, setAlturas] = useState([])


  useEffect(()=>{
    fetch('http://localhost/serviciosProvincias/listadoProvincias.php')
    .then((respuesta)=>respuesta.json()).then((x)=>setProvincias(x))
  },[])

  useEffect(()=>{
    fetch('http://localhost/serviciosAlturas/listadoAlturas.php')
    .then((respuesta)=>respuesta.json()).then((x)=>setAlturas(x))
  },[])
  
  return (
    <div className=''>
        <h1>LISTADO DE PROVINCIAS</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <table className='table table-bordered table-striped'>
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
                  {
                    provincias.map((provincia)=>(
                    <tr key={provincia.id}>
                        <td>
                          {provincia.nombreProvincia}
                        </td>
                        <td>
                          {provincia.votosPA}
                        </td>
                        <td>
                          {provincia.votosPB}
                        </td>
                        <td>
                          {provincia.votosPC}
                        </td>
                        <td>
                          {provincia.votosPD}
                        </td>
                        <td>
                          {provincia.Representantes}
                        </td>
                    </tr>)
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="col-lg-6">
              <table className='table table-bordered table-striped'>
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
                  {
                    alturas.map((altura)=>(
                    <tr key={altura.id}>
                        <td>
                          {altura.Provincia}
                        </td>
                        <td>
                          {altura.SituacionAltMax}
                        </td>
                        <td>
                          {altura.AlturaMaxima}
                        </td>
                        <td>
                          {altura.SituacionAltMin}
                        </td>
                        <td>
                          {altura.AlturaMinima}
                        </td>
                    </tr>)
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <p>LISTADO DE ALTURAS</p>
        <button className='btn btn-danger'>Listar Alturas</button> */}
    </div>
  )
}

export default ListadoProvincias
