import React from "react";
import "./Link5.css";
import meaningDataTa from "./data/meaningData.js";      // Tamil data
import meaningDataEn from "./data/meaningDataEn.js";    // English data

function Link5({ language = "ta" }) {
  const data = language === "ta" ? meaningDataTa : meaningDataEn;

  return (
    <div className="link5-container">
      <h1 className="link5-title">{data.title}</h1>

      <div className="link5-timeline">
        <div className="link5-timeline-item">
          <h3 className="link5-heading">{data.heading}</h3>
          <ul className="link5-list">
            {data.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="link5-summary">{data.summary}</div>
      </div>

      <div className="link5-meaning-section">
        <h2 className="link5-subtitle">{data.subTitle}</h2>
        <table className="link5-table">
          <thead>
            <tr>
              <th>{data.tableHeaders[0]}</th>
              <th>{data.tableHeaders[1]}</th>
              <th>{data.tableHeaders[2]}</th>
            </tr>
          </thead>
          <tbody>
            {data.tableRows.map((row, index) => (
              <tr key={index}>
                <td>{row.title}</td>
                <td>{row.verse}</td>
                <td>{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Link5;
