import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Link1 from "./pages/Link1";
import Link2 from "./pages/Link2";
import Link3 from "./pages/Link3";
import "./App.css";
import Logo from "./logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div>
        {/* 🔹 AppBar */}
        <header className="appbar-container">
          {/* Logo + Title */}
          <div className="appbar-logo-container">
            <img src={Logo} alt="Logo" className="appbar-logo-img" />
            <h2 className="appbar-title">இறுதி இராவுணவு</h2>
          </div>

          {/* Hamburger for mobile */}
          <div className="appbar-hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <nav className={menuOpen ? "appbar-nav appbar-nav-open" : "appbar-nav"}>
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>
முகப்புப்பக்கம்</Link></li>
              <li><Link to="/link1" onClick={() => setMenuOpen(false)}>பைபிள் குறிப்பு
</Link></li>
              <li><Link to="/link2" onClick={() => setMenuOpen(false)}>
நிகழ்வுகள்</Link></li>
              <li><Link to="/link3" onClick={() => setMenuOpen(false)}>
கேலரி</Link></li>
            </ul>
          </nav>
        </header>

        {/* 🔹 Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/link1" element={<Link1 />} />
            <Route path="/link2" element={<Link2 />} />
            <Route path="/link3" element={<Link3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
