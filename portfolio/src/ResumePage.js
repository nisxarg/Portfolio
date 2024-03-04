// ResumePage.js

import React from 'react';
import './App.css'; // Import your CSS file for styling
import resumeImage1 from './resumeImage1.jpg'; // Import your resume image 1
import resumeImage2 from './resumeImage2.jpg'; // Import your resume image 2

function ResumePage() {
  return (
    <div className="resume-page">
      <h1 className="resume-heading">Resume</h1>
      <div className="resume-images">
        <img src={resumeImage1} alt="Resume Image 1" />
        <img src={resumeImage2} alt="Resume Image 2" />
      </div>
    </div>
  );
}

export default ResumePage;
