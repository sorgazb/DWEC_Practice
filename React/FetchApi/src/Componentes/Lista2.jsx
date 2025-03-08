import React, { useEffect, useState } from 'react'

function Lista2() {
        const [datos, setDatos] = useState([]); // Estado para guardar los datos
        const [carga, setCarga] = useState(true); // Estado para manejar el loading
        const [error, setError] = useState(null); // Estado para manejar errores
    
        //useEffect() tiene dos parámetros, una función asíncrona (y la llamada a dicha función) y el parámetro []
        useEffect(() => {
            const fetchData = async () => { //función que ejecuta el fetch
            try {
                setCarga(true); // Inicia el loading
                const response = await fetch("http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php"); //carga del json
                if (!response.ok) { 
                    setError("Error no devuelve datos → fin")
                }
                const result = await response.json(); //cargar los datos ok en una variable
                setDatos(result); // Guarda los datos en el estado
            } catch (err) {
                setError(err.message); // Guarda el mensaje de error
            } finally {
                setCarga(false); // Finaliza el loading
            }
            }
        fetchData(); // Llama a la función para obtener los datos
        }, []); // [] asegura que el efecto solo se ejecute una vez al montar el componente
return (
    <>
    <table className="table table-striped">
            <thead>
                    <tr>
                            <th>Nombre</th>
                            <th>VotoPA</th>
                            <th>VotoPB</th>
                            <th>VotoPC</th>
                            <th>VotoPD</th>
                            <th>Representante</th>
                    </tr>
            </thead>
            <tbody>
                    {datos.map((dato,index) => (
                            <tr key={index}>
                                    <td>{dato.nombreProvincia}</td>
                                    <td>{dato.votosPA}</td>
                                    <td>{dato.votosPB}</td>
                                    <td>{dato.votosPC}</td>
                                    <td>{dato.votosPD}</td>
                                    <td>{dato.Representantes}</td>
                            </tr>
                    ))}
            </tbody>
    </table>
</>
  )
}

export default Lista2