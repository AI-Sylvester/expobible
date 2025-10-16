import React, { useState } from "react";
import "./GalleryGlow.css";
import CH from "./ch.png";
import HB from "./hb.png";
import AAudio from "./blood.mp3";
import BAudio from "./bread.mp3";

function Home() {
  const [animateLogo, setAnimateLogo] = useState(null);

  const playAudio = (audioFile, logoId) => {
    const audio = new Audio(audioFile);
    audio.play();

    setAnimateLogo(logoId);

    setTimeout(() => setAnimateLogo(null), 20000); // match duration
  };

  return (
    <div className="gallery-glow-container">
      <div className="gallery-glow-logos">
        <img
          src={CH}
          alt="Cup"
          className={`gallery-logo ${animateLogo === "CH" ? "float-up" : ""}`}
          onClick={() => playAudio(AAudio, "CH")}
        />
        <img
          src={HB}
          alt="Bread"
          className={`gallery-logo ${animateLogo === "HB" ? "float-up" : ""}`}
          onClick={() => playAudio(BAudio, "HB")}
        />
      </div>
    </div>
  );
}

export default Home;
