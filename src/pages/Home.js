import React, { useState, useRef } from "react";
import "./GalleryGlow.css";
import CH from "./ch.png";
import HB from "./hb.png";
import AAudio from "./blood.mp3";
import BAudio from "./bread.mp3";

function Home() {
  const [animateLogo, setAnimateLogo] = useState(null);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);

  const playAudio = (audioFile, logoId) => {
    // Stop other audio
    if (audioRef1.current && logoId !== "logo1") {
      audioRef1.current.pause();
      audioRef1.current.currentTime = 0;
    }
    if (audioRef2.current && logoId !== "logo2") {
      audioRef2.current.pause();
      audioRef2.current.currentTime = 0;
    }

    // Create or reuse audio
    let audio;
    if (logoId === "logo1") {
      audio = audioRef1.current || new Audio(audioFile);
      audioRef1.current = audio;
    } else {
      audio = audioRef2.current || new Audio(audioFile);
      audioRef2.current = audio;
    }

    audio.currentTime = 0;
    audio.play();

    // Animate
    setAnimateLogo(logoId);

    const duration = logoId === "logo1" ? 45000 : 26000; // CH=45s, HB=26s
    setTimeout(() => setAnimateLogo(null), duration);
  };

  return (
    <div className="gallery-glow-container">
      <div className="gallery-glow-logos">
         <img
          src={HB}
          alt="Bread"
          className={`gallery-logo logo2 ${animateLogo === "logo2" ? "float-up2" : ""}`}
          onClick={() => playAudio(BAudio, "logo2")}
        />
        <img
          src={CH}
          alt="Cup"
          className={`gallery-logo logo1 ${animateLogo === "logo1" ? "float-up1" : ""}`}
          onClick={() => playAudio(AAudio, "logo1")}
        />
       
      </div>
    </div>
  );
}

export default Home;
