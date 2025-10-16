import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Link1 from "./pages/Link1";
import Link2 from "./pages/Link2";
import Link3 from "./pages/Link3";
import Link5 from "./pages/Link5";
import "./App.css";
import Logo from "./logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ta"); // ta = Tamil, en = English

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguage = () => setLanguage(language === "ta" ? "en" : "ta");

  // 🔹 Menu text translations
  const translations = {
    ta: {
      title: "இறுதி இராவுணவு",
      home: "முகப்புப்பக்கம்",
      bible: "பைபிள் குறிப்பு",
      events: "நிகழ்வுகள்",
      spiritual: "ஆவிக்குரிய அர்த்தம்",
      gallery: "கேலரி",
      langBtn: "ENGLISH",
    },
    en: {
      title: "The Last Supper",
      home: "Home",
      bible: "Bible References",
      events: "Events",
      spiritual: "Spiritual Meaning",
      gallery: "Gallery",
      langBtn: "தமிழ்",
    },
  };

  const t = translations[language];

  return (
    <Router>
      <div>
        {/* 🔹 AppBar */}
        <header className="appbar-container">
          {/* Logo + Title */}
          <div className="appbar-logo-container">
            <img src={Logo} alt="Logo" className="appbar-logo-img" />
            <h2 className="appbar-title">{t.title}</h2>
          </div>

      

          {/* Hamburger for mobile */}
          <div className="appbar-hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <nav className={menuOpen ? "appbar-nav appbar-nav-open" : "appbar-nav"}>
            <ul>
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/link1" onClick={() => setMenuOpen(false)}>
                  {t.bible}
                </Link>
              </li>
              <li>
                <Link to="/link2" onClick={() => setMenuOpen(false)}>
                  {t.events}
                </Link>
              </li>
              <li>
                <Link to="/link5" onClick={() => setMenuOpen(false)}>
                  {t.spiritual}
                </Link>
              </li>
              <li>
                <Link to="/link3" onClick={() => setMenuOpen(false)}>
                  {t.gallery}
                </Link>
              </li>
              <li>   {/* Language Toggle Button */}
          <button  onClick={toggleLanguage}>
            {t.langBtn}
          </button>
</li>
            </ul>
          </nav>
          
        </header>
        

        {/* 🔹 Main Content */}
        <main>
             {/* Language Toggle Button */}
          <button className="lang-toggle" onClick={toggleLanguage}>
            {t.langBtn}
          </button>

          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/link1" element={<Link1 language={language} />} />
            <Route path="/link2" element={<Link2 language={language} />} />
            <Route path="/link5" element={<Link5 language={language} />} />
            <Route path="/link3" element={<Link3 language={language} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
