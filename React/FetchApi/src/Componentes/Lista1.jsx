import React, { useEffect, useState } from 'react'

function Lista1() {

    const [datos, setDatos] = useState([]); // Estado para guardar los datos
    const [carga, setCarga] = useState(true); // Estado para manejar el loading
    const [error, setError] = useState(null); // Estado para manejar errores

    //useEffect() tiene dos parámetros, una función asíncrona (y la llamada a dicha función) y el parámetro []
    useEffect(() => {
        const fetchData = async () => { //función que ejecuta el fetch
        try {
            setCarga(true); // Inicia el loading
            const response = await fetch("http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php"); //carga del json
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
                                    <th>Nombre</th>
                                    <th>Direccion</th>
                                    <th>Cargo</th>
                                    <th>Edad</th>
                                    <th>Imagen</th>
                            </tr>
                    </thead>
                    <tbody>
                            {datos.map((dato) => (
                                    <tr key={dato.id}>
                                            <td>{dato.id}</td>
                                            <td>{dato.nombre}</td>
                                            <td>{dato.direccion}</td>
                                            <td>{dato.cargo}</td>
                                            <td>{dato.edad}</td>
                                            <td><img src={dato.imagen} alt='Imagen Empleado' className="img-fluid"/></td>
                                    </tr>
                            ))}
                    </tbody>
        </table>
    </>
  )
}

export default Lista1