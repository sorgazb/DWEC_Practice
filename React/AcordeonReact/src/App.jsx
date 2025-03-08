/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

function App() {
  const [preguntas, setPreguntas] = useState([]);
  useEffect(() => {
    fetch("preguntas.json")
      .then((response) => response.json())
      .then((data) => setPreguntas(data));
  }, []);
  return (
    <>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {preguntas.map((p, i) => (
          <div key={i} className="accordion-item">
            <h2 className="accordion-header" id={`flush-heading${i}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${i}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${i}`}
              >
                {p.pregunta}
              </button>
            </h2>
            <div
              id={`flush-collapse${i}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${i}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">{p.respuesta}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;