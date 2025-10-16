import React, { useState, useEffect } from "react";
import "./Link3.css"; // ✅ Import the CSS file
import CH from "./ch.png";
import HB from "./hb.png";

function Home() {
  const [openBox, setOpenBox] = useState(null);

  // 🔹 Speak the text when box opens
  useEffect(() => {
    if (openBox) {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const text =
          openBox === "logo1"
            ? "கிண்ணத்தை எடுத்துக் கடவுளுக்கு நன்றி செலுத்தி அவர்களுக்குக் கொடுத்து,“இதில் உள்ளதை அனைவரும் பருகுங்கள்;ஏனெனில், இது எனது உடன்படிக்கையின் இரத்தம்; பலருடைய பாவ மன்னிப்புக்காகச் சிந்தப்படும் இரத்தம் என்றார்."
            : "இயேசு அப்பத்தை எடுத்துக் கடவுளைப் போற்றி, அதைப் பிட்டுச் சீடருக்குக் கொடுத்து,“இதைப் பெற்று உண்ணுங்கள்; இது எனது உடல்”என்றார்.";
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
      }
    }
  }, [openBox]);

  return (
    <div className="link3-container">
    

      {/* 🔹 Bottom Fixed Logos */}
      <div className="bottom-logos">
        <img
          src={CH}
          alt="Logo 1"
          className="logo"
          onClick={() => setOpenBox("logo1")}
        />
        <img
          src={HB}
          alt="Logo 2"
          className="logo"
          onClick={() => setOpenBox("logo2")}
        />
      </div>

      {/* 🔹 Overlay */}
      {openBox && (
        <div className="overlay" onClick={() => setOpenBox(null)}>
          {/* 🔹 Animated Rising Box */}
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={openBox === "logo1" ? CH : HB}
              alt="Selected Logo"
              className="popup-logo"
            />
          
            <p>
              {openBox === "logo1"
                ? "கிண்ணத்தை எடுத்துக் கடவுளுக்கு நன்றி செலுத்தி அவர்களுக்குக் கொடுத்து,“இதில் உள்ளதை அனைவரும் பருகுங்கள்;ஏனெனில், இது எனது உடன்படிக்கையின் இரத்தம்; பலருடைய பாவ மன்னிப்புக்காகச் சிந்தப்படும் இரத்தம்.என்றார்."
                : "இயேசு அப்பத்தை எடுத்துக் கடவுளைப் போற்றி, அதைப் பிட்டுச் சீடருக்குக் கொடுத்து,“இதைப் பெற்று உண்ணுங்கள்; இது எனது உடல்”என்றார்."}
            </p>
            <button
              onClick={() => {
                window.speechSynthesis.cancel();
                setOpenBox(null);
              }}
              className="close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;