import React, { useEffect, useState } from "react";
import "./sobremi.css";

export default function SobreMi() {
  const [textoActual, setTextoActual] = useState("");
  const [indexParrafo, setIndexParrafo] = useState(0);
  const [indexLetra, setIndexLetra] = useState(0);

  useEffect(() => {
    // ✅ Declaramos el texto dentro del efecto
    const textos = [
      `Sencillito y karismaticoo akii andamos en el ruedo siempre dando buena kara a lo k se venga.
Es bueno confiar pero no confiar es mejorrr!!!
La vida te pone retos y obstáculos para aprender de ellos se diferente cada día y demuestrate ke eres kapaz y no te dejes vencer ni derrotar tan fácilmente x nada es kon todoo...
Miedoo a nadiieee & respetooo a kien me respetaa,,,,,,,!!!!`,
    ];

    if (indexParrafo < textos.length) {
      if (indexLetra < textos[indexParrafo].length) {
        const timer = setTimeout(() => {
          setTextoActual(
            (prev) => prev + textos[indexParrafo].charAt(indexLetra)
          );
          setIndexLetra((prev) => prev + 1);
        }, 35); // velocidad de escritura (ms)
        return () => clearTimeout(timer);
      } else {
        // Esperar antes de pasar al siguiente párrafo
        const nextTimer = setTimeout(() => {
          setTextoActual((prev) => prev + "\n\n");
          setIndexParrafo((prev) => prev + 1);
          setIndexLetra(0);
        }, 600);
        return () => clearTimeout(nextTimer);
      }
    }
  }, [indexLetra, indexParrafo]);

  return (
    <div className="sobremi-container">
      <h2 className="sobremi-titulo"> Sobre mí</h2>
      <div className="sobremi-linea"></div>

<div className="texto-wrapper" style={{ width: "90%", marginTop: "-2%" }}>
  <div
    className="texto-ajustable typing texto-centrado-medio"
    style={{
      "--ancho-texto": "300px",
      "--font-size": "0.7rem",
      "--line-height": "1.4rem",
      whiteSpace: "pre-line",
    }}
  >
    {textoActual}
  </div>
</div>


      <div className="brillitos-wrap">
        <div className="brillo b1"></div>
        <div className="brillo b2"></div>
        <div className="brillo b3"></div>
      </div>
    </div>
  );
}
