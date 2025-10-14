import React from "react";
import "./Link5.css";

function Link5() {
  return (
    <div className="link5-container">
      <h1 className="link5-title">ஆவிக்குரிய அர்த்தம்</h1>

      <div className="link5-timeline">
        <div className="link5-timeline-item">
          <h3 className="link5-heading">ஆவிக்குரிய அர்த்தம்</h3>
          <ul className="link5-list">
            <li>தியாகம் → பாவங்களுக்காக இயேசுவின் சரீரம் & இரத்தம்</li>
            <li>உடன்படிக்கை → மனிதனுக்கும் கடவுளுக்கும் புதிய உடன்படிக்கை</li>
            <li>ஊழியம் → தாழ்மை & சேவை</li>
            <li>நினைவு → கிறிஸ்தவ திருவிருந்து</li>
          </ul>
        </div>

        <div className="link5-summary">
          * கடைசி இராப்போஜனம் ஒரு பிரியாவிடை விருந்து மட்டுமல்ல; அது
          அன்பு, தாழ்மை, தியாகம், இரட்சிப்பின் வாக்குறுதி ஆகியவற்றின் அடையாளமாகும்.
        </div>
      </div>

      <div className="link5-meaning-section">
        <h2 className="link5-subtitle">முக்கிய போதனைகள் மற்றும் அர்த்தங்கள்</h2>
        <table className="link5-table">
          <thead>
            <tr>
              <th>தலைப்பு</th>
              <th>முக்கிய வேதாகம வசனம்</th>
              <th>அர்த்தம்</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>தியாகம்</td>
              <td>மத் 26:26–28, மாற் 14:24, லூக் 22:19–20</td>
              <td>இயேசு தம் உடலும் இரத்தமும் அர்ப்பணித்தார்</td>
            </tr>
            <tr>
              <td>அன்பு</td>
              <td>யோவா 13:1, 34–35</td>
              <td>இறுதி வரை அன்பு செலுத்துதல், அன்பின் கட்டளை</td>
            </tr>
            <tr>
              <td>தாழ்மை</td>
              <td>யோவா 13:4–15, லூக் 22:26–27</td>
              <td>சேவை மூலம் தாழ்மையின் வெளிப்பாடு</td>
            </tr>
            <tr>
              <td>இரட்சிப்பு</td>
              <td>மத் 26:28, லூக் 22:20, யோவா 13:19–20</td>
              <td>பாவ மன்னிப்பின் வழி இரட்சிப்பு</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Link5;
