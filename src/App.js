import React, { useState } from "react";
import "./App.css";
import CrownCanvas from "./components/CrownCanvas";
import Reproductor from "./components/reproductor";
import BookEffect from "./components/BookEffect";



export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  return (
    <div className="app">

{/* 👑 Fondo canvas de coronas */}
<CrownCanvas />

      {/* ✅ UI principal (no se toca) */}
      <div className="frame-outer">
        <div className="frame-inner">
          <div className="container">
            <div className="sidebar">

              <div className="profile-pic">
                <img
                  src="https://xatimg.com/image/JVDjG98wVKej.jpg"
                  alt="perfil"
                />
              </div>

              <div className="menu">
                <div className="menu-buttons">

                  <p
                    className={activeSection === "inicio" ? "active" : ""}
                    onClick={() => setActiveSection("inicio")}
                  >
                    𝐈𝐧𝐢𝐜𝐢𝐨 
                  </p>

                  <p
                    className={activeSection === "sobremi" ? "active" : ""}
                    onClick={() => setActiveSection("sobremi")}
                  >
                    𝐒𝐨𝐛𝐫𝐞 𝐦𝐢 
                  </p>

                  <p
                    className={activeSection === "galeria" ? "active" : ""}
                    onClick={() => setActiveSection("galeria")}
                  >
                    𝐆𝐚𝐥𝐞𝐫𝐢𝐚 
                  </p>

                </div>

                <div className="menu-reproductor">
                  <Reproductor />
                </div>
              </div>
            </div>

            {/* ✅ Sección principal */}
            <div className="content">

              <BookEffect activeSection={activeSection} />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}











