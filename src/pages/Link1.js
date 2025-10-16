import React, { useState } from "react";
import "./Link1.css";
import versesDataTa from "./data/versesData.js";     // Tamil data
import versesDataEn from "./data/versesDataEn.js";   // English data

function Link1({ language = "ta" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [popupIndex, setPopupIndex] = useState(null);

  // ✅ Choose dataset based on language
  const versesData = language === "ta" ? versesDataTa : versesDataEn;

  const handlePlay = (index) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const verseText = versesData[index].text;

    const utterance = new SpeechSynthesisUtterance(verseText);
    utterance.lang = language === "ta" ? "ta-IN" : "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

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

  const title = language === "ta" ? "பைபிள் குறிப்பு" : "Bible Reference";
  const intro =
    language === "ta"
      ? `கடைசி இராப்போஜனம் (The Last Supper)
இயேசு கிறிஸ்து தனது சீடர்களுடன் சிலுவையில் அறையப்படுவதற்கு முந்தைய இரவில், பஸ்கா விருந்திற்காக ஒன்றாக அமர்ந்து உண்ட இறுதி உணவாகும். இந்த நிகழ்வு, புதிய ஏற்பாட்டின் நான்கு நற்செய்திகளிலும் விரிவாக விளக்கப்பட்டுள்ளது.`
      : `The Last Supper — the final meal that Jesus Christ shared with His disciples before His crucifixion. It was a Passover meal that holds deep spiritual meaning, described in all four Gospels.`;

  return (
    <div className="page-container">
      <h1 className="title">{title}</h1>
      <p className="intro">{intro}</p>

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
                  title={language === "ta" ? "பார்க்க" : "Read"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPopupIndex(index);
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
                    title={language === "ta" ? "கேட்க" : "Listen"}
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

      {popupIndex !== null && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h3>{versesData[popupIndex].title}</h3>
              <span
                className="close-icon"
                onClick={() => setPopupIndex(null)}
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
