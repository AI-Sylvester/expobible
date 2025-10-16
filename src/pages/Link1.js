import React, { useState } from "react";
import "./Link1.css";
import versesData from "./data/versesData";

function Link1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [popupIndex, setPopupIndex] = useState(null); // ✅ store which popup to open

  const handlePlay = (index) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(versesData[index].text);
    utterance.rate = 0.9;
    utterance.pitch = 1.2;
    utterance.onstart = () => setSpeakingIndex(index);
    utterance.onend = () => setSpeakingIndex(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleStop = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">பைபிள் குறிப்பு</h1>
      <p className="intro">
        கடைசி இராப்போஜனம் (The Last Supper)
        <br />
        இயேசு கிறிஸ்து தனது சீடர்களுடன் சிலுவையில் அறையப்படுவதற்கு முந்தைய இரவில், பஸ்கா
        விருந்திற்காக ஒன்றாக அமர்ந்து உண்ட இறுதி உணவாகும். இந்த நிகழ்வு, புதிய
        ஏற்பாட்டின் நான்கு நற்செய்திகளிலும் விரிவாக விளக்கப்பட்டுள்ளது.
      </p>

      <div className="vertical-tabs">
        <div className="tabs">
          {versesData.map((verse, index) => (
            <div
              key={index}
              className={`tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {verse.title}
              <div className="tab-buttons">
                <button
                  title="Read"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopupIndex(index); // ✅ open popup for this verse
                  }}
                >
                  👁️
                </button>

                {speakingIndex === index ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStop();
                    }}
                  >
                    ⏹
                  </button>
                ) : (
                  <button
                    title="Listen"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlay(index);
                    }}
                  >
                    🔊
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {popupIndex !== null && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h3>{versesData[popupIndex].title}</h3>
              <span
                className="close-icon"
                onClick={() => setPopupIndex(null)} // ✅ close only this popup
              >
                ✖
              </span>
            </div>
            <div className="popup-body">
              <p>{versesData[popupIndex].text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Link1;
