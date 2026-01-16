import React, { useState, useRef, useEffect } from "react";
import "./reproductor2.css";

export default function Reproductor() {
  const base = process.env.PUBLIC_URL;

  const songs = [
    { src: `${base}/music/Dread Mar-I - Lo Mas Sincero.mp3`, artist: "Dread Mar-I", title: "Lo Mas Sincero" },
    { src: `${base}/music/La Ventaja. Alfredo Olivas - Los Inadaptados.mp3`, artist: "La Ventaja. Alfredo Olivas", title: "Los Inadaptados" },
    { src: `${base}/music/Lucky Brown & Jere Klein - Amor Escondido.mp3`, artist: "Lucky Brown & Jere Klein", title: "Amor Escondido" }
  ];

    const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef(null);

  // ▶ AUTOPLAY cuando cambia de tema
  useEffect(() => {
    audioRef.current?.play()
      .then(() => setIsPlaying(true))
      .catch(err => console.log("Autoplay bloqueado:", err));
  }, [current]);

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const nextSong = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % songs.length);
  };

  return (
    <div
      className={`reproductor ${expanded ? "expandido" : ""}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="song-info">
        <p className="titulo">{songs[current].artist}</p>
        <p className="cancion">{songs[current].title}</p>
      </div>

      <div className="controles">
        <button className="btn-control" onClick={nextSong}>⏭</button>
        <button className="btn-control" onClick={togglePlay}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <audio
          ref={audioRef}
          src={songs[current].src}
          autoPlay
          loop={false}
          onEnded={() => setCurrent((prev) => (prev + 1) % songs.length)}
        />
      </div>
    </div>
  );
}







