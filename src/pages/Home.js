import React from "react";
import "./GalleryGlow.css"; // ✅ New unique CSS file
import CH from "./ch.png";
import HB from "./hb.png";
import AAudio from "./blood.mp3";
import BAudio from "./bread.mp3";

function Home() {
  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };

  return (
    <div className="gallery-glow-container">
      

      <div className="gallery-glow-logos">
        <img
          src={CH}
          alt="Cup"
          className="gallery-logo"
          onClick={() => playAudio(AAudio)}
        />
        <img
          src={HB}
          alt="Bread"
          className="gallery-logo"
          onClick={() => playAudio(BAudio)}
        />
      </div>
    </div>
  );
}

export default Home;
