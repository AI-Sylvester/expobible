import React from "react";
import "./Link2.css";
import eventsDataTa from "./data/eventData.js";      // Tamil events
import eventsDataEn from "./data/eventDataEn.js";    // English events

function Link2({ language = "ta" }) {
  // Select dataset based on language
  const eventsData = language === "ta" ? eventsDataTa : eventsDataEn;

  const title = language === "ta" ? "நிகழ்வுகள்" : "Events";

  return (
    <div className="page-container">
      <h1 className="title">{title}</h1>

      <div className="timeline">
        {eventsData.map((event, index) => (
          <div key={index} className="timeline-item">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Link2;
