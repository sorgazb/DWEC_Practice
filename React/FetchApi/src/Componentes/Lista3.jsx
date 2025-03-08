import React, { useEffect, useState } from 'react'

function Lista3() {
        const [datos, setDatos] = useState([]); // Estado para guardar los datos
        const [carga, setCarga] = useState(true); // Estado para manejar el loading
        const [error, setError] = useState(null); // Estado para manejar errores
    
        //useEffect() tiene dos parámetros, una función asíncrona (y la llamada a dicha función) y el parámetro []
        useEffect(() => {
            const fetchData = async () => { //función que ejecuta el fetch
            try {
                setCarga(true); // Inicia el loading
                const response = await fetch("http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php"); //carga del json
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
                            <th>Id</th>
                            <th>Alumno</th>
                            <th>Nota 1</th>
                            <th>Nota 2</th>
                            <th>Nota 3</th>
                            <th>Nota 4</th>
                            <th>Nota 5</th>
                            <th>Nota 6</th>
                    </tr>
            </thead>
            <tbody>
                    {datos.map((dato) => (
                            <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.alumno}</td>
                                    <td>{dato.nota1}</td>
                                    <td>{dato.nota2}</td>
                                    <td>{dato.nota3}</td>
                                    <td>{dato.nota4}</td>
                                    <td>{dato.nota5}</td>
                                    <td>{dato.nota}</td>
                            </tr>
                    ))}
            </tbody>
    </table>
</>
  )
}

export default Lista3