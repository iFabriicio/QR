import React from "react";
import "./galeria.css";

export default function Galeria() {
  const fotos = [
    { id: 1, src: "https://xatimg.com/image/BYs6E3I1tLfv.jpg", caption: "", rotate: "-5deg" },
    { id: 2, src: "https://xatimg.com/image/Scxp7toSCCyh.jpg", caption: "", rotate: "4deg" },
    { id: 3, src: "https://xatimg.com/image/lmPwX7Mlrvjx.jpg", caption: "", rotate: "-7deg" },
    { id: 4, src: "https://xatimg.com/image/XSwYBMWINtj7.jpg", caption: "", rotate: "-7deg" },
    { id: 5, src: "https://xatimg.com/image/2d9NWl6BYaEx.jpg", caption: "", rotate: "-7deg" },
    { id: 6, src: "https://xatimg.com/image/jcXwb3nDqOxh.jpg", caption: "", rotate: "-7deg" },
 { id: 6, src: "https://xatimg.com/image/6xEmS2GyDbWl.jpg", caption: "", rotate: "-7deg" },

  ];

  return (
    <div className="galeria-container">

      <div className="galeria-grid">
        {fotos.map((foto) => (
          <div
            key={foto.id}
            className="galeria-card"
            style={{ transform: `rotate(${foto.rotate})` }}
          >
<img src={foto.src} className="galeria-img" alt={foto.caption} />
            <span className="galeria-caption">{foto.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


