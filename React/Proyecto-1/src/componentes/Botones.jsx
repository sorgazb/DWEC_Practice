import { useState } from "react";


function Botones() {

const [contador, setContador] = useState(0);

const [numeroInput, setNumeroInput] = useState(0)

const obtenerNumeroInput = (e) => {
  setNumeroInput(Number(e.target.value))
}

const incrementar1 = () => {
    setContador(contador + 1)  
};

const decrementar1 = () => {
  setContador(contador - 1)
}

const incrementarInput = () => {
  setContador(contador + numeroInput)
}

const decrementarInput = () => {
  setContador(contador - numeroInput)
}

  return (
    <>
      <div className="app">
        <h2 className="titulo">Contador</h2>
        <div className="estilo_contador">{contador}</div>
        <button className="estilo_incremento" onClick={incrementar1}>Incrementar</button>
        <button className="estilo_decremento" onClick={decrementar1}>Decrementar</button>
        <input type="number" value={numeroInput} onChange={obtenerNumeroInput} placeholder="Introduce Numero"/>
        <button className="estilo_incremento" onClick={incrementarInput}>Incrementar Input</button>
        <button className="estilo_decremento" onClick={decrementarInput}>Decrementar Input</button>
      </div>
    </>
  );
}

export default Botones;
