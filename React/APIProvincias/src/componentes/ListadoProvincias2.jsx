import React,{useState, useEffect, use} from 'react'

const ListadoProvincias2 = () => {

    const [datos, setDatos] = useState([])

    const [url, setUrl] = useState('')

    const [tabla, setTabla] = useState(0)

    const listadoDatos = (url,posicion) => {
        setUrl(url)
        setTabla(posicion)
    }

    useEffect(()=>{
        fetch(url)
        .then(respuesta => respuesta.json()
        .then((x) => setDatos(x))
        )
    ,[]})

  return (
    <div>
        <h1>Listado Provincias</h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <button className='btn btn-primary m-2' onClick={
                        ()=>listadoDatos('http://localhost/serviciosProvincias/listadoProvincias.php',1)
                    }>Listar Provincias Por Votos</button>
                    <button className='btn btn-danger m-2'onClick={
                        ()=>listadoDatos('http://localhost/serviciosAlturas/listadoAlturas.php',2)
                    }>Listar Provincias Por Alturas</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            {
                                (tabla == 1)&&(
                                    <tr>
                                    <th>Nombre Provincia</th>
                                    <th>Votos Partido A</th>
                                    <th>Votos Partido B</th>
                                    <th>Votos Partido C</th>
                                    <th>Votos Partido D</th>
                                    <th>Representas</th>
                                  </tr>
                                )

                            }
                            {
                            (tabla == 2)&&(
                                    <tr>
                                        <th>Nombre Provincia</th>
                                        <th>Pico Mas Alto</th>
                                        <th>Altura Maxima</th>
                                        <th>Zona Mas Baja</th>
                                        <th>Altura Minima</th>
                                    </tr>
                                )
                            }
                        </thead>
                        <tbody>
                            {
                                (tabla == 1)&&
                                (
                                    datos.map((dato,index)=>(
                                        <tr key={index}>
                                            <td>{dato.nombreProvincia}</td>
                                            <td>{dato.votosPA}</td>
                                            <td>{dato.votosPB}</td>
                                            <td>{dato.votosPC}</td>
                                            <td>{dato.votosPD}</td>
                                            <td>{dato.Representantes}</td>
                                        </tr>
                                    ))
                                )
                            }
                            {
                            (tabla == 2)&&
                                (
                                    datos.map((dato,index)=>(
                                        <tr key={index}>
                                            <td>{dato.Provincia}</td>
                                            <td>{dato.SituacionAltMax}</td>
                                            <td>{dato.AlturaMaxima}</td>
                                            <td>{dato.SituacionAltMin}</td>
                                            <td>{dato.AlturaMinima}</td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListadoProvincias2
