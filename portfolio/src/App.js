import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import logo from './logo.png'; // Import your logo file
import gif from './gif.gif'; // Import your GIF file
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter, Routes, Route, Link
import ProjectsPage from './ProjectsPage'; // Import ProjectsPage component
import AchievementsPage from './AchievementsPage';
import ResumePage from './ResumePage'; // Import ResumePage component
import AboutPage from './AboutPage';

// Define your Home component here
const Home = () => (
  <div className="main-content">
    {/* Box around text content */}
    <div className="content-box">
      <h1>Hello, I'm Nisarg Jadav</h1>
      <p>
        A passionate technologist with a flair for innovation. From developing futuristic communication systems for soldiers to crafting robots, I thrive on bringing cutting-edge ideas to life. Explore my journey through technology, robotics, and creative endeavors as I strive to make a meaningful impact in the world of innovation.
      </p>
    </div>
    
    {/* GIF */}
    <img src={gif} alt="Your GIF" className="gif" />
  </div>
);

// Define your Achievements, Resume, and About components here
const Achievements = () => (
  <div className="main-content">
    <h1>Achievements</h1>
    
    {/* Add your achievements content here */}
  </div>
);

const Resume = () => (
  <div className="main-content">
    <h1>Resume</h1>
    {/* Add your resume content here */}
  </div>
);

const About = () => (
  <div className="main-content">
    <h1>About</h1>
    {/* Add your about content here */}
  </div>
);

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
          <Route exact path="/" element={<Home />} />
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
