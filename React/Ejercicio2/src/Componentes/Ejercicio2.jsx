import React from 'react'

function Ejercicio2({vector1, vector2}) {


        let numCoincidencias = 0
        vector1.forEach(element => {
            if(vector2.includes(element)){
                numCoincidencias++
            }
        });

  return (
    <>
    <div>
        <p>{vector1.join('-')}</p>
    </div>
    <div>
        <p>{vector2.join('-')}</p>
    </div>
    <div>
        <p>{numCoincidencias}</p>
    </div>
    </>
  )
}

export default Ejercicio2