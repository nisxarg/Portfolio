// AboutPage.js

import React from 'react';
import './App.css'; // Import your CSS file for styling
import aboutmegif from './aboutmegif.gif'; // Import your new GIF file

function AboutPage() {
  return (
    <div className="main-content">
      {/* Box around text content */}
      <div className="content-box">
        <h1>About Me</h1>
        <p>
        I'm Nisarg Ashok Kumar Jadav, a driven technologist fueled by a passion for innovation. With expertise in areas like robotics, software development, and creative design, I constantly push boundaries to engineer solutions that make a difference. Currently, I'm leading projects in communication systems and robotics, aiming to revolutionize how we interact with technology. My career goals? To continue pushing the limits of possibility and shaping a future where technology enhances lives 
        </p>
      </div>
      
      {/* New GIF */}
      <img src={aboutmegif} alt="About Me GIF" className="about-gif" />
    </div>
  );
}

export default AboutPage;
