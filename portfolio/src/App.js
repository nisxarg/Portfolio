// App.js

import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectsPage from './ProjectsPage';
import AchievementsPage from './AchievementsPage';
import ResumePage from './ResumePage';
import AboutPage from './AboutPage';
import HomePage from './HomePage'; // Import the HomePage component

function App() {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (page) => {
    setActiveLink(page);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Your Logo" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="navigation">
            <ul>
              <li><Link to="/" className={activeLink === "home" ? "active" : ""} onClick={() => handleLinkClick("home")}>Home</Link></li>
              <li><Link to="/projects" className={activeLink === "projects" ? "active" : ""} onClick={() => handleLinkClick("projects")}>Projects</Link></li>
              <li><Link to="/achievements" className={activeLink === "achievements" ? "active" : ""} onClick={() => handleLinkClick("achievements")}>Achievements</Link></li>
              <li><Link to="/resume" className={activeLink === "resume" ? "active" : ""} onClick={() => handleLinkClick("resume")}>Resume</Link></li>
              <li><Link to="/about" className={activeLink === "about" ? "active" : ""} onClick={() => handleLinkClick("about")}>About</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <Routes>
          <Route exact path="/" element={<HomePage />} /> {/* Render HomePage instead of Home */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
